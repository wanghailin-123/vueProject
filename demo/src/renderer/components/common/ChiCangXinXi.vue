<template>
  <div class="chicang">
    <el-table
      :data="tableData"
      class="table01"
      tooltip-effect="light"
       style="width: 100%;"
      height="285px"
      max-height="285px"
      highlight-current-row
    >
      <el-table-column width="45px">
        <template slot-scope>
          <i class="el-icon-remove" style="font-size: 18px;color: #4176D8;cursor: pointer;"></i>
        </template>
      </el-table-column>
      <el-table-column prop="number" label="编号" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="name" label="合约" show-overflow-tooltip ></el-table-column>
      <el-table-column label="买卖" show-overflow-tooltip >
        <template slot-scope="scope">
          <span
            :style="scope.row.business == '买' ? 'color:#FF3322;' : 'color:#00BD00;'"
          >{{scope.row.business}}</span>
        </template>
      </el-table-column>
      <el-table-column label="总持仓" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="color: #DCDC0A;">{{scope.row.position}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="position_price" label="持仓价格" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="price_untile" label="变动单位"  show-overflow-tooltip ></el-table-column>
      <el-table-column prop="contract_multiplier" label="合约乘数" show-overflow-tooltip ></el-table-column>
      <el-table-column prop="pro_loss" label="盈亏" show-overflow-tooltip ></el-table-column>
       <el-table-column prop="this_pro_loss" label="本币盈亏" show-overflow-tooltip ></el-table-column>
      <el-table-column label="止盈止损" show-overflow-tooltip >
        <template slot-scope="scope">
          <span style="cursor: pointer;" @click="setPrLoss()">{{scope.row.stop_pro_loss}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="类型" show-overflow-tooltip ></el-table-column>
    </el-table>
    <!-- 止盈止损的弹窗 -->
    <el-dialog
      title="客户端止盈止损"
      :visible.sync=dialogVisible
      width="40%"
      top="30vh"
      class="dialogTable"
      :center=true
      highlight-current-row
    >
      <p style="color: #CCCCCC;padding-bottom: 5px;">正在修改（合约:HKEX 方向:卖出）持仓对应的止损止盈单信息</p>
      <div
        class="flex flex-align-items-center flex-justify-content-sb"
        style="padding-bottom: 10px;"
      >
        <p style="color: #CCCCCC;">
          <span style="padding-right: 10px;">有效止损价: 2</span>
          <span>持仓量: 33</span>
          <span style="color: #00BD00;float:right;">{{zuixinjia}}</span>
          <span style="color: #00BD00;float:right;">最新价:</span>
        </p>
      </div>
      <el-table
        :data="stopProLoss"
        border
        tooltip-effect="light"
        style="width: 100%;"
        max-height="500"
        @row-click="c"
      >
        <el-table-column prop="time" label="设置时间" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="num" label="数量" show-overflow-tooltip></el-table-column>
        <el-table-column prop="stopLoss" label="止损价" show-overflow-tooltip></el-table-column>
        <el-table-column prop="stopLossLive" label="活动止损价差" width="150" show-overflow-tooltip></el-table-column>
        <el-table-column prop="stopPro" label="止盈价" show-overflow-tooltip></el-table-column>
        <el-table-column prop="myPrice" label="保本价" show-overflow-tooltip></el-table-column>
      </el-table>
      <p
        style="font-size: 12px;color: #4176D8;padding: 10px 0;"
      >窗口关闭前此合约对应的止损止盈单不会出发（客户端止损止盈，不是交易所指令，只对在本地程序运行时有效）</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">确 定</el-button>
        <el-button @click="dialogVisible = false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- zhe shi chicang.. -->
  </div>
</template>
<script>
export default {
  name: "chicang",
  data() {
    return {
      dialogVisible: false,
      zuixinjia: "暂无数据",
      tableData: [
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "买",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "-700",
          this_pro_loss: "1100",
          stop_pro_loss: "0/1",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "买",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "-700",
          this_pro_loss: "-1100",
          stop_pro_loss: "0/1",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "买",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "700",
          this_pro_loss: "1100",
          stop_pro_loss: "点击设置",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "买",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "700",
          this_pro_loss: "1100",
          stop_pro_loss: "0/1",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "卖",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "700",
          this_pro_loss: "-1100",
          stop_pro_loss: "点击设置",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "卖",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "-700",
          this_pro_loss: "-1100",
          stop_pro_loss: "0/1",
          type: "市价成交"
        },
        {
          number: "MHI1905",
          name: "小恒生1905",
          business: "卖",
          position: 2,
          position_price: 73644,
          price_untile: 1,
          contract_multiplier: 10,
          pro_loss: "-700",
          this_pro_loss: "-1100",
          stop_pro_loss: "点击设置",
          type: "市价成交"
        }
      ],
      stopProLoss: [
        {
          time: "2019-05-10 09:22:55",
          num: 12,
          stopLoss: 5692,
          stopLossLive: 533246,
          stopPro: 12336,
          myPrice: 1601
        },
        {
          time: "2019-05-10 09:22:55",
          num: 12,
          stopLoss: 5692,
          stopLossLive: 533246,
          stopPro: 12336,
          myPrice: 1236
        },
        {
          time: "2019-05-10 09:22:55",
          num: 12,
          stopLoss: 5692,
          stopLossLive: 533246,
          stopPro: 12336,
          myPrice: 1740
        },
        {
          time: "2019-05-10 09:22:55",
          num: 12,
          stopLoss: 5692,
          stopLossLive: 533246,
          stopPro: 12336,
          myPrice: 1556
        }
      ]
    };
  },
  methods: {
    setPrLoss() {
      this.dialogVisible = true;
    },
    c(row) {
      this.zuixinjia = row.myPrice;
    }
  }
};
</script>
<style lang="scss" scoped>
// .chicang {
//   // width: 1000px;
//   height: 100%;
// }
</style>