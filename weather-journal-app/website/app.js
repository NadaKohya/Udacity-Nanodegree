/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

let baseURL = "https://api.openweathermap.org/data/2.5/weather";
let apiKey = "cb2cc9b5d875155b05db1d3b8b0d566f";

document.getElementById("generate").addEventListener('click', (event)=>{
    addProjectData(event);
});

function addProjectData(e){
    e.preventDefault();
    console.log('clicked');
const zip = document.getElementById('zip')?.value;
const feelings = document.getElementById('feelings')?.value;
const url = `${baseURL}?zip=${zip}&appid=${apiKey}&units=metric`;
getData(url).then((data)=>{
    console.log(data);
    postData("/addProjectData", {
        temprature: data?.main?.temp,
        date: newDate,
        userResponse: feelings
    });
    retrieveData();
})
}

const postData = async(url="", data={})=>{
    // debugger
    console.log(data);
    const response = await fetch(url,{
        method: 'POST', 
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), 
    });
    try {
        // debugger
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
}

const getData = async(url="")=>{
    const result = await fetch(url)
    try {
      const data = await result.json();
      console.log(data);
      return data;
    }  catch(error) {
      console.log("error", error);
}
}

const retrieveData = async () =>{
    const request = await fetch('/all');
    try {
    // Transform into JSON
    const allData = await request.json()
    console.log(allData);
    // Write updated data to DOM elements
    document.getElementById('temp').innerHTML = Math.round(allData?.temprature)+ ' degrees';
    document.getElementById('content').innerHTML = allData?.userResponse;
    document.getElementById("date").innerHTML =allData?.date;
    }
    catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}
