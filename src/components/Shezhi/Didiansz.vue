<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">统计分析>盘点</span>
    <div class="div1">
      <span class="sp2">盘点记录</span>
      <el-button type="danger" @click="dialogTableVisible = true" style="border-radius: 0%;" id="btn1" >+新增盘点</el-button>
      <el-dialog title="新增盘点" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
        <span style="margin-left:35px;">盘点名称：</span>
        <el-input v-model="input" style="width:300px;margin-left:0px"></el-input>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 446px;top:609px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入盘点名称" style="width:150px;margin-left:20px"></el-input>
      <span style="font-size:14px;margin-left:10px">开始日期:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:5px">结束日期:</span>
      <el-input suffix-icon="el-icon-date" v-model="input2" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:5px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input3" style="width:100px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:10px;background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:110px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
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
          <el-table-column label="盘点名称" width="190"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="创建人" width="190"></el-table-column>
          <el-table-column prop="a3" label="盘点开始时间" width="190"></el-table-column>
          <el-table-column prop="a4" label="盘点结束时间" width="190"></el-table-column>
          <el-table-column prop="a5" label="状态" width="190"></el-table-column>
          <el-table-column prop="a6" label="操作" width="214"></el-table-column>
        </el-table>
      </template>
      <router-link to="/kaishipd" tag="span" style="font-size:14px;position:absolute;top:267px;left:1128px;opacity:0;cursor: pointer;">开始盘点</router-link>
      <el-button type="primary" style="display:inline;background:white;border:1px solid #1AB394;color:#1AB394;border-radius:0%;cursor:text;position:absolute;top: 766px;left:74px">批量删除</el-button>
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
          date: '20171106第二次盘点',
          a2: '王一',
          a3: '2017-11-6   09:00',
          a4:'',
          a5:'未开始',
          a6:'开始盘点        删除',
        }, {
          date: '20171006第一次盘点',
          a2: '王一',
          a3: '2017-10-8    09:00',
          a4:'',
          a5:'未完成',
          a6:'继续盘点        删除',
        }, {
         date: '20171006第一次盘点',
          a2: '王一',
          a3: '2017-10-8    09:00',
          a4:'2017-10-11     09:00',
          a5:'已完成',
          a6:'查看详情        删除',
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
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
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