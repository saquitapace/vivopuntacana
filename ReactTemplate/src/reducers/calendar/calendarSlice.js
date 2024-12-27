import { createSlice } from '@reduxjs/toolkit';
import {
  areIntervalsOverlapping,
  eachDayOfInterval,
  eachWeekOfInterval,
  endOfDay,
  endOfMonth,
  endOfWeek,
  getDate,
  getDay,
  getMonth,
  isAfter,
  isBefore,
  isSameDay,
  isWithinInterval,
  startOfDay,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import {
  calculateOverlap,
  findEventCoverage,
  getBaseDayViewEvents,
  getBaseMonthViewEvents,
  getBaseWeekViewEvents,
  getClosestIndexForDayViewEvents,
  reduceCoverages
} from '../../utils/helpers';
import {
  CalendarViewTypes
} from '../../utils/types';

const initialState = {
  dayViewEvents: {},
  weekViewEvents: {},
  monthViewEvents: {},
};

const getBaseEventContainer = (calendarViewType, targetDate) => {
  switch (calendarViewType) {
    case CalendarViewTypes.DAY_VIEW: {
      return getBaseDayViewEvents();
    }

    case CalendarViewTypes.WEEK_VIEW: {
      return getBaseWeekViewEvents();
    }

    case CalendarViewTypes.MONTH_VIEW: {
      return getBaseMonthViewEvents(targetDate);
    }
  }
};

const getBaseEventBlock = (event, start = null, end = null) => {
  return {
    eventUid: event.eventUid,
    eventTitle: event.eventTitle,
    eventDescription: event.eventDescription,
    eventStartDate: start || event.eventStartDate,
    eventEndDate: end || event.eventEndDate,
    eventLocation: event.eventLocation,
  };
};

const getDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  return eachDayOfInterval({ start, end }).length - 1;
};

const getMultidayEventBlocksForMonth = (events, rangeStart, rangeEnd) => {
  const processedEvents = [];

  events.forEach((event) => {
    const originalStartDate = new Date(event.eventStartDate);
    const originalEndDate = new Date(event.eventEndDate);

    // Check if start date is within bounds
    const startDate = isBefore(originalStartDate, rangeStart)
      ? rangeStart
      : originalStartDate;

    // Check if end date is within bounds
    const endDate = isAfter(originalEndDate, rangeEnd)
      ? rangeEnd
      : originalEndDate;

    const eachWeekIntervals = eachWeekOfInterval(
      {
        start: startDate,
        end: endDate,
      },
      { weekStartsOn: 1 }
    );

    // If the length is 1, then the endDate resides within the same week
    if (eachWeekIntervals.length === 1) {
      processedEvents.push(
        getBaseEventBlock(
          event,
          startDate.toString(),
          endDate.toString()
        )
      );

      // Else, loop the intervals and create event blocks
    } else {
      const MAX_DURATION = 6;
      eachWeekIntervals.forEach((interval, index) => {
        // Last index
        if (index === eachWeekIntervals.length - 1) {
          processedEvents.push(
            getBaseEventBlock(
              event,
              interval.toString(),
              endDate.toString()
            )
          );

          // First index starts with event start date
        } else if (index === 0) {
          const endOfTargetWeek = endOfDay(
            endOfWeek(startDate, { weekStartsOn: 1 })
          );

          processedEvents.push(
            getBaseEventBlock(
              event,
              startDate.toString(),
              endOfTargetWeek.toString()
            )
          );

          // Other indexes (excluding the last)
        } else {
          const endOfTargetWeek = endOfDay(
            endOfWeek(interval, { weekStartsOn: 1 })
          );

          processedEvents.push(
            getBaseEventBlock(
              event,
              interval.toString(),
              endOfTargetWeek.toString()
            )
          );
        }
      });
    }
  });

  // Returns an array of EventBlocks that will be inserted into the monthViewContainer
  return processedEvents;
};

const insertEventToDayViewContainer = (
  container,
  filteredEvents,
  targetDate
) => {

  const coverageArr = [];

  // Process Single Events
  filteredEvents.forEach((e) => {
    const eventStart = new Date(e.eventStartDate);
    const eventEnd = new Date(e.eventEndDate);

    // Skip invalid events
    if (isAfter(eventStart, eventEnd)) {
      return;
    }

    // Get the hour and minute indices for event start time
    const [startHour, startMinute] = getClosestIndexForDayViewEvents(eventStart);

    // Ensure the hour exists in container
    if (container.hours[startHour] && container.hours[startHour][startMinute]) {
      const eventBlock = getBaseEventBlock(e);
      container.hours[startHour][startMinute].events.push(eventBlock);

      try {
        const coverage = findEventCoverage(e);
        if (coverage) {
          coverageArr.push(coverage);
        }
      } catch (error) {
        console.error('Error calculating coverage for event:', e, error);
      }
    } else {
      console.warn('Invalid hour/minute slot:', startHour, startMinute);
    }
  });

  if (coverageArr.length > 0) {
    try {
      const coverages = reduceCoverages(coverageArr);
      calculateOverlap(coverages, container.hours);
    } catch (error) {
      console.error('Error calculating overlap:', error);
    }
  }

  return container;
};

