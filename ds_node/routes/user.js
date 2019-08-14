const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.get('/login',function (req,res) {
    var phone=req.query.phone;
    var password=req.query.password;
    pool.query('SELECT * FROM ds_users WHERE phone=? AND upwd=?',[phone,password],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
            res.end();
        }
        else{
            res.writeHead(400,{'Access-Control-Allow-Origin':'*'});
            res.end();
        }
    });
});
 router.get('/reg',function(req,res){
    var phone=req.query.phone;
    var upwd=req.query.password;
    console.log(phone,upwd);
    pool.query('INSERT INTO ds_users (phone,upwd)VALUES(?,?)',[phone,upwd],function(err,result){
      if (err) throw err;
      //判断是否成功
      console.log(result);
      if (result.affectedRows>0)
      {
        res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
        res.end();
      }
    });
 })
 
 router.get('/regph',function(req,res){
  var phone=req.query.phone;
  var sql='SELECT * FROM ds_users WHERE phone=? ';
  pool.query(sql,[phone],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.writeHead(200,{'Access-Control-Allow-Origin':'*'});
      res.end();
    }
  });
  })
 
 module.exports=router;