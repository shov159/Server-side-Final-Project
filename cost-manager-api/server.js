const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// ✅ ייבוא קובץ הראוטים
const costRoutes = require('./constRoutes'); // ודא שהנתיב נכון
app.use('/api', costRoutes); // כל הראוטים בקובץ יופעלו תחת /api

// ברירת מחדל – בדיקה מהירה
app.get('/', (req, res) => res.send('API Running'));

// חיבור ל-MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
