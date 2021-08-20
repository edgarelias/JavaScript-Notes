const API = 'https://rickandmortyapi.com/api/character/';

// npm install xmlhttprequest --save-dev
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);
    xhttp.onreadystatechange = function (event) {
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//get three items from the API
fetchData(API, (error1, data1) => {
    
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, (error2, data2) => {

        if(error2) return console.error(error2);
        fetchData(data2.origin.url, (error3, data3) => {

            if(error3) return console.error(error3);
        
            //API data
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
            
            // routes that we used
            console.log(API);
            console.log(API + data1.results[0].id); 
            console.log(data2.origin.url); 
      
      });
    });
  });