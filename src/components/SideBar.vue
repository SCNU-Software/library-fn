<!-- 主页侧栏组件 -->
<template>
    <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" @select="handleSelect">
        <el-menu-item index="/dashboard/search">
            <i class="el-icon-search"></i>
            <span slot="title">查找书籍</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/importfile">
            <i class="el-icon-upload"></i>
            <span slot="title">批量导入</span>
        </el-menu-item>
        <el-menu-item index="/dashboard/addone">
            <i class="el-icon-circle-plus-outline"></i>
            <span slot="title">单项导入</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    methods:{
        // 侧栏
        handleSelect(index,indexPath){
            // console.log(index,indexPath)
            console.log(this.$route)
        }
    }
}
</script>

<style>
.el-menu{
    border: none
}
</style>