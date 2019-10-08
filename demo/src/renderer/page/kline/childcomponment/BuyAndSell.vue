<template>
  <div class="transaction flex">
    <!-- 买入卖出组件的展示区域 -->
    <div class="cont">
      <!-- 买入卖出组件顶部下拉选择框展示区域 -->
      <div class="top flex">
        <!-- 左边下拉选择框 -->
        <el-select
          class="select"
          v-model="heyue.heyueClass"
          placeholder="请选择"
          @change="heyueChange"
        >
          <el-option
            v-for="(item, index) in heyueClassOptions"
            :key="index"
            :label="item.name"
            :value="item.id"
          ></el-option>
        </el-select>
        <!-- 右边下拉选择框 -->
        <el-select class="select" v-model="heyue.heyueName" placeholder="请选择" @change="heyueNameCh">
          <el-option
            v-for="(item, index) in heyueNameOptions"
            :key="index"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </div>
      <!-- 合约名字展示框 -->
      <div class="heyue flex">
        <span>合约:</span>
        <span class="span">{{heyue.heyueName}}</span>
      </div>
      <!-- 相关操作展示区域 -->
      <div class="input flex">
        <div class="cl flex">
          <span>跟盘 :</span>
          <el-input placeholder v-model="gen" clearable></el-input>
        </div>
        <div class="cl flex">
          <span>数量 :</span>
          <el-input placeholder v-model="num" clearable></el-input>
        </div>
        <div class="cl flex">
          <span>止盈 :</span>
          <el-input placeholder v-model="stopPrint" clearable></el-input>
        </div>
        <div class="cl flex">
          <span>止损 :</span>
          <el-input placeholder v-model="stopLoss" clearable></el-input>
        </div>
      </div>
      <!-- 底部买入卖出按键展示区域 -->
      <div class="button flex">
        <div class="buttonChildL">
          <el-button type="danger">买入</el-button>
        </div>
        <div class="buttonChildR">
          <el-button type="primary">卖出</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "transaction",
  data() {
    return {
      gen: 88888,
      num: 666,
      stopPrint: 55555,
      stopLoss: 9999,
      heyue: {
        heyueClass: "",
        heyueName: ""
      },
      heyueClassOptions: [
        {
          id: "交易所一",
          subject: [
            { name: 11 },
            { name: 12 },
            { name: 13 },
            { name: 14 },
            { name: 15 }
          ]
        },
        {
          id: "交易所二",
          subject: [
            { name: 21 },
            { name: 22 },
            { name: 23 },
            { name: 24 },
            { name: 25 }
          ]
        },
        {
          id: "交易所三",
          subject: [
            { name: 31 },
            { name: 32 },
            { name: 33 },
            { name: 34 },
            { name: 35 }
          ]
        },
        {
          id: "交易所四",
          subject: [
            { name: 41 },
            { name: 42 },
            { name: 43 },
            { name: 44 },
            { name: 45 }
          ]
        }
      ],
      heyueNameOptions: []
    };
  },
  methods: {
    heyueChange(value) {
      for (var i = 0; i < this.heyueClassOptions.length; i++) {
        if (value === this.heyueClassOptions[i].id) {
          this.indexNum = i;
          break;
        }
      }
      this.heyueNameOptions = this.heyueClassOptions[this.indexNum].subject;
      this.heyue.heyueClass = value;
      this.heyue.heyueName = this.heyueClassOptions[
        this.indexNum
      ].subject[0].name;
    },
    heyueNameCh(value) {
      this.heyue.heyueName = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.transaction {
  .flex {
    display: flex;
  }
  .cont {
    width: 100%;
    height: 100%;
    color: #FFFFFFFF;
    .top {
      padding: 20px 0;
      .select {
        flex: 1;
        margin-left: 30px;
        margin-right: 10px;
      }
    }
    .heyue {
      color: #FFFFFFFF;
      padding: 15px 0;
      span:first-child {
        color:white;
        flex: 1;
        height: 37px;
        line-height: 37px;
        font-size: 14px;
        margin-left: 30px;
      }
      .span {
        flex: 6;
        line-height: 37px;
        background-color: #22304c;
        color: #b7b7b7;
        font-size: 14px;
        text-indent: 10px;
        margin-right: 10px;
      }
    }
    .input {
      flex-wrap: wrap;
      .cl {
        width: 45%;
        padding: 15px 0;
        span {
          margin-left: 30px;
          font-size: 14px;
          line-height: 40px;
          width: 30%;
          color: #f3f3f3;
          flex-shrink: 0;
        }
        input {
          line-height: 100%;
          margin-right: 50px;
        }
      }
    }
    .button {
      padding-top: 20px;
      .buttonChildL {
        flex: 1;
        text-align: right;
        margin-right: 15px;
      }
      .buttonChildR {
        flex: 1;
        text-align: left;
        margin-left: 15px;
      }
      .el-button {
        width: 100px;
        height: 40px;
      }
      .el-button--danger {
        background-color: #ff3322;
        border-color: #ff3322;
      }
      .el-button--primary {
        background-color: #00bd00;
        border-color: #00bd00;
      }
    }
  }
}
</style>
