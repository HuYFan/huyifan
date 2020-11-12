<template>
  <div id="all">
    <Header></Header>
    <span class="sp1">教学设备管理>设备报修</span>
    <div class="div1">
      <span class="sp2">报修记录</span>
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
          <el-table-column property="a4" label="单价(元)" width="80"></el-table-column>
          <el-table-column property="a5" label="数量" width="80"></el-table-column>
          <el-table-column property="a6" label="规格" width="80"></el-table-column>
          <el-table-column property="a7" label="存放地点" width="80"></el-table-column>
          <el-table-column property="a10" label="是否唯一" width="80"></el-table-column>
          <el-table-column property="a8" label="入库时间" width="110"></el-table-column>
          <el-table-column property="a9" label="报修数量" width="140"></el-table-column>
        </el-table>
        <template><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" style="width:130px;position:absolute;top:187px;left:916px"></el-input-number></template>
        <span id="span3">共选中3项</span>
        <span style="font-size:14px;margin-top:20px;display: inline-block;">报修时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:20px"></el-input>
        <p style="margin-top:20px"><span style="display: inline-block;padding-bottom: 56px;">故障原因：</span><el-input type="textarea" :rows="3" style="width:950px;margin-left:10px" v-model="textarea"></el-input></p>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 446px;top:609px;background:#1AB394;width:100px;border:none;border-radius: 0%">提交</el-button>
        </span>
      </el-dialog>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:150px;margin-left:20px"></el-input>
      <span style="font-size:14px;margin-left:10px">报修时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:100px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:5px">修理时间:</span>
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
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="font-size:12px;width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="170"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="80"></el-table-column>
          <el-table-column prop="a3" label="编码" width="90"></el-table-column>
          <el-table-column prop="a4" label="单价(元)" width="80"></el-table-column>
          <el-table-column prop="a5" label="报修数量" width="70"></el-table-column>
          <el-table-column prop="a6" label="规格" width="70"></el-table-column>
          <el-table-column prop="a7" label="报修时间" width="85"></el-table-column>
          <el-table-column prop="a8" label="修理状态" width="70"></el-table-column>
          <el-table-column prop="a9" label="修理时间" width="90"></el-table-column>
          <el-table-column prop="a10" label="维修花销" width="75"></el-table-column>
          <el-table-column prop="a11" label="审批状态" width="80"></el-table-column>
          <el-table-column prop="a12" label="操作" width="204"></el-table-column>
        </el-table>
      </template>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:259px;left:1084px;opacity:0;font-size:12px">查看详情</el-button>
      <el-button type="text" @click="dialogVisible = true" style="color:#606266;position:absolute;top:259px;left:1126px;opacity:0;font-size:12px">编辑</el-button>
      <el-dialog title="挂失详情" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-50px">03036752</span><span style="margin-left:20px">行政办公设备</span><span style="margin-left:20px">办公桌</span></p><br>
        <p><span style="margin-left:50px">单价：100.00元</span><span style="margin-left:200px">挂失数量：1</span></p><br>
        <p><span style="margin-left:50px">规格：普通</span><span style="margin-left:230px">存放地点：库房1</span></p><br>
        <p><span style="margin-left:50px">是否唯一：否</span><span style="margin-left:216px">入库时间：2017-10-6</span></p><br>
        <p><span style="margin-left:50px">报修时间：2017-12-09</span><span style="margin-left:152px">故障原因：易耗品损坏</span></p><br>
        <p><span style="margin-left:50px">维修时间：2017-12-09</span><span style="margin-left:152px">维修金额：1000元</span></p>
        <img src="../../assets/tongguo.png" style="position:absolute;left:479px;top:61px">
      </el-dialog>
      <el-button type="text" @click="dialogVisible1 = true" style="color:#606266;font-size:12px;position:absolute;top:259px;left:1163px;opacity:0">完成维修</el-button>
      <el-dialog title="完成维修" :visible.sync="dialogVisible1" width="35%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-10px">03036752</span><span style="margin-left:20px">行政办公设备</span><span style="margin-left:20px">办公桌</span></p><br>
        <p style="text-align:center">已完成维修！</p><br>
        <p style="text-align:center"><span style="margin-left:-10px">维修花费金额：</span><el-input v-model="input4" style="width:100px;"></el-input> 元</p><br><br>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible1 = false" style="display:inline;width:100px;background:#1AB394;border:none;border-radius:0%;position:absolute;top: 227px;left:185px">提交</el-button>
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
  name: "shebeiruku",
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
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'2017-10-6',
          a8:'未修理',
          a9:'一',
          a10:'一',
          a11:'已通过',
          a12:'查看详情 编辑 完成维修 取消报修'
        }, {
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'2017-10-6',
          a8:'已修理',
          a9:'2017-11-6',
          a10:'25',
          a11:'已通过',
          a12:'查看详情 编辑 取消报修'
        }, {
         date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'2017-10-6',
          a8:'未修理',
          a9:'一',
          a10:'一',
          a11:'审核中',
          a12:'查看详情 编辑 取消报修'
        }, {
          date: '行政办公设备-桌椅类',
          a2: '办公桌',
          a3: '03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'2017-10-6',
          a8:'未修理',
          a9:'一',
          a10:'一',
          a11:'已拒绝',
          a12:'查看详情 编辑 取消报修'
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
::v-deep.el-table th > .cell {
    text-align: center;
}
::v-deep.el-table .cell {
    text-align: center;
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