
const state = {
  main: 0,
  apiUrl: 'http://47.103.78.230:8082', //axios api
  imUrl: 'ws://47.103.78.230:6300/Quotation.ashx', //webScoket api
  imUrlSignalr: 'http://47.103.78.230:8081', //webSocket signalr地址
  version:'1.2.7', //app版本号
  appName:'', //app名字
  callPhone:'400-900-1466',//客服电话
  path:null ,//储存页面当前地址
  requestSate:false ,//接口请求状态
  NetworkSignal:null ,//当前网络状态
  connect:null, //行情链接
  connectSetTime:null,//重连定时器
  heartBeatTime:null, //检测心跳定时器
  heartBeatSendTime:null, //发送心跳包定时器
  connectTime:0 ,//重连次数
  heartBeatTimeNow:0,
  orderId:null ,//订单号
  connSignalr:null
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
