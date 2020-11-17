<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">房产管理>房产登记</span>
    <div class="div1">
      <span class="sp2">房产记录</span>
      <el-button type="danger" @click="dialogVisible = true" style="border-radius: 0%;" id="btn1">+添加房产</el-button>
      <el-dialog title="新增房产" :visible.sync="dialogVisible" width="30%" :before-close="handleClose" id="pp">
        <p style="text-align:center;">
          编码:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input2" style="width:180px;"></el-input>
        </p>
        <p style="text-align:center;">
          房产名称:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input3" style="width:180px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          是否拥有房产证:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1">是</el-radio>
          <el-radio v-model="radio" label="2">否</el-radio>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          产权性质:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input4" suffix-icon="el-icon-caret-bottom" style="width:130px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          房屋坐落:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input5" style="width:180px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          房屋结构:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input6" style="width:180px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          层数:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input8" style="width:100px;"></el-input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p style="text-align:center;">
          建筑面积:&nbsp;&nbsp;&nbsp;&nbsp;
          <el-input v-model="input9" style="width:180px;"></el-input>&nbsp;&nbsp;㎡
        </p>
        <p style="text-align:center;">
          套内建筑面积：&nbsp;&nbsp;
          <el-input v-model="input7" style="width:180px;"></el-input>&nbsp;&nbsp;㎡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <span slot="footer" class="dialog-footer">
          <el-button
            type="primary"
            @click="dialogVisible = false"
            style="position: absolute;left: 151px;top:495px;background:#1AB394;width:100px;border:none"
          >提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input13" placeholder="请输入编码或名称" style="width:300px;margin-left:20px"></el-input>
      <span style="font-size:14px;margin-left:20px">变更时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input11" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input12" style="width:150px;margin-left:10px"></el-input>
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
        <el-table ref="multipleTable" :data="tableData" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" border tooltip-effect="dark" style="font-size:12px;width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="编码" width="130"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="80"></el-table-column>
          <el-table-column prop="a3" label="是否拥有房产证" width="90"></el-table-column>
          <el-table-column prop="a4" label="产权性质" width="90"></el-table-column>
          <el-table-column prop="a5" label="房屋坐落" width="90"></el-table-column>
          <el-table-column prop="a6" label="房屋结构" width="90"></el-table-column>
          <el-table-column prop="a7" label="层数" width="80"></el-table-column>
          <el-table-column prop="a8" label="建筑面积（㎡）" width="110"></el-table-column>
          <el-table-column prop="a9" label="套内建筑面积（㎡）" width="130"></el-table-column>
          <el-table-column prop="a10" label="状态" width="85"></el-table-column>
          <el-table-column prop="a11" label="变更时间" width="85"></el-table-column>
          <el-table-column prop="a12" label="操作" width="104"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="font-size:12px;position:absolute;top:281px;left:1200px;opacity:0">编辑</el-button>
      <el-button type="primary" style="display:inline;background:white;border:1px solid #1AB394;color:#1AB394;border-radius:0%;cursor:text;position:absolute;top: 784px;left:65px">批量删除</el-button>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
    </div>
  </div>
</template>
<script>
import Header from "../Header";
export default {
  name: "dichandj",
  components: {
    Header,
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
      input11: "",
      input12: "",
      input13: "",
      tableData: [{
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:'正常',
          a11:'-',
          a12:'编辑 删除'
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
          a10:'已核销',
          a11:'2018.1.1',
          a12:'-'
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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
          a10:'',
          a11:'',
          a12:''
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