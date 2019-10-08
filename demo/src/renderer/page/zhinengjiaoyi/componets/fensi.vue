<template>
    <div class="code">
      <!-- <ul>
        <li name="listnavs" v-for="(item,index) in list" :key="index">{{item.title}}</li>
      </ul>
      <div class="show" name='content'>首页</div>
      <div name='content'>女装</div>
      <div name='content'>男装</div>
      <div name='content'>童装</div> -->
      <div class="banner" style="opacity:1">
        banner<a id="close">X</a>
      </div>
      <div class="navs">
        导航
      </div>
    </div>
</template>

<script>

export default {
  name: "guanzhu",
  data() {
    return {
      list:[
        {
          title:'首页',
        },
        {
          title:'女装',
        },
        {
          title:'男装',
        },
        {
          title:'童装',
        }
      ]
    };
  },
  methods:{
      // change(){
      //     var navs =document.getElementsByName('listnavs')
      //     var cts = document.getElementsByName('content')
      //     for(var i=0;i<navs.length;i++){
      //       navs[i].index=i
      //       navs[i].onclick =function(){

      //         for(var j =0;j<navs.length;j++){
      //           navs[j].className=""
      //           cts[j].className=''
      //         }
      //         this.className="current"
      //         cts[this.index].className='show'
      //       }
      //     }
      // }
      close(){
          var guanbi = document.getElementById('close')
          var banner = document.getElementsByClassName('banner')[0]
          var timer =null
          guanbi.onclick = function(){

              timer =setInterval(function(){
                banner.style.opacity -=0.1
                if(banner.style.opacity<0){
                  banner.style.display = 'none'
                  clearInterval(timer)
                }
              },100)
            }
      }
  },
  mounted(){
    this.close()
    
  }
};
</script>
<style lang="scss" scoped>
.banner{
  width: 100%;
  height: 50px;
}
.navs{
  width: 100%;
    height: 50px;
    background: blue;
}
#close{
  background: red;
}
// .current{
//   background: red !important;
// }
// .show{
//    display: block !important;
//  }
//  ul{
//    width: 100%;
//    display: flex;
//    list-style: none;
  
//  }
//  ul li{
//    width: 20%;
//    cursor: pointer;
//  }
//  .code div{
//    display: none;
//  }
 

</style>