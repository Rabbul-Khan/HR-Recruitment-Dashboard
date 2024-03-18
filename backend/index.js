const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static('dist'));
app.use(express.json());

const Candidate = require('./models/candidate');

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/candidates', (request, response) => {
  Candidate.find({})
    .then((result) => {
      if (result) {
        response.json(result);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => {
      next(error);
    });
});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' });
};

app.use(unknownEndpoint);

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const candidateList = [
//   {
//     name: 'Alice Smith',
//     gender: 'female',
//     role: 'Product Designer',
//     application_status: 'shortlisted',
//     experience: 2,
//     expected_salary: 35000.0,
//     day: 'Monday',
//     time: '10am',
//     date_applied: new Date('2024-03-19T09:15:00'),
//   },
//   {
//     name: 'Bob Johnson',
//     gender: 'male',
//     role: 'Jr UI/UX Designer',
//     application_status: 'rejected',
//     experience: 1,
//     expected_salary: 25000.0,
//     day: 'Tuesday',
//     time: '8am',
//     date_applied: new Date('2024-03-18T13:45:00'),
//   },
//   {
//     name: 'Charlie Brown',
//     gender: 'male',
//     role: 'Brand Strategist',
//     application_status: 'finalised',
//     experience: 3,
//     expected_salary: 45000.0,
//     day: 'Wednesday',
//     time: '12pm',
//     date_applied: new Date('2024-03-17T10:30:00'),
//   },
//   {
//     name: 'Diana Martinez',
//     gender: 'female',
//     role: 'Product Designer',
//     application_status: 'on hold',
//     experience: 2,
//     expected_salary: 30000.0,
//     day: 'Thursday',
//     time: '2pm',
//     date_applied: new Date('2024-03-16T11:20:00'),
//   },
//   {
//     name: 'Eva Green',
//     gender: 'female',
//     role: 'Jr UI/UX Designer',
//     application_status: 'shortlisted',
//     experience: 1,
//     expected_salary: 28000.0,
//     day: 'Friday',
//     time: '4pm',
//     date_applied: new Date('2024-03-15T14:10:00'),
//   },
//   {
//     name: 'Frank Miller',
//     gender: 'male',
//     role: 'Brand Strategist',
//     application_status: 'rejected',
//     experience: 4,
//     expected_salary: 50000.0,
//     day: 'Saturday',
//     time: '6pm',
//     date_applied: new Date('2024-03-14T16:05:00'),
//   },
//   {
//     name: 'Grace Lee',
//     gender: 'female',
//     role: 'Product Designer',
//     application_status: 'finalised',
//     experience: 2,
//     expected_salary: 38000.0,
//     day: 'Sunday',
//     time: '8pm',
//     date_applied: new Date('2024-03-13T09:00:00'),
//   },
//   {
//     name: 'Harry White',
//     gender: 'male',
//     role: 'Jr UI/UX Designer',
//     application_status: 'shortlisted',
//     experience: 1,
//     expected_salary: 26000.0,
//     day: 'Monday',
//     time: '10am',
//     date_applied: new Date('2024-03-12T12:45:00'),
//   },
//   {
//     name: 'Ivy Clark',
//     gender: 'female',
//     role: 'Brand Strategist',
//     application_status: 'rejected',
//     experience: 3,
//     expected_salary: 42000.0,
//     day: 'Tuesday',
//     time: '12pm',
//     date_applied: new Date('2024-03-11T15:30:00'),
//   },
//   {
//     name: 'Jack Brown',
//     gender: 'male',
//     role: 'Product Designer',
//     application_status: 'finalised',
//     experience: 2,
//     expected_salary: 36000.0,
//     day: 'Wednesday',
//     time: '2pm',
//     date_applied: new Date('2024-03-10T08:20:00'),
//   },
//   {
//     name: 'Lily Evans',
//     gender: 'female',
//     role: 'Product Designer',
//     application_status: 'shortlisted',
//     experience: 1,
//     expected_salary: 27000.0,
//     day: 'Thursday',
//     time: '4pm',
//     date_applied: new Date('2024-03-09T11:15:00'),
//   },
//   {
//     name: 'Mike Johnson',
//     gender: 'male',
//     role: 'Jr UI/UX Designer',
//     application_status: 'rejected',
//     experience: 2,
//     expected_salary: 30000.0,
//     day: 'Friday',
//     time: '6pm',
//     date_applied: new Date('2024-03-08T14:30:00'),
//   },
//   {
//     name: 'Nancy Brown',
//     gender: 'female',
//     role: 'Brand Strategist',
//     application_status: 'finalised',
//     experience: 3,
//     expected_salary: 43000.0,
//     day: 'Saturday',
//     time: '8pm',
//     date_applied: new Date('2024-03-07T09:45:00'),
//   },
//   {
//     name: 'Oliver Davis',
//     gender: 'male',
//     role: 'Product Designer',
//     application_status: 'shortlisted',
//     experience: 2,
//     expected_salary: 32000.0,
//     day: 'Sunday',
//     time: '10am',
//     date_applied: new Date('2024-03-06T12:00:00'),
//   },
//   {
//     name: 'Pamela Clark',
//     gender: 'female',
//     role: 'Jr UI/UX Designer',
//     application_status: 'rejected',
//     experience: 1,
//     expected_salary: 28000.0,
//     day: 'Monday',
//     time: '12pm',
//     date_applied: new Date('2024-03-05T15:20:00'),
//   },
//   {
//     name: 'Quinn Miller',
//     gender: 'male',
//     role: 'Brand Strategist',
//     application_status: 'finalised',
//     experience: 4,
//     expected_salary: 47000.0,
//     day: 'Tuesday',
//     time: '2pm',
//     date_applied: new Date('2024-03-04T08:30:00'),
//   },
//   {
//     name: 'Rachel Green',
//     gender: 'female',
//     role: 'Product Designer',
//     application_status: 'shortlisted',
//     experience: 2,
//     expected_salary: 34000.0,
//     day: 'Wednesday',
//     time: '4pm',
//     date_applied: new Date('2024-03-03T10:40:00'),
//   },
//   {
//     name: 'Sam Brown',
//     gender: 'male',
//     role: 'Jr UI/UX Designer',
//     application_status: 'rejected',
//     experience: 1,
//     expected_salary: 29000.0,
//     day: 'Thursday',
//     time: '6pm',
//     date_applied: new Date('2024-03-02T13:50:00'),
//   },
//   {
//     name: 'Tina Johnson',
//     gender: 'female',
//     role: 'Brand Strategist',
//     application_status: 'finalised',
//     experience: 3,
//     expected_salary: 44000.0,
//     day: 'Friday',
//     time: '8pm',
//     date_applied: new Date('2024-03-01T09:00:00'),
//   },
//   {
//     name: 'Ulysses Davis',
//     gender: 'male',
//     role: 'Product Designer',
//     application_status: 'shortlisted',
//     experience: 2,
//     expected_salary: 33000.0,
//     day: 'Saturday',
//     time: '10am',
//     date_applied: new Date('2024-02-29T12:10:00'),
//   },
// ];
