const express = require('express');
const fetch = require('node-fetch');
const options = require('./options');
require('dotenv').config();
const app = express();

// Middleware
app.use(express.json());


// feeds/auto-complete
app.get('/feeds/auto-complete', async (req, res) => {
    
    const url = 'https://yummly2.p.rapidapi.com/feeds/auto-complete?q=chicken%20soup';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
});

// feeds/search
app.get('/feeds/search', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }

});

// feeds/list
app.get('/feeds/list', async (req, res) => {
    
    const url = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }
});

// feeds/list-similarities
app.get('/feeds/list-similarities', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }

});

// tags/list
app.get('/tags/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/tags/list';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }    

});

// categories/list
app.get('/categories/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/categories/list';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }

});

// reviews/list
app.get('/reviews/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/reviews/list?offset=0&globalId=a8d6747a-bfaa-46a7-92fb-892e3f76b264&limit=20';

    try {
        let response = await fetch(url, options);
        response = await response.json();
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({msg: `Internal Server Error.`});
    }

});

const PORT = process.env.PORT

// start
app.listen(PORT, () => {
    console.log(`API server listening on port ${PORT}`);
});
