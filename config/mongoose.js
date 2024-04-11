// IMPORTING MONGOOSE MODULE
const mongoose = require('mongoose');

// CONNECTING TO MONGODB ATLAS USING MONGOOSE.CONNECT()
mongoose.connect(
  'mongodb+srv://clouduser:codingninjanodejs@cluster0.6ttptdh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  { useNewUrlParser: true, useUnifiedTopology: true }
);


// ACESSING THE DEFAULT MONGOOSE CONNECTION OBJECT
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'));
db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});

// EXPORTING THE MONGOOSE CONNECTION OBJECT
module.exports = db;
