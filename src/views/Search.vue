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
        prop="bookname"
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
        prop="publisher"
        label="出版社"
        width="180">
      </el-table-column>
      <el-table-column
        prop="publishtime"
        label="出版时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="intro"
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
            {
                bookname: 'Es6 标准入门',
                author: '阮一峰',
                price: '60.00',
                publisher: "电子工业出版社",
                publishtime: '2019',
                intro: "Quis culpa deserunt ex non."
            }, 
            {
                bookname: 'Es6 标准入门',
                author: '阮一峰',
                price: '60.00',
                publisher: "电子工业出版社",
                publishtime: '2019',
                intro: "Quis culpa deserunt ex non."
            }, 
            {
                bookname: 'Es6 标准入门',
                author: '阮一峰',
                price: '60.00',
                publisher: "电子工业出版社",
                publishtime: '2019',
                intro: "Quis culpa deserunt ex non."
            }, 
          ]
      }
    },
    methods: {
      // 查询
      onSubmit() {
        console.log('submit!');
      },
      exportFile(){
          console.log('导出文件');
      }
    }
}
</script>


<style>

</style>