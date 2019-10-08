<template>
  <div id="App">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router text-color="#9fa6b0" active-text-color="#4179d6" style="background:rgba(47,52,59,1);" v-if="$route.meta.show">
        <el-menu-item ><img src="./assets/logo@2x.png"></el-menu-item>
        <el-menu-item class="fr" index="/hangqing">
          <i class="el-icon-s-marketing" ></i>
				  <span>实时行情</span>
        </el-menu-item>
        <el-menu-item class="fr" index="/">
          <i class="el-icon-s-data"></i>
				  <span slot="title">K线</span>
        </el-menu-item>
        <el-menu-item class="fr" index="/xiadan">
          <i class="el-icon-postcard"></i>
				  <span slot="title">下单</span>
        </el-menu-item>
        <el-menu-item class="fr" index="/heyue">
          <i class="el-icon-s-claim"></i>
				  <span slot="title">合约信息</span>
        </el-menu-item>
        <el-menu-item class="fr" index="/zhinengjiaoyi">
          <i class="el-icon-bank-card"></i>
          <span slot="title">智能交易</span>
			  </el-menu-item>
        <el-menu-item class="fr" style="float:right" @click="quit">
          <i class="el-icon-close"></i>
        </el-menu-item>  
        <el-menu-item class="fr" style="float:right" @click="zoom">
          <i class="el-icon-copy-document"></i>
        </el-menu-item>
         <el-menu-item class="fr" style="float:right" @click="minimize">
          <i class="el-icon-minus"></i>
        </el-menu-item>      
        <el-menu-item class="fr" style="float:right">
          <i class="el-icon-refresh"></i>
          <span slot="title">刷新</span>
        </el-menu-item>  
        <el-menu-item class="fr" style="float:right" @click="showBox('/zhuanzhang2')">
          <i class="el-icon-s-finance" ></i>
          <span slot="title" >银期转账</span>
        </el-menu-item>         
        <el-menu-item disabled class="fr" style="float:right"> | </el-menu-item>        
         <el-menu-item class="fr" style="float:right" @click="showBox('/register')">
          <span>注册</span>
        </el-menu-item>         
        <el-menu-item v-if="userInfo == null" class="fr" style="float:right" @click="showBox('/login')" @userlogin="getUser">
          <span>登录</span>
        </el-menu-item>

        <el-menu-item v-if="userInfo != null" class="fr" style="float:right">
          <div class="userInfo">
              <!-- <img>
              <span>我的名字</span> -->
              <el-row class="block-col-2">
                <el-col :span="12">
                  <span class="demonstration"><img src="../renderer/assets/work.png" style="dispaly:block;height:40px;width:40px;margin-right:20px;border-radius:50%;"></span>
                  <el-dropdown trigger="click">
                    <span class="el-dropdown-link" style="color:rgba(252,252,252,1);font-size:20px;color:#999;">
                      用户001<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown" style="background:rgba(30,35,41,1);border-radius:5px;border:none">
                      <span @click="showBox('/mine')"><el-dropdown-item icon="el-icon-plus">我的主页</el-dropdown-item></span>
                      <span @click="showBox('/celue')"><el-dropdown-item icon="el-icon-circle-plus">策略介绍</el-dropdown-item></span>
                      <span @click="showBox('/teacher')"><el-dropdown-item icon="el-icon-circle-plus-outline">申请老师</el-dropdown-item></span>
                      <span @click="showBox('/forgetpwd')"><el-dropdown-item icon="el-icon-check" >修改密码</el-dropdown-item></span>
                      <span @click="tuichu"><el-dropdown-item icon="el-icon-circle-check" >退出账号</el-dropdown-item></span>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
           </el-row>
          </div>
        </el-menu-item>

    </el-menu>
    <!-- <div class="line"></div> -->


      


    
    <router-view></router-view>
  </div>
</template>




<script>

</script>
<script>
import {ipcRenderer} from 'electron'
const {
  dialog,
  BrowserWindow
} = require('electron').remote


export default {
  name: 'App',
  data() {
      return {
        activeIndex: '/kline',
        userInfo:12,
      };
    },
  methods: {
      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
      },
      async showBox(type){
        console.log(type)
        let data = await this.$Win.openWin({
          //browserwindow原生属性
          // if(type =='/login'){
          //     width:484;
          //     height:500
          // }else if(type =='/register'){
          //       width: 484;
          //       height: 653;
          // }else{
          //   width:922;
          //   height:514
          // },
         
          
          width: type == '/login' ? 494 : 550, // 窗口宽
          height: type == '/login' ? 560 : 680, // 窗口高
          //electron-vue-windows 自定义的属性
          windowConfig:{
            router:type, //路由*必填
            data:{
              
            }, //传送数据
            name:'',  //窗口名称
            animation: 'fromLeft' //动画
          }          
        })
        //console.log(data)


      },
      quit(){
				this.$confirm('确认退出?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					ipcRenderer.send('close')
				})
      },
      zoom(){
        ipcRenderer.send('max')
      },
      minimize(){
        ipcRenderer.send('min')
      },
      tuichu(){
          this.userInfo=null
          
      },
      getUser(){
        this.userInfo =null
      }
  },
    
  components:{
      
  },
}

</script>

<style lang="scss" scoped>
#app{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  

  }
.el-menu{
    width: 100%;
    height: 60px;
    margin-bottom: 0px;
    


  .fr{
    height: 60px;
    }
  .fr:hover{
    background:rgba(82,90,101,1) !important;
  }



}
.el-menu-item span{

  font-size: 20px;
}
.el-menu-item.is-active {
      border: none;
      
}
.el-menu.el-menu--horizontal{
  border: none;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
  background: none;
}
 
</style>

