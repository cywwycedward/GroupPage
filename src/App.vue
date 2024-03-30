<template>
<el-container id="app-container">
    <el-header>
        <!-- <el-tabs v-model="activeName" id="tabs" @tab-click="handleClick">
            <el-tab-pane label="All" name="first"></el-tab-pane>
            <el-tab-pane label="M1" name="second"></el-tab-pane>
            <el-tab-pane label="M2" name="third"></el-tab-pane>
            <el-tab-pane label="M3" name="fourth"></el-tab-pane>
            <el-tab-pane label="M4" name="fourth"></el-tab-pane>
        </el-tabs> -->
        <RouterLink to="/members">Member</RouterLink>
        <RouterLink to="/Map">Map</RouterLink>
        <RouterLink to="/Map">Map</RouterLink>
        <RouterLink to="/Map">Map</RouterLink>
        <RouterLink to="/Map">Map</RouterLink>
    </el-header>
    <div id="app-container-main">
        <MemberPage></MemberPage>
        <!-- <RouterView></RouterView> -->
    </div>
</el-container>
</template>
<script setup>
import { ref } from 'vue'

// const activeName = ref('second')

// const handleClick = (tab, event) => {
// console.log(tab, event)
// }
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
  