<template>
    <div class="hangqing">
        <div class="left"></div>
        <div class="right">
            <div class="nav">
                
               <router-link to="/hangqing/neipan" name="hangqingbg">内盘</router-link>
                <router-link to="/hangqing/waipan" name="hangqingbg">外盘</router-link>
            </div>
            <div class="zujian">
                <router-view></router-view>
            </div>
            <!-- main结束 footer开始 -->
            <div class="footer">
                <div class="foot1">
                
                    <router-link to="/hangqing" name="hangqingbg">沪深A股</router-link>
                     <router-link to="/hangqing/hushenB" name="hangqingbg">纽约CCMEX</router-link>
                     <router-link to="/hangqing/zhijiage" name="hangqingbg">芝加哥CME</router-link>
                     <router-link to="/hangqing/meiguoice" name="hangqingbg">美国ICE</router-link>
                     <router-link to="/hangqing/meiguoce" name="hangqingbg">美国CE</router-link>
                     <!-- <a>美国CE</a> -->
                     <a  @click="showBox('/niuyueCOMN')">纽约COMN</a>

                </div> 
               
                <div class="foot2">
                    <div class="left">
                        <span style="color:rgba(255,255,255,1);">上证指数：</span><span>2909.46</span><span>-1345.46</span><span>-2.90%</span>
                    </div>
                    <div class="right">
                        <span style="background:rgba(64,70,79,1);border:1px solid rgba(128,128,128,1);">内盘</span>
                        <span style="background:rgba(34,39,46,1);border:1px solid rgba(102,102,102,1);">外盘</span>
                        <span style="padding: 7.4px 0px;">
                        <img src="../../assets/img/hangqing/实时行情拷贝副本.png" >合约代码/名称</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
//import {ipcRenderer} from 'electron'
//const { BrowserWindow } = require('electron').remote
export default {
    
    name:'hangqing',
    data(){
        return{
            
        }
    },
    methods:{
        hangqingbgChange(){
            var navs = document.getElementsByName('hangqingbg')
            for(let i =0;i<navs.length;i++){
                navs[i].addEventListener("click",function(){
                    for(let j =0;j<navs.length;j++){
                        navs[j].className =""
                    }
                    this.className='bgchange'
                    
                })
            }
        },
        async showBox(type){
            //console.log(type)
            let data = await this.$Win.openWin({
                width:1200,
                height:600,
                windowConfig:{
                    router:type,
                    data:{},
                    name:'纽约',
                    animation:'formLeft'
                 }
            })
           
        }


    },
    mounted(){
        this.hangqingbgChange()
    },
    components:{
        
    }
}
</script>

<style lang="scss" scoped>
.hangqing{
    height: 100%;
    display: flex;
    color: #fff;
    
}
.bgchange{
            background:rgba(34,48,76,1) !important;
        }

.left{
    height:100%;
    width: 30px;
    background:rgba(34,39,46,1);
    }
.right{
    flex: 1;
    height: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    position: relative;
    background:#000;
    
   
    .nav{
        position: absolute;
        top:56px;
        left: 0px;
        width: 20px;
        display: flex;
        background: rgb(47, 52, 59);
        flex-direction: column;
        a{
            display: block;
            text-decoration: none;
            color: #A4A4A4;
            height: 40px;
            padding: 40px 2px;
            
        }
        a:first-child{
            border-bottom: 1px solid #000;
        }
        // a:hover{
        //     background:rgba(34,48,76,1);
        // }
    }
    .zujian{
        
        height:calc(100vh - 136px);
        width: 98%;
        padding: 0px;
        margin-left: 2%;
        //background: red;
        
       
        
        
        
    }
}


.footer{
    height: 60px;
    width: 100%;
    
    .foot1{
        height: 30px;
        width: 70%;
        background:rgba(30,33,38,1);
        a{
            text-decoration: none;
            line-height: 30px;
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:300;
            color:rgba(255,255,255,1);
            background:rgba(47,52,59,1);
            margin: 0 -1px;
            padding: 2px 10px;
            
            border-radius: 0 0 8px 8px;
        }
    }
    .foot2{
        width: 100%;
        
        background:rgba(42,47,56,1);
        display: flex;
        .left{
            float: left;
             height: 30px;
             flex: 1;
             position: relative;
             background: none;
             
             span{
                font-size:12px;
                line-height: 30px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(0,189,0,1);
                padding: 0px 20px;
             }
        }
        .right{
            position: absolute;
            right: 100px;
            height: 30px;
            display:inline-block;
            background:rgba(42,47,56,1);
            span{
                line-height: 30px;   
                font-size:12px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(144,147,153,1);
                padding: 5px 10px;
                background:rgba(42,47,56,1);
             
            }

            img{
                // width: 2%;
                display: inline-block;
                vertical-align: middle;
                padding: 6.8px 10px;
                margin-left: 4px;
            }
        }

    }
}
</style>

