import {
  getDaysInMonth,
  getEventsForDate,
  getFirstDayOfMonth,
} from '@/lib/dateUtils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function Calendar({ events = [] }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const previousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDayOfMonth = getFirstDayOfMonth(currentDate);
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className='bg-white rounded-lg shadow p-4 md:p-6 w-full'>
      <CalendarHeader
        monthName={monthName}
        year={year}
        onPreviousMonth={previousMonth}
        onNextMonth={nextMonth}
      />

      <div className='grid grid-cols-7 gap-2 mb-2'>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div
            key={day}
            className='text-center text-sm font-medium text-gray-600 py-2'
          >
            {day}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-7 gap-2'>
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div
            key={`empty-${index}`}
            className='aspect-square bg-gray-50 rounded-lg'
          ></div>
        ))}

        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          const dayEvents = getEventsForDate(events, currentDate, day);
          return <CalendarDay key={day} day={day} events={dayEvents} />;
        })}
      </div>
    </div>
  );
}

function CalendarDay({ day, events }) {
  return (
    <div className='aspect-square bg-gray-50 rounded-lg p-1 hover:bg-gray-100 transition-colors'>
      <div className='text-sm font-medium text-gray-700 mb-1 p-1'>{day}</div>
      <div className='space-y-1 overflow-y-auto max-h-[calc(100%-2rem)]'>
        {events.map((event) => (
          <div
            key={event.id}
            className={`text-xs p-1 rounded truncate ${
              event.color || 'bg-blue-100 text-blue-800'
            }`}
            title={event.title}
          >
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarHeader({ monthName, year, onPreviousMonth, onNextMonth }) {
  return (
    <div className='flex items-center justify-between mb-6'>
      <h2 className='text-xl md:text-2xl font-semibold text-gray-800'>
        {monthName} {year}
      </h2>
      <div className='flex space-x-2'>
        <button
          onClick={onPreviousMonth}
          className='p-2 hover:bg-gray-100 rounded-full transition-colors'
        >
          <ChevronLeft className='w-5 h-5 text-gray-600' />
        </button>
        <button
          onClick={onNextMonth}
          className='p-2 hover:bg-gray-100 rounded-full transition-colors'
        >
          <ChevronRight className='w-5 h-5 text-gray-600' />
        </button>
      </div>
    </div>
  );
}
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const sampleEvents = [
  {
    id: '1',
    title: 'Team Meeting',
    date: new Date(currentYear, currentMonth, 15),
    color: 'bg-blue-100 text-blue-800',
  },
  {
    id: '2',
    title: 'Project Deadline',
    date: new Date(currentYear, currentMonth, 20),
    color: 'bg-red-100 text-red-800',
  },
  {
    id: '3',
    title: 'Lunch with Client',
    date: new Date(currentYear, currentMonth, 15),
    color: 'bg-green-100 text-green-800',
  },
];
const CalendarPreview = () => {
  return (
    <div className='w-3/4'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8 text-center'>
        Event Calendar
      </h1>
      <Calendar events={sampleEvents} />
    </div>
  );
};

export default CalendarPreview;
