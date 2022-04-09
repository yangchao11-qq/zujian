<template>
  <div>
    <el-input :value="value"  @input="onInput"  v-bind="$attrs" @blur="blurty"></el-input> 
  </div>
</template>
<script>
                           
  // todo 支持更多input的属性
  export default {
    name: "tableg",
   
    mounted(){
      
    },
    props:{
      value:String
    },
    data () {
      return {
      
      }
    },
    methods: {
      onInput(e){
          console.log(e) 
          //这里是利用这个事件，把数据返回给父组件dd   
          this.$emit("input", e) 
     },
      blurty(){
        console.log("===================================+++++++++++++") 
         console.log("===================================")   
         console.log("===================================")   
         this.$emit('blur')
      }
    }
  }
</script>

<style scoped >

</style>
