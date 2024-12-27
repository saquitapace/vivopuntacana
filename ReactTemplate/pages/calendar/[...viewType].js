import { useUser } from '@clerk/nextjs';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarLayout from '../../src/components/Calendar/CalendarLayout';
import CalendarViewGrid from '../../src/components/Calendar/CalendarView/Grid/Grid';
import TimelineWrapper from '../../src/components/Calendar/CalendarView/Timeline/TimelineWrapper';
import EventDetailModal from '../../src/components/Modal/EventDetailModal';
import {
  setSelectedEvent,
  setViewType,
} from '../../src/reducers/calendar/calendarSettingSlice';
import { fetchEvents } from '../../src/reducers/calendar/calendarSlice';
import { CalendarViewTypes } from '../../src/utils/types';

const CalendarView = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { query } = router;

  const { targetDate, calendarViewType, selectedEvent } = useSelector(
    (state) => state.calendarSetting
  );

  // const user = useSelector((state) => state.user);
  const {isLoaded , isSignedIn , user}  = useUser()

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      dispatch(fetchEvents(user?.id, calendarViewType, targetDate));
    }
  }, [dispatch, user?.id, calendarViewType, targetDate]);

  const dayQueryLookUp = {
    day: CalendarViewTypes.DAY_VIEW,
    week: CalendarViewTypes.WEEK_VIEW,
    month: CalendarViewTypes.MONTH_VIEW,
    year: CalendarViewTypes.YEAR_VIEW,
  };

  const selectedCalendarView = (calendarViewType) => {
    switch (calendarViewType) {
      case CalendarViewTypes.DAY_VIEW:
      case CalendarViewTypes.WEEK_VIEW: {
        return <TimelineWrapper />;
      }
      case CalendarViewTypes.MONTH_VIEW: {
        return <CalendarViewGrid />;
      }
    }
  };

  const onCloseEventDetailModal = () => {
    dispatch(
      setSelectedEvent({
        ...selectedEvent,
        eventUid: '',
      })
    );
  };

  const onClickOutsideEventDetailModal = (eventUid) => {
    console.log(selectedEvent.eventUid);
    console.log(eventUid);
  };

  useEffect(() => {
    const viewType = query.viewType || [];
    if (viewType.length > 0) {
      if (
        viewType[0] in dayQueryLookUp &&
        calendarViewType !== dayQueryLookUp[viewType[0]]
      ) {
        dispatch(setViewType(dayQueryLookUp[viewType[0]]));
      }
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>Kalendar - Day View</title>
        <meta name='description' content='Kalendar - Day View' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CalendarLayout>
          <div
            className={`
              flex
              ${
                calendarViewType === CalendarViewTypes.DAY_VIEW ||
                calendarViewType === CalendarViewTypes.WEEK_VIEW
                  ? 'flex-col pr-3'
                  : ''
              }
              ${
                calendarViewType === CalendarViewTypes.MONTH_VIEW
                  ? 'h-full'
                  : ''
              }
            `}
          >
            {selectedCalendarView(calendarViewType)}
          </div>
          {/* Event Detail Modal */}
          {selectedEvent.eventUid.length > 0 && (
            <>
              <div className='absolute top-0 left-0 w-full h-full z-1' />
              <EventDetailModal
                selectedEvent={{
                  ...selectedEvent,
                  
                  eventCreator: user,

                }}
                onCloseModal={onCloseEventDetailModal}
              />
            </>
          )}
        </CalendarLayout>
      </main>
    </>
  );
};

export default CalendarView;
