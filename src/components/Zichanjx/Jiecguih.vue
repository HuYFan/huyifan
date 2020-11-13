<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">教学设备管理>设备借出和归还</span>
    <div class="div1">
      <span class="sp2">借出和归还记录</span>
      <el-badge :value="2" class="item" id="btn1">
        <router-link to="/weichuli" tag="el-button" size="small" style="border:1px solid #ED5665;color:red;background:white;border-radius: 0%">查看未处理申请</router-link>
      </el-badge>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:200px;margin-left:10px;"></el-input>
      <el-input v-model="input11" placeholder="借用人姓名" style="width:120px;margin-left:5px;"></el-input>
      <span style="font-size:14px;margin-left:5px">借出时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:100px;margin-left:5px"></el-input>
      <span style="font-size:14px;margin-left:5px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:100px;margin-left:5px"></el-input>
      <span style="font-size:14px;margin-left:5px">归还时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input12" style="width:100px;margin-left:5px"></el-input>
      <span style="font-size:14px;margin-left:5px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input13" style="width:100px;margin-left:5px"></el-input>
      <el-button type="primary" style="margin-left:5px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:5px;background:#F3A64C;border:none;font-size:12px;width:90px;padding-left:15px" class="el-dropdown-link"><span class="el-dropdown-link">
          导出excel
          <i class="el-icon-caret-bottom"></i>
        </span></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>导出全部</el-dropdown-item>
          <el-dropdown-item>导出选中</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px;font-size:12px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="145"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="60"></el-table-column>
          <el-table-column prop="a3" label="编码" width="80"></el-table-column>
          <el-table-column prop="a4" label="单价(元)" width="75"></el-table-column>
          <el-table-column prop="a5" label="借出数量" width="75"></el-table-column>
          <el-table-column prop="a6" label="规格" width="75"></el-table-column>
          <el-table-column prop="a7" label="借用人姓名" width="85"></el-table-column>
          <el-table-column prop="a8" label="是否唯一" width="75"></el-table-column>
          <el-table-column prop="a9" label="所在部门" width="75"></el-table-column>
          <el-table-column prop="a10" label="归还时间" width="75"></el-table-column>
          <el-table-column prop="a11" label="归还数量" width="75"></el-table-column>
          <el-table-column prop="a12" label="归还状态" width="75"></el-table-column>
          <el-table-column prop="a13" label="丢失数量" width="75"></el-table-column>
          <el-table-column prop="a14" label="操作" width="119"></el-table-column>
        </el-table>
      </template>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
      <Chak></Chak>
    </div>
  </div>
</template>
<script>
import Header from "../Header";
import Chak from "./Chak";
export default {
  name: "jiecguih",
  components: {
    Header,
    Chak
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
          date: '行政办公设备-桌椅类',
          a2:'办公桌',
          a3:'03036752',
          a4:'100.00',
          a5:'10',
          a6:'普通',
          a7:'李飘飘',
          a8:'语文组',
          a9:'2017-11-6',
          a10:'—',
          a11:'0',
          a12:'未归还',
          a13:'0',
          a14:'查看 归还 挂失'
        }, {
          date: '行政办公设备-桌椅类',
          a2:'椅子',
          a3:'03036752',
          a4:'50.00',
          a5:'10',
          a6:'普通',
          a7:'李飘飘',
          a8:'语文组',
          a9:'2017-11-1',
          a10:'—',
          a11:'10',
          a12:'全部归还',
          a13:'0',
          a14:'查看'
        }, {
          date: '行政办公设备-桌椅类',
          a2:'椅子',
          a3:'03036752',
          a4:'50.00',
          a5:'10',
          a6:'普通',
          a7:'李飘飘',
          a8:'语文组',
          a9:'2017-11-1',
          a10:'—',
          a11:'6',
          a12:'部分归还',
          a13:'0',
          a14:'查看 归还 挂失'
        }, {
          date: '行政办公设备-桌椅类',
          a2:'椅子',
          a3:'03036752',
          a4:'50.00',
          a5:'10',
          a6:'普通',
          a7:'李飘飘',
          a8:'语文组',
          a9:'2017-11-1',
          a10:'—',
          a11:'0',
          a12:'未归还',
          a13:'10',
          a14:'查看'
        }, {
          date: '行政办公设备-桌椅类',
          a2:'椅子',
          a3:'03036752',
          a4:'50.00',
          a5:'10',
          a6:'普通',
          a7:'李飘飘',
          a8:'语文组',
          a9:'2017-11-1',
          a10:'—',
          a11:'6',
          a12:'部分归还',
          a13:'4',
          a14:'查看'
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
          a12:'',
          a13:'',
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
          a12:'',
          a13:'',
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
          a12:'',
          a13:'',
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
          a12:'',
          a13:'',
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
          a12:'',
          a13:'',
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
  margin-left: 33px;
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