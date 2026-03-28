const express = require('express');
const cors = require('cors');


const authRoutes = require('./routes/auth');
const eventRoutes = require('./routes/events');
const bookingRoutes = require('./routes/bookings');

const app = express();


// Middleware
app.use(cors({
  origin: "https://event-booking-platform-liart.vercel.app/",
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);


module.exports = app;