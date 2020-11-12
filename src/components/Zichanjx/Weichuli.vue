<template>
    <div id="all">
        <Header></Header>
        <span class="sp1">教学设备管理>设备借出和归还>未处理借入申请</span>
    <div class="div1">
      <router-link to="/jiecguih" class="sp2" tag="span"><<返回</router-link>
      <el-button type="danger" style="border-radius: 0%;width:100px;background:#1AB394;border:none" id="btn1">借出</el-button>
      <el-button type="danger" @click="dialogVisible1 = true" style="border-radius: 0%;width:100px;background:#ED5665;border:none" id="btn2">拒绝</el-button>
      <el-button type="text" @click="dialogVisible1 = true" style="color:#606266;position:absolute;top:255px;left:1142px;z-index:100;opacity:0">拒绝</el-button>
      <el-dialog title="归还" :visible.sync="dialogVisible1" width="35%" :before-close="handleClose">
      <p><span><span style="position:relative;top:-100px">拒绝原因：</span><el-input type="textarea" :rows="5" style="width:350px;" v-model="textarea"></el-input></span></p><br>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false" style="border-radius: 0%;position: absolute;left: 181px;top:224px;background:#ED5665;width:100px;border:none">确认拒绝</el-button>
        </span>
      </el-dialog>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="申请人姓名" width="166"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="所在部门" width="166"></el-table-column>
          <el-table-column prop="a3" label="申请时间" width="166"></el-table-column>
          <el-table-column prop="a4" label="借入设备" width="166"></el-table-column>
          <el-table-column prop="a5" label="借入时间" width="166"></el-table-column>
          <el-table-column prop="a6" label="预计归还时间" width="166"></el-table-column>
          <el-table-column prop="a7" label="操作" width="167"></el-table-column>
        </el-table>
      </template>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
      <el-button type="text" @click="dialogTableVisible = true" style="position:absolute;left: 622px;top: 255px;color:#606266;opacity:0">查看详情</el-button>
      <el-button type="text" @click="dialogTableVisible = true" style="position:absolute;left: 613px;top: 303px;color:#606266;opacity:0">查看详情</el-button>
      <el-button type="text" @click="dialogTableVisible = true" style="position:absolute;left: 613px;top: 351px;color:#606266;opacity:0">查看详情</el-button>
      <el-dialog title="设备详情" :visible.sync="dialogTableVisible" style="width:165%;margin-left:-430px;">
        <el-table :data="gridData" border style="font-size:12px">
          <el-table-column label="分类" width="135"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="b2" label="名称" width="135"></el-table-column>
          <el-table-column property="b3" label="编码" width="135"></el-table-column>
          <el-table-column property="b4" label="单价(元)" width="135"></el-table-column>
          <el-table-column property="b5" label="规格" width="135"></el-table-column>
          <el-table-column property="b6" label="存放地点" width="135"></el-table-column>
          <el-table-column property="b7" label="是否唯一" width="135"></el-table-column>
          <el-table-column property="b8" label="借入数量" width="140"></el-table-column>
        </el-table>
      </el-dialog>
    </div>
    </div>
</template>
<script>
import Header from '../Header'
export default {
    components:{
        Header
    },
    data() {
        return {
            dialogTableVisible:false,
            dialogVisible1:false,
            tableData: [{
          date: '李飘飘',
          a2:'',
          a3:'2017-11-6',
          a4:'查看详情',
          a5:'2017-11-16',
          a6:'2017-11-26',
          a7:'借出 拒绝',
        }, {
          date: '李飘飘',
          a2:'',
          a3:'2017-11-6',
          a4:'查看详情',
          a5:'2017-11-16',
          a6:'2017-11-26',
          a7:'',
        }, {
          date: '李飘飘',
          a2:'',
          a3:'2017-11-6',
          a4:'查看详情',
          a5:'2017-11-16',
          a6:'2017-11-26',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
        }
        ],gridData:[{

          date: '实验室器材-玻璃器材',
          b2:'试管',
          b3:'13136722',
          b4:'5.00',
          b5:'普通',
          b6:'实验室1',
          b7:'是',
          b8:'1'
        }, {
          date: '实验室器材-玻璃器材',
          b2:'试管',
          b3:'13136722',
          b4:'5.00',
          b5:'普通',
          b6:'实验室1',
          b7:'是',
          b8:'1'
        }, {
          date: '实验室器材-玻璃器材',
          b2:'试管',
          b3:'13136722',
          b4:'5.00',
          b5:'普通',
          b6:'实验室1',
          b7:'是',
          b8:'1'
        }, {
          date: '实验室器材-玻璃器材',
          b2:'试管',
          b3:'13136722',
          b4:'5.00',
          b5:'普通',
          b6:'实验室1',
          b7:'是',
          b8:'1'
        } 
        ]}
    },
}
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
  cursor: pointer;
}
#btn1 {
  margin-top: 55px;
  margin-left: -55px;
}
#btn2 {
  margin-top: 55px;
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