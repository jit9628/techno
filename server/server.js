const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

// Database Connection
const connectionString = 'postgresql://neondb_owner:npg_9Doa2kPZAEHT@ep-divine-river-aomysm2f-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require';
const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize Database
const initDb = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Database table "subscriptions" is ready.');
  } catch (err) {
    console.error('Error initializing database:', err);
  }
};
initDb();

app.use(cors());
app.use(bodyParser.json());

// Mock Data
const batches = [
  { course: 'Java Full Stack', date: '15th May 2026', timing: '10:00 AM - 12:00 PM', duration: '6 Months', status: 'Filling Fast' },
  { course: 'Spring Boot Microservices', date: '20th May 2026', timing: '02:00 PM - 04:00 PM', duration: '3 Months', status: 'Open' },
  { course: 'Angular Frontend Lead', date: '25th May 2026', timing: '06:00 PM - 08:00 PM', duration: '3 Months', status: 'Filling Fast' },
  { course: 'Flutter Cross-Platform', date: '1st June 2026', timing: '09:00 AM - 11:00 AM', duration: '4 Months', status: 'Open' },
  { course: 'Python Data Science', date: '5th June 2026', timing: '04:00 PM - 06:00 PM', duration: '5 Months', status: 'Open' },
  { course: 'Node.js Backend', date: '10th June 2026', timing: '11:00 AM - 01:00 PM', duration: '4 Months', status: 'Filling Fast' }
];

// Endpoints
app.get('/api/batches', (req, res) => {
  res.json(batches);
});

app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  try {
    const result = await pool.query(
      'INSERT INTO subscriptions (email) VALUES ($1) ON CONFLICT (email) DO NOTHING RETURNING *',
      [email]
    );
    
    if (result.rowCount === 0) {
      return res.status(200).json({ message: 'You are already subscribed!' });
    }
    
    console.log(`New subscription: ${email}`);
    res.status(201).json({ message: 'Subscribed successfully!' });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});

app.post('/api/internship', (req, res) => {
  const application = req.body;
  console.log('--- New Internship Application ---');
  console.log('Data:', application);
  res.status(201).json({ message: 'Application received successfully!' });
});

app.post('/api/contact', (req, res) => {
  const data = req.body;
  console.log('--- New Inquiry Received ---');
  console.log('Data:', data);
  res.status(200).json({ message: 'Message sent successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
