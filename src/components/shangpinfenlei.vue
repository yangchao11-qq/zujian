<template>
  <div class="hello">
      <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/qq' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品分类</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="box-card">
       <el-button type="primary" @click="dialogVisible = true">添加商品</el-button>
        <el-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          row-key="cat_id"
          border
          :tree-props="{children: 'children'}">
          <el-table-column
            type="index"
            :index="index">
          </el-table-column>
          <el-table-column
            prop="cat_name"
            label="分类名称"
            
            width="auto">
          </el-table-column>
          <el-table-column
            prop="cat_deleted"
            label="是否有效"
            width="auto">
            <template slot-scope="scope">
              <i class="el-icon-circle-check" v-if="scope.row.cat_deleted"></i>
              <i class="el-icon-circle-close" v-else></i>
                
            </template>
          </el-table-column>
          <el-table-column
            prop="cat_level"
            label="排序"
            width="auto">
             <template slot-scope="scope">
                <el-tag v-if="scope.row.cat_level==0">一级</el-tag>
                  <el-tag v-else-if="scope.row.cat_level==1" type="success">二级</el-tag>
                  <el-tag v-else type="info">三级</el-tag>
            </template>
          </el-table-column>
        </el-table>
     </el-card>
            <el-dialog
          title="添加分类"
          :visible.sync="dialogVisible"
          width="30%"
          >
             <el-form :model="form" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                     <el-form-item label="分类名称:" prop="username">
                        <el-input v-model="form.username" > </el-input>
                     </el-form-item>
                     <el-form-item label="父级分类:" prop="password">
                            <el-cascader
                           v-model="value"
                            :props="options2"
                            :options="options"
                            @change="handleChange33"
                          clearable></el-cascader>
                     </el-form-item>     
            </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="huio()">确 定</el-button>
          </span>
        </el-dialog>
  </div>
</template>

<script>
import {shangpinfenlei,tianjiavvv} from "../axios/qingqiu"
export default {
  name: 'HelloWorld',
  props: {
   
  },
  data(){
    return{
      dialogVisible:false,
      form:{
         username:"",
        
      },
      options:[],
      options2:{
           value: 'cat_id',
          label: 'cat_name',
          children:"children",
          checkStrictly: true
      },
      value:"",
       rules:{
          username: [
            { required: true, message: '请输入分类名称', trigger: 'blur' }
          ]},
      tableData: [],
      idc:0,
      lev:0
    }
  },
  created(){
    this.huijo()
  },
  methods:{
    huijo(){
      shangpinfenlei().then((res)=>{
         console.log(res.data.data)
        
         this.tableData=res.data.data
         this.options=res.data.data
      })
    },
    huio(){
      let params={
        cat_pid:this.idc,
        cat_name:this.form.username,
        cat_level:this.lev
      }
       tianjiavvv(params).then((res)=>{

         if(res.data.meta.status!=200){
                        this.$Message.error("添加失败")
                       
                    }else{ 
                        this.$Message.success("添加成功")
                         console.log(res.data.data)
                        this.tableData.push(res.data.data)
                        this.options.push(res.data.data)
                          this.dialogVisible = false
                        
                    }
          
       })
    },
    handleChange33(e){
     console.log(e)
     
     for(var i=0;i<e.length;i++){
         this.lev=i
         this.idc=e[i]
     }
    
  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
