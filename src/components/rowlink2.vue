<template>
  <div class="hello">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
          <el-table
          :data="pio"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="authName"
            label="权限名称"
            width="auto">
          </el-table-column>
          <el-table-column
            prop="path"
            label="路径"
            width="auto">
          </el-table-column>
          <el-table-column
            prop="level"
            label="权限等级"
            width="auto">
            <template slot-scope="scope">
              
              <el-tag  v-if="scope.row.level==='0'" >标签一</el-tag>
              <el-tag type="info" v-else-if="scope.row.level==='1'"> 标签二</el-tag>
              <el-tag type="success" v-else>标签三</el-tag>
              
            </template>
          </el-table-column>
        </el-table>
    </el-card>
  </div>
</template>

<script>
import {suoyouquanxian2} from "../axios/qingqiu"
export default {
  
  name: 'HelloWorld',
  props: {
   
  },
  mounted(){
    this.bianli()
  },
  data(){
    return{
       pio:[]
    }
  },
  methods:{
      bianli(){
         let url="list"
        suoyouquanxian2(url).then((res)=>{
               console.log(res.data.data)
               this.pio=res.data.data
        })
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
