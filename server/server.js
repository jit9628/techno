const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock Data
const batches = [
  { course: 'Java Full Stack', date: '15th May 2024', timing: '10:00 AM - 12:00 PM', duration: '6 Months', status: 'Filling Fast' },
  { course: 'Spring Boot Microservices', date: '20th May 2024', timing: '02:00 PM - 04:00 PM', duration: '3 Months', status: 'Open' },
  { course: 'Angular Frontend Lead', date: '25th May 2024', timing: '06:00 PM - 08:00 PM', duration: '3 Months', status: 'Filling Fast' },
  { course: 'Flutter Cross-Platform', date: '1st June 2024', timing: '09:00 AM - 11:00 AM', duration: '4 Months', status: 'Open' },
  { course: 'Python Data Science', date: '5th June 2024', timing: '04:00 PM - 06:00 PM', duration: '5 Months', status: 'Open' },
  { course: 'Node.js Backend', date: '10th June 2024', timing: '11:00 AM - 01:00 PM', duration: '4 Months', status: 'Filling Fast' }
];

// Endpoints
app.get('/api/batches', (req, res) => {
  res.json(batches);
});

app.post('/api/internship', (req, res) => {
  const application = req.body;
  console.log('New Internship Application:', application);
  res.status(201).json({ message: 'Application received successfully!', id: Date.now() });
});

app.post('/api/contact', (req, res) => {
  const message = req.body;
  console.log('New Contact Message:', message);
  res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
