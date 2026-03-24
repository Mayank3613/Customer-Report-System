const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const initCronJobs = require('./utils/cronJobs');

dotenv.config();

connectDB();
initCronJobs();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/customers', require('./routes/customerRoutes'));
app.use('/api/reports', require('./routes/reportRoutes'));
app.use('/api/dashboard', require('./routes/dashboardRoutes'));
app.use('/api/interactions', require('./routes/interactionRoutes'));
app.use('/api/audit', require('./routes/auditRoutes'));

app.get('/', (req, res) => {
  res.send('API is running and connected to MongoDB...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running in port ${PORT}`);
});
