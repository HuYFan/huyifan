<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">项目管理>学校项目管理</span>
    <div class="div1">
      <span class="sp2">项目记录</span>
      <el-button type="danger" @click="dialogTableVisible = true" style="border-radius: 0%;" id="btn1" >+新增项目</el-button>
      <el-dialog title="校级项目录入" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
          <p><span style="margin-left:120px">项目编号：<el-input v-model="i1" style="width:250px;"></el-input></span><span style="margin-left:100px">项目名称：<el-input v-model="i2" style="width:250px;"></el-input></span></p><br>
          <p><span style="margin-left:120px">项目日期：<el-input v-model="i3" suffix-icon="el-icon-date" style="width:200px;"></el-input></span><span style="margin-left:123px">招标项目类型：<el-input v-model="i4" suffix-icon="el-icon-caret-bottom" style="width:250px;"></el-input></span></p><br>
          <p><span style="margin-left:120px">业务部门：<el-input v-model="i5" style="width:100px;"></el-input></span><span style="margin-left:50px">电话：<el-input v-model="i6" style="width:150px;"></el-input></span><span style="margin-left:23px">联系人：<el-input v-model="i7" style="width:100px;"></el-input></span><span style="margin-left:40px">手机：<el-input v-model="i8" style="width:150px;"></el-input></span></p><br>
          <p><span style="margin-left:120px">执行部门：<el-input v-model="i9" style="width:100px;"></el-input></span><span style="margin-left:50px">电话：<el-input v-model="i10" style="width:150px;"></el-input></span><span style="margin-left:23px">联系人：<el-input v-model="i11" style="width:100px;"></el-input></span><span style="margin-left:40px">手机：<el-input v-model="i12" style="width:150px;"></el-input></span></p><br>
          <p><span style="margin-left:120px">资金来源：<el-input v-model="i13" suffix-icon="el-icon-caret-bottom" style="width:240px;"></el-input></span><span style="margin-left:110px">项目资金：<el-input v-model="i14" style="width:250px;"></el-input>&nbsp;&nbsp;元</span></p><br>
          <p><span style="margin-left:120px">财政资金：<el-input v-model="i15" style="width:180px;"></el-input>&nbsp;&nbsp;元</span><span style="margin-left:40px">资金文号：<el-input v-model="i16" style="width:180px;"></el-input></span><span style="margin-left:40px">自筹资金：<el-input v-model="i17" style="width:180px;"></el-input>&nbsp;&nbsp;元</span></p><br>
          <p><span style="margin-left:92px">是否负责付款：
            <el-radio v-model="radio" label="1">是</el-radio>
            <el-radio v-model="radio" label="2">否</el-radio></span>
            <span style="margin-left:132px">首付比例：<el-input v-model="i18" style="width:160px;"></el-input>%</span>
            <span style="margin-left:48px">二次比例：<el-input v-model="i19" style="width:160px;"></el-input>%</span>
          </p><br>
          <p><span style="margin-left:92px">是否需要巡检：
            <el-radio v-model="radio1" label="3">是</el-radio>
            <el-radio v-model="radio1" label="4">否</el-radio></span>
            <span style="margin-left:252px">巡检是否完成：
            <el-radio v-model="radio2" label="5">是</el-radio>
            <el-radio v-model="radio2" label="6">否</el-radio></span>
          </p><br>
          <p><span style="margin-left:120px">招标方式：<el-input v-model="i20" suffix-icon="el-icon-caret-bottom" style="width:180px;"></el-input></span><span style="margin-left:62px">开标日期：<el-input v-model="i21" suffix-icon="el-icon-date" style="width:180px;"></el-input></span><span style="margin-left:40px">代理机构：<el-input v-model="i22" style="width:180px;"></el-input></span></p><br>
          <p><span style="display: inline-block;padding-bottom: 76px;margin-left:120px">项目信息：</span><el-input type="textarea" :rows="4" style="width:790px;" v-model="textarea"></el-input></p>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 471px;top:701px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
          </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">改造时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:5px"></el-input>
      <span style="font-size:14px;margin-left:5px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:5px"></el-input>
      <el-button type="primary" style="margin-left:10px;background:#1AB394;border:none">查询</el-button>
      <el-button type="primary" style="margin-left:80px;background:#F3A64C;border:none">批量导入</el-button>
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
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="项目编号" width="140"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="项目名称" width="90"></el-table-column>
          <el-table-column prop="bianma" label="项目日期" width="100"></el-table-column>
          <el-table-column prop="danj" label="招标类型" width="100"></el-table-column>
          <el-table-column prop="shul" label="业务部门" width="100"></el-table-column>
          <el-table-column prop="guig" label="执行部门" width="100"></el-table-column>
          <el-table-column prop="cunf" label="资金来源" width="100"></el-table-column>
          <el-table-column prop="shif" label="项目资金" width="100"></el-table-column>
          <el-table-column prop="cunf" label="财政资金" width="100"></el-table-column>
          <el-table-column prop="shif" label="自筹资金" width="100"></el-table-column>
          <el-table-column prop="caoz" label="操作" width="134"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:257px;left:1165px;opacity:0">查看</el-button>
      <el-button type="text" @click="dialogTableVisible = true" style="color:#606266;position:absolute;top:257px;left:1187px;opacity:0">编辑</el-button>
      <el-dialog title="项目详情" :visible.sync="dialogVisible" style="width:158%;margin-left:-400px">
          <p><span style="margin-left:120px">项目编号：10001000</span><span style="margin-left:285px">项目名称：陕西省中小学教学设备与资产管理系统</span></p><br>
          <p><span style="margin-left:120px">项目日期：2018.1.1</span><span style="margin-left:267px">招标项目类型：公开投标</span></p><br>
          <p><span style="margin-left:120px">业务部门：</span><span style="margin-left:150px">电话：</span><span style="margin-left:173px">联系人：</span><span style="margin-left:140px">手机：</span></p><br>
          <p><span style="margin-left:120px">执行部门：</span><span style="margin-left:150px">电话：</span><span style="margin-left:173px">联系人：</span><span style="margin-left:140px">手机：</span></p><br>
          <p><span style="margin-left:120px">资金来源：</span><span style="margin-left:350px">项目资金：</span></p><br>
          <p><span style="margin-left:120px">财政资金：</span><span style="margin-left:220px">资金文号：</span><span style="margin-left:220px">自筹资金：</span></p><br>
          <p><span style="margin-left:92px">是否负责付款：</span>
            <span style="margin-left:220px">首付比例：</span>
            <span style="margin-left:220px">二次比例：</span>
          </p><br>
          <p><span style="margin-left:92px">是否需要巡检：</span>
            <span style="margin-left:352px">巡检是否完成：</span>
          </p><br>
          <p><span style="margin-left:120px">招标方式：</span><span style="margin-left:220px">开标日期：</span><span style="margin-left:220px">代理机构：</span></p><br>
          <p><span style="margin-left:120px">项目信息：</span></p>
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
  name: "xiangmulr",
  components: {
    Header,
  },
  data() {
    return {
      dialogTableVisible:false,
      dialogVisible: false,
      num:'',
      i1:'',
      i2:'',
      i3:'',
      i4:'',
      i5:'',
      i6:'',
      i7:'',
      i8:'',
      i9:'',
      i10:'',
      i11:'',
      i12:'',
      i13:'',
      i14:'',
      i15:'',
      i16:'',
      i17:'',
      i18:'',
      i19:'',
      i20:'',
      i21:'',
      i22:'',
      input: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      input7: "",
      radio: "",
      radio1:"",
      radio2:"",
      input8: "",
      input9: "",
      input10: "",
      tableData: [{
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          caoz:'查看 编辑 删除'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
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
          caoz:''
        }],
      gridData: [{
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
        multipleSelection: [],
        
    };
  }
};
</script>
<style scoped>
/* ::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
} */
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