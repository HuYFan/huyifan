<template>
    <div id="all">
        <Header></Header>
        <span class="sp1">教学设备管理>设备借出和归还>未处理借入申请</span>
    <div class="div1">
      <router-link to="/jierusq" class="sp2" tag="span"><<返回</router-link>
      <el-button type="danger" style="border-radius: 0%;width:135px;border:none" id="btn1">加入借入申请单</el-button>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:300px;margin-left:10px"></el-input>
      <el-button type="primary" style="background:#1AB394;border:none">查询</el-button>
      <template>
        <el-table ref="multipleTable" :data="tableData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="40" show-overflow-tooltip="true"></el-table-column>
          <el-table-column label="分类" width="156"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="100"></el-table-column>
          <el-table-column prop="a3" label="编码" width="120"></el-table-column>
          <el-table-column prop="a4" label="单价" width="100"></el-table-column>
          <el-table-column prop="a5" label="数量" width="100"></el-table-column>
          <el-table-column prop="a6" label="规格" width="100"></el-table-column>
          <el-table-column prop="a7" label="存放地点" width="120"></el-table-column>
          <el-table-column prop="a8" label="是否唯一" width="100"></el-table-column>
          <el-table-column prop="a9" label="入库时间" width="100"></el-table-column>
          <el-table-column prop="a10" label="操作" width="168"></el-table-column>
        </el-table>
      </template>
      <span id="span2">共5页，每页展示10条</span>
      <el-pagination background="#3DB9A0" layout="prev, pager, next" :total="50" id="fenye"></el-pagination>
    </div>
    <div class="div2">
        <p class="sp3">教学设备借入申请单</p>
       <template>
        <el-table ref="multipleTable" :data="gridData" border tooltip-effect="dark" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-left:34px;margin-top:15px" @selection-change="handleSelectionChange">
          <el-table-column label="分类" width="156"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column prop="a2" label="名称" width="90"></el-table-column>
          <el-table-column prop="a3" label="编码" width="100"></el-table-column>
          <el-table-column prop="a4" label="单价" width="90"></el-table-column>
          <el-table-column prop="a5" label="可用数量" width="90"></el-table-column>
          <el-table-column prop="a6" label="规格" width="100"></el-table-column>
          <el-table-column prop="a7" label="存放地点" width="100"></el-table-column>
          <el-table-column prop="a8" label="是否唯一" width="100"></el-table-column>
          <el-table-column prop="a9" label="入库时间" width="100"></el-table-column>
          <el-table-column prop="a11" label="借入数量" width="160"></el-table-column>
          <el-table-column prop="a10" label="操作" width="118"></el-table-column>
        </el-table>
      </template>
      <template><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="" style="width:130px;position:absolute;top:932px;left:1016px"></el-input-number></template>
      <template><el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="" style="width:130px;position:absolute;top:981px;left:1016px"></el-input-number></template>
      <template><el-input-number v-model="num2" @change="handleChange" :min="1" :max="10" label="" style="width:130px;position:absolute;top:1029px;left:1016px"></el-input-number></template>
      <el-button type="danger" @click="dialogTableVisible = true" style="margin-left:564px;margin-top:35px;border-radius: 0%;background:#1AB394;border:none">提交申请</el-button>
      <el-dialog title="借入申请提交" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
        <el-table :data="gridData1" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="margin-top:10px;">
          <el-table-column label="分类" width="165"><template slot-scope="scope">{{ scope.row.date }}实验室器材-玻璃器材</template></el-table-column>
          <el-table-column property="a2" label="名称" width="125">试管</el-table-column>
          <el-table-column property="a3" label="编码" width="125">13136722</el-table-column>
          <el-table-column property="a4" label="单价" width="125">5.00</el-table-column>
          <el-table-column property="a5" label="可用数量" width="125">1</el-table-column>
          <el-table-column property="a6" label="规格" width="125">普通</el-table-column>
          <el-table-column property="a7" label="存放地点" width="125">实验室1</el-table-column>
          <el-table-column property="a8" label="领用数量" width="115">1</el-table-column>
        </el-table>
        <p style="margin-top:20px;margin-left:20px"><span style="display: inline-block;padding-bottom: 56px;">备注（选填）：</span><el-input type="textarea" :rows="3" placeholder="可以填写您的借入原因" style="width:850px;margin-left:10px" v-model="textarea"></el-input></p>
        <span style="font-size:14px;margin-top:20px;display: inline-block;;margin-left:48px">借入时间:</span>
        <el-input suffix-icon="el-icon-date" v-model="input2" style="width:150px;margin-left:20px"></el-input><br>
        <span style="font-size:14px;margin-top:20px;display: inline-block;;margin-left:20px">预计归还时间:</span>
          <el-input suffix-icon="el-icon-date" v-model="input3" style="width:150px;margin-left:20px"></el-input>
        <span slot="footer" class="dialog-footer">
            <router-link to="/jierusq" tag="el-button" style="position: absolute;left: 380px;top:541px;background:#1AB394;width:100px;border:none;border-radius: 0%;color:white">提交</router-link>
          <el-button type="primary" @click="dialogTableVisible = false" style="position: absolute;left: 518px;top:541px;background:#ED5665;width:130px;border:none;border-radius: 0%">返回重新编辑</el-button>
        </span>
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
            num:'',
            num1:'',
            num2:'',
            dialogTableVisible:false,
            dialogVisible1:false,
      tableData: [{
          date: '行政办公设备-桌椅类',
          a2:'办公桌',
          a3:'03036752',
          a4:'100.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'加入借入申请单'
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:''
        }
      ],gridData:[{
          date: '行政办公设备-桌椅类',
          a2:'办公桌',
          a3:'03036752',
          a4:'100.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'移除'
        }, {
          date: '行政办公设备-桌椅类',
          a2:'椅子',
          a3:'03036710',
          a4:'50.00',
          a5:'12',
          a6:'普通',
          a7:'库房1',
          a8:'否',
          a9:'2017-11-6',
          a10:'移除'
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:'',
          a10:'移除'
        } 
     ],gridData1:[{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
     },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
     },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
     },{
         date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:''
     }]}
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
  height: 1200px;
  background-color: #f4f4f6;
}
.div2{
  width: 94%;
  background-color: white;
  height: 350px;
  margin-left: 3%;
  margin-top: 30px;
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
  height: 700px;
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
.sp3 {
  font-size: 16px;
  color: #606266;
  padding-top: 20px;
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