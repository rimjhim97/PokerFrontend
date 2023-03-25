import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import Alert from '@mui/material/Alert';



export default function Student() {
    const paperStyle = {padding:'50px, 20px', width:600, margin:"20px auto"}
    const [name, setName] = useState('')
    const [department, setDepartment]=useState('')
    const [companyJoined, setCompanyJoined]=useState('')
    const[contactNumber, setContactNumber]=useState('')
    const[address, setAddress]=useState('')
    const [success, setSuccess] = useState(false);

    
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name, department, contactNumber, companyJoined, address}
        console.log(student)
        fetch("http://localhost:8080/student/addStudent",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)
    }).then(()=>{
        console.log("New Student Added!!")
        setSuccess(true);
        setName('');
        setDepartment('');
        setCompanyJoined('');
        setContactNumber('');
        setAddress('');
        setTimeout(() => {
          setSuccess(false);

        }, 3000)
    });
    };
  
    return (
      <div>
        <Container>
        <Paper elevation={10} style={paperStyle}>
        {success && (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <Alert severity="success">Student added successfully!</Alert>
          </Box>
        )}
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop="20px"
          >
            <h2>Add Student</h2>
            <form onSubmit ={handleClick}>
            <TextField
                  label="Name"
                  placeholder="Enter Name"
                  variant="outlined"
                  margin="normal"
                  value={name}
                  style={{ margin: "20px 20px" }}
                  onChange={(e) => setName(e.target.value)}
                  />
            <TextField
              label="Department"
              placeholder="Enter Department"
              variant="outlined"
              margin="normal"
              value={department}
              style={{ margin: "20px 20px" }}
              onChange={(e) => setDepartment(e.target.value)}
            />
            <TextField
              label="Company Joined"
              placeholder="Enter Company Joined"
              variant="outlined"
              margin="normal"
              value={companyJoined}
              style={{ margin: "20px 20px" }}
              onChange={(e) => setCompanyJoined(e.target.value)}
            />
            <TextField
              label="Contact Number"
              placeholder="Enter Contact Number"
              variant="outlined"
              margin="normal"
              value={contactNumber}
              style={{ margin: "20px 20px" }}
              onChange={(e) => setContactNumber(e.target.value)}
            />
            <TextField
              label="Address"
              placeholder="Enter Address"
              variant="outlined"
              margin="normal"
              value={address}
              style={{ margin: "20px 20px" }}
              onChange={(e) => setAddress(e.target.value)}
            />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  style={{ margin: "20px 20px" }}
                >
                  Submit
                </Button>
                </form>
          </Box>
        </Paper>
        </Container>    
      </div>
    );
}