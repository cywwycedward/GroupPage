<template>
    <img class="backgroundImg" :style="{ filter: blurFilter }" src="./assets/img/background.jpg"/>
    <div class="scroll-container" id = "scroll-container">
        <div class="face">
            <headerBox/>
        </div>
        <div class="Background">
            <div id="app-container-main" :style="{transform : shapeSize}">
                <!-- <MemberPage></MemberPage> -->
                <RouterView></RouterView>
            
                <div class = "app-container">
                    <div class = "routerlink" @click = "handleClick('all')">ALL</div>
                    <div class = "routerlink" @click = "handleClick(1)">CYW</div>
                    <div class = "routerlink" @click = "handleClick(2)">ZKQ</div>
                    <div class = "routerlink" @click = "handleClick(3)">ZDY</div>
                    <div class = "routerlink" @click = "handleClick(4)">LFY</div>
                </div>
            </div>
        </div>
        <div class="footer">
            <footerBox/>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import headerBox from './components/headerBox.vue'
import footerBox from './components/footerBox.vue'
const activeName = ref('all')
const router = useRouter()

const handleClick = (tab) => {
    router.push({ name: 'member', params: { id:tab } })
}

const blurFilter = ref('blur(0px)')
const shapeSize = ref(' scale(1)')
onMounted(() => {
  const scrollContainer = document.getElementById('scroll-container');
  scrollContainer.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  const scrollContainer = document.getElementById('scroll-container');
  scrollContainer.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
    const scrollContainer = document.getElementById('scroll-container');
    const scrollPosition = scrollContainer.scrollTop
    const blurAmount = Math.min(scrollPosition / 50, 10) // 调整模糊程度的比例
    const shapeScale =  1 + scrollPosition / 5000 // 调整形状大小的比例
    blurFilter.value = `blur(${blurAmount}px)`
    shapeSize.value = `scale(${shapeScale})`
    console.log(shapeScale)


};


</script>






<style lang="scss" scoped>
/* 隐藏滚动条的通用样式 */
.scroll-container::-webkit-scrollbar {
  display: none; /* 隐藏滚动条 */
}
.scroll-container {
  -ms-overflow-style: none;  /* IE和Edge */
  scrollbar-width: none;  /* Firefox */
}

*{
    margin: 0;
    padding: 0;
    border:0;
    box-sizing: border-box;
}
.scroll-container {
  height: 100vh; 
  width: 100%;
  overflow-y: scroll; 
  scroll-snap-type: y mandatory; 
}
.face{
    width:100%;
    height:100vh;
    scroll-snap-align: start;
}
.Background{
    height: 100vh;
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-snap-align: start;
    padding:5%;
    padding-left :50px;

}
.app-container {
    height:8%;
    min-height: 50px;
    width:100%;
    display: flex;
    align-items: center;
    justify-content:space-evenly;
    box-shadow: 0 -5px 20px rgba(0, 0, 0, 0.183);
    background-color: #f3f3f323;
    border-radius: 0 0 20px 20px;
}
.routerlink{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#ffffff;
    font-weight: bolder;
    font-size: 18px;
    transition: all 0.3s;

}
.routerlink:hover{
    box-shadow: 10px -5px 30px rgba(0, 0, 0, 0.183);
}

.routerlink:active{
    transform: scale(0.95);
}




.backgroundImg{
    object-fit: cover;
    height:100%;
    width:100%;
    margin: 0;
    position: absolute;
    z-index: -1;
    transition: filter 0.3s; /* 添加过渡效果 */
}
#tabs > .el-tabs__content {
padding: 32px;
color: #6b778c;
font-size: 32px;
font-weight: 600;
}

#app-container-main{
    height:80%;
    width:80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f3f3f3b1;
    backdrop-filter: blur(5px);
    border-radius:  20px 20px 20px 20px;
    box-shadow: 10px 0px 20px rgba(0, 0, 0, 0.183);
    transition: all 0.2s;
}

.footer{
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
}
</style>
