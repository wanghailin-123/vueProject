<template>
  <div class="Chengjiao">
    <el-table
      :data="delData"
      tooltip-effect="light"
      style="width: 100%;"
      max-height="250"
      highlight-current-row
    >
      <el-table-column prop="name" label="合约" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="position" label="手数" show-overflow-tooltip ></el-table-column>
      <el-table-column label="买卖" show-overflow-tooltip >
        <template slot-scope="scope">
          <span
            :style="scope.row.business == '买' ? 'color:#FF3322;' : 'color:#00BD00;'"
          >{{scope.row.business}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="openPrice" label="开仓价格" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="opentime" label="开仓时间" width="150" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="openType" label="开仓方式" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="closePrice" label="平仓价格" show-overflow-tooltip ></el-table-column>
      <el-table-column label="本币盈亏" show-overflow-tooltip >
        <template slot-scope="scope">
          <span
            :style="scope.row.this_pro_loss > 0 ? 'color:#FF3322;' : 'color:#00BD00;'"
          >{{scope.row.this_pro_loss}}</span>
        </template>
      </el-table-column>
      <el-table-column label="盈亏" show-overflow-tooltip >
        <template slot-scope="scope">
          <span
            :style="scope.row.pro_loss > 0 ? 'color:#FF3322;' : 'color:#00BD00;'"
          >{{scope.row.pro_loss}}</span>
        </template>
      </el-table-column>
      <el-table-column label="成交订单" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="color: #DCDC0A;">{{scope.row.delOrder}}</span>
        </template>
      </el-table-column>
      <el-table-column label="止盈止损" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="cursor: pointer;" @click="setPrLoss()">{{scope.row.stop_pro_loss}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Chengjiao",
  data() {
    return {
      delData: [
        {
          name: "小恒生1905",
          position: 1,
          business: "买",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: -1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        },
        {
          name: "小恒生1905",
          position: 1,
          business: "买",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: 1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        },
        {
          name: "小恒生1905",
          position: 1,
          business: "卖",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: -1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        },
        {
          name: "小恒生1905",
          position: 1,
          business: "卖",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: 1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        },
        {
          name: "小恒生1905",
          position: 1,
          business: "卖",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: -1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        },
        {
          name: "小恒生1905",
          position: 1,
          business: "卖",
          openPrice: 79586,
          opentime: "05-07 13:15:00",
          openType: "市价成交",
          closePrice: 75698,
          this_pro_loss: 733,
          pro_loss: 1524,
          delOrder: "MHI1905",
          stop_pro_loss: "0/4"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.chengjiao {
  width: 100%;
  height: 100%;
  background: rgba(34, 48, 76, 1);
  .dialog-footer {
    text-align: right;
  }
}
</style>