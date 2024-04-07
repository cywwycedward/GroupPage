<template>
<div class = "bodyBox">
    <h1 >Tittle xxxx</h1>
</div>
</template>

<script setup >

</script>

<style lang="scss" scoped>

.bodyBox{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
h1{
    font-size: 100px;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #ffffff;
    background-image: linear-gradient(to right, #e77584, #265add);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-radius: 40px;
    padding: 30px;
    border: 5px solid #ffffff;
    backdrop-filter: blur(20px);
    box-shadow: 0 0 10px #ffffff;
}
</style>