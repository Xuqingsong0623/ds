<template>
  <div class="login">
  <div class="login_center">
    <!-- 选择登录或注册 -->
    <div class="login_header">
      <div class="login_switch" id="switch">
        <a @click="isLogin" :class="{color:color1}" class="switch_btn_focus" href="javascript:;">快速登录</a>
			  <a @click="isReg" :class="{color:color2}" class="switch_btn"  href="javascript:;">快速注册</a>
        <div :class="{login_bottom:show_bottom}" class="switch_bottom" style=""></div>
      </div>
    </div>
    <!-- 登录模块 -->
    <div v-show="to_login" style="margin-top:30px;position:relative">
      <input v-model="ph_em" class="login_ph_em" type="text" placeholder="请输入手机号">
      <input v-model="pwd" class="login_pwd" :type="inputType" placeholder="请输入密码">
        <img class="open_eye" @click="showPassword" v-if="eye" src="../assets/images/login/open.png">
        <img class="close_eye" @click="showPassword" v-else src="../assets/images/login/close.png">
      <label class="login_msg_pwd">
        <input type="checkbox">记住密码
        <a href="javascript:;">忘记密码?</a>
      </label>
      <input @click="login" type="submit" value="登录">
      <div class="login_other">
        <em></em>
        <span>其他登录方式</span>
        <em></em>
      </div>
      <ul class="login_img">
        <li><a href="javascript:;"><img src="../assets/images/login/qq.png"></a></li>
        <li><a href="javascript:;"><img src="../assets/images/login/weixin.png"></a></li>
        <li><a href="javascript:;"><img src="../assets/images/login/weibo.png"></a></li>
      </ul>
    </div>
    <!-- 注册模块 -->
    <div v-show="to_reg" style="margin-top:30px;display:none">
      <input v-model="userph_em" @blur="getPh_Em"  class="reg_ph_em" type="text" placeholder="手机号">
      <span style="font-size:12px;" :class="{red:red1,green:green1}">
        {{userPh_Em === 1 ? '请输入合法的手机号' 
        : userPh_Em === 2 ? '手机号不能为空' 
        : userPh_Em === 3 ? '手机号格式正确' 
        : userPh_Em === 4 ? '此手机号已注册':'手机号格式不正确'}}
      </span>
      <input v-model="userpwd" @blur="getUserpwd" class="reg_pwd" type="password" placeholder="密码">
      <span style="font-size:12px;" :class="{red:red2,green:green2}">
        {{userPwd === 1 ? '请输入由6位字母或数字组成的密码' 
        : userPwd === 2 ? '密码不能为空' 
        : userPwd === 3 ? '密码格式正确' : '密码格式不正确'}}           
      </span>      
      <input v-model="userpwds" @blur="getUserpwds" class="reg_re_pwd" type="password" placeholder="确认密码">
      <span style="font-size:12px;" :class="{red:red3,green:green3}">
        {{userPwds === 1 ? '请输入确认密码与上面保持一致' 
        : userPwds === 2 ? '确认密码不能为空' 
        : userPwds === 3 ? '两次输入一致' : '两次输入不一致'}} 
      </span>  
      <div style="height: 43px;margin-bottom: 5px;">
        <!-- 验证码输入框 -->
        <input @blur="checkNum" v-model="code1" class="reg_info" type="text" placeholder="验证码"> 
        <!-- 验证码切换按钮 -->
        <input @click="createCode" v-model="code2" class="reg_send" type="button" style="border-radius:0;">  
      </div>   
      <!-- 提示信息 -->
      <span class="reg_code" :class="{red:red4,green:green4}" style="display:block;height:26px;font-size:12px;margin-top:3px;line-height:26px;">{{code3}}</span>
      <!-- 服务条款 -->
      <div class="reg_check" >
        <label><input type="checkbox" v-model="isAgree"/>我已阅读并服务条款：</label>
        <a href="javascript:;">&lt;&lt;AR民宿&gt;&gt;</a>
      </div> 
      <input @click="reg" :disabled="isAgree==false" type="submit" value="注册"> 
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 控制密码显示或隐藏
      eye: false,
      inputType: "password",
      // 指向登录或注册
      to_login: true,
      to_reg: false,
      show_bottom: false,
      // 登录或注册字体颜色的改变
      color1: true,
      color2: false,
      userph_em: "", //用户注册输入手机号
      userPh_Em: 1,       
      userpwd: "",   //用户注册输入密码
      userPwd: 1,
      userpwds: "",  //用户注册输入确认密码
      userPwds: 1,
      ph_em: "",     //用户登录输入手机
      pwd: "",       //用户登录输入密码
      // 提示文字的颜色
      red1: false,
      green1: false,
      red2: false,
      green2: false,
      red3: false,
      green3: false,
      red4: false,
      green4: false,
      // 验证码
      code1: "",
      code2: "",
      code3: "",
      isAgree: false
    }   
  },
  created () {
    this.createCode(); //初始化生成一个4位数的验证码
  },
  methods: {
    // 控制密码显示或隐藏
    showPassword () { 
			if (this.eye) {
		    this.eye = false
		    this.inputType = 'password'
		  } else {
		    this.eye = true
		    this.inputType = 'text'
		  }
		},
    // 判断指向登录或注册的函数
    isLogin () {
      this.to_login = true;
      this.to_reg = false;
      this.show_bottom = false;
      this.color1 = true;
      this.color2 = false;
    },
    // 判断登录或注册字体颜色改变的函数
    isReg () {
      this.to_login = false;
      this.to_reg = true;
      this.show_bottom = true;
      this.color1 = false;
      this.color2 = true;
    },
    // 手机号判断函数
    getPh_Em () {
      let reg = /^1[3,4,5,7,8]\d{9}$/;  //手机号正则表达式  
      if (this.userph_em === "") {
        this.userPh_Em = 2 * 1;
        this.red1 = true;
        this.green1 = false;
        return
      }
      if (reg.test(this.userph_em)) {
        this.userPh_Em = 3 * 1;  
        this.red1 = false;
        this.green1 = true;     
      } else {
        this.userPh_Em = 5 * 1;   
        this.red1 = true;
        this.green1 = false;
      }     

      //发送ajax请求
      let userph_em = this.userph_em;
      let url = "http://127.0.0.1:8080/user/regph";
      let obj = {phone:userph_em};
      this.axios.get (url,{params:obj}).then (res => {
        console.log(res);
        if (res.status == 200) {
          this.userPh_Em = 4;
          this.red1=true;
          this.green1=false;
        }
      })    
    },
    // 密码判断函数
    getUserpwd () {     
      let reg = /^[a-zA-Z0-9]{6}$/i;  //密码正则表达式
      if (this.userpwd == "") {
        this.userPwd = 2 * 1;
        this.red2 = true;
        this.green2 = false;
      } else if (reg.test(this.userpwd)) {
        this.userPwd = 3 * 1;
        this.red2 = false;
        this.green2 = true; 
      } else {
        this.userPwd = 4 * 1;
        this.red2 = true;
        this.green2 = false;
      }
    },
    // 确认密码判断函数
    getUserpwds () {
      if (this.userpwds == "") {
        this.userPwds = 2 * 1;
        this.red3 = true;
        this.green3 = false;
      } else if (this.userpwds == this.userpwd) {
        this.userPwds = 3 * 1;
        this.red3 = false;
        this.green3 = true;
      } else {
        this.userPwds = 4 * 1;
        this.red3 = true;
        this.green3 = false;
      }
    },
    // 登录操作
    login () {
      let ph_em = this.ph_em;  //获取用户登录输入手机号
      let pwd = this.pwd;      //获取用户登录输入密码
      let reg1 = /^1[3,4,5,7,8]\d{9}$/;  //手机号正则表达式
      let reg2 = /^[a-zA-Z0-9]{6}$/i;    //密码正则表达式
      if(!reg1.test(ph_em)){             //用户名验证失败 提示短消息
        alert ("手机号格式不正确");       
        return;                      
      }
      if(!reg2.test(pwd)){               
        alert ("密码格式不正确");
        return;                      
      }  
      // 发送ajax请求
      let url = "http://127.0.0.1:8080/user/login";
      let obj = {phone:ph_em,password:pwd};
      this.axios.get(url,{params:obj}).then (res => {
        // 登录失败 提示
        if (res.status == 400) {
          alert ("用户名或密码错误！");
        } else {
          // 登录成功 提示 跳转
          alert ("登录成功！");
          this.$router.push ("/index");
        }    
      })     
    },
    // 注册操作
    reg () { 
      
      let userph_em = this.userph_em;  
      let userpwd = this.userpwd;  
      let reg1 = /^1[3,4,5,7,8]\d{9}$/;  //手机号正则表达式    
      let reg2 = /^[a-zA-Z0-9]{6}$/i;    //密码正则表达式        
      if ( this.userPh_Em == 3 && this.userPwd == 3 && this.userPwds == 3 && this.code3 == "验证码正确" ) {
        //发送ajax请求
        let url = "http://127.0.0.1:8080/user/reg";
        let obj = {phone:userph_em,password:userpwd};
        this.axios.get (url,{params:obj}).then (res => {
          //注册失败 提示
          console.log(res);
          if (res.status == 200) {
            alert ("注册成功！");
            this.$router.push ("/index");
          } else {
            // 注册成功 提示 跳转
            alert ("注册失败！");
          }           
        })     
      }
    },                  
    // 验证码切换绑定函数
    createCode () {
      var code = "";
      var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
      for (var i=0;i<4;i++) { //控制验证码的长度为4
        var index = Math.floor(Math.random()*36); //取得随机数的索引（0~35）
        code += random[index]; //根据索引取得随机数加到code上
      }
      this.code2 = code; //把code值赋给验证码
    },
    // 验证码输入框绑定函数
    checkNum () {
      var num = this.code1.toUpperCase(); //输入内容全部转化为大写
      if (num == this.code2) {
        this.code3 = "验证码正确";
        this.red4 = false;
        this.green4 = true;
      } else {
        this.code3 = "验证码错误";
        this.red4 = true;
        this.green4 = false;
        this.createCode();
      }
    }
  }
}
</script>
<style scope>  
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
  pre, a,  code, del, dfn, em, img, q, s, b, u, i, 
  dl, dt, dd, ol, ul, li, form, label, legend, table,
  caption, tbody, tfoot, thead, tr, th, td, footer, header{
    margin: 0;
    padding: 0;
    border: 0;
  }
  a {
    text-decoration: none;
  }
  /*** 大屏 ***/
  @media (min-width:992px){
    .login_center {
      width: 350px;
    }
    .login_header .login_switch {
      left: 60px;
    }
    .login_header .login_switch .switch_btn_focus {   
      margin-right: 85px;
    }
    /* 登录 */
    .login_center input.login_ph_em,
    .login_center input.login_pwd {
      width: 293px;
    }
    .login_msg_pwd+input[type="submit"] {
      width: 350px;
    }
    .login_center .login_other em {
      width: 100px;
    }
    .login_center .login_other span+em {
      left:248px;
    }
    /* 注册 */
    .login_center input.reg_ph_em,
    .login_center input.reg_pwd,
    .login_center input.reg_re_pwd {
      width: 293px;
    }
    .login_center input.reg_info {
      width: 153px;
    }
    .login_center input.reg_send {
      width: 126px;     
    }
    .reg_check+input[type="submit"] {
      width: 350px;
    }
  }
  /*** 中屏 ***/
  @media (min-width:768px) and (max-width:991px){
    .login_center {
      width: 300px;
    }
    .login_header .login_switch {
      left: 50px;
    }
    .login_header .login_switch .switch_btn_focus {   
      margin-right: 75px;
    }
    /* 登录 */
    .login_center input.login_ph_em,
    .login_center input.login_pwd {
      width: 243px;
    }
    .login_msg_pwd+input[type="submit"] {
      width: 300px;
    }
    .login_center .login_other em {
      width: 80px;
    }
    .login_center .login_other span+em {
      left: 219px;
    }
    /* 注册 */
    .login_center input.reg_ph_em,
    .login_center input.reg_pwd,
    .login_center input.reg_re_pwd {
      width: 243px;
    }
    .login_center .login_bottom {
      margin-left: 136px !important;
    }
    .login_center input.reg_info {
      width: 119px;
    }
    .login_center input.reg_send {
      width: 110px;     
    }
    .reg_check+input[type="submit"] {
      width: 300px;
    }
  }
  /*** 小屏 ***/
  @media (max-width:767px){
    .login_center {
      width: 250px;
    }
    .login_header .login_switch {
      left: 28px;
    }
    .login_header .login_switch .switch_btn_focus {   
      margin-right: 65px;
    }
    /* 登录 */
    .login_center input.login_ph_em,
    .login_center input.login_pwd {
      width: 193px;
    }
    .login_msg_pwd+input[type="submit"] {
      width: 250px;
    }
    .login_center .login_other em {
      width: 60px;
    }
    .login_center .login_other span+em {
      left: 190px;
    }
    /* 注册 */
    .login_center input.reg_ph_em,
    .login_center input.reg_pwd,
    .login_center input.reg_re_pwd {
      width: 193px;
    }
    .login_center .login_bottom {
      margin-left: 126px !important;
    }
    .login_center input.reg_info {
      width: 82px;
    }
    .login_center input.reg_send {
      width: 97px;   
      padding: 10px 8px 10px 8px !important;  
    }
    .login_center .reg_check {
      font-size: 14px !important;
    }
    .reg_check+input[type="submit"] {
      width: 250px;
    }
  }
  .login {
    height: 800px;
    background: url(../assets/images/login/bg.jpg) no-repeat;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  .login_center {
    margin: 0 auto 0;
    background-color: rgba(56, 49, 49, 0.13);
    padding: 0 40px 40px 40px;
    border: 2px ridge rgba(238, 238, 238, 0.13);
    border-radius: 5px;
    -moz-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    -webkit-box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
    box-shadow: 0 -5px 10px 1px rgba(16, 16, 16, 0.57);
  }
  /* 选择登录或注册 */
  .login_header {
    height: 50px;
    border-bottom: 1px solid #000;
    position: relative;
  } 
  .login_header .login_switch {
    height: 45px;
    position: absolute;
    bottom: 0;
    font-size: 16px;
  }
  /* 快速登录/快速注册 */
  .login_header .login_switch .switch_btn_focus,
  .login_header .login_switch .switch_btn {
    color: #999;
    display: inline-block;
    height: 45px;
    line-height: 45px;   
  }
  /* v-show控制添加style */
  .login_bottom {
    margin-left: 148px;
  }
  .color {
    color: #333 !important;
  }
  /* 底线转换 */
  .login_header .login_switch .switch_bottom {
    width: 70px; 
    left: 0px;
    position: absolute;
    bottom: -1px;
    border-bottom: 2px solid #000;   
  }
  /* 登录 */
  /* 手机号/邮箱,密码 */
  .login_center input.login_ph_em,
  .login_center input.login_pwd {
    margin-bottom: 25px;
    padding: 10px 10px 10px 45px;
    background: rgba(23, 24, 25, 0.29) url(../assets/images/login/user.png) no-repeat 10px 7px;
    border: 1px solid #7B7474;
    border-radius: 5px;
    font-size: 18px;
    color: #FFF;
    outline: none;
    letter-spacing: 2px;
  }
  /* 密码 */
  .login_center input.login_pwd {  
    background: rgba(23, 24, 25, 0.29) url(../assets/images/login/pwd.png) no-repeat 11px 8px;    
  }
  .login_center .open_eye,
  .login_center .close_eye {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 79px;
    right: 21px;
  }
  /* msg提示信息 */
  .login_center .login_msg,.login_msg_pwd {
    display: block;
    text-align: left;
    color: #fff;
    font-size: 14px;
    font-family: Helvetica;
  }
  .login_center .login_msg input {
    vertical-align: middle;
  }
  /* 登录按钮 */
  .login_msg_pwd+input[type="submit"] {
    padding: 10px 0;
    margin-top: 20px;
    outline: none;
    border: 1px solid #7B7474;
    font-family: Oswald-Regular;
    font-size: 17px;
    color: #FFFFFF;
    background-color: rgba(23, 24, 25, 0.24);
    border-radius: 5px;
    cursor: pointer;
  }
  .login_center .login_msg_pwd {
    margin: 3px 5px 3px 5px;
    clear: both;
  }
  .login_center .login_msg_pwd a {
    float: right;
    color: #fff;
    text-decoration:none;
  }
  /* 其他登录方式 */
  .login_center .login_other {
    display:block;
    color:#fff;
    position: relative;
    margin-top: 25px;
    margin-bottom: 20px;
    text-align: center;
  }
  .login_center .login_other em {
    display:block;
    height:1px;
    background: #666666;
    position: absolute;
    top:12px
  }
  .login_center .login_img {
    display: flex;
    justify-content: space-around;
    list-style: none;
  }
  .login_center .login_img li img {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
  /* 注册 */
  /* 手机号/邮箱,密码，重置密码，验证码 */
  .login_center input.reg_ph_em,
  .login_center input.reg_pwd,
  .login_center input.reg_re_pwd,
  .login_center input.reg_info,
  .login_center input.reg_send {
    margin: 5px 0;
    padding: 10px 27px 10px 27px;
    background: rgba(23, 24, 25, 0.29);
    border: 1px solid #7B7474;
    border-radius: 5px;
    font-size: 18px;
    color: #FFF;
    outline: none;
    letter-spacing: 2px;
  }
  .login_center input.reg_send {
    height: 43px;
    font-size: 14px;
    margin-left: 15px;
    padding: 10px 13px 10px 13px;
  }
  /* msg提示信息 */
  .login_center .msg,.msg_pwd {
    display: block;
    text-align: left;
    color: #fff;
    font-size: 14px;
    font-family: Helvetica;
  }
  .login_center .msg input {
    vertical-align: middle;
  }
  /* 服务条款 */
  .login_center .reg_check a{
    color: #fff;
    font-size: 14px;
    text-decoration:none;
  }
  /* 注册按钮 */
  .reg_check+input[type="submit"] {
    padding: 10px 0;
    margin-top: 20px;
    outline: none;
    border: 1px solid #7B7474;
    font-family: Oswald-Regular;
    font-size: 17px;
    color: #FFFFFF;
    background-color: rgba(23, 24, 25, 0.24);
    border-radius: 5px;
    cursor: pointer;
  }
  /* 提示文字的字体颜色 */
  .red {
    color: red;
  }
  .green{
    color: green;
  }
</style>