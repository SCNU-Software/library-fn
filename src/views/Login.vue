<!-- 登录界面组件 -->
<template>
    <el-container class="flex-box">
        <div class="box" >
            <el-form label-position="left" label-width="80px" :model="formData">
                <!-- <el-alert :title="`登录成功,将自动跳转(${second})`" type="success" show-icon class="alert" :class="{hidden: hideLoginSucc}"></el-alert> -->
                <!-- <el-alert title="用户名或密码错误" type="error" show-icon class="alert" :class="{hidden: hidePassErr}"></el-alert> -->
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password" @keyup.enter.native="handleLogin" ></el-input>
                </el-form-item>
                <el-button type="primary" style="width:100%" @click="handleLogin">登录</el-button>
            </el-form>
        </div>
    </el-container>
</template>

<script>

export default {
    data(){
        return {
        formData: {
          username: '',
          password: '',
        },
        // // 密码错误提示
        // hidePassErr: true,
        // // 登录成功提示
        // hideLoginSucc: true,
        // // 自动成功跳转秒数
        // second: 1
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
            ).then(function (res) {
                // console.log(res);
                // 登录成功
                if(res.data.code == 200){
                    // console.log('登录成功');
                    // self.hidePassErr = true;
                    // self.hideLoginSucc = false;
                    self.$message({
                        type: 'success',
                        showClose: true,
                        message: '登录成功，将自动跳转.',
                        offset: 100,
                        duration: 1500
                    });
                    setTimeout(() => {
                        // self.second--;
                        self.$router.push('/dashboard');
                    }, 1000);
                }
                // 登录失败
                else {
                    // console.log('用户名或密码错误',self);
                    // self.hidePassErr = false;
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
}
.alert{
    margin-bottom: 15px;
}
.hidden{
    display: none;
}
</style>