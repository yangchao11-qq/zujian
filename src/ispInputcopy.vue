<template>
  <div>
    <el-col >
      <!-- <el-input  :value="value" v-bind="$attrs"  @input="onInput"></el-input> -->
      <el-input
        :value="value"
        @input="onInput"
        type="textarea"
        ref="textarea"
        
      ></el-input>
    </el-col>
  </div>
</template>

<script>
  // todo 支持更多input的属性
  export default {
    name: "ispInputcopy",
    props: {
      value: String,
    },
    mounted(){
       console.log("============================================")
       console.log(this.value)
    },
    data () {
      return {
         
      }
    },
    computed: {
      
    },
    methods: {
      onInput(val){
        console.log(val)
        this.$emit("input", val)
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
