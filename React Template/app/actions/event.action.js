'use server';
import { query } from '@/src/lib/db';
import { auth } from '@clerk/nextjs/server';

export const createEvent = async (eventData) => {
  const { userId } = auth();
  if (!userId) {
    return { err: 'Unauthorized', data: null };
  }

  const { title, description, start_date, end_date, type, status, location } =
    eventData;

  if (
    !title ||
    !description ||
    !start_date ||
    !end_date ||
    !type ||
    !status ||
    !location
  ) {
    return { err: 'All fields are required', data: null };
  }

  const sql = `
          INSERT INTO events (user_id, title, description , location, start_date, end_date, type, status)
          VALUES (?, ?, ?, ?, ?, ?, ? , ?)
        `;
  try {
    await query(sql, [
      userId,
      title,
      description,
      location,
      new Date(start_date),
      new Date(end_date),
      type,
      status,
    ]);
    console.log('created event');
    return {
      err: null,
      data: { message: 'Event created successfully', event: eventData },
    };
  } catch (error) {
    console.log('Error creating event', error);
    return { err: 'Something went wrong', data: null };
  }
};
