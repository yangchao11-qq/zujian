<template>
  <div id="app">
      <router-view ></router-view>
      <div v-if="mkl">
      <div class="op">
         <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <inputy v-model="fop" type ='textarea'></inputy>
            </el-form-item>
          </el-form>

                                        
      </div>
    
     <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
               <iuy v-model="fop" @input="nhjl"></iuy>
            </el-form-item>
          </el-form>
     
   <ispInputcopycopy></ispInputcopycopy>
   <tablef></tablef>
   </div>


     <div v-if="lop">
       <weiixn></weiixn>
     </div>


  </div>
</template>

<script>
import "./assets/css/denglu.css"
import inputy from '../src/ispInput.vue'
import iuy from '../src/ispInputcopy.vue'
import ispInputcopycopy from '../src/ispInputcopycopy.vue'
import tablef from './tableg.vue'
import weiixn from '../src/weixinjiekouduijie/weiixn.vue'
export default {
  name: 'App',
  components: {
    inputy,
    iuy,
    ispInputcopycopy,
    tablef,
    weiixn
  },
  data(){
    return{
       lop:false,
       fop:'fgdgfdgdf',
       dddp:'jhhghj',
       mkl:false
    }
  },
  methods:{
    nhjl(value){
      console.log(this.dddp)
      console.log("====================================================================")
          console.log(value)
    }
  }
}
</script>

<style>
body,html{
  height: 100%;
  /*控制ul的内容偏移的距离和点 */
  margin: 0;
  padding: 0;
  list-style: none;
  
  max-width: 100%;
  min-width: 700px;
}
.el-popup-parent--hidden{
  overflow: auto !important;
  padding-right: 0px;
}
.op{
  display: flex;
  justify-content: center;
  
}

</style>
