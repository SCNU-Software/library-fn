<!-- 单项导入组件 -->
<template>
    <div class="flex-box">
        <h1>单项导入</h1>
        <el-divider></el-divider>
        <el-form label-position="left" ref="form" :model="form" :rules="rules" label-width="80px" style="margin-left:20px; width:50%;">
            <el-form-item label="书名"  prop="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="作者" prop="author">
                <el-input v-model="form.author"></el-input>
            </el-form-item>
            <el-form-item label="价格" prop="price">
                <el-input v-model.number="form.price"></el-input>
            </el-form-item>
            <el-form-item label="出版社" prop="press">
                <el-input v-model="form.press"></el-input>
            </el-form-item>
            <el-form-item label="出版时间" prop="pubTime">
                <el-date-picker type="date" style="width: 100%;" placeholder="选择日期" v-model="form.pubTime"></el-date-picker>
            </el-form-item>
            <el-form-item label="内容简介">
                <el-input type="textarea" v-model="form.brief"></el-input>
            </el-form-item>
            <!-- <el-form-item> -->
                <!-- <el-button>重置</el-button> -->
                <el-button type="primary" @click="onAddOne" style="width: 100%;">立即导入</el-button>
            <!-- </el-form-item> -->
        </el-form>
    </div>
</template>

<script>

export default {
    data() {
      return {
        // 表单内容
        form: {
            title: '',
            author: '',
            price: '',
            press: '',
            pubTime: '',
            brief: '',
        },
        // 表单验证规则
        rules: {
          title: [
            { required: true, message: '请输入书名', trigger: 'blur' },
          ],
          author: [
            { required: true, message: '请输入作者', trigger: 'blur' },
          ],
          price: [
            { required: true, message: '请输入价格', trigger: 'blur' },
          ],
          press: [
            { required: true, message: '请输入出版社', trigger: 'blur' },
          ],
          pubTime: [
            { required: true, message: '请选择出版时间', trigger: 'blur' },
          ],
        }
      }
    },
    methods:{
        onAddOne(){
            console.log(this.form);
            if (!this.form.title || !this.form.author || !this.form.price || !this.form.press || !this.form.pubTime) {
                this.$message({
                    type: 'warning',
                    showClose: true,
                    message: '请填写必填信息.'
                });
                return;
            }
            this.axios.post('http://fisher.lazybone.xyz/library/api/bookdes/addbookdes',
            // this.axios.post('http://10.252.14.147:9033/api/bookdes/addbookdes',
            this.$qs.stringify({
                title: this.form.title,
                author: this.form.author,
                price: this.form.price,
                press: this.form.press,
                // pubTime: this.form.pubTime,
                pubTime: new Date(),
                brief: this.form.brief,
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
            ).then((res) => {
                console.log(res);
                // 如果添加成功，则提示成功消息
                if (res.data.code == 200) {
                    this.$message({
                        type: 'success',
                        showClose: true,
                        message: '成功添加单项书籍信息.',
                        offset: 100
                    });
                // 否则提示添加失败
                }else{
                    this.$message({
                        type: 'error',
                        showClose: true,
                        message: '添加信息失败.',
                        offset: 100
                    });
                }
            }).catch((err) => {
                console.log(err);
            })
            
        }
    }
}
</script>

<style scoped>
.flex-box{
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    /* align-items: flex-start; */
}
</style>