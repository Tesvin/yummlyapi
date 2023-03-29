const express = require('express');
const axios = require("axios");


const app = express();
const port = 3000;
app.use(express.json());


const options = {
    method: 'GET',
    url: 'https://yummly2.p.rapidapi.com/feeds/auto-complete',
    params: {q: 'chicken soup'},
    headers: {
      'X-RapidAPI-Key': 'a341921e01msh06705c8228a50b8p1c874bjsnb51333fe1d85',
      'X-RapidAPI-Host': 'yummly2.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/feeds/auto-complete', (req, res) => {
    res.send(feeds/auto-complete)
})

// routes
// app.get('/', (req, res) => {
//     res.send('Hello World TEST!!');
// })

// let users = [
//     {
//         id: 1,
//         name: 'Simon',   
//     },
//     {
//         id: 2,
//         name: 'Brett',
//     },
//     {
//         id: 3,
//         name: 'William'
//     },
// ];

// // CREATE 
// app.post('/users', (req, res) => {
//     const newUser = {
//         name: req.body.name,
//         id: Date.now()
//     };
//     users.push(newUser);
//     res.json(newUser)
// })

// // READ
// app.get('/users', (req, res) => {
//     res.json(users)
// })

// // UPDATE
// app.put('/users', (req, res) => {
//     const { id, name } = req.body;
//     users = users.map((user) => {
//         if (user.id === id) {
//             user.name = name;
//         }
//         return user;
//     });
//     res.json(users);
// });

// DELETE
// app.delete('/users', (req, res) => {
//     const { id } = req.body;
//     users = users.filter((user) => user.id != id);
//     res.json(users);
// })

// // GET one user
// app.get('/users/:id', (req, res) => {
//     const id = +req.params.id;
//     const user = users.filter(user => user.id === id);
//     res.json(user);
// })

// start
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});