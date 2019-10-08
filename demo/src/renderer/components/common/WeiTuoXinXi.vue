<template>
  <div class="weituo">
    <el-table
      :data="weiData"
      tooltip-effect="light"
      style="width: 100%;"
      max-height="250"
      highlight-current-row
    >
      <el-table-column prop="order" label="订单号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="name" label="合约" show-overflow-tooltip></el-table-column>
      <el-table-column label="买卖" show-overflow-tooltip>
        <template slot-scope="scope">
          <span
            :style="scope.row.business == '买' ? 'color:#FF3322;' : 'color:#00BD00;'"
          >{{scope.row.business}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="开平" show-overflow-tooltip></el-table-column>
      <el-table-column prop="weiPrice" label="委托价格" show-overflow-tooltip></el-table-column>
      <el-table-column prop="num" label="委托手数" show-overflow-tooltip></el-table-column>
      <el-table-column prop="delnum" label="成交手数" show-overflow-tooltip></el-table-column>
      <el-table-column prop="orderType" label="下单类型" show-overflow-tooltip></el-table-column>
      <el-table-column prop="time" label="委托时间" show-overflow-tooltip></el-table-column>
      <el-table-column label="止盈止亏" show-overflow-tooltip>
        <template slot-scope="scope">
          <span style="cursor: pointer;" @click="setPrLoss()">{{scope.row.stop_pro_loss}}</span>
        </template>
      </el-table-column>
      <el-table-column label="撤单" show-overflow-tooltip>
        <template>
          <div class="cedan">撤单</div>
        </template>
      </el-table-column>
    </el-table>
    <!-- 止盈止损的弹窗 -->
    <el-dialog
      title="客户端止盈止损"
      :visible.sync="dialogVisible"
      width="40%"
      top="30vh"
      class="dialogTable"
      :center=true
      highlight-current-row=true
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
  </div>
</template>
<script>
export default {
  name: "weituo",
  data() {
    return {
      dialogVisible: false,
      zuixinjia: "暂无数据",
      weiData: [
        {
          order: "8A89UA",
          name: "小恒生1905",
          business: "卖",
          type: 1,
          weiPrice: 1566,
          num: 5,
          delnum: 10,
          orderType: "指定",
          time: "09-03 12:34:13",
          stop_pro_loss: "0/4"
        },
        {
          order: "8A89UA",
          name: "小恒生1905",
          business: "卖",
          type: 1,
          weiPrice: 1566,
          num: 5,
          delnum: 10,
          orderType: "指定",
          time: "09-03 12:34:13",
          stop_pro_loss: "0/4"
        },
        {
          order: "8A89UA",
          name: "小恒生1905",
          business: "卖",
          type: 1,
          weiPrice: 1566,
          num: 5,
          delnum: 10,
          orderType: "指定",
          time: "09-03 12:34:13",
          stop_pro_loss: "0/4"
        },
        {
          order: "8A89UA",
          name: "小恒生1905",
          business: "买",
          type: 1,
          weiPrice: 1566,
          num: 5,
          delnum: 10,
          orderType: "指定",
          time: "09-03 12:34:13",
          stop_pro_loss: "0/4"
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
      console.log(123123);
      this.dialogVisible = true;
    },
    c(row) {
      this.zuixinjia = row.myPrice;
    }
  }
};
</script>
<style lang="scss" scoped>
.weituo {
  width: 100%;
  height: 100%;
  .cedan {
    color: white;
    line-height: 22px;
    width: 50px;
    height: 22px;
    background: rgba(51, 92, 168, 1);
    border-radius: 3px;
    margin: 0 auto;
  }
  .cedan:hover{
    background: red;
  }
}
</style>