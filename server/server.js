const express = require('express');
//You need  body parser to be able to get the req.body
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}))
//also need to parse json if you are using it
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log('I am middleware');
  next();
})
// app.use(express.static(__dirname + '/change'))

// app.get('/',(req, res) =>{
//   console.log(req.query);
//   //req.bodyParser
//   //req.header
//   //req.params
// })

app.get('/',(req, res) => {
  const user = {
    name:'Pancho',
    hobby: 'Gamming'
  }
  res.send(user)
})
//Aside from get funcs there are  post , delete


app.get('/brother',(req, res) => {
  const user = {
    name:'Juan',
    hobby: 'Don'
  }
  res.send(user)
})

app.get('/sister',(req, res) => {
  const user = {
    name:'Rosy',
    hobby: 'cut hair'
  }
  res.send(user)
})

app.post('/post',(req, res) => {
  const user = {
    name:'posterBoy',
    hobby: 'guess'
  }
  res.send(user)
  console.log(req.body)
})


app.listen(3000);
