<template>
  <div class="churujin">
    <el-table
      :data="ChuRuJinData"
      class="table01"
      tooltip-effect="light"
      style="width: 100%;"
      max-height="250"
      highlight-current-row
    >
      <el-table-column prop="userid" label="用户账号" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="money" label="金额" show-overflow-tooltip ></el-table-column>
      <el-table-column label="出入" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="color: #DCDC0A;">{{scope.row.outorin}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="申请日期" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="status" label="处理状态" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="chulidate" label="处理日期" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="paymode" label="支付方式" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="serial_number" label="流水号" show-overflow-tooltip ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "churujin",
  data() {
    return {
      ChuRuJinData: [
        {
          userid: "8A89UA89976",
          money: 19055,
          outorin: "出金",
          date: "06-03 12:34:13",
          status: "处理中",
          chulidate: "06-03 12:34:13",
          paymode: "银行卡支付",
          serial_number: "928287721749291"
        },
        {
          userid: "8A89UA89976",
          money: 19055,
          outorin: "出金",
          date: "06-03 12:34:13",
          status: "处理中",
          chulidate: "06-03 12:34:13",
          paymode: "银行卡支付",
          serial_number: "928287721749292"
        },
        {
          userid: "8A89UA89976",
          money: 19055,
          outorin: "出金",
          date: "06-03 12:34:13",
          status: "处理中",
          chulidate: "06-03 12:34:13",
          paymode: "银行卡支付",
          serial_number: "928287721749293"
        },
        {
          userid: "8A89UA89976",
          money: 19055,
          outorin: "出金",
          date: "06-03 12:34:13",
          status: "处理中",
          chulidate: "06-03 12:34:13",
          paymode: "银行卡支付",
          serial_number: "928287721749294"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>