const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// sample data for students
const students = [
  {
    id: 1,
    name: 'mart miles',
    age: 18,
    grade: '12',
    gender: 'Male'
  },
  {
    id: 2,
    name: 'baby miles',
    age: 17,
    grade: '11',
    gender: 'Female'
  }
];

// GET student details by student id
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (!student) {
    res.status(404).send('Student not found');
  } else {
    res.send(student);
  }
});

// POST new student with student details
app.post('/students', (req, res) => {
  const student = req.body;
  if (!student || !student.id || !student.name || !student.age || !student.grade || !student.gender) {
    res.status(400).send('Invalid student data');
  } else {
    students.push(student);
    res.status(201).send('Student registered successfully');
  }
});

// start the server
app.listen(3000, () => console.log('Server started on port 3000'));
