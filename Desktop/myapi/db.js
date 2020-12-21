var mysql = require('mysql');
//const { rootCertificates } = require('tls');
var con = mysql.createConnection({
host :"localhost",
user:"root",
password:"",
database:"node"
});
con.connect(function(error){

    if(error) throw error;
    console.log("connected");
})
module.exports = con;