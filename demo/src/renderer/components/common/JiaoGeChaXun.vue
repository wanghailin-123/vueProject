<template>
  <div class="churujin">
    <el-table
      :data="JiaoGeData"
      class="table01"
      tooltip-effect="light"
      style="width: 100%;"
      max-height="250"
      highlight-current-row
    >
      <el-table-column prop="userid" label="用户账号" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="startmoney" label="期初金额" show-overflow-tooltip ></el-table-column>
      <el-table-column label="出入金" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="color: #DCDC0A;">{{scope.row.outorin}}</span>
        </template>
      </el-table-column>
       <el-table-column label="平仓盈亏" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="color: red;">{{scope.row.yinkui}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="shouxufei" label="手续费" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="endmoney" label="期末资金" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="jiesuandate" label="结算日期" show-overflow-tooltip ></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "churujin",
  data() {
    return {
      JiaoGeData: [
        {
          userid: "8A89UA89976",
          startmoney: 19055,
          outorin: "出金",
          yinkui: "19055",
          shouxufei: 30,
          endmoney: 19055,
          jiesuandate: "06-03 12:34:13"
        },
        {
          userid: "8A89UA89976",
          startmoney: 19055,
          outorin: "出金",
          yinkui: "19055",
          shouxufei: 30,
          endmoney: 19055,
          jiesuandate: "06-03 12:34:13"
        },
        {
          userid: "8A89UA89976",
          startmoney: 19055,
          outorin: "出金",
          yinkui: "19055",
          shouxufei: 30,
          endmoney: 19055,
          jiesuandate: "06-03 12:34:13"
        },
        {
          userid: "8A89UA89976",
          startmoney: 19055,
          outorin: "出金",
          yinkui: "19055",
          shouxufei: 30,
          endmoney: 19055,
          jiesuandate: "06-03 12:34:13"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
</style>