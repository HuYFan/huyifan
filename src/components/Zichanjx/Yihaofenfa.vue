<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">易耗品管理>易耗品分发</span>
    <div class="div1">
      <span class="sp2">分发记录</span>
      <router-link to="/jitifenfa" id="btn1" type="danger" tag="el-button">+集体分发</router-link> 
      <el-badge :value="2" class="item" style="margin-left:10px;margin-top:-1px">
        <router-link to="/weichuli2" tag="el-button" size="small" style="border:1px solid #ED5665;color:red;background:white;border-radius: 0%">查看未处理申请</router-link>
      </el-badge>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:200px;margin-left:10px;"></el-input>
      <el-input v-model="input11" placeholder="领用人姓名" style="width:120px;margin-left:10px;"></el-input>
      <span style="font-size:14px;margin-left:10px">分发时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:100px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:10px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:120px;background:#F3A64C;border:none;font-size:12px;width:90px;padding-left:15px" class="el-dropdown-link"><span class="el-dropdown-link">
          导出excel
          <i class="el-icon-caret-bottom"></i>
        </span></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>导出全部</el-dropdown-item>
          <el-dropdown-item>导出选中</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px;" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="160"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="80"></el-table-column>
          <el-table-column prop="a3" label="编码" width="90"></el-table-column>
          <el-table-column prop="a4" label="单价(元)" width="90"></el-table-column>
          <el-table-column prop="a5" label="数量" width="90"></el-table-column>
          <el-table-column prop="a6" label="规格" width="90"></el-table-column>
          <el-table-column prop="a7" label="存放地点" width="100"></el-table-column>
          <el-table-column prop="a8" label="分发时间" width="95"></el-table-column>
          <el-table-column prop="a9" label="领用人姓名" width="80"></el-table-column>
          <el-table-column prop="a10" label="所在部门" width="80"></el-table-column>
          <el-table-column prop="a11" label="分发类型" width="80"></el-table-column>
          <el-table-column prop="a14" label="操作" width="129"></el-table-column>
        </el-table>
      </template>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
      <span style="text-decoration: underline;color:#3F83C2;font-size:15px;position:absolute;top:332px;left:935px">查看</span>
      <span style="text-decoration: underline;color:#3F83C2;font-size:15px;position:absolute;top:332px;left:1015px">查看</span>
    </div>
  </div>
</template>
<script>
import Header from "../Header";
export default {
  name: "jiecguih",
  components: {
    Header,
  },
  data() {
    return {
      radio:'',
      textarea: '',
      dialogVisible: false,
      dialogVisible2: false,
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
      input11:"",
      input12: "",
      input13:"",
      tableData: [{
          date: '实验室器材-玻璃器材',
          a2:'试管',
          a3:'13136722',
          a4:'5.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
          a8:'2017-11-6',
          a9:'李飘飘',
          a10:'数学组',
          a11:'个人申请',
          a14:'一'
        }, {
          date: '实验室器材-玻璃器材',
          a2:'试管',
          a3:'13136722',
          a4:'5.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
          a8:'2017-11-6',
          a9:'',
          a10:'',
          a11:'集体分发',
          a14:'编辑 删除'
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
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
          a10:'',
          a11:'',
          a14:''
        }],
        multipleSelection: [],
        
    };
  }
};
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
  height: 1000px;
  background-color: #f4f4f6;
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
  height: 850px;
  margin-left: 3%;
  margin-top: 10px;
}
.sp2 {
  display: block;
  font-size: 16px;
  color: #606266;
  padding-top: 20px;
  margin-left: 32px;
  padding-bottom: 10px;
}
#btn1 {
    color:white;
  border-radius: 0%;
  margin-left: 33px;
  background: #ED5665;
  border:none;
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