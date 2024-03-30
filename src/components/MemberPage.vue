<template>
    <div id="container">
        <MemberDesc></MemberDesc>
        <Map></Map>
    </div>
</template>

<script setup>

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