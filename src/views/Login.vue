<!-- 登录界面组件 -->
<template>
    <el-container class="flex-box">
        <div class="box" >
            <el-form label-position="left" label-width="80px" :model="formData">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password" @keyup.enter.native="handleLogin" ></el-input>
                </el-form-item>
                <el-form-item  class="register-line">
                    <router-link to="register">还没有账号？赶紧去注册一个吧！</router-link>
                </el-form-item>
                <el-button type="primary" style="width:100%" @click="handleLogin">登录</el-button>
            </el-form>
        </div>
    </el-container>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return {
        formData: {
          username: '',
          password: '',
        },
      };
    },
    methods:{
        handleLogin(){
            const self = this;
            let postData = {
                username: this.formData.username,
                password: this.formData.password
            };
            this.axios.post(
                'http://fisher.lazybone.xyz/library/api/login',
                this.$qs.stringify(postData),
                {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then((res) => {
                // 登录成功
                if(res.data.code == 200){
                    self.$message({
                        type: 'success',
                        showClose: true,
                        message: '登录成功，将自动跳转.',
                        offset: 100,
                        duration: 1500
                    });
                    this.$store.commit('setUserName', this.formData.username);
                    setTimeout(() => {
                        self.$router.push('/dashboard/search');
                    }, 1000);
                }
                // 登录失败
                else {
                    self.$message({
                        type: 'error',
                        showClose: true,
                        message: '用户名或密码错误.',
                        offset: 100
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>

<style scoped>
.flex-box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.box{
    /* width: 20%; */
    margin-top: -10%;
    transform: scale(1.1);
}
.alert{
    margin-bottom: 15px;
}
.hidden{
    display: none;
}
.register-line{
    margin-top: -22px;
    margin-bottom: 0;
}
</style>