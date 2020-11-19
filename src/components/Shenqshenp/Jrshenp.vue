<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">审批管理>教学设备相关审批</span>
    <div class="div1">
      <span class="sp2">教学设备相关审批记录</span>
      <img src="../../assets/jr.png" style="margin-left:32px">
      <el-button style="border-radius: 0%;background:#1AB394;color:white;border:none;width:100px" id="btn1">同意</el-button>
      <el-button @click="dialogVisible1 = true" style="border-radius: 0%;background:#ED5665;color:white;border:none;width:100px" id="btn2">拒绝</el-button>
      <el-button type="text" @click="dialogVisible1 = true" style="color:#606266;position:absolute;top:303px;left:1203px;z-index:100;opacity:0">拒绝</el-button>
      <el-dialog title="拒绝申请" :visible.sync="dialogVisible1" width="35%" :before-close="handleClose">
        <p><span><span style="position:relative;top:-100px">拒绝原因：</span><el-input type="textarea" :rows="5" style="width:350px;" v-model="textarea"></el-input></span></p><br>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false" style="border-radius: 0%;position: absolute;left: 181px;top:224px;background:#ED5665;width:100px;border:none">确认拒绝</el-button>
        </span>
      </el-dialog>
      <el-input placeholder="申请人姓名" v-model="input" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:20px">申请时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:193px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
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
          <el-table-column type="selection" width="50" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="审批状态" width="160"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="申请人姓名" width="160"></el-table-column>
          <el-table-column prop="a3" label="申请时间" width="160"></el-table-column>
          <el-table-column prop="a4" label="借用时间" width="160"></el-table-column>
          <el-table-column prop="a5" label="预计归还时间" width="160"></el-table-column>
          <el-table-column prop="a6" label="上一级" width="160"></el-table-column>
          <el-table-column prop="a7" label="操作" width="194"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:303px;left:1121px;opacity:0">查看详情</el-button>
      <el-dialog title="借入申请详情" :visible.sync="dialogVisible" width="85%" :before-close="handleClose">
          <p style="color:#1C85D0;margin-left:30px">2017年11月13日</p>
        <el-table ref="multipleTable" :data="gridData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:30px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="分类" width="165"><template slot-scope="scope">{{ scope.row.date }}实验室器材-玻璃器材</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="125">试管</el-table-column>
          <el-table-column prop="a3" label="编码" width="125">13136722</el-table-column>
          <el-table-column prop="a4" label="单价" width="125">5.00</el-table-column>
          <el-table-column prop="a5" label="可用数量" width="125">1</el-table-column>
          <el-table-column prop="a6" label="规格" width="125">普通</el-table-column>
          <el-table-column prop="a7" label="存放地点" width="125">实验室1</el-table-column>
          <el-table-column prop="a10" label="领用数量" width="135">1</el-table-column>
        </el-table><br>
        <p style="margin-left:30px">借用时间：2017-11-16<span style="margin-left:500px">预计归还时间：2017-11-26</span></p><br>
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
          date: '未审批',
          a2: '李飘飘',
          a3: '2017-11-6',
          a4:'2017-11-16',
          a5:'2017-11-26',
          a6:'王一',
          a7:'查看详情    同意    拒绝'
        }, {
          date: '已通过',
          a2: '李飘飘',
          a3: '2017-11-6',
          a4:'2017-11-16',
          a5:'2017-11-26',
          a6:'王一',
          a7:'查看详情'
        }, {
          date: '拒绝',
          a2: '李飘飘',
          a3: '2017-11-6',
          a4:'2017-11-16',
          a5:'2017-11-26',
          a6:'王一',
          a7:'查看详情'
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:''
        }],
      gridData: [{
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:''
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a10:''
        }],
        multipleSelection: [],
        
    };
  }
};
</script>
<style scoped>
#all {
  width: 100%;
  height: 950px;
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
  height: 800px;
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
  margin-left: 35px;
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