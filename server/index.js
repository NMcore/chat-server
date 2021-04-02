const express = require('express'); //import express
const mc = require('./controllers/messages_controller')

const app = express(); //setup blank espress server
app.use(express.json());  //top level middleware
app.use(express.static(__dirname + '/../public/build')); // <hey'o what is this? something new here

//different syntax here from other examples 

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

const port = 3001;
app.listen(port, () => console.log(`Server listening on port ${port} awww yeah`)); // start the server 
