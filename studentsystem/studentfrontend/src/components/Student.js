import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';



export default function Student() {
    const paperStyle = {padding:'50px, 20px', width:600, margin:"20px auto"}
    const [name, setName] = useState('')
    const [department, setDepartment]=useState('')

    
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name, department}
        console.log(student)
        fetch("http://localhost:8080/student/addStudent",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student Added!!")
    })
    }

    
  return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1 style={{color:"blue"}}>
                <u>Add Student</u>
            </h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 5, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
    
      <TextField id="outlined-basic" label="Student Name" variant="outlined"
      value={name}
      onChange={(e)=> setName(e.target.value)} />
      <TextField id="outlined-basic" label="Department" variant="outlined"
        value={department}
        onChange={(e)=> setDepartment(e.target.value)} />
        <Button variant="contained" color="secondary" onClick={handleClick}>
  Submit
</Button>
    </Box>

    </Paper>
    {name}
    {department}
    </Container>
    
  );
}
