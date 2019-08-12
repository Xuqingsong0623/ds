const express=require('express');
const userRouter=require('./routes/user.js');
const bodyParser=require('body-parser');
var app=express();
app.listen(8080);

app.use(express.static('public'));

app.use( bodyParser.urlencoded({
    extended:false
}));
app.use('/user',userRouter);
//用户名 密码手机号           邮箱 身份证  真实姓名  
