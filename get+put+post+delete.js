const express = require('express');

const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", branch: "CSE" },
    { id: 2, name: "Aman", branch: "IT" }
    {id: 3, name: "Rohit", branch: "ECE" }
];

app.get('/', (req, res) => {
    res.send(" API is running");
});

//get operation . display all students
app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    const newStudent = 
        
    });


    //put operation: update student data
    app.put('/students/:id', (req, res) => {
  
        const id= students.find(s=>s.id === id);

        if(!student) {
            return res.sendStatus(404).json({
                message: "Student not found"
            });
        }

        student.name = req.body.name;
        student.branch = req.body.branch;

        res.json({
            message: "Student updated successfully",
            student
        });
    });
    app.post('/students', (req, res) => 
const newStudent = {
   });
        



