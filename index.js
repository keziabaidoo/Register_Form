const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')


const server =express('server');

const registerRequestHandler= (req, res) =>{
   //let body = '';
  // req.on('data', chunck =>{
    //  body += chunck;
     
 //  });

   //req.on('end' ,() =>{
      // parse  with regEx
     // console.log(body)
 //  })
 console.log(req.body.firstname);
 console.log(req.body.lastname);
 console.log(req.body.gender);
 console.log(req.body.currentschoolname)
 console.log(req.body.countryofbirth);
 console.log(req.body.dateofbirth)
 console.log(req.body.state)
 console.log(req.body.email);
  res.send('Done');
} 


 
 server.use(express.static(path.join(__dirname, 'public')))
 server.use(bodyParser.urlencoded({extended: false}))


 
 server.post('/register', registerRequestHandler);

 
server.listen(3000,()=> console.log('server is ready'));