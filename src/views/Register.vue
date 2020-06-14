<!-- 注册界面组件 -->
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
                <el-form-item label="确认密码">
                    <el-input type="password" v-model="formData.confirmPassword" @keyup.enter.native="handleRegister" ></el-input>
                </el-form-item>
                <el-button type="primary" style="width:100%" @click="handleRegister">注册</el-button>
            </el-form>
        </div>
    </el-container>
</template>

<script>
import api from '@/api/user.js';

export default {
    name: 'Register',
    data(){
        return {
        formData: {
          username: '',
          password: '',
          confirmPassword: ''
        },
      };
    },
    methods:{
        async handleRegister(){
            const { username, password, confirmPassword } = this.formData;
            // 有空选项
            if(username === '' || password === '' || confirmPassword === ''){
                this.$message.error('请输入用户名和密码');
                return;
            }
            // 两次密码不一致
            if(password !== confirmPassword){
                this.$message.error('两次输入的密码不一致');
                return;
            }
            const res = await api.register(username, password);
            if(res.code === '200'){
                this.$message.success('注册成功');
                this.$router.push('login');
            }else{
                this.$message.error(res.msg);
            }
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
    margin-top: -10%;
    transform: scale(1.1);
}
.alert{
    margin-bottom: 15px;
}
.hidden{
    display: none;
}
</style>