// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const listening = () =>{
    console.log(`Server is running on port ${port}`);
}
const server = app.listen(port,listening);

// Get project data
app.get("/all", (request, response)=>{
    response.send(projectData);
});

// Add project data
app.post("/addProjectData", async (request, response)=>{
    projectData = await request.body;
    console.log(projectData);
    response.send(projectData);
})