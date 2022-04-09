<template>
  <div>
      <el-card >
          <div :class="followleft ? 'follow-top':'follow-topt'">
            <!-- 这一块可以单独封装一个组件 -->
            <div class="follow-left" v-if="followleft">
              <div class="follow-gree">|</div>
              <div class="follow-upu">{{sertytu}}</div>
            </div> 
            
            <div class="activity">
                 <div class="activityw" :class="{'green':activity==index}" @click="discountcoupon(index)"
                   v-for="(item,index) in serty" :key="index"
                 >{{item}}</div>
            </div>
        </div>
        <div v-if="activity==1">
            <slot name="a"></slot>
        </div>
        <div v-for="(item,index) in serty" :key="index">
          <div v-if="activity==index">
              <slot :name="index"></slot>
          </div>
        </div>
    </el-card>

  </div>
</template>
<script>
 
  // todo 支持更多input的属性
  export default {
    name: "tableg",
   
    mounted(){
     
    },
    props:{
      //数组是来控制tab栏和内容的多少的
       sertyt:{
           type:Array
       },
       //用来控制左边的数据显示的
       sertytu:String,
       //用来控制tab栏是出现在右边还是左边的
       followtopt:Boolean
    },
    data () {
      return {
          activity:0,
          serty:this.sertyt,
          followleft:this.followtopt,
      }
    },
    methods: {
       discountcoupon(e){
           console.log(e)
           this.activity=e
           this.$emit('chang',this.activity)
      },
     
    }
  }
</script>

<style scoped >
.green{
  background: red;
}
.follow-top{
  display: flex;
  justify-content: space-between;
  margin-right: 50px;
  
}
.follow-topt{

}
.activity{
  display: flex;
  padding-left: 10px;
 
}
.activity .activityq{
     width: 100px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     border: 1px solid ;
  } 
 .activity  .activityw{
   width: 100px;
     height: 30px;
     line-height: 30px;
     text-align: center;
     border: 1px solid ;
 }
</style>
