<template>
  <div class="hellob">
     <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单管理</el-breadcrumb-item>
      <el-breadcrumb-item>订单列表</el-breadcrumb-item>
    </el-breadcrumb>
      <el-card class="box-card">
        <div class="hellp">
          <el-input v-model="parmes.query" placeholder="请输入内容"></el-input>

          <el-button @click="sousuoko23()">
            <i class="el-icon-search"></i>
          </el-button>

       
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
import {dingdan} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return{ 
        parmes:{
          //输入的数据
          query:"",
          //页码
          pagenum:1,
          //每页显示
          pagesize:10
        }

    }
  },
  created(){
    this.dingdan()
  },
  methods:{
    sousuoko23(){

    },
    dingdan(){
       
       dingdan(this.parmes).then((res)=>{
          console.log(res.data)
           if(res.data.meta.status!=200){
                        this.$Message.error("查询失败")
                      
                    }else{ 
                        this.$Message.success("查询成功")
                       console.log(res.data.data)
                    }
       })
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
