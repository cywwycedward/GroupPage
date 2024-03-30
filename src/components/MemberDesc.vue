<template>
    <el-container id="desc-container">
        <el-header id="avatar">
            <el-avatar src="src/assets/img/back.jpg" fit="fill"></el-avatar>
        </el-header>
        <el-main id="descriptions">
            <el-card>
                <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                    </div>
                </template>
                <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
            </el-card>
        </el-main>
    </el-container>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#desc-container{
    flex-direction:column;
}

#avatar{

}

#descriptions{
    width:100%;
}
</style>