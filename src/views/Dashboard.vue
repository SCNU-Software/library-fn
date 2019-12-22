<!-- 管理界面组件 -->
<template>
    
    <el-container>
        <el-aside width="250px">
            <!-- 侧栏 -->
            <SideBar></SideBar>
        </el-aside>
        <el-container class="el-main-wrapper">
            <el-main class="pull-left">
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import SideBar from '@/components/SideBar.vue';

export default {
  components:{
    SideBar,
  }
}
</script>