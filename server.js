// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require ('express');

// Start up an instance of app
const app = express();

/**Dependencies */
const bodyParser = require ('body-parser');

/* Middleware*/
//Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listening);
function listening(){
  console.log('server running');
  console.log(`running on localhost: ${port}`);
};

//Adding a GET route that returns the projectData object
app.get('/all', getProjectData);

function getProjectData (req,res) {
  res.send(projectData)
  // console.log(projectData)
};

//Adding a POST route that adds incoming data to projectData
app.post('/add', addLocation);

function addLocation(req, res){
  projectData.push(req.body);
  res.send(projectData); 
  console.log(projectData)
  // const newLocation = {
  //   temperature: req.body.temperature,
  //   date: req.body.date,
  //   userResponse: req.body.userResponse
  // }
  // projectData.push(newLocation)
  // res.send(projectData);
  // console.log(projectData);
};




