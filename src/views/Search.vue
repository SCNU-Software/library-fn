<!-- 检索书籍的页面 -->
<template>
<div class="flex-box">
    <h1>检索书籍</h1>
    <el-divider></el-divider>
    <el-row type="flex" justify="start">
        <el-col>
          <!-- 关键词输入框 -->
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-form-item label="关键词">
                  <el-input v-model="formInline.title" placeholder="书名" @keyup.enter.native="onSearch"></el-input>
              </el-form-item>
              <el-form-item >
                  <el-input v-model="formInline.author" placeholder="作者" @keyup.enter.native="onSearch"></el-input>
              </el-form-item>
              <el-form-item>
                  <el-button type="primary" icon="el-icon-search" @click="onSearch">查询</el-button>
              </el-form-item>
              <!-- 导出Excel按钮 -->
              <el-button type="success" @click="exportFile" icon="el-icon-document">导出Excel</el-button>
          </el-form>
        </el-col>
    </el-row>
    <!-- 表格 -->
    <el-table
      :data="tableData"
      style="width: 98%;">
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
        prop="pubTimeFormat"
        label="出版时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="brief"
        label="内容简介"
        :show-overflow-tooltip="true"
        filter-placement="bottom">
        <!-- <template slot-scope="scope">
          <span>{{scope.brief | ellipsis}}</span>
        </template> -->
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改信息对话框 -->
    <el-dialog title="修改书本信息" :visible.sync="dialogFormVisible">
      <el-form :model="form" label-position="left" label-width="12%" >
        <el-form-item label="书名" >
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="作者" >
          <el-input v-model="form.author" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="价格" >
          <el-input v-model.number="form.price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="出版社" prop="press">
            <el-input v-model="form.press"></el-input>
        </el-form-item>
        <el-form-item label="出版时间" prop="pubTime">
            <el-date-picker type="date" style="width: 100%;" placeholder="选择日期" v-model="form.pubTime"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容简介">
            <el-input type="textarea" v-model="form.brief" :rows="5"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAlter">确 定</el-button>
      </div>
    </el-dialog>
</div>
</template>

<script>
const moment = require('moment');
export default {
    data() {
      return {
        //  关键词查询书籍
        formInline: {
          title: '',
          author: ''
        },
        // 表格数据
        tableData: [],
        // 是否显示修改信息模态框
        dialogFormVisible: false,
        formLabelWidth: '100px',
        // 修改信息模态框中数据
        form:{}
      }
    },
    methods: {
      // 查询
      onSearch() {
        // 构建请求参数
        // let url = `http://localhost:9033/api/bookdes/getbookdes`;
        let url = `http://fisher.lazybone.xyz/library/api/bookdes/getbookdes`;
        // 发送请求
        this.axios.get(
          url,
          {
            params: {
              title: this.formInline.title,
              author: this.formInline.author
            }
          }
        ).then(res => {
          // console.log(res.data.data);
          // 日期格式化
          res.data.data.forEach((value)=>{  
            value.pubTimeFormat = moment(value.pubTime).format("YYYY-MM-DD");
          })
          // 赋值
          this.tableData = res.data.data;
        }, err => {
          console.log(err);
        })
      },
      // 导出为Excel文件
      exportFile(){
        // 构建请求参数
        // let url = `http://localhost:9033/api/excel/bookinfo`;
        let url = `http://fisher.lazybone.xyz/library/api/excel/bookinfo`;
        // 发送请求
        this.axios.get(
          url,{
            params: {
              title:this.formInline.title,
              author:this.formInline.author
            }
          }
        )
        .then(res => {
          if(res.data.code==200){
            // console.log(res.data.data[0].url);
            window.location.href = res.data.data[0].url;
          }
        }, res => {
          console.log(res);
        })
      },
      // 删除表格中元素
      handleDelete(scope){
        // 书本id 该书在表格中的index
        const bookId = scope.row.id;
        const bookIndex = scope.$index;
        this.$confirm('此操作将永久删除该书本信息, 是否继续?', '提示', {
          confirmButtonText: '确定删除',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 删除逻辑
          return this.axios.post(
            'http://fisher.lazybone.xyz/library/api/bookdes/deletebookdes',
            this.$qs.stringify({
              id: bookId
            }),
            {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
          )
        }).then((res) => {
          if (res.data.code == 200) {
            this.tableData.splice(bookIndex,1);
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
            }
            else{
              this.$message({
                type: 'error',
                message: '删除失败'
              });
            }
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        })
      },
      // 编辑表格中元素信息
      handleEdit(scope){
        // 要修改的row
        const book = scope.row;
        this.dialogFormVisible = true;
        this.form = book;
      },
      // 修改表格中元素信息
      handleAlter(){
        this.axios.post(
          'http://fisher.lazybone.xyz/library/api/bookdes/alterbookdes',
          this.$qs.stringify(this.form),
          {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then((res) => {
            // console.log(res);
            if(res.data.code == 200){
              this.dialogFormVisible = false;
              this.$message({
                type: 'success',
                message: '修改信息成功!'
              });
              this.onSearch();
            }
        })
      }
    }
}
</script>


<style>
  .el-tooltip__popper{
    max-width:40%;
    line-height: 1.5;
  }
  .flex-box{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>