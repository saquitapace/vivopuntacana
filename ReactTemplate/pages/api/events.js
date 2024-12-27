import fs from 'fs';
import path from 'path';

// Path to the JSON file where event data is stored
const filePath = path.join(process.cwd(), 'data', 'events.json');

// Function to read data from the JSON file
const readData = () => {
  if (!fs.existsSync(filePath)) {
    return {};
  }
  const fileData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileData);
};

// Function to write data to the JSON file
const writeData = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    // Return all event data
    try {
      const events = readData();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Failed to read event data.' });
    }
  } else if (req.method === 'POST') {
    // Add a new event
    try {
      const newEvent = req.body;
      const events = readData();

      if (!newEvent.eventUid) {
        return res.status(400).json({ error: 'EventUid is required.' });
      }

      events[newEvent.eventUid] = newEvent;
      writeData(events);

      res.status(201).json({ message: 'Event added successfully.', event: newEvent });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save event data.' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
