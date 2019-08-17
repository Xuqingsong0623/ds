<template>
<div class="header">
    <!-- 头部 -->
    <div class="nav1">
        <!-- 头部logo和网站名称 -->
        <div class="left">
            <div class="logoDiv">
                <svg class="logo" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="height:36px;width:36px; fill:#FF5A5F">
                    <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z">
                    </path>
                </svg>
                <!-- 列表的展开 -->
                <div class="arrows"  @click="more" :style="xuanzhuan"></div>
            </div>
            <!-- 搜索框 -->
             <div class="searchDiv">
                <router-link to="javascropt:;" class="searchImg">
                    <img src="/images/sousuo.png" alt="">
                </router-link>
                <input type="text" class="search" placeholder="输入北京试试">
            </div>
        </div>
        <!-- 右侧导航栏 -->
        <div class="daohang">
            <!-- 导航栏列表 -->
            <ul class="daohangul" >
                <li>人民币</li>
                <li>手机端</li>
                <li>成为房东</li>
                <li>体验达人</li>
                <li>故事</li>
                <li>帮助</li>
                <li>登录</li>
            </ul>
        </div>
    </div>
    <!-- <div class="bigDiv" :style="showul"> -->
    <div class="bigDiv" v-show="bigdiv">
        <div class="com shouye">
            <router-link class="linkStyle" to="javascript:;">首页</router-link>
        </div>
        <div class="com">
            <router-link class="linkStyle" to="javascript:;">邀请好友</router-link>
            <router-link  class="linkStyle" to="javascript:;">邀请房东</router-link>
            <router-link class="linkStyle" to="javascript:;">商务爱彼迎</router-link>
            <router-link class="linkStyle" to="javascript:;">故事</router-link>
        </div>
        <div class="com">
            <router-link class="linkStyle" to="javascript:;">发布房源<p>每月多赚￥10,754</p></router-link>
            <router-link class="linkStyle" to="javascript:;">了解如何出租您的房源</router-link>
            <router-link class="linkStyle" to="javascript:;">开展体验
            <p>做您喜爱的事情来赚取收入</p></router-link>
            <router-link class="linkStyle" to="javascript:;">开展体验
            <p>做您喜爱的事情来赚取收入</p></router-link>
            <router-link class="linkStyle" to="javascript:;">开展体验
            <p>做您喜爱的事情来赚取收入</p></router-link>

        </div>
        <div class="com">
            <router-link class="linkStyle" to="javascript:;">帮助</router-link>
            <router-link class="linkStyle" to="javascript:;">登录</router-link>
            
        </div>
    </div>
    <!-- <carousel></carousel> -->
</div>   
</template>
<script>
// import carousel from './Carousel.vue'
export default {
    data() {
        return {
            // showul:{
            //     height:'0px'
            // },
            xuanzhuan:{
                transform:'rotate(45deg)'
            },
            bigdiv:false
        }
    },
    
    methods: {
        more(){
            this.bigdiv= !this.bigdiv;
            console.log(111);
            // if(this.showul.height=='0px'){
            //     this.xuanzhuan.transform="rotate(225deg)";
            //     this.xuanzhuan.margin="22px 10px 0px 0px";
            //     this.showul.height="4000px";
            // }else{

            //     this.xuanzhuan.transform="rotate(45deg)";
            //     this.xuanzhuan.margin="15px 10px 0px 0px";
            //     this.showul.height="0px";
            // }
            
            
        // window.onresize = () => {
        //     if(document.body.clientWidth>767){
        //         this.showul.height="30px";
        //     }else{
        //         this.showul.height="0px";
        //     }
        // };

        }
    },
    // components:{carousel}
}
</script>
<style scoped>
@import url("../assets/css/common.css");
@import url("../assets/css/header.css");
</style>

