<template>
    <div class="zhineng">
        <div class="fanhui">
            <p @click="back"><i class="el-icon-back"></i><span>返回</span></p>
        </div>
        <div class="content">
            <div class="left">
                
                 <router-link to="/zhinengjiaoyi"><li name="changecolor">主页</li></router-link>
                 <router-link to="/zhinengjiaoyi/zhanghu" ><li name="changecolor">账号</li></router-link>
                  <router-link to="/zhinengjiaoyi/gendan"><li name="changecolor">跟单</li></router-link>
                  <router-link to="/zhinengjiaoyi/guanzhu"><li name="changecolor">关注</li></router-link>
                 <router-link to="/zhinengjiaoyi/fensi"> <li name="changecolor">粉丝</li></router-link>
                
            </div>
            <div class="right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           
        }
    },
    methods:{
        back(){
            this.$router.push('/')
        },
        change(){
            //document.getElementsByTagName('li')[0].focus
        },
        changeColor(){
            var navs = document.getElementsByName("changecolor")
            //console.log(navs)
            for(var i =0;i<navs.length;i++){
                navs[i].addEventListener("click",function(){
                    //添加样式
                    for(var j=0;j<navs.length;j++){
                        navs[j].className='changeCl'

                    }
                    this.className="changeColor"
                })
            }
        }
    },
    mounted(){
        this.changeColor()
    },
}
</script>

<style lang="scss" scoped>
.zhineng{
    width:100%;
    margin: 0;
    padding: 0;
}
.fanhui{
    height:20px;
    line-height: 20px;
    background:rgba(34,39,46,1);
    p{
        cursor: pointer;
        margin: 0px;
        i{
            //background: #9FA5AF;
            color:#9FA5AF;
            padding-left: 6px;
        }
        span{
            font-size:12px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:#9FA5AF;
            padding-left: 6px;
        }
    }

}
.content{
    
    width: 100%;
    display: flex;
    .left{
        width: 16%;
        height: 300px;
        background:rgba(30,35,41,10);
        text-align: center;
        a{
            display: block;
            text-decoration: none;
        
            li{
                height: 60px;
                list-style-type: none;
                font-size:14px;
                font-family:Microsoft YaHei;
                font-weight:300;
                color:rgba(153,153,153,1);
                line-height:60px;
            }
            
            
        }
    }
    .right{
        flex: 1;
    }
}
.changeCl{
        background-color:none;
       
}
.changeColor{
        background-color:rgba(34,48,76,1);
       
}
</style>