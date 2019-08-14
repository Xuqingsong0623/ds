<template>
  <div id="container">
    <div class="zz">
      <div class="cc">
        <div class="div1" @mouseenter="start" @mouseleave="stop" id="div">
          <!--整个图片的容器ul-->   <!---->
          <ul>
            <li v-for="(img,i) of imgs" :key="i">
            <!--a标签跳转-->
              <router-link :to="img.to" :title="img.title">
                <img :src="img.src">
              </router-link>
            </li>
            <li>
              <router-link :to="imgs[0].to" :title="imgs[0].title">
                <img :src="imgs[0].src">
              </router-link>
            </li>
          </ul>
        </div>
        <p>xxxx</p>
        <p>整个图片的容器ul</p>
        <p>￥5689</p>
        <p>*****</p>
      </div>  
      <div class="cc">
        <div class="div1" @mouseenter="start" @mouseleave="stop" id="div">
          <!--整个图片的容器ul-->   <!---->
          <ul>
            <li v-for="(img,i) of imgs" :key="i">
            <!--a标签跳转-->
              <router-link :to="img.to" :title="img.title">
                <img :src="img.src">
              </router-link>
            </li>
            <li>
              <router-link :to="imgs[0].to" :title="imgs[0].title">
                <img :src="imgs[0].src">
              </router-link>
            </li>
          </ul>
        </div>
        <p>xxxx</p>
        <p>整个图片的容器ul</p>
        <p>￥5689</p>
        <p>*****</p>
      </div>  
      <div class="cc">
        <div class="div1" @mouseenter="start" @mouseleave="stop" id="div">
          <!--整个图片的容器ul-->   <!---->
          <ul >
            <li v-for="(img,i) of imgs" :key="i">
            <!--a标签跳转-->
              <router-link :to="img.to" :title="img.title">
                <img :src="img.src">
              </router-link>
            </li>
            <li>
              <router-link :to="imgs[0].to" :title="imgs[0].title">
                <img :src="imgs[0].src">
              </router-link>
            </li>
          </ul>
        </div>
        <p>xxxx</p>
        <p>整个图片的容器ul</p>
        <p>￥5689</p>
        <p>*****</p>
      </div>       
    </div>
  </div> 
  </template>
<script>
  var divs = document.getElementById("div");
  for(let i=0;i<divs.length;i++){
    
  }
  export default {
  
    data(){
      return{
        
        timer:null,
        imgs:[
          {
            src:"img/01.jpg",
            title:"111",
            to:"javascript:;"
            },
          {
            src:"img/02.jpg",
            title:"222",
            to:"javascript:;"
            },
          {
            src:"img/03.jpg",
            title:"333",
            to:"javascript:;"
            },
          {
            src:"img/04.jpg",
            title:"444",
            to:"javascript:;"
            }
        ]
      }},
      methods:{
          // ad(){
          //  this.timer=setInterval(()=>{
          //     this.marTop-=2; 
          //      if(this.marTop==-1200){
          //        this.marTop=0;   
          //      }
          //   },15)
          // },
          // start(){
          //   alert();
          //   先清除定时器,避免定时器冲突
          //   clearInterval(this.timer);
          //   //鼠标移入图片,设置定时器让图片向上移动
          //    this.timer=setInterval(()=>{
          //      //每15毫秒,上外边距-2
          //     this.marTop-=2;
          //     //如果移动到最大ul距离时,
          //      if(this.marTop==-1200){
          //        //瞬间将上外边距置为0,拉回第一张图片
          //        this.marTop=0;               
          //      }
          //   },15)  
          // },
          // stop(){
          //   if(this.marTop<0){
          //  //先清除定时器,避免定时器发生冲突
          //   clearInterval(this.timer);
          //   //鼠标移出图片,设置定时器让图片向下移动
          //   this.timer=setInterval(()=>{
          //     this.marTop+=2;
          //      //如果移动到第一张图片即marTop为0
          //      if(this.marTop==0){
          //        //清除定时器
          //    clearInterval(this.timer);    
          //      } 
          //   },15)
          //  }
          // }
        },
        created() {
          // this.ad();
          //  this.stop(); 
        },
        computed:{
        
      },
    }
</script>
<style scoped>
  .zz{
    margin:0 auto;
    display:flex; 
    flex-wrap:wrap;
    justify-content:space-around;
  }
  @media (min-width:992px){
        .cc{
          width:30%;
        }  
  }
  @media(min-width:768px) and (max-width:991px){
      .cc{
        width:45%;  
        }
  }
  @media (max-width:767px){
      #cc{width:100%}
  }
  .cc{
  }
  ul{
      list-style:none;
      width:100%;
      height:1500px;
  }
  ul li img{
      width:100%;
      height:300px;
  }
  .div1{
     width:100%;
      height:300px;
      overflow:hidden;  
  }
</style>