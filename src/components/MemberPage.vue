<template>
    <div id="container">
        <MemberDesc></MemberDesc>
        <Map></Map>
    </div>
</template>

<script setup>
import {useRouter,useRoute} from 'vue-router'
import {ref,watch} from 'vue'
const router=useRouter()
const route=useRoute()
watch(()=>route.params.id,(to,from)=>{
    console.log(to)
    console.log(from)
})
</script>

<style lang="scss" scoped>
#container{
    height: 100%;
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
}

MemberDesc{
    width: 60%;
    height: 100%;
}

Map{
    width: 30%;
    height: 30%;
}
</style>