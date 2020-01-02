<!-- 头部导航组件 -->
<template>
    <el-row :gutter="20">
        <el-col :span="12">
            <span class="title">图书馆后台系统</span>
        </el-col>
        <!-- <el-col :span="6" :offset="12">
            <el-row type="flex" :gutter="20" justify="end">
                <el-col :span="6">消息列表</el-col >
                <el-col :span="6">管理员</el-col >
            </el-row>
        </el-col> -->
        <el-col :span="3" :offset="9" class="logout-box" @click.native="handleLogout" v-if="$route.meta.keepAlive">
            <div class="logout">
                <i class="el-icon-error"></i>
                <span class="logout-txt">登出</span>
            </div>
        </el-col>

    </el-row>
</template>

<script>
export default {
    methods:{
        handleLogout(){
            console.log('Logout');
            this.$router.replace('/');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
    color: #cbcfd4;
    font-size: 20px;
    font-weight: bold
}
.logout-box{
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.logout-box:hover{
    background-color: #2a3346;
}
.logout-txt{
    margin-left: 10px;
}
</style>