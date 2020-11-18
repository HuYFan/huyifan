<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">申请管理>易耗品领用申请</span>
    <div class="div1">
      <span class="sp2">易耗品领用申请记录</span>
      <router-link to="/faqily" tag="el-button" style="border-radius: 0%;background:#ED5665;color:white;border:none" id="btn1">发起领用申请</router-link>
      <span style="font-size:14px;margin-left:20px">申请时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:447px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
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
          <el-table-column label="申请时间" width="300"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="借入物品" width="300"></el-table-column>
          <el-table-column prop="shif" label="审批状态" width="300"></el-table-column>
          <el-table-column prop="caoz" label="操作" width="304"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:256px;left:1068px;opacity:0">查看详情</el-button>
      <el-dialog title="申请详情" :visible.sync="dialogVisible" width="85%" :before-close="handleClose">
          <p style="color:#1C85D0;margin-left:30px">2017年11月13日</p>
        <el-table ref="multipleTable" :data="gridData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="font-size:12px;width: 95%;margin-left:30px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="分类" width="140"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="100"></el-table-column>
          <el-table-column prop="a3" label="编码" width="100"></el-table-column>
          <el-table-column prop="a4" label="单价（元）" width="100"></el-table-column>
          <el-table-column prop="a5" label="可用数量" width="100"></el-table-column>
          <el-table-column prop="a6" label="规格" width="100"></el-table-column>
          <el-table-column prop="a7" label="存放地点" width="100"></el-table-column>
          <el-table-column prop="a8" label="是否唯一" width="100"></el-table-column>
          <el-table-column prop="a9" label="入库时间" width="110"></el-table-column>
          <el-table-column prop="a10" label="借入数量" width="114"></el-table-column>
        </el-table><br>
        <p style="margin-left:30px">备注：用于2017年11月16日举办的全校活动</p><br>
        <p><span style="margin-left:30px">申请流转：
            <el-steps :active="2" style="width:300px;margin-left:124px;margin-top:-23px">
                <el-step title="我" icon="el-icon-circle-check"></el-step>
                <el-step title="张明明" icon="el-icon-circle-check"></el-step>
                <el-step title="王晓峰" icon="el-icon-time"></el-step>
                <el-step title="管理员" icon="el-icon-circle-check"></el-step>
            </el-steps></span>
        </p>
      </el-dialog>
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
          date: '2017-11-16',
          name: '玻璃试管等',
          shif:'审核中',
          caoz:'查看详情 撤回申请'
        }, {
          date: '2017-10-16',
          name: '圆珠笔',
          shif:'已通过',
          caoz:'查看详情'
        }, {
          date: '2017-09-16',
          name: '手纸等',
          shif:'已拒绝',
          caoz:'查看详情'
        }, {
          date: '',
          name: '',
          shif:'已撤回',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }, {
          date: '',
          name: '',
          shif:'',
          caoz:''
        }],
      gridData: [{
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'1'
        }, {
          date: '行政办公设备-桌椅类',
          a2: '椅子',
          a3: '03036710',
          a4:'50.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'1'
        }, {
          date: '行政办公设备-桌椅类',
          a2: '椅子',
          a3: '03036710',
          a4:'50.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'1'
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
  float: left;
  font-size: 16px;
  color: #606266;
  margin-top: 20px;
  margin-left: 32px;
}
#btn1 {
  margin-top: 55px;
  margin-left: -142px;
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