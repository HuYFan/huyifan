<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">统计分析>盘点</span>
    <div class="div1">
      <p class="sp2">盘点记录</p>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="编码" width="150"><template slot-scope="scope">{{ scope.row.date }}00001</template></el-table-column>
          <el-table-column prop="a2" label="分类" width="150">行政办公设备</el-table-column>
          <el-table-column prop="a3" label="名称" width="150"></el-table-column>
          <el-table-column prop="a4" label="库存数量" width="150">20000</el-table-column>
          <el-table-column prop="a5" label="单价（元）" width="150">2</el-table-column>
          <el-table-column prop="a6" label="实际盘点数" width="170">20000</el-table-column>
          <el-table-column prop="a7" label="盘点-库存" width="140">0</el-table-column>
          <el-table-column prop="a8" label="盈亏值" width="144">0</el-table-column>
        </el-table>
      </template>
      <router-link to="/kaishipd" tag="span" style="font-size:14px;position:absolute;top:267px;left:1128px;opacity:0;cursor: pointer;">开始盘点</router-link>
      <router-link to="/pandian" tag="el-button" style="width:100px;display:inline;background:#1AB394;color:white;border-radius:0%;position:absolute;top: 716px;left:74px">完成盘点</router-link>
      <router-link to="/pandian" tag="el-button" style="width:100px;display:inline;background:white;border:1px solid #1AB394;color:#1AB394;border-radius:0%;position:absolute;top: 716px;left:184px">暂存</router-link>
    </div>
  </div>
</template>
<script>
import Header from "../Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
        dialogVisible1:false,
      dialogTableVisible:false,
      dialogVisible: false,
      num:'',
      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      radio: "",
      input8: "",
      input9: "",
      input10: "",
      tableData: [{
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
         date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
        }, {
         date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
        }],
      gridData: [{
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
          a10:'否',
          a8:'2017-10-6',
          a9:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:'',
          a8:'',
          a9:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:'',
          a8:'',
          a9:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:'',
          a8:'',
          a9:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:'',
          a8:'',
          a9:'',
        }],
        multipleSelection: [],
        
    };
  }
};
</script>

<style scoped>
#all {
  width: 100%;
  height: 900px;
  background-color: #f4f4f6;
}
#span3{
    display: block;
    margin-top: 10px;
    color: #1C85C7;
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
  height: 750px;
  margin-left: 3%;
  margin-top: 10px;
}
.sp2 {
  font-size: 16px;
  color: #606266;
  padding-top: 20px;
  margin-left: 32px;
}
#btn1 {
  margin-top: 55px;
  margin-left: -62px;
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