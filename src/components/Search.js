import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export default function Search() {
  const [id, setId] = useState('');
  const [student, setStudent] = useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/student/fetchStudentDetails?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data);
      })
      .catch((error) => {
        console.error('Error fetching student details:', error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter student ID"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {student && (
        <div>
          <h2>Student details:</h2>
          <p>Name: {student.name}</p>
          <p>Department: {student.department}</p>
          <p>Company joined: {student.company_joined}</p>
          <p>Contact number: {student.contact_number}</p>
          <p>Address: {student.address}</p>
        </div>
      )}
    </div>
  );
}