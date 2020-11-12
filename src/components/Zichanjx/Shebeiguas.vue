<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">教学设备管理>设备挂失</span>
    <div class="div1">
      <span class="sp2">挂失记录</span>
      <el-button type="danger" @click="dialogTableVisible = true" style="border-radius: 0%;" id="btn1" >+普通挂失</el-button>
      <el-dialog title="数据上报" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
          <el-input v-model="input" placeholder="请输入编码或名称" style="width:300px;margin-left:0px"></el-input>
          <span style="font-size:14px;margin-left:20px">入库时间:</span>
          <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:10px"></el-input>
          <span style="font-size:14px;margin-left:10px">一</span>
          <el-input suffix-icon="el-icon-date" v-model="input3" style="width:150px;margin-left:10px"></el-input>
          <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
        <el-table :data="gridData" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="margin-top:10px;">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="分类" width="160"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="a2" label="名称" width="80"></el-table-column>
          <el-table-column property="a3" label="编码" width="100"></el-table-column>
          <el-table-column property="a4" label="单价(元)" width="100"></el-table-column>
          <el-table-column property="a5" label="数量" width="100"></el-table-column>
          <el-table-column property="a6" label="规格" width="100"></el-table-column>
          <el-table-column property="a7" label="存放地点" width="100"></el-table-column>
          <el-table-column property="a8" label="入库时间" width="110"></el-table-column>
          <el-table-column property="a9" label="挂失数量" width="140"></el-table-column>
        </el-table>
        <template><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" style="width:130px;position:absolute;top:187px;left:916px"></el-input-number></template>
        <span id="span3">共选中3项</span>
        <span style="font-size:14px;margin-top:20px;display: inline-block;">挂失时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:20px"></el-input>
        <p style="margin-top:20px"><span style="display: inline-block;padding-bottom: 56px;">情况说明：</span><el-input type="textarea" :rows="3" style="width:950px;margin-left:10px" v-model="textarea"></el-input></p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 446px;top:609px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:20px"></el-input>
      <span style="font-size:14px;margin-left:20px">挂失时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:20px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:140px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
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
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="170"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="名称" width="80"></el-table-column>
          <el-table-column prop="bianma" label="编码" width="100"></el-table-column>
          <el-table-column prop="danj" label="单价(元)" width="100"></el-table-column>
          <el-table-column prop="shul" label="挂失数量" width="100"></el-table-column>
          <el-table-column prop="guig" label="规格" width="100"></el-table-column>
          <el-table-column prop="cunf" label="挂失类型" width="120"></el-table-column>
          <el-table-column prop="shif" label="审批状态" width="110"></el-table-column>
          <el-table-column prop="time" label="挂失时间" width="100"></el-table-column>
          <el-table-column prop="caoz" label="操作" width="184"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:257px;left:1105px;opacity:0">查看详情</el-button>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:257px;left:1155px;opacity:0">编辑</el-button>
      <el-dialog title="挂失详情" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-50px">03036752</span><span style="margin-left:20px">行政办公设备</span><span style="margin-left:20px">办公桌</span></p><br>
        <p><span style="margin-left:50px">单价：100.00元</span><span style="margin-left:200px">挂失数量：1</span></p><br>
        <p><span style="margin-left:50px">规格：普通</span><span style="margin-left:230px">入库时间：2017-10-6</span></p><br>
        <p><span style="margin-left:50px">是否唯一：是</span><span style="margin-left:216px">挂失类型：借出挂失</span></p><br>
        <p><span style="margin-left:50px">挂失时间：2017-12-09</span><span style="margin-left:152px">挂失原因：被XXX弄丢了弄丢了</span></p><br>
        <p><span style="margin-left:50px">审批状态：
            <el-steps :active="2" style="width:300px;margin-left:124px;margin-top:-23px">
                <el-step title="我" icon="el-icon-circle-check"></el-step>
                <el-step title="张明明" icon="el-icon-circle-check"></el-step>
                <el-step title="王晓峰" icon="el-icon-time"></el-step>
            </el-steps></span>
        </p>
      </el-dialog>
      <el-button type="primary" style="display:inline;background:white;border:1px solid #1AB394;color:#1AB394;border-radius:0%;cursor:text;position:absolute;top: 766px;left:74px">批量删除</el-button>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
      
    </div>
  </div>
</template>
<script>
import Header from "../Header";
export default {
  name: "shebeiruku",
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
          date: '行政办公设备-桌椅类',
          name: '办公桌',
          bianma: '03036752',
          danj:'100.00',
          shul:'1',
          guig:'普通',
          cunf:'普通挂失',
          shif:'未审批',
          time:'2017-11-6',
          caoz:'查看详情 编辑 取消挂失'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'借出挂失',
          shif:'已通过',
          time:'',
          caoz:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'已拒绝',
          time:'',
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
          caoz:''
        }],
      gridData: [{
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
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
          a8:'',
          a9:'',
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