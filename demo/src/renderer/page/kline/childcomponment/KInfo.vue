<template>
  <div id="klineInfo" class="klineInfo">
    <div class="top">
      <div class="infoname">
        <h2>{{proInfo.name}}</h2>
      </div>
      <p class="flex1">
        <span class="spanL">卖出</span>
        <span class="spanM">{{proInfo.sole}}</span>
        <span class="spanR">{{proInfo.soleF}}</span>
      </p>
      <p class="flex1">
        <span class="spanL">买入</span>
        <span class="spanM">{{proInfo.buy}}</span>
        <span class="spanR">{{proInfo.buyF}}</span>
      </p>
      <p class="jiaoyi">
        <span>交易中</span>
        <span>{{proInfo.time}}</span>
      </p>
    </div>
    <div class="center flex">
      <div class="left">
        <ul>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>最新</span>
            <span style="color: #00BD00;">{{proInfo.print}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>现手</span>
            <span style="color: #DCDC0A;">{{proInfo.nowNum}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>总手</span>
            <span style="color: #DCDC0A;">{{proInfo.allNum}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>持仓</span>
            <span style="color: #3071E8;">{{proInfo.chicang}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>涨停</span>
            <span style="color: #00BD00;">{{proInfo.upClose}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>跌停</span>
            <span style="color: #00BD00;">{{proInfo.downClose}}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ul>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>涨跌</span>
            <span style="color: #FF3322;">{{proInfo.upDown}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>涨幅</span>
            <span style="color: #00BD00;">{{proInfo.upF}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>开盘</span>
            <span style="color: #FF3322;">{{proInfo.open}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>最高</span>
            <span style="color: #FF3322;">{{proInfo.high}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>最低</span>
            <span style="color: #00BD00;">{{proInfo.slow}}</span>
          </li>
          <li class="flex flex-align-items-center flex-justify-content-sb">
            <span>昨结</span>
            <span style="color: #00BD00;">{{proInfo.old}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="bottom">
      <table>
        <thead>
          <th>时间</th>
          <th>价位</th>
          <th>现手</th>
          <th>开平</th>
        </thead>
        <tbody>
          <tr v-for="(item, index) in list" :key="index">
            <td>{{item.time}}</td>
            <td :style="item.type == '多平' ? 'color:#00BD00;' : 'color:#FF3322;'">{{item.price}}</td>
            <td>{{item.nowNum}}</td>
            <td :style="item.type == '多平' ? 'color:#00BD00;' : 'color:#FF3322;'">{{item.type}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      proInfo: {
        name: "恒生1905 HSI1905",
        sole: 123.8,
        soleF: 20,
        buy: 1236.9,
        buyF: 19,
        time: "05-08 14:45",
        print: 2874.9,
        nowNum: 1,
        allNum: 1334,
        chicang: 673333,
        upClose: "-0.34",
        downClose: "-0.34",
        upDown: 0.9,
        upF: "-0.3",
        open: 23334,
        high: 1236.4,
        slow: 123.5,
        old: 1333.4
      },
      list: [
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 25,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 1,
          type: "空换"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 12,
          type: "多平"
        },
        {
          time: "13:13:45",
          price: 13334,
          nowNum: 1,
          type: "空换"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.klineInfo {
  color: #e6e6e6;
  .top {
    border-bottom: 1px solid black;
    h2 {
      margin: 0px;
      font-size: 20px;
      padding: 5% 10%;
      border: 1px solid red;
      border-bottom: none;
    }
    p {
      margin: 0px;
      font-size: 18px;
      padding: 5% 10%;
      border: 1px solid red;
      span {
        padding-right: 30px;
      }
    }
    p.flex1 {
      display: flex;
      border-bottom: none;
      .spanL {
        flex: 3;
      }
      .spanM {
        flex: 4;
        color: #00bd00;
      }
      .spanR {
        flex: 3;
        color: #3071e8;
      }
    }
    .jiaoyi {
      border-bottom: 1px solid red;
      font-size: 14px;
      display: flex;
      span:first-child {
        color: #cccccc;
        flex: 3;
      }
      span:last-child {
        color: #808080;
        flex: 7;
      }
    }
  }
  .center {
    margin: 0px;
    display: flex;
    font-size: 14px;
    padding: 0 10%;
    color: #e6e6e6;
    border: 1px solid red;
    .left,
    .right {
      
      flex: 1;
      ul {
        list-style: none;
        padding: 0px;
      }
      ul li {
        padding: 5px 0;
      }
    }
    .left {
      border-right: 1px dashed red;
      ul li {
        padding-right: 20px;
      }
    }
    .right {
      ul li {
        padding-left: 20px;
      }
    }
  }
  .bottom {
    table {
      width: 100%;
      border: 1px solid red;
      max-height: 463px;
      thead {
        background-color: #22304c;
        font-size: 15px;
        color: #808080;
        th {
          padding: 5px 0;
          margin: 0px;
          border: 1px solid red;
        }
        th:first-child {
          text-align: left;
          text-indent: 10%;
          width: 100px;
        }
      }
      tbody {
        tr {
          height: 20px !important;
          td {
            text-align: center;
            color: #808080;
            font-size: 14px;
            padding: 2px 0;
            height: 20px !important;
          }
          td:first-child {
            text-align: left;
            text-indent: 10%;
          }
          td:nth-child(3) {
            color: #dcdc0a;
          }
        }
      }
    }
  }
}
</style>
