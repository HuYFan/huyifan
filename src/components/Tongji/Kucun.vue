<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">统计分析>库存</span>
    <div class="div1">
      <span class="sp2">库存记录</span>
      <el-button style="border-radius: 0%;background:#1AB394;border:none;color:white" id="btn1" >教学设备库存</el-button>
      <el-button style="border-radius: 0%;background:#E4E4E4;border:none;color:#666666">易耗品库存</el-button>
      <el-button style="border-radius: 0%;background:#E4E4E4;border:none;color:#666666">其他资产库存</el-button><br>
      <span style="display:inline-block;font-size:14px;color:#666666;margin-left:33px;margin-top:20px">教学设备目录：一级目录</span>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:534px"></el-input>
      <el-button type="primary" style="background:#1AB394;border:none">查询</el-button>
      <el-dropdown trigger="click">
        <el-button type="primary" style="margin-left:30px;background:#F3A64C;border:none" class="el-dropdown-link"><span class="el-dropdown-link">
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
          <el-table-column label="编码" width="150"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="一级目录" width="140"></el-table-column>
          <el-table-column prop="a3" label="库存数量" width="140"></el-table-column>
          <el-table-column prop="a4" label="借出数量" width="140"></el-table-column>
          <el-table-column prop="a5" label="挂失数量" width="140"></el-table-column>
          <el-table-column prop="a6" label="报废数量" width="150"></el-table-column>
          <el-table-column prop="a7" label="累计数量" width="150"></el-table-column>
          <el-table-column prop="a8" label="操作" width="154"></el-table-column>
        </el-table>
      </template>
      <img src="../../assets/kucun.png" style="margin-left:35px;margin-top:10px">
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
          date: '00001',
          a2: '行政办公设备',
          a3: '10000',
          a4:'100',
          a5:'100',
          a6:'100',
          a7:'10300',
          a8:'查看下级目录',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
         date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }, {
          date: '',
          a2: '',
          a3: '',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
        }],
        multipleSelection: [],
        
    };
  }
};
</script>
<style scoped>
#all {
  width: 100%;
  height: 1300px;
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
  height:1150px;
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