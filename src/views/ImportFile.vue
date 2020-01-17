<!-- 检索书籍的页面 -->
<template>
    <div>
        <h1>导入文件</h1>
        <el-divider></el-divider>
        <el-row>
            <el-col :span="20" :push="2">
                <el-upload
                class="upload-box"
                name="excelFile"
                drag
                action="http://fisher.lazybone.xyz/library/api/excel/bookinfo"
                :limit="1"
                multiple
                :with-credentials="true">
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传Excel文件，一次只能上传一个文件</div>
                </el-upload>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    h1{
        text-align: left;
        font-size: 20px;
        font-weight: bold;
    }
    .upload-box{
        display: block;
    }
</style>