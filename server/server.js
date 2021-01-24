const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
const port = process.env.PORT || 4000;


const uri = "mongodb+srv://cat:heyheyhey@cluster0.1fatg.mongodb.net/cunyhack2021?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  mongoose.connection.on('connected', () => {
    console.log("mongo connected");
  });
  mongoose.connection.on('error', (err) => {
    console.log("this is error", err);
  })


  const User = require('./models/userModel');
  const userRouter = require('./routes/userRouter')(User);
  const DietLog = require('./models/diet_logModel');
  const diet_logRouter = require('./routes/diet_logRouter')(DietLog);

  app.use('/api', userRouter);
  app.use('/api', diet_logRouter);

app.get('/', (req, res) => {
    res.send('Welcome to our app!!');
  })  

app.server = app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  
});