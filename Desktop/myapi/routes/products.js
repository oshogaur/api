var express = require('express');
var router = express.Router();
var db = require('../db');
var bodyParser = require('body-parser');
const con = require('../db');
//app.set('view engine','pug');
//use for sending json data
router.use(bodyParser.json()); 
// use for sending url data
//app.use(bodyParser.urlencoded({extended: false}));
/* GET Data. */

router.get('/', function(req, res,next) {
  
    var sql = "SELECT * FROM users ";
    con.query(sql, function(err, rows, fields) {
      if (err) {
          res.send('something went wrong');
       // res.status(500).send({ error: 'Something failed!' })
      }
      res.json(rows);
    })
});
// get data using id
router.get('/:id', function(req, res,next) {
     var id = req.params.id;
    var sql =  `SELECT * FROM users WHERE id = ${id}`;
    con.query(sql, function(err, row, fields) {
      if (err) {
          res.send('something went wrong');
       // res.status(500).send({ error: 'Something failed!' })
      }
     
      res.json(row[0]);
    })
});
//inserted
router.post('/insert', function(req, res) {
   var name =req.body.name;
   var email = req.body.email;
   var password = req.body.password;
   var sql =  `INSERT INTO users( name, email, password) VALUES ("${name}","${email}","${password}")`;
   //var sql =  "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.password+"')"
   con.query(sql, function(err,result) {
     if (err) {
         res.send('something went wrong');
      // res.status(500).send({ error: 'Something failed!' })
     }
          req.body('data inserted');
    // res.json({status:'sucess',id:result.insertid});
   })
});
//how to update data
router.put('/update/:id', function(req, res) {
    var id = req.params.id;
    var name =req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `UPDATE users SET name=${name},email=${email},password=${password} WHERE id =${id}`;
    //var sql =  "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.password+"')"
    con.query(sql, function(err,result) {
      if (err) {
          res.send('something went wrong');
       // res.status(500).send({ error: 'Something failed!' })
      }
          // req.body('data inserted');
      res.json({status:'updated sucessfully'});
    })
 });
//how to delete data
 router.delete('/update/:id', function(req, res) {
    var id = req.params.id;
    var name =req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var sql = `DELETE FROM users WHERE id = ${id}`;
    //var sql =  "INSERT INTO `users`(`name`, `email`, `password`) VALUES ('"+ req.body.name +"','"+ req.body.email +"','"+ req.body.password+"')"
    con.query(sql, function(err,result) {
      if (err) {
          res.send('something went wrong');
       // res.status(500).send({ error: 'Something failed!' })
      }
           //req.body('data inserted');
      res.json({status:'sucess'});
    })
 });
module.exports = router;
