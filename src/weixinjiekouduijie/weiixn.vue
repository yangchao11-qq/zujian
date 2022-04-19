<template>
  <div class="hello">
    weixinjiekouduijie
  </div>
</template>

<script>
import {dingdany,send} from '../axios/qingqiu'
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return{
     access_token:''
    }
  },
  created(){

  },
  mounted(){
    

     const local = window.location.href;
     window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wwafbcf7496a84e0b2&redirect_uri=${encodeURIComponent(local)}&agentid=1000002&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect`;
  
    // https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=wwafbcf7496a84e0b2&corpsecret=t6f4B8KyQTpFYQI3hnzV4l3nqVdsogIwqs9NLYFUw1g
    
      this.prompt()

  },
  methods:{
  prompt(){
      return new Promise(()=>{
          let data={
              corpid:'wwafbcf7496a84e0b2',
              corpsecret:'t6f4B8KyQTpFYQI3hnzV4l3nqVdsogIwqs9NLYFUw1g'
          }
          dingdany(data).then((res)=>{
              console.log("/////////////////////////")
              console.log(res.data)
              this.access_token=res.data.access_token
              // window.sessionStorage.setItem("totke",res.data.access_token)
                // https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=lDHKLq2ojQsKO6ZgLcjVX6eifjJ7c1epgCHSZhxPN5pncJTqO5y4RIkcYckJkWSpE1T7iQGbQu-ab7DF9RXHO_OVe4im17vIUhftgfaWKKm6hixrDcxW2p_rIU2gdT-oYVm9YuYC2JN0FfVkS_yg3lemCLp0m7tienzJFa79CQT3RVRcErTkZOp6-RRQEzPR0DjI9o8bFMxYrPxSSzNdyg
               console.log(this.access_token)
               this.sendf() 
        })
    
      })
  },
 sendf(){
     send(this.access_token).then((res)=>{
        console.log("[[[[[[[[[[[[[[[[[")
         console.log(res.data)
      })
   },

   getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
