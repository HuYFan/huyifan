<template>
    <div id="all">
        <Header></Header>
        <span class="sp1">申请管理>采购申请>发起采购申请</span>
    <div class="div1">
      <router-link to="/caigousq" class="sp2" tag="p"><<返回</router-link>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="名称" width="244"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="品牌" width="240"></el-table-column>
          <el-table-column prop="a3" label="型号" width="240"></el-table-column>
          <el-table-column prop="a4" label="需采购数量" width="240"></el-table-column>
          <el-table-column prop="a5" label="备注" width="240"></el-table-column>
        </el-table>
      </template>
      <el-button type="primary" style="display:inline;background:white;border:1px solid #ED5665;color:#ED5665;border-radius:0%;cursor:text;position:absolute;top: 372px;left:74px">新增一条</el-button>
      <el-button type="primary" style="width:120px;display:inline;background:#1AB394;border:1px solid #1AB394;color:white;border-radius:0%;position:absolute;top: 395px;left:576px">提交</el-button>
    </div>
    </div>
</template>
<script>
import Header from '../Header'
export default {
    components:{
        Header
    },
    data() {
        return {
            num:'',
            num1:'',
            num2:'',
            dialogTableVisible:false,
            dialogVisible1:false,
      tableData: [{
          date: '办公桌',
          a2:'',
          a3:'',
          a4:'12',
          a5:'',
        }, {
          date: '椅子',
          a2:'',
          a3:'',
          a4:'12',
          a5:'',
        }, {
          date: '椅子',
          a2:'',
          a3:'',
          a4:'12',
          a5:'',
        }
      ],gridData:[{
          date: '实验室器材-玻璃器材',
          a2:'试管',
          a3:'13136722',
          a4:'5.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
          a9:'2016-11-6',
          a10:'移除'
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a9:'',
          a10:'移除'
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:'移除'
        } 
     ],gridData1:[{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
     }]}
    },
}
</script>
<style scoped>
::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
}
#all {
  width: 100%;
  height: 850px;
  background-color: #f4f4f6;
}
.div2{
  width: 94%;
  background-color: white;
  height: 350px;
  margin-left: 3%;
  margin-top: 30px;
}
#span2{
  display: inline-block;
  margin-left: 800px;
  color: #666666;
  font-size: 14px;
  margin-top: 40px;
}
#fenye{
  margin-left: 950px;
  margin-top: -25px;
}
.sp1 {
  display: inline-block;
  color: #666666;
  font-size: 14px;
  margin-left: 3%;
  margin-top: 15px;
}
.div1 {
  width: 94%;
  background-color: white;
  height: 700px;
  margin-left: 3%;
  margin-top: 10px;
}
.sp2 {
  font-size: 16px;
  color: #606266;
  padding-top: 20px;
  margin-left: 32px;
  cursor: pointer;
}
.sp3 {
  font-size: 16px;
  color: #606266;
  padding-top: 20px;
  margin-left: 32px;
  cursor: pointer;
}
#btn1 {
  margin-top: 55px;
  margin-left: -55px;
}
#btn2 {
  margin-top: 55px;
  margin-left: 20px;
}
.el-dialog__header {
  background-color: #1ab394 !important;
}
#pp p {
  margin-top: 10px;
}
#pp p:nth-of-type(1) {
  margin-top: -20px;
}
</style>