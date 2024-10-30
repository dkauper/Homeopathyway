const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Login route (simplified for this example)
router.post('/login', async (req, res) => {
  // Implement your login logic here
  // For this example, we'll use a mock successful login
  const token = jwt.sign({ id: 1, username: 'patient' }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// Book appointment route
router.post('/appointments', authenticateToken, (req, res) => {
  const { date, time } = req.body;
  // Here you would typically save the appointment to your database
  res.status(201).json({ message: 'Appointment booked successfully', appointment: { date, time } });
});

// Get patient information route
router.get('/patient-info', authenticateToken, (req, res) => {
  // Here you would typically fetch patient information from your database
  // For this example, we'll use mock data
  const patientInfo = {
    name: 'John Doe',
    email: 'john@example.com',
    lastVisit: '2023-04-15',
    nextAppointment: '2023-05-01'
  };
  res.json(patientInfo);
});

// Update patient information route
router.put('/patient-info', authenticateToken, (req, res) => {
  const { name, email } = req.body;
  // Here you would typically update the patient information in your database
  res.json({ message: 'Patient information updated successfully', updatedInfo: { name, email } });
});

// Get available time slots route
router.get('/available-slots', (req, res) => {
  // Here you would typically fetch available time slots from your database
  // For this example, we'll use mock data
  const availableSlots = [
    { date: '2023-05-01', times: ['09:00', '11:00', '14:00'] },
    { date: '2023-05-02', times: ['10:00', '13:00', '16:00'] },
  ];
  res.json(availableSlots);
});

module.exports = router;