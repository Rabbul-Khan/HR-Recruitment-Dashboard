const mongoose = require('mongoose');

const url = process.env.MONGODB_URI;
console.log('connecting to', url);
mongoose
  .connect(url)
  .then((result) => {
    console.log('connected to MongoDB');
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message);
  });

mongoose.set('strictQuery', false);

mongoose.connect(url);

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  application_status: {
    type: String,
    enum: ['shortlisted', 'rejected', 'on hold', 'finalised'],
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  expected_salary: {
    type: Number,
    required: true,
  },
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  date_applied: {
    type: Date,
    default: Date.now,
  },
});

candidateSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Candidate', candidateSchema);