const insertEventToWeekViewContainer = (
  container,
  filteredEvents,
  targetDate
) => {
  const coverageArrs = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  // Process Single Events
  filteredEvents.forEach((e) => {
    const dayIndex = getDay(new Date(e.eventStartDate));
    const [hour, minute] = getClosestIndexForDayViewEvents(
      new Date(e.eventStartDate)
    );
    const eventBlock = getBaseEventBlock(e);
    container.days[dayIndex][hour][minute].events.push(eventBlock);

    coverageArrs[dayIndex].push(findEventCoverage(e));
  });

  Object.keys(coverageArrs).forEach((key) => {
    if (coverageArrs[key].length > 0) {
      coverageArrs[key] = reduceCoverages(coverageArrs[key]);
      calculateOverlap(coverageArrs[key], container.days[key]);
    }
  });

  return container;
};

const insertEventToMonthViewContainer = (
  container,
  filteredEvents,
  targetDate
) => {

  // Process Single Events
  filteredEvents.forEach((e) => {
    const startDate = new Date(e.eventStartDate);
    const monthIndex = getMonth(startDate);
    const dateIndex = getDate(startDate);

    const eventBlock = getBaseEventBlock(e);
    container[monthIndex][dateIndex].events.push(eventBlock);
  });

  // Process Multiday Events
  const multidayEventBlocks = getMultidayEventBlocksForMonth(
    filteredEvents,
    startOfMonth(targetDate),
    endOfMonth(targetDate)
  );

  multidayEventBlocks.forEach((eb) => {
    const startDate = new Date(eb.eventStartDate);
    const monthIndex = getMonth(startDate);
    const dateIndex = getDate(startDate);

    container[monthIndex][dateIndex].events.push(eb);
  });

  return container;
};

const filterEvents = (events, targetDate) => {
  if (!events || !targetDate) return [];

  const targetDateStart = startOfDay(new Date(targetDate));
  const targetDateEnd = endOfDay(new Date(targetDate));

  return events.filter((event) => {
    const eventStart = new Date(event.eventStartDate);
    const eventEnd = new Date(event.eventEndDate);

    const isInRange = areIntervalsOverlapping(
      { start: eventStart, end: eventEnd },
      { start: targetDateStart, end: targetDateEnd }
    );

    return isInRange;
  });
};

export const calendarSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {
    setCalendarEvents: (state, { payload }) => {
      const { events, calendarViewType, targetDate } = payload;

      const filteredEvents = filterEvents(events, targetDate);
      const baseEventContainer = getBaseEventContainer(calendarViewType, targetDate);
      
      switch (calendarViewType) {
        case CalendarViewTypes.DAY_VIEW:
          state.dayViewEvents = insertEventToDayViewContainer(
            baseEventContainer,
            filteredEvents,
            targetDate
          );
          break;
        case CalendarViewTypes.WEEK_VIEW:
          state.weekViewEvents = insertEventToWeekViewContainer(
            baseEventContainer,
            filteredEvents,
            targetDate
          );
          break;
        case CalendarViewTypes.MONTH_VIEW:
          state.monthViewEvents = insertEventToMonthViewContainer(
            baseEventContainer,
            filteredEvents,
            targetDate
          );
          break;
      }
    },
    resetCalendarEvents: (state) => {
      state.dayViewEvents = {};
      state.weekViewEvents = {};
      state.monthViewEvents = {};
    },
  },
});

export const { setCalendarEvents, resetCalendarEvents } = calendarSlice.actions;

// Thunk action to fetch events from API
export const fetchEvents = (userUid, calendarViewType, targetDate) => async (dispatch) => {
  try {
    const response = await fetch(`/api/calendar?userId=${userUid}`);
    const data = await response.json();
    dispatch(setCalendarEvents({
      events: data.events,
      calendarViewType,
      targetDate,
    }));
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

// Thunk action to create new event
export const createEvent = (userUid, event , calendarViewType , targetDate) => async (dispatch) => {
  try {
    const response = await fetch('/api/calendar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userUid,
        event,
      }),
    });
    
    if (response.ok) {
      // Refresh events after creating new one
      dispatch(fetchEvents(userUid, calendarViewType || 0, targetDate || Date()));
    }
  } catch (error) {
    console.error('Error creating event:', error);
  }
};

export default calendarSlice.reducer;
