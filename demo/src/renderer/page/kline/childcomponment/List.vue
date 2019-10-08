<template>
  <div class="List">
    <el-tabs
      v-model="activeName"
      value="持仓信息"
      lazy
      type="border-card"
      @tab-click="handleClick"
      tab-position="bottom"
    >
      <!-- 在此区域引入持仓信息的组件 -->
      <el-tab-pane label="持仓信息" name="chicang">
        <Chicang></Chicang>
        <div class="chichangbottom">
          <div class="jincangxinxi">
            <span>进仓时间：</span>
            <span class="spandata">2019-08-12 12:31</span>
            <span>止盈：</span>
            <span class="spandata">0.98</span>
            <span>止损：</span>
            <span class="spandata">4.86</span>
          </div>
          <div class="pingcangcaozuo">
            <div>
              <input
                :class="changecsspingcang=='true'?'change':''"
                type="button"
                value="部分平仓"
                @click="bufenpingcang()"
              />
            </div>
            <div>
              <input
                :class="changecsskuaijie=='true'?'change':''"
                type="button"
                value="快捷平仓"
                @click="kuaijiepingcang()"
              />
            </div>
            <div>
              <input
                :class="changecssfanshou=='true'?'change':''"
                type="button"
                value="部分反手"
                @click="bufenfanshou()"
              />
            </div>
          </div>
        </div>
      </el-tab-pane>
      <!-- 在此区域引入委托信息的组件 -->
      <el-tab-pane label="委托信息" name="weituo" class="pane">
        <Weituo></Weituo>
      </el-tab-pane>
      <!-- 在此区域引入成交查询的组件 -->
      <el-tab-pane label="成交查询" name="chengjiao" class="pane">
        <Chengjiao></Chengjiao>
      </el-tab-pane>
      <el-tab-pane label="出入金查询" name="churujin" class="pane">
        <ChuRuJin></ChuRuJin>
      </el-tab-pane>
      <el-tab-pane label="交割查询" name="jiaoge" class="pane">
        <JiaoGe></JiaoGe>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Chicang from "../../../components/common/ChiCangXinXi.vue";
import Weituo from "../../../components/common/WeiTuoXinXi.vue";
import Chengjiao from "../../../components/common/ChengJiaoChaXun.vue";
import ChuRuJin from "../../../components/common/ChuRuJinChaXun.vue";
import JiaoGe from "../../../components/common/JiaoGeChaXun.vue";

export default {
  name: "List",
  data() {
    return {
      changecssfanshou: 'false',
      changecsspingcang: 'false',
      changecsskuaijie: 'false',
      TabIndex: "",
      activeName: "chicang",
      dialogVisible: false,
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
  },
  methods: {
    setPrLoss() {
      this.dialogVisible = true;
    },
    bufenpingcang() {
      this.changecsspingcang = 'true';
       this.changecsskuaijie = 'false';
       this.changecssfanshou = 'false';
    },
    kuaijiepingcang() {
      this.changecsskuaijie = 'true';
      this.changecsspingcang = 'false';
      this.changecssfanshou = 'false';
    },
    bufenfanshou() {
      this.changecssfanshou = 'true';
      this.changecsspingcang = 'false';
       this.changecsskuaijie = 'false';
    },
    handleClick(tab, event) {
      this.TabIndex = tab.index;
       localStorage.setItem("tabindex",tab.index)
      // 向父元素传值的自定义监听函数
      this.$emit("listenTabindex",1);
    }
  },
  components: {
    Chicang,
    Weituo,
    Chengjiao,
    ChuRuJin,
    JiaoGe
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.List {
  width: 100%;
  .chichangbottom {
    display: flex;
    padding-top: 10px;
    font-size: 14px;
    color: rgba(97, 104, 138, 1);
    height: 20px;
    .jincangxinxi {
      flex: 1;
      .spandata {
        margin-right: 20px;
      }
    }
    .pingcangcaozuo {
      flex: 1;
      div {
        color: rgba(65, 118, 216, 1);
        width: 80px;
        height: 26px;
        float: right;
        margin-right: 10px;
        text-align: center;
        border-radius: 5px;
        input {
          border: none;
          border-radius: 5px;
          width: 80px;
          height: 26px;
          color: rgba(65, 118, 216, 1);
          line-height: 26px;
        }
      }
      :hover {
        background: rgba(65, 118, 216, 1);
        color: white;
      }
      .change {
        border: 1px red solid
      }
    }
  }
}
</style>
