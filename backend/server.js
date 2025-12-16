const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/signupdb')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// User schema (for both users and admins)
const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  secondname: String,
  mobile: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.model('User', userSchema);

// Admin schema
const adminSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  firstname: { type: String, required: true },
  secondname: String,
  mobile: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }
});

const Admin = mongoose.model('Admin', adminSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
  try {
    console.log('Received data:', req.body);
    const { email, mobile } = req.body;
    
    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ success: false, error: 'Email already exists' });
    }
    
    // Check if mobile already exists
    const existingMobile = await User.findOne({ mobile });
    if (existingMobile) {
      return res.status(400).json({ success: false, error: 'Mobile number already exists' });
    }
    
    const user = new User(req.body);
    const savedUser = await user.save();
    console.log('Saved user:', savedUser);
    res.json({ success: true, message: 'User saved successfully' });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all users route
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find({ role: 'user' });
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Admin signup route
app.post('/api/admin/signup', async (req, res) => {
  try {
    console.log('Received admin data:', req.body);
    const { email, mobile } = req.body;
    
    // Check if email already exists in Admin collection
    const existingEmail = await Admin.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ success: false, error: 'Admin email already exists' });
    }
    
    // Check if mobile already exists in Admin collection
    const existingMobile = await Admin.findOne({ mobile });
    if (existingMobile) {
      return res.status(400).json({ success: false, error: 'Admin mobile number already exists' });
    }
    
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    console.log('Saved admin:', savedAdmin);
    res.json({ success: true, message: 'Admin registered successfully' });
  } catch (error) {
    console.log('Admin Error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all admins route
app.get('/api/admins', async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});