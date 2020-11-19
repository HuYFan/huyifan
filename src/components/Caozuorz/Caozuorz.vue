<template>
  <div id="all">
    <Header></Header>
    <div class="div1">
      <span class="sp2">操作日志</span>
      <el-input placeholder="请输入登录账号、用户名或登录IP" v-model="input" style="width:250px;margin-left:-62px;margin-top:60px;"></el-input>
      <span style="font-size:14px;margin-left:20px">操作时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:324px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
          导出excel
          <i class="el-icon-caret-bottom"></i>
        </span></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>导出全部</el-dropdown-item>
          <el-dropdown-item>导出选中</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="登录账号" width="234"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="用户名" width="234"></el-table-column>
          <el-table-column prop="a3" label="登录IP" width="234"></el-table-column>
          <el-table-column prop="a6" label="操作日期" width="234"></el-table-column>
          <el-table-column prop="a7" label="操作内容" width="283"></el-table-column>
        </el-table>
      </template>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
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
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a6:'',
          a7:''
        }],
        multipleSelection: [],
    };
  }
};
</script>
<style scoped>
#all {
  width: 100%;
  height: 620px;
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
  height: 500px;
  margin-left: 3%;
  margin-top: 30px;
}
.sp2 {
  float: left;
  font-size: 16px;
  color: #606266;
  margin-top: 20px;
  margin-left: 32px;
}
#btn1 {
  margin-top: 55px;
  margin-left: -93px;
}
#btn2 {
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