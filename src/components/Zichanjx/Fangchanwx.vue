<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">房产管理>房产维修</span>
    <div class="div1">
      <span class="sp2">维修记录</span>
      <el-button type="danger" @click="dialogTableVisible = true" style="border-radius: 0%;" id="btn1" >+新增维修</el-button>
      <el-dialog title="新增维修" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
          <el-input v-model="input" placeholder="请输入编码或名称" style="width:300px;margin-left:0px"></el-input>
          <span style="font-size:14px;margin-left:10px">开发时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:5px"></el-input>
        <span style="font-size:14px;margin-left:5px">一</span>
        <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:5px"></el-input>
          <el-button type="primary" style="border-radius:0%;background:#1AB394;border:none;margin-left:10px">查询</el-button>
        <el-table :data="gridData" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="margin-top:10px;">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="编码" width="115"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="a2" label="名称" width="100"></el-table-column>
          <el-table-column property="a3" label="是否拥有房产证" width="90"></el-table-column>
          <el-table-column property="a4" label="产权性质" width="115"></el-table-column>
          <el-table-column property="a5" label="房屋坐落" width="115"></el-table-column>
          <el-table-column property="a6" label="房屋结构" width="115"></el-table-column>
          <el-table-column property="a4" label="层数" width="110"></el-table-column>
          <el-table-column property="a5" label="建筑面积（㎡）" width="115"></el-table-column>
          <el-table-column property="a6" label="套内建筑面积（㎡）" width="115"></el-table-column>
        </el-table>
        <span id="span3">共选中3项</span>
        <span style="font-size:14px;margin-top:20px;display: inline-block;">维修时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:20px"></el-input>
        <span style="font-size:14px;margin-left:10px">一</span>
          <el-input suffix-icon="el-icon-date" v-model="input3" style="width:150px;margin-left:10px"></el-input>
        <p style="margin-top:20px"><span style="display: inline-block;padding-bottom: 56px;">维修原因：</span><el-input type="textarea" :rows="3" style="width:950px;margin-left:10px" v-model="textarea"></el-input></p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 446px;top:633px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">维修时间:</span>
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
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="font-size:12px;width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="编码" width="120"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="80"></el-table-column>
          <el-table-column prop="a3" label="是否拥有房产证" width="110"></el-table-column>
          <el-table-column prop="a4" label="产权性质" width="90"></el-table-column>
          <el-table-column prop="a5" label="房屋坐落" width="90"></el-table-column>
          <el-table-column prop="a6" label="房屋结构" width="90"></el-table-column>
          <el-table-column prop="a7" label="层数" width="80"></el-table-column>
          <el-table-column prop="a8" label="建筑面积（㎡）" width="105"></el-table-column>
          <el-table-column prop="a9" label="套内建筑面积（㎡）" width="135"></el-table-column>
          <el-table-column prop="a10" label="维修开始时间" width="65"></el-table-column>
          <el-table-column prop="a11" label="维修结束时间" width="65"></el-table-column>
          <el-table-column prop="a12" label="操作" width="134"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:281px;left:1160px;opacity:0;font-size:12px">查看详情</el-button>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:281px;left:1201px;opacity:0;font-size:12px">编辑</el-button>
        <el-dialog title="编辑" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-10px">0001110000</span><span style="margin-left:20px">实验中学宿舍区</span></p><br>
        <p><span style="margin-left:50px">是否拥有房产证：是</span><span style="margin-left:180px">产权性质：</span></p><br>
        <p><span style="margin-left:50px">房屋坐落：陕西省西安市XX区XX路100号</span><span style="margin-left:49px">房屋结构：砖混结构</span></p><br>
        <p><span style="margin-left:50px">层数：10</span><span style="margin-left:247px">建筑面积：1000㎡</span></p><br>
        <p><span style="margin-left:50px">套内建筑面积：900㎡</span></p><br>
        <p><span style="margin-left:50px">维修时间：<el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:5px"></el-input>
            <span style="font-size:14px;margin-left:5px">一</span>
            <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:5px"></el-input></span>
        </p><br>
        <p><span style="margin-left:50px;display: inline-block;padding-bottom: 56px;">维修内容：</span><el-input type="textarea" :rows="3" style="width:350px;margin-left:5px" v-model="textarea"></el-input></p><br>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false" style="position: absolute;left: 245px;top:430px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
      </el-dialog>
      <el-button type="primary" style="display:inline;background:white;border:1px solid #1AB394;color:#1AB394;border-radius:0%;cursor:text;position:absolute;top: 787px;left:74px">批量删除</el-button>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
      
    </div>
  </div>
</template>
<script>
import Header from "../Header";
export default {
  name: "fangchanwx",
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
          a12:'查看详情 编辑 删除'
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