<template>
  <div>
    


      <fengtableg @chang="chang" :sertyt="sertyt" :sertytu="sertytu" :followtopt="followtopt">
           <template slot="0">
                <Activityrecommended></Activityrecommended>5
           </template>
           <template slot="1">
                <Activityrecommended></Activityrecommended>67
           </template>
           <template slot="2">
                <Activityrecommended></Activityrecommended>89
           </template>  
      </fengtableg>

         <!-- 使用v-dind=”$attr“的作用在于属性会付给下一个子组件，而事件却不会，需要我们去传调用才行 -->
       <fenginput v-model="value"  size="medium" placeholder="请输入内容wwwwwwwwwwwwwwwwwwww" ref="lop"></fenginput>

       <fenginput v-model="value"  size="mini" placeholder="请输入内容qqqqqqqqqqqqqqqqq"></fenginput>

        <el-button @click="blurty">dddddd</el-button>

        <!-- 点击复制的需求 -->
        <input ref="plo" value="valuet">
       <textarea cols="20" rows="10" id="biao1">用户定义的代码区域</textarea>
        <el-button @click="btyuuuuiop">复制</el-button>

  </div>
</template>
<script>
 import Activityrecommended from './Activityrecommended.vue'
 import fengtableg  from '../src/ZUJIANKU/fengtableg.vue'
 import fenginput from '../src/ZUJIANKU/fenginput.vue'
  // todo 支持更多input的属性
  export default {
    name: "tableg",
   
    mounted(){
      
    },
    data () {
      return {
        //这个数组是传入几个tab栏的数量还有名字
        sertyt:['活动','优惠','你好'],
        sertytu:'活动推荐',
        followtopt:true,
        //输入框的组件，使用$attr
        value:'',
        valuet:'kjkfldjfklsjklfdjkl'
      }
    },
    methods: {
      //获得tab栏的点击的下标
      chang(e){
        console.log("===================================")   
         console.log(e)   
      },
      blurty(){
         console.log("===================================") 
         console.log("===================================")   
         console.log("===================================")  
            //这里直接可以使用ref调用子组件的数据 
            console.log(this.$refs.lop.blurty())   
      },
      btyuuuuiop(){
            console.log(this.$refs)  
            this.$refs.plo.select()
            document.execCommand("Copy"); // 执行浏览器复制命令
            alert("已复制好，可贴粘。")
      }
    },
    components:{
      Activityrecommended,
      fengtableg,
      fenginput
    }
  }
</script>

<style scoped >

</style>
