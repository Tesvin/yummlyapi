const express = require('express');
const fetch = require('node-fetch');


const app = express();
const port = 3000;
app.use(express.json());


const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'a341921e01msh06705c8228a50b8p1c874bjsnb51333fe1d85',
    'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
  }
};

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

app.get('/', (req, res) => {
    res.send(url)
})


// start
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});