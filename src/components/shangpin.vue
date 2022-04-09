<template>
  <div  class="hellob">
     <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
   
    <el-card class="box-card">
        <div class="hellp">
          <el-input v-model="input" placeholder="请输入内容"></el-input>

          <el-button @click="sousuoko23()">
            <i class="el-icon-search"></i>
          </el-button>

        <span class="span">
          <el-button type="primary" @click="dialogVisibles()">添加用户</el-button>
        </span>
    </div>
      <el-table
          :data="pio"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="goods_name"
            label="商品名称"
            width="500px">
          </el-table-column>
          <el-table-column
            prop="goods_price"
            label="商品价格(元)"
            width="auto">
          </el-table-column>
          <el-table-column
            prop="goods_weight"
            label="商品重量"
            width="auto">
           
          </el-table-column>
           <el-table-column
            prop="add_time"
            label="创建时间"
            width="auto">
           
          </el-table-column>
           <el-table-column
            prop="level"
            label="操作"
            width="auto">
           
          </el-table-column>
        </el-table>
         <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[5, 10, 20, 30]"
            :page-size="5"
            layout="total, sizes, prev, pager, next, jumper"
            :total="hui">
          </el-pagination>
        </div>
  <br>
    </el-card>
  </div>
</template>

<script>
import {shangpin,shangpin23} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  created(){
       this.shangpin2()
  },
  data(){
    return{
      input:'760',
      pio:[],
      form:{
         query:"",
         pagenum:1,
        pagesize:5
      },
      //功多少条
      hui:0
    }
  },
  methods:{
      shangpin2(){
        shangpin(this.form).then((res)=>{
            console.log(res.data.data)
            this.hui=res.data.data.total
           this.pio=res.data.data.goods
        })
      },
      sousuoko23(){
        shangpin23(this.input).then((res)=>{
           console.log(res.data)
           this.pio=[]
           this.pio.push(res.data.data)
        })

      },
      dialogVisibles(){
          this.$router.push('/tianjia')
      },
      //多少条一页
      handleSizeChange(e){
         console.log("999")
          console.log(e)
          this.form.pagesize=e
          this.shangpin2()
      },
      //第几页
      handleCurrentChange(e){
        console.log("888")
          console.log(e)
           this.form.pagenum=e
           this.shangpin2()
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
