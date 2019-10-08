<template>
  <!-- K线主题展示页面 -->
  <div class="kline">
    <!-- 第一条横向菜单栏 -->
    <div class="top01 flex">
      <ul class="flex">
        <li
          v-for="(item, index) in kTab"
          :key="index"
          :class="isactive === index ? 'changestyle' : '' "
          @click="dianji(index)"
        >{{item.title}}</li>
      </ul>

      <!-- <el-dropdown @command="">
        <span class="el-dropdown-link">
          Dropdown List
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">Action 1</el-dropdown-item>
          <el-dropdown-item command="b">Action 2</el-dropdown-item>
          <el-dropdown-item command="c">Action 3</el-dropdown-item>
          <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
          <el-dropdown-item command="e" divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>-->
      <el-dropdown class="dropdown" trigger="click" style="height: 100%;">
        <span class="el-dropdown-link">更多</span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="(item, index) in MoreList" :key="index" style="display:flex">
            <span class="spanL" style="flex:2;text-align:center">{{item.key}}</span>
            <span class="spanR" style="flex:8;text-align:left;margin-left:25px">{{item.title}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 第二条横向菜单栏 -->
    <div class="top02 flex">
      <ul>
        <li>
          <span>开 :</span>
          <span style="color: #DCDC0A;">Data.open</span>
        </li>
        <li>
          <span>高 :</span>
          <span style="color: #FF3322;">Data.high</span>
        </li>
        <li>
          <span>低 :</span>
          <span style="color: #00BD00;">Data.low</span>
        </li>
        <li>
          <span>收 :</span>
          <span style="color: #D5D5D5;">Data.close</span>
        </li>
      </ul>
    </div>
    <!-- K线、买卖、相关详情展示区域，该区域主题分为左右两个板块 -->
    <div class="center flex">
      <!-- 主体区域左边部分，此区域有分为上、中、下三大板块，
      上方为K线展示，下方为买卖及合约清单-->
      <div class="centerL">
        <!-- K线展示区域 -->
        <div class="centerLT"></div>
        <!-- 简易信息展示 -->
        <div class="centerLM">
          <div class="data flex">
            <p>易得模拟_2847447</p>
            <p class="flex">
              <span>权益:</span>
              <span>900.00</span>
            </p>
            <p class="flex" @click="click01()">
              <span>可用资金:</span>
              <span>1933.00</span>
            </p>
            <p class="flex">
              <span>资金使用率:</span>
              <span>2.7%</span>
            </p>
            <div class="flex" v-show="showorhide1">
              <p>成交查询：</p>
              <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
            </div>
            <div class="flex" v-show="showorhide2">
              <p>起止日期：</p>
              <el-date-picker
                v-model="value9"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                default-value="2019-09-01"
              ></el-date-picker>
            </div>
          </div>
          <div class="action flex">
            <div class="new flex" @click="showBox()">
              <i class="el-icon-sort"></i>
            </div>
            <div class="ping flex">
              <i class="el-icon-bottom-left"></i>
              <span>全部平仓</span>
            </div>
          </div>
        </div>
        <!-- 此区域为买卖及合约清单展示，主要分为左右两部分，
        左边为买卖操作窗口，右边为合约清单-->
        <div class="centerLB">
          <!-- 合约买卖操作窗口 -->
          <div class="centerLBL">
            <BuyAndSell></BuyAndSell>
          </div>
          <!-- 合约清单展示区域 -->
          <div class="centerLBR">
            <List @listenTabindex="showBoxindex()"></List>
            <div class="listbottom">
              <span>上证指数：</span>
              <span class="spanszzs">2909.46</span>
              <span class="spanszzs">2909.46</span>
              <span class="spanszzs">2909.46</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 主体区域的右边部分，此部分主要展示合约详情 -->
      <div class="centerR">
        <KInfo></KInfo>
      </div>
    </div>
  </div>
</template>

<script>
import BuyAndSell from "../kline/childcomponment/BuyAndSell.vue";
import List from "../kline/childcomponment/List.vue";
import KInfo from "../kline/childcomponment/KInfo.vue";
import Win from "electron-vue-windows";
export default {
  name: "kline",
  data() {
    // const tabindex = localStorage.getItem("tabindex") == "2";
    return {
      showorhide1: false,
      showorhide2: false,
      tabindex: 0,
      isactive: -1,
      value1: "",
      value9: "",
      klineFlag: 2,
      kTab: [
        {
          title: "分时",
          key: ""
        },
        {
          title: "1分",
          key: "1"
        },
        {
          title: "5分",
          key: "5"
        },
        {
          title: "10分",
          key: "10"
        },
        {
          title: "30分",
          key: "30"
        },
        {
          title: "MA"
        },
        {
          title: "BOLL"
        },
        {
          title: "增加附图"
        }
      ],
      MoreList: [
        {
          title: "分时",
          key: ""
        },
        {
          title: "一分钟",
          key: "1"
        },
        {
          title: "三分钟",
          key: "3"
        },
        {
          title: "五分钟",
          key: "5"
        },
        {
          title: "十分钟",
          key: "10"
        },
        {
          title: "十五分钟",
          key: "15"
        },
        {
          title: "三十分钟",
          key: "30"
        },
        {
          title: "小时周数",
          key: "时"
        },
        {
          title: "日线",
          key: "日"
        },
        {
          title: "周线",
          key: "周"
        },
        {
          title: "月线",
          key: "月"
        },
        {
          title: "季线",
          key: "季"
        },
        {
          title: "年线",
          key: "年"
        },
        {
          title: "秒周线",
          key: "秒"
        }
      ]
    };
  },

  methods: {
    showBoxindex(data) {
      if (localStorage.getItem("tabindex") == 2) {
        this.showorhide2 = false;
        this.showorhide1 = true;
      } else if (
        localStorage.getItem("tabindex") == 3 ||
        localStorage.getItem("tabindex") == 4
      ) {
        this.showorhide2 = true;
        this.showorhide1 = false;
      } else {
        this.showorhide2 = false;
        this.showorhide1 = false;
      }
      console.log(data);
    },
    // 点击选中时背景发生改变
    dianji(index) {
      this.isactive = index;
    },
    showDatePicker() {
      return false;
    },
    async showBox() {
      let data = await this.$Win.openWin({
        // browserwindow原生属性
        width: 1400, // 窗口宽
        height: 516, // 窗口高

        // electron-vue-windows自定义的属性
        windowConfig: {
          router: "/moni", // 路由 *必填
          data: {
            id: 1
          }, // 传送数据
          name: "yidemoni", // 窗口名称
          animation: "fromLeft"
        }
      });
    }
  },
  components: {
    BuyAndSell,
    List,
    KInfo
  }
};
</script>

<style lang="scss" scoped>
.kline {
  width: 100%;
  height: 100%;
  background: rgba(30, 35, 41, 1);

  .flex {
    display: flex;
  }
  .top01 {
    width: 100%;
    height: auto;
    background: rgba(30, 35, 41, 1);
    ul {
      list-style: none;
      padding-left: 0px;
      display: inline;
      margin: 0px;
      li {
        font-size: 14px;
        float: left;
        padding: 4px 20px;
        background: rgba(42, 45, 50, 1);
        border-right: black 1px solid;
        color: #a7a7a7;
        line-height: 20px;
        height: 20px;
      }
      .changestyle {
        background: rgba(82, 90, 101, 1);
      }
    }
    .dropdown {
      cursor: pointer;
      background: rgba(42, 45, 50, 1);
      padding: 0 20px;
      border-right: 1px solid #2a2d32;
      height: 100%;
      display: block;
      line-height: 28px;
      color: #a7a7a7;
      span:first-child {
        text-align: right;
        flex: 3;
      }
      span:last-child {
        text-align: left;
        flex: 7;
      }
    }
  }
  .top02 {
    width: 100%;
    height: auto;
    background: rgba(34, 39, 46, 1);
    ul {
      list-style: none;
      margin: 0px;
      li {
        float: left;
        margin: 0px;
        padding: 5px 25px;
        font-size: 14px;
        span:first-child {
          color: #d6d6d6;
        }
      }
    }
  }
  .center {
    width: 100%;
    height: auto;
    background: rgba(25, 27, 31, 1);
    .centerL {
      flex: 8;
      .centerLT {
        width: 100%;
        height: 451px;
        background-color: #2a2d32;
      }
      .centerLM {
        width: 100%;
        height: 40px;
        color: #d4d3d3;
        background: rgba(34, 39, 46, 1);
        .data {
          width: auto;
          float: left;
          p {
            display: inline;
            margin: 5px 5px 5px 20px;
            line-height: 28px;
            font-size: 14px;
          }
          div {
            float: right;
            span:first-child {
              display: flex;
            }
          }
        }
        .action {
          width: auto;
          float: right;
          height: 40px;
          div {
            display: inline;
            margin: 5px 30px;
          }
          div:first-child {
            :first-child {
              border: #a7a7a7 solid 1px;
              border-radius: 50%;
            }
          }
        }
      }
      .centerLB {
        width: 100%;
        height: 390px;
        // background-color: gold;

        display: flex;
        .centerLBL {
          width: 23%;
          border-right: #2a2d32 1px solid;
          border-bottom: #2a2d32 1px solid;
          // background-color: aquamarine;
        }
        .centerLBR {
          width: 77%;
          .listbottom {
            font-size: 14px;
            height: 16px;
            background: rgba(34, 39, 46, 1);
            color: #a7a7a7;
            .spanszzs {
              color: green;
              margin: 10px;
            }
          }
        }
      }
    }
    .centerR {
      flex: 2;
      height: 866px;
      border-bottom: rgba(34, 39, 46, 1) 16px solid;
      padding-right: 5px;
    }
  }
}
</style>

