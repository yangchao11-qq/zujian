<template>
  <div>
     <el-table
      :data="tableData"
      style="width: 100%"
       ref="mklo">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
/*
在一般的Web开发中，很少会用到Blob，但Blob可以满足一些场景下的特殊需求。
Blob，Binary Large Object的缩写，代表二进制类型的大对象。Blob的概念在一些数据库中有使用到，
例如，MYSQL中的BLOB类型就表示二进制数据的容器。在Web中，Blob类型的对象表示不可变的类似文件对象的原始数据，通俗点说，
就是Blob对象是二进制数据，但它是类似文件对象的二进制数据，因此可以像操作File对象一样操作Blob对象，实际上，File继承自Blob。


Blob基本用法
     创建
       可以通过Blob的构造函数创建Blob对象：
      Blob(blobParts[, options])
        参数说明：
        blobParts： 数组类型， 数组中的每一项连接起来构成Blob对象的数据，数组中的每项元素可以是ArrayBuffer(二进制数据缓冲区), 
     ArrayBufferView,Blob,DOMString。或其他类似对象的混合体。

        options： 可选项，字典格式类型，可以指定如下两个属性：

        type，默认值为""，它代表了将会被放入到blob中的数组内容的MIME类型。

          endings， 默认值为"transparent"，用于指定包含行结束符\n的字符串如何被写入。 它是以下两个值中的一个： "native"，
          表示行结束符会被更改为适合宿主操作系统文件系统的换行符； "transparent"，表示会保持blob中保存的结束符不变。
          举个栗子：

   Blob 对象的 slice 方法，将二进制数据按照字节分块，返回一个新的 Blob 对象。

            var a = ["hello", "world"];
            var myBlob = new Blob(a, { "type" : "text/xml" });
            var newBlob = myBlob.slice(0, 5);
            console.log(newBlob);

    Blob 对象有两个只读属性：

        size：二进制数据的大小，单位为字节。（文件上传时可以在前端判断文件大小是否合适）
        type：二进制数据的 MIME 类型，全部为小写，如果类型未知，则该值为空字符串。（文件上传时可以在前端判断文件类型是否合适）        
    URL
        调用 URL 对象的 createObjectURL 方法，传入一个 File 对象或者 Blob 对象，能生成一个链接，听起来好像很吊的样子。

        var objecturl =  window.URL.createObjectURL(blob);

    这个 URL 的存在时间，等同于网页的存在时间，一旦网页刷新或卸载，这个 URL 就失效。（File 和 Blob 又何尝不是这样呢）除此之外，
    也可以手动调用 URL.revokeObjectURL 方法，使 URL 失效。

        window.URL.revokeObjectURL(objectURL);

        var blob = new Blob(["Hello hanzichi"]);
        var a = document.createElement("a");
        a.href = window.URL.createObjectURL(blob);
        a.download = "a.txt";
        a.textContent = "Download";

        document.body.appendChild(a
*/
  // todo 支持更多input的属性
  export default {
    name: "ispInputcopy",
   
    mounted(){
        this.mkou()
        this.nhuir()
    },
    data () {
      return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
      }
    },
    methods: {
      //这个是把一个表格转成formData类型字符上传数据到服务端
       mkou(){
           //FormData对象用以将数据编译成键值对，也就是一个表格对象，可以做成一个键值的形式
           var formData=new FormData()

           this.tableData.map((val)=>{
              Object.keys(val).forEach((valw)=>{
                //这里是把每一个数组都传入到formData中，以键值对的形式传入
                  formData.append(valw,val[valw])
              })
           })
          //  在这里发送请求的把formData都西昂当成参数传入就可以了
       },
       //这个是把表格下载下来
       nhuir(){
            var tableData=JSON.stringify(this.tableData)
            console.log(tableData)
            //document.createElement()是在对象中创建一个对象
            /*要与appendChild() 或 insertBefore()方法联合使用。其中，
            appendChild() 方法在节点的子节点列表末添加新的子节点。insertBefore() 方法在节点的子节点列表任意位置插入新的节点。 */
            var el=document.createElement('a')
            //download		规定被下载的超链接目标,也就是设置文件的名字。 这个是a标签的属性
            el.download="保存本地数据.josn"
            el.style.display="none"
            //字符内容转换为blob地址
            var bole=new Blob([tableData],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"})
            el.href=URL.createObjectURL(bole)
            //出发点击
            document.body.appendChild(el);
            el.click(); //点击下载
             document.body.removeChild(el); //下载完成移除元素
             window.URL.revokeObjectURL(el.href); //释放掉blob对象
       }    
    }
  }
</script>

<style scoped lang="scss">

</style>
