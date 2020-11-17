<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">地产管理>地产改造</span>
    <div class="div1">
      <span class="sp2">改造记录</span>
      <el-button type="danger" @click="dialogTableVisible = true" style="border-radius: 0%;" id="btn1" >+新增改造</el-button>
      <el-dialog title="新增改造" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
          <el-input v-model="input" placeholder="请输入编码或名称" style="width:300px;margin-left:0px"></el-input>
          <el-button type="primary" style="border-radius:0%;background:#1AB394;border:none">查询</el-button>
        <el-table :data="gridData" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="margin-top:10px;">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="编码" width="165"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="a2" label="名称" width="165"></el-table-column>
          <el-table-column property="a3" label="土地面积（㎡）" width="165"></el-table-column>
          <el-table-column property="a4" label="建筑面积（㎡）" width="165"></el-table-column>
          <el-table-column property="a5" label="非建筑面积（㎡）" width="165"></el-table-column>
          <el-table-column property="a6" label="地址" width="165"></el-table-column>
        </el-table>
        <span id="span3">共选中3项</span>
        <span style="font-size:14px;margin-top:20px;display: inline-block;">改造时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:20px"></el-input>
        <span style="font-size:14px;margin-left:10px">一</span>
          <el-input suffix-icon="el-icon-date" v-model="input3" style="width:150px;margin-left:10px"></el-input>
        <p style="margin-top:20px"><span style="display: inline-block;padding-bottom: 56px;">改造内容及原因：</span><el-input type="textarea" :rows="3" style="width:850px;margin-left:10px" v-model="textarea"></el-input></p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 446px;top:609px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
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
          <el-table-column label="编码" width="170"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="name" label="名称" width="90"></el-table-column>
          <el-table-column prop="bianma" label="土地面积（㎡）" width="130"></el-table-column>
          <el-table-column prop="danj" label="建筑面积（㎡）" width="130"></el-table-column>
          <el-table-column prop="shul" label="非建筑面积（㎡）" width="140"></el-table-column>
          <el-table-column prop="guig" label="地址" width="100"></el-table-column>
          <el-table-column prop="cunf" label="改造开始时间" width="110"></el-table-column>
          <el-table-column prop="shif" label="改造结束时间" width="110"></el-table-column>
          <el-table-column prop="caoz" label="操作" width="184"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:257px;left:1126px;opacity:0">查看详情</el-button>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:257px;left:1176px;opacity:0">编辑</el-button>
        <el-dialog title="编辑" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-10px">0001110000</span><span style="margin-left:20px">实验中学宿舍区</span></p><br>
        <p><span style="margin-left:50px">土地面积：1000000㎡</span><span style="margin-left:150px">建筑面积：500000㎡</span></p><br>
        <p><span style="margin-left:50px">非建筑面积：500000㎡</span></p><br>
        <p><span style="margin-left:50px">地址：陕西省西安市XX区XX路100号</span></p><br>
        <p><span style="margin-left:50px">改造时间：<el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:5px"></el-input>
            <span style="font-size:14px;margin-left:5px">一</span>
            <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:5px"></el-input></span>
        </p><br>
        <p><span style="margin-left:50px;display: inline-block;padding-bottom: 56px;">改造内容：</span><el-input type="textarea" :rows="3" style="width:350px;margin-left:5px" v-model="textarea"></el-input></p><br>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false" style="position: absolute;left: 245px;top:390px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
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
  name: "shebeiguas",
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
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          caoz:'查看详情 编辑 删除'
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