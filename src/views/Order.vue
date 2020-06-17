<template>
  <el-table
    :data="tableData"
    style="width: 95%; margin-top: 20px;">
    <el-table-column
      prop="orderId"
      label="订单号">
    </el-table-column>
    <el-table-column
      prop="bookTitle"
      label="书名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格"
      width="100">
    </el-table-column>
    <el-table-column
      prop="phone"
      label="手机号码">
    </el-table-column>
    <el-table-column
      prop="card"
      label="银行卡号"
      width="220">
    </el-table-column>
    <el-table-column
      prop="address"
      label="收获地址">
    </el-table-column>
    <el-table-column
      prop="price"
      label="价格">
    </el-table-column>
    <el-table-column label="操作" width="230">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleAlterOrder(scope)">
          取消订单
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import api from '@/api/buy.js';

export default {
  data() {
    return {
      tableData: []
    }
  },
  mounted(){
    this.getOrder();
  },
  methods:{
    async getOrder(){
      const userName = this.$store.state.user.userName;
      const res = await api.getOrder(userName);
      if(res.code !== '200'){
        this.$message.error(res.msg);
        return;
      }
      this.tableData = res.data;
    },
    handleAlterOrder(scope){
      this.$confirm('是否确认取消订单?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          const orderId = scope.row.orderId;
          this.alterOrder(orderId);
        }).catch(() => {})
    },
    async alterOrder(orderId){
      const res = await api.alterOrder(orderId);
      if(res.code !== '200'){
        this.$message.error(res.msg);
        return;
      }
      this.$message.success(res.msg);
      this.getOrder();
    }
  }
}
</script>

<style>

</style>