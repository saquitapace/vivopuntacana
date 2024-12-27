// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let events = {};
let userEvents = {};

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { userId } = req.query;
    const userEventList = userEvents[userId] || [];
    const userEventData = userEventList.map(eventId => events[eventId]);
    res.status(200).json({ events: userEventData });
  } else if (req.method === 'POST') {
    // Create a new event
    const { event, userUid } = req.body;
    
    if (!events[event.eventUid]) {
      events[event.eventUid] = event;
      if (!userEvents[userUid]) {
        userEvents[userUid] = [];
      }
      userEvents[userUid].push(event.eventUid);
    }
    
    res.status(201).json({ success: true, event });
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
