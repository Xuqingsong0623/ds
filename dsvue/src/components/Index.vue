<template>
<div id="container" >
    <!--轮播图下方的房源搜索框-->
    <div id="house">
        <div class="housing">
            <div class="fang">
                <button class="yuan">
                    <span>房源</span>
                </button>
            </div>
            <div class="house-check">
                <div class="city">
                    <div class="dingwei">
                        <img class="pic-left" src="/imgs/ss/dingwei.png" alt="">
                        <input @click="show1()" type="text" :placeholder="bad" v-model:value="val">
                        <img @click="clear()" v-show="val" class="pic-right" src="/imgs/ss/quxiao.png">
                    </div>
                </div>
                <div class="check-in">
                    <div class="check-data">
                        <img src="/imgs/ss/riqi.png" alt="">
                        <div class="check-lei">
                            <span>入住日期</span>
                        </div>
                        <div class="check-lei">
                            <div></div>
                        </div>
                        <div class="check-lei">
                            <span>退房日期</span>
                        </div>
                    </div>
                </div>
                <div class="search">
                    <button @click="search">搜索</button>
                </div>
                <!--轮播图下方的房源搜索 城市-->
                <div id="out" class="cities" v-show="aim"  @click="select">
                    <div class="hint">
                        <span>温馨提示：您还可以输入城市 + 景点、行政区名进行搜索，如：巴黎 埃菲尔铁塔</span>
                    </div>
                    <div class="hot-city">
                        <div>国内热门城市</div>
                        <ul>
                            <li>北京</li>
                            <li>上海</li>
                            <li>成都</li>
                            <li>重庆</li>
                            <li>杭州</li>
                            <li>厦门</li>
                            <li>广州</li>
                            <li>西安</li>
                        </ul>
                        <div>夏季好去处</div>
                        <ul>
                            <li>深圳</li>
                            <li>南京</li>
                            <li>武汉</li>
                            <li>长沙</li>
                            <li>苏州</li>
                            <li>吉隆坡</li>
                            <li>宁波</li>
                            <li>福州</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>
</template>
<script>
export default {
    data(){
        return{
            aim:false,
            bad:"输入目的地、城市或景点",
            val:"",
        }
    },
    methods: {
        show1(){
            this.aim=!this.aim;
            console.log(this.val)
        },
        select(e){
            var city=e.target;
             if(city.nodeName=="LI"){
            this.bad="";
            this.val=city.innerHTML;
            }
        },
        clear(){
            this.val="";
            this.bad="输入目的地、城市或景点";
        },
        search(){
            this.$router.push({city,query:{goodsId:this.goodsId}})
        }
    },
}
</script>>
<style scoped>
@import url("../assets/css/index.css");
@import url("../assets/css/base.css");

</style>