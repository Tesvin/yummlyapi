const express = require('express');
const fetch = require('node-fetch');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.get('/feeds/auto-complete', async (req, res) => {
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

app.get('/feeds/search', async (req, res) => {
    const url = 'https://yummly2.p.rapidapi.com/feeds/search?start=0&maxResult=18&maxTotalTimeInSeconds=7200&q=chicken%20soup&allowedAttribute=diet-lacto-vegetarian%2Cdiet-low-fodmap&FAT_KCALMax=1000';

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

app.get('/feeds/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/feeds/list?limit=24&start=0';

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

app.get('/feeds/list-similarities', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/feeds/list-similarities?limit=18&start=0&id=15-Minute-Baked-Salmon-with-Lemon-9029477&apiFeedType=moreFrom&authorId=Yummly';

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

app.get('/tags/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/tags/list';

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

app.get('/categories/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/categories/list';

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

app.get('/reviews/list', async (req, res) => {

    const url = 'https://yummly2.p.rapidapi.com/reviews/list?offset=0&globalId=a8d6747a-bfaa-46a7-92fb-892e3f76b264&limit=20';

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
