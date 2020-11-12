<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">{{ruku}}</span>
    <div class="div1">
      <span class="sp2">入库记录</span>
      <el-button
        type="danger"
        @click="dialogVisible = true"
        style="border-radius: 0%;"
        id="btn1"
      >+添加设备</el-button>
      <el-dialog title="新增设备" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" id="pp">
        <p style="text-align:center;">
          选择分类:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input" suffix-icon="el-icon-caret-bottom" style="width:200px;"></el-input>
        </p>
        <p style="text-align:center;">
          设备名称:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input2" style="width:200px;"></el-input>
        </p>
        <p style="text-align:center;">
          <span style="opacity:0">编码</span>编码:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input3" style="width:200px;"></el-input>
        </p>
        <p style="text-align:center;">
          &nbsp;&nbsp;单价:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input4" style="width:155px;"></el-input>&nbsp;&nbsp;元
        </p>
        <p style="text-align:center;">
          &nbsp;&nbsp;数量:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input5" style="width:105px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          <span style="opacity:0">编码</span>规格:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input6" style="width:200px;"></el-input>
        </p>
        <p style="text-align:center;">
          存放地点:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input7" suffix-icon="el-icon-caret-bottom" style="width:200px;"></el-input>
        </p>
        <p style="text-align:center;">
          是否唯一:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible = false"
            style="position: absolute;left: 151px;top:444px;background:#1AB394;width:100px;border:none"
          >提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:20px"></el-input>
      <span style="font-size:14px;margin-left:20px">入库时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
      <el-button type="primary" style="margin-left:42px;background:#F3A64C;border:none">批量导入</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:10px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
          导出excel
          <i class="el-icon-caret-bottom"></i>
        </span></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>导出全部</el-dropdown-item>
          <el-dropdown-item>导出选中</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <template>
        <el-table ref="multipleTable" :data="tableData" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" border tooltip-effect="dark" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="160"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="名称" width="70"></el-table-column>
          <el-table-column prop="bianma" label="编码" width="100"></el-table-column>
          <el-table-column prop="danj" label="单价(元)" width="100"></el-table-column>
          <el-table-column prop="shul" label="数量" width="100"></el-table-column>
          <el-table-column prop="guig" label="规格" width="100"></el-table-column>
          <el-table-column prop="cunf" label="存放地点" width="120"></el-table-column>
          <el-table-column prop="shif" label="是否唯一" width="100"></el-table-column>
          <el-table-column prop="time" label="入库时间" width="100"></el-table-column>
          <el-table-column prop="zhuangt" label="上报状态" width="80">
          </el-table-column>
          <el-table-column prop="caoz" label="操作" width="134"></el-table-column>
        </el-table>
      </template>
      <Shujusb1 bj="编辑" sb="数据上报"></Shujusb1>
      <Shujusb3 bj="查看上报记录" style="position:absolute;top: 457px;color:#606266;border:1px solid red"></Shujusb3>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
    </div>
  </div>
</template>
<script>
import Header from "../Header";
import Shujusb1 from './Shujusb1'
import Shujusb3 from './Shujusb3'
export default {
  name: "shebeiruku",
  props: {
    ruku: {
      type: String,
      default: "教学设备管理>设备入库"
    }
  },
  components: {
    Header,
    Shujusb1,
    Shujusb3
  },
  data() {
    return {
      dialogVisible: false,
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
          date: '行政办公设备-桌椅类',
          name: '办公桌',
          bianma: '03036752',
          danj:'100.00',
          shul:'1',
          guig:'普通',
          cunf:'库房1',
          shif:'否',
          time:'2017-11-6',
          zhuangt:'✔',
          caoz:'编辑 删除'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'✔',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'未上报',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'未上报',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'',
          caoz:''
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
  height: 900px;
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