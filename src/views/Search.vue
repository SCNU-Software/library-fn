<!-- 检索书籍的页面 -->
<template>
<div>
    <h1>检索书籍</h1>
    <el-divider></el-divider>
    <el-row type="flex">
        <el-col :span="24" :pull="8">
            <!-- 关键词输入框 -->
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
                <el-form-item label="关键词">
                    <el-input v-model="formInline.word" placeholder="书名/作者/定价/出版社"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="onSubmit">查询</el-button>
                </el-form-item>
                <!-- 导出Excel按钮 -->
                <el-button type="success" @click="exportFile" icon="el-icon-document">导出Excel</el-button>
            </el-form>
        </el-col>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 95%; margin-left:10px;">
      <el-table-column
        prop="title"
        label="书名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格(￥)"
        width="180">
      </el-table-column>
      <el-table-column
        prop="press"
        label="出版社"
        width="180">
      </el-table-column>
      <el-table-column
        prop="pubTime"
        label="出版时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="brief"
        label="内容简介">
      </el-table-column>
    </el-table>

</div>
</template>

<script>
export default {
    data() {
      return {
        //  关键词查询书籍
        formInline: {
          word: ''
        },
        // 表格数据
        tableData: [

        ]
      }
    },
    methods: {
      // 查询
      onSubmit() {
        // 构建请求参数
        let url = `http://localhost:9033/api/bookdes/getbookdes`;
        this.axios.get(url,{params: {title:this.formInline.word}})
        .then(res => {
          // 处理brief避免过长
          res.data.data.forEach((value)=>{  
            value.brief = value.brief.substring(0,100)+"......";
          })
          this.tableData = res.data.data;
        }, res => {
          console.log(res);
        })
      },
      exportFile(){
          console.log('导出文件');
      }
    }
}
</script>


<style>

</style>