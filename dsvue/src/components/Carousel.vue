<template>
<section>
  <div id="demo" class="carousel" :style="{width:innerWidth+'px'}" @mouseenter="stop" @mouseleave="start">
      <!--1.轮播图片-->
    <div class="carousel-inner" :class="ulClass" :style="ulStyle">
      <div v-for="(img,i) of imgs" :key="i" class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="img.to" :title="img.title">
          <img :src="img.src" :style="{height:'529px',width:'100%'}"/>
        </router-link>
        <!-- 中间div -->
        <div class="cLeft">
          <div v-text="img.title"></div>
          
        </div>
        <!-- <router-link :to="img.to" v-text="img.title"></router-link> -->
      </div>
      <div class="carousel-item" :style="{width:innerWidth+'px'}">
        <router-link :to="imgs[0].to" :title="imgs[0].title">
          <img :src="imgs[0].src" :style="{width:'529px'}"/>
        </router-link>
        <!-- 中间div -->
        <div class="cLeft">
          <div v-text="imgs[0].title"></div>
        </div>
        <!-- <router-link :to="imgs[0].to" v-text="imgs[0].title"></router-link> -->
      </div>
    </div>
    <!--2.左右箭头-->
    <a href="javascript:;" @click="move(1)" class="carousel-control-next">
        <span class="carousel-control-next-icon"></span>
    </a>
    <a href="javascript:;" @click="move(-1)" class="carousel-control-prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <div class="cRight">
      <!-- 查看合集 -->
      <div class="heji">
        查看合集
      </div>
    </div>
    <!--3.轮播指示符-->
    <div class="bottomDiv">
      <ul class="carousel-indicators">
          <li v-for="(img,idx) of imgs" :key="idx"  @click="moveTo(idx)">
          <div  :class="idx==i?'active':''"></div>
          </li>
          
          
      </ul>
    </div>
  </div>
  </section>
</template>
<script>
export default {
  data(){
    return {
      innerWidth:window.innerWidth,
      innerHeight:window.innerHeight,
      ulClass:{ hasTrans:true },
      i:0,
      imgs:[
        {
          src:"/images/carousel_item/carouselImg1.jpg",
          title:"美国一号公路自驾游",
          to:"javascript:;"
        },
        { 
          src:"/images/carousel_item/carouselImg2.jpg",
          title:"打卡照片里的奇妙家",
          to:"javascript:;"
        },
        { 
          src:"/images/carousel_item/carouselImg3.jpg",
          title:"领取精品房源专属券",
          to:"javascript:;"
        },
      ],
      canClick:true,
      timer:null
    }
  },
  created(){
    window.addEventListener("resize",()=>{
      this.innerWidth=window.innerWidth;
      this.innerHeight=window.innerHeight;
    })
    // setTimeout(function(){   
        this.start();
    // },100)
  },
  methods:{
    stop(){
      clearInterval(this.timer);
    },
    start(){
      this.timer=setInterval(()=>{
        this.move(1);
      },6000)
    },
    move(i){
      if(this.canClick){
        this.canClick=false;
        if(i==-1&&this.i==0){
          this.ulClass.hasTrans=false;
          setTimeout(()=>{
            this.i=this.imgs.length;
            setTimeout(()=>{
              this.ulClass.hasTrans=true;
              this.i+=i;
              setTimeout(()=>{
                this.canClick=true;
              },20)
            },5)
          },5)
        }else if(i==1&&this.i==this.imgs.length-1){
          this.i+=i;
          setTimeout(()=>{
            this.ulClass.hasTrans=false;
            setTimeout(()=>{
              this.i=0;
              setTimeout(()=>{
                this.ulClass.hasTrans=true;
                setTimeout(()=>{
                  this.canClick=true;
                })
              },5)
            },5)
          },20)
        }else{
          this.i+=i;
          setTimeout(()=>{
            this.canClick=true;
          },30)
        }
      }
    },
    moveTo(i){
      if(this.canClick){
        this.i=i;
        this.canClick=false;
        setTimeout(()=>{
          this.canClick=true;
        },300)
      }
    }
  },
  computed:{
    ulStyle(){
      var width=this.innerWidth*(this.imgs.length+1)+"px";
      var marginLeft=-this.i*this.innerWidth+"px";  
      return { width, marginLeft }
    }
  }
}
</script>
<style scoped>
/* 大屏样式 */
@media (min-width:992px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    margin: 0px 135px;
    padding: 24px;
  }

}
/* 中屏样式 */
@media(min-width:768px) and (max-width:991px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    padding: 24px;
    margin: 0px 135px;
  }
    
}
/* 小屏样式 */
@media (max-width:767px){
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    margin: 0px 135px;
    padding: 24px;
  }
}

  section>.carousel{
    height: 100%;
    object-fit: cover;
  }
  section>.carousel:after{
    content:"";
    display:block;
    clear:both;
  }
   section>.carousel>.carousel-inner.hasTrans{
     transition:all .2s linear;
   }
  section>.carousel>.carousel-inner>.carousel-item{
    display:block;
    float:left;
  }
  section>.carousel>.carousel-inner>.carousel-item .cLeft{
    position: absolute;
    padding: 0px;
    top: 20%;
    /* z-index: 999; */
  }
  section>.carousel .cLeft div{
    font-weight: 600 !important;
    color: white !important;
    font-size: 32px !important;
    line-height: 34px !important;

  }
  section .carousel .cRight {
    position: absolute;
    margin:0 135px;
    top:30%;
    border: #f00;
  }
  section .carousel .cRight .heji{
    width: 110px;
    border: 2px solid #fff;
    background: transparent;
    text-align: center;
    color: #fff;
    padding:10px 12px;
    font-size: 16px;
    line-height: 26px;
    border-radius: 4px;
  }
  


  /* 重写指示符的样式 */
  .carousel-indicators{
    position: absolute;
    top:50%;
    margin: 0 135px;
    justify-content: left;
    list-style: none;
  }
  .carousel-indicators li{
    width:60px;height:2px;
    background-color:#aaa;
    margin-left:6px;
    margin-right:6px;
    border-radius: 10%;
    top:60px;
    float: left;
  }
   
  .carousel-indicators li div{
    width:0px;height:2px;
    background-color:#fff;
    margin-right:6px;
    border-radius: 10%;
    top:60px;
    float: left;
  }
 .carousel-indicators li div.active{
    
    transition: all 7s;
    width: 60px;
  }

  /* .carousel-indicators>li:hover, .carousel-indicators>li.active{
    transform:scale(1.3)
  } */
  
  /*重写左右箭头的样式*/
  .carousel-control-prev,
  .carousel-control-next{
    position: absolute;
    top: 0;
    display: flex;
    width:60px;height:529px;
    background-color:transparent;
    border-radius:0.25rem;
    /* text-align: center; */
    padding: 250px 20px;
  }
  .carousel-control-prev{
    left:0;
  }
  section .carousel-control-next{
    right: 0;
  }
  .carousel-control-prev-icon,
.carousel-control-next-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  background: transparent no-repeat center center;
  background-size: 100% 100%;
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}

.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

</style>