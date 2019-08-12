const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

router.get('/login',function (req,res) {
    var uname=req.query.uname;
    var upwd=req.query.upwd;
    pool.query('SELECT * FROM ds_users WHERE uname=? AND upwd=?',[uname,upwd],function(err,result){
        if(err) throw err;
        if(result.length>0){
            res.send({code:200,msg:"登录成功"});
        }
        else{
            res.send({code:400,msg:"登录失败"});
        }
    });
});
 router.post('/reg',function(req){
    var obj=req.body;
    //执行SQL语句
    pool.query('insert into xz_user SET ?',[obj],function(err,result){
      if (err) throw err;
      console.log(result);
      //判断是否成功
      if (result.affectedRows>0)
      {
          res.send({code:200,msg:'reg success'});
      }
    });
 })
module.exports=router;