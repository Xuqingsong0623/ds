<template>
<div id="footer">
    <div id="footer-distance">
    <div id="line"></div>
    <div id="footer-top">
        <div class="footer-item">
            <div>爱彼迎</div>
            <ul class="arby">
                <li><router-link to="Index">工作机会</router-link></li>
                <li><router-link to="Index">爱彼迎新闻</router-link></li>
                <li><router-link to="Index">政策</router-link></li>
                <li><router-link to="Index">帮助</router-link></li>
                <li><router-link to="Index">多元化与归属感</router-link></li>
                <li><router-link to="Index">无障碍设施</router-link></li>
            </ul>
        </div>
        <div class="footer-item">
            <div>发现</div>
            <ul class="arby">
                <li><router-link to="Index">信任与安全</router-link></li>
                <li><router-link to="Index">旅行基金</router-link></li>
                <li><router-link to="Index">爱彼迎公民</router-link></li>
                <li><router-link to="Index">商务差旅</router-link></li>
                <li><router-link to="Index">旅游指南</router-link></li>
                <li><router-link to="Index">爱彼迎杂志</router-link></li>
            </ul>
        </div>
        <div class="footer-item">
            <div>出租</div>
            <ul class="arby">
                <li><router-link to="Index">为什么要出租</router-link></li>
                <li><router-link to="Index">待客之道</router-link></li>
                <li><router-link to="Index">房东义务</router-link></li>
                <li><router-link to="Index">开展体验</router-link></li>
                <li><router-link to="Index">Open Homes</router-link></li>
            </ul>
        </div>
        <div class="footer-item">
            <div>更多</div>  
            <ul class="arby">
                <li>
                <span><router-link to="Index"></router-link></span>
                <span><router-link to="Index"></router-link></span>
                </li>
                <li><router-link to="Index">条款</router-link></li>
                <li><router-link to="Index">隐私政策</router-link></li>
                <li><router-link to="Index">网站地图</router-link></li>
            </ul>
        </div>
    </div>
    <div id="footer-bottom">
       
            <svg class="footer-logo" viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="fill: rgb(118, 118, 118);">
                    <path d="m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z">
                </path>
            </svg>
       
       <div class="footer-cont">
            <div class="footer-text">
               京ICP备16017121号-3 京ICP证 160773号
                <img src="../../public/imgs/footer-tp.png" alt="">
                中国公安局标志 京公网安备 11010502032345号 安彼迎网络（北京）有限公司 
            </div>
            <div class="footer-text">
                © 2019 Airbnb, Inc. All rights reserved.
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

        }
    }
}
</script>

<style scoped>
@import url("../assets/css/footer.css");
@import url("../assets/css/base.css");

</style>