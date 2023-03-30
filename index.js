const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.get('/', async (req, res) => {
    const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';

    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'a341921e01msh06705c8228a50b8p1c874bjsnb51333fe1d85',
          'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
        }
      };

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
})

// start
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});
