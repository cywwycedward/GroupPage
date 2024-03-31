<template>
<el-container id="app-container">
    <el-header>
        <el-tabs v-model="activeName" id="tabs" @tab-click="handleClick">
            <el-tab-pane label="All" name="all"></el-tab-pane>
            <el-tab-pane label="M1" name="1"></el-tab-pane>
            <el-tab-pane label="M2" name="2"></el-tab-pane>
            <el-tab-pane label="M3" name="3"></el-tab-pane>
            <el-tab-pane label="M4" name="4"></el-tab-pane>
        </el-tabs>
    </el-header>
    <div id="app-container-main">
        <!-- <MemberPage></MemberPage> -->
        <RouterView></RouterView>
    </div>
</el-container>
</template>
<script setup>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
const activeName = ref('all')
const router = useRouter()

const handleClick = (tab, event) => {
    router.push({name:'member',params:{id:tab.props.name}})
}
</script>

<style lang="scss" scoped>
#app-container {
    height: 100vh;
    width:100%;
    background: #000000;
    align-items: center;
}

#tabs > .el-tabs__content {
padding: 32px;
color: #6b778c;
font-size: 32px;
font-weight: 600;
}

#app-container-main{
    height:80%;
    width:60%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}
</style>
  