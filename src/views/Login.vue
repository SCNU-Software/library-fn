<!-- 登录界面组件 -->
<template>
    <el-container class="flex-box">
        <div class="box" >
            <el-form label-position="left" label-width="80px" :model="formData">
                <el-form-item label="用户名">
                    <el-input v-model="formData.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="formData.password"></el-input>
                </el-form-item>
                <!-- <el-form-item> -->
                    <el-button type="primary" style="width:100%" @click="handleLogin">登录</el-button>
                <!-- </el-form-item> -->
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
        }
      };
    },
    methods:{
        handleLogin(){
            console.log(this.formData.username,this.formData.password,typeof this.formData.password);
            let postData = {
                username: this.formData.username,
                password: this.formData.password
            };
            this.axios.post('http://10.252.13.38:9033/api/login',
            this.$qs.stringify(postData),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
            .then(function (res) {
                console.log(res);
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
</style>