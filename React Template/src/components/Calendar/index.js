'use client';

import CalendarLayout from '@/src/components/Calendar/CalendarLayout';
import CalendarViewGrid from '@/src/components/Calendar/CalendarView/Grid/Grid';
import TimelineWrapper from '@/src/components/Calendar/CalendarView/Timeline/TimelineWrapper';
import EventDetailModal from '@/src/components/Modal/EventDetailModal';
import {
  setCalendarViewType,
  setSelectedEvent,
} from '@/src/store/slices/calendarSettingSlice';
import { fetchEvents } from '@/src/store/slices/calendarSlice';
import { CalendarViewTypes } from '@/src/utils/types';
import { useUser } from '@clerk/nextjs';
import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function CalendarView() {
  const dispatch = useDispatch();
  const router = useRouter();
  const params = useParams();

  const { targetDate, calendarViewType, selectedEvent } = useSelector(
    (state) => state.calendarSetting
  );

  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.id) {
      dispatch(fetchEvents(calendarViewType, targetDate));
    }
  }, [dispatch, user?.id, calendarViewType, targetDate, isSignedIn]);
  const dayQueryLookUp = {
    day: CalendarViewTypes.DAY_VIEW,
    week: CalendarViewTypes.WEEK_VIEW,
    month: CalendarViewTypes.MONTH_VIEW,
    year: CalendarViewTypes.YEAR_VIEW,
  };

  useEffect(() => {
    const viewType = params.viewType?.[0];
    if (viewType && dayQueryLookUp[viewType]) {
      dispatch(setCalendarViewType(dayQueryLookUp[viewType]));
    }
  }, [params.viewType, dispatch]);

  const selectedCalendarView = (calendarViewType) => {
    switch (calendarViewType) {
      case CalendarViewTypes.DAY_VIEW:
      case CalendarViewTypes.WEEK_VIEW: {
        return <TimelineWrapper />;
      }
      case CalendarViewTypes.MONTH_VIEW: {
        return <CalendarViewGrid />;
      }
      default:
        return null;
    }
  };

  const handleCloseModal = () => {
    dispatch(setSelectedEvent({ eventUid: '' }));
    router.push(`/calendar/${params.viewType?.[0] || 'day'}`);
  };

  if (!isLoaded || !isSignedIn) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary'></div>
      </div>
    );
  }
  console.log('selectedEvent ', selectedCalendarView(calendarViewType));
  return (
    <>
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
          {Boolean(selectedEvent?.id) && (
            <>
              <div className='absolute top-0 left-0 w-full h-full z-1' />
              <EventDetailModal
                selectedEvent={{
                  ...selectedEvent,
                }}
                onCloseModal={handleCloseModal}
              />
            </>
          )}
        </CalendarLayout>
      </main>
    </>
  );
}
