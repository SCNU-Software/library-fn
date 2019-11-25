<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <el-container>
      <!-- 顶部导航 -->
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <!-- 侧栏 -->
          <SideBar></SideBar>
        </el-aside>
        <el-container class="el-main-wrapper">
          <el-main class="pull-left"><router-view></router-view></el-main>
        </el-container>
      </el-container>
    </el-container>




  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue';
import Header from '@/components/Header.vue';
export default {
  data() {
      return {

      };
  },
  methods: {
    
  },
  components:{
    SideBar,
    Header
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height:100vh;
  display: flex;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* container容器 */
.el-header{
    background-color: #324057;
    color: #fff;
    text-align: left;
    line-height: 60px;
}
  
.el-aside {
  /* background-color: #D3DCE6; */
  color: #333;
  text-align: center;
  line-height: 200px;
  border-right: 1px solid #e6e6e6;
}

.el-main {
  /* background-color: #E9EEF3; */
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
