<template>
    <div id="all">
        <Header></Header>
        <span class="sp1">教学设备管理>设备借出和归还>未处理借入申请</span>
    <div class="div1">
      <router-link to="/yihaofenfa" class="sp2" tag="span"><<返回</router-link><br><br>
      <p class="sp2">选择分发物品</p><br><br><br>
      <el-input v-model="input8" placeholder="请输入编码或名称" style="width:200px;margin-left:35px;"></el-input>
      <span style="font-size:14px;margin-left:10px">入库时间:</span>
      <el-input suffix-icon="el-icon-date" v-model="input9" style="width:150px;margin-left:10px"></el-input>
      <span style="font-size:14px;margin-left:10px">一</span>
      <el-input suffix-icon="el-icon-date" v-model="input10" style="width:150px;margin-left:10px"></el-input>
      <el-button type="primary" style="margin-left:10px;background:#1AB394;border:none;border-radius:0%">查询</el-button>
      <template>
        <el-table :data="tableData" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 95%;margin-top:15px;margin-left:35px">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="分类" width="170"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="a2" label="名称" width="110"></el-table-column>
          <el-table-column property="a3" label="编码" width="120"></el-table-column>
          <el-table-column property="a4" label="单价(元)" width="120"></el-table-column>
          <el-table-column property="a5" label="数量" width="120"></el-table-column>
          <el-table-column property="a6" label="规格" width="120"></el-table-column>
          <el-table-column property="a7" label="存放地点" width="120"></el-table-column>
          <el-table-column property="a8" label="入库时间" width="130"></el-table-column>
          <el-table-column property="a9" label="分发个数" width="154"></el-table-column>
        </el-table>
        <template><el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字" style="width:130px;position:absolute;top:306px;left:1137px"></el-input-number></template>
        <span id="span3">共选中3项</span>
      </template>
      <span id="span4">选择领用人</span>
      <div id="div2">
        <el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[1, 9]" :default-checked-keys="[11]" :props="defaultProps"></el-tree>
      </div>
      <div id="div3">
        <el-input v-model="input8" placeholder="请输入姓名或用户名" style="width:240px;margin-left:35px;"></el-input>
        <el-button type="primary" style="background:#1AB394;border:none;border-radius:0%">查询</el-button>
        <template>
        <el-table :data="tableData1" border :header-cell-style="{background:'#D7D7D7',color:'#666666'}" style="width: 93%;margin-top:15px;margin-left:35px">
          <el-table-column type="selection" width="40"></el-table-column>
          <el-table-column label="姓名" width="240"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="a2" label="用户名" width="240"></el-table-column>
          <el-table-column property="a3" label="所属部门" width="240"></el-table-column>
        </el-table>
      </template>
      <span id="span5">共选中15人</span>
      </div>
      <el-button type="primary" style="margin-left:35px;margin-top:30px;background:#1AB394;border:none;border-radius:0%;width:100px">提交</el-button>
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
        num:'1',
        dialogTableVisible:false,
        dialogVisible1:false,
       tableData1:[{
          date:'张磊',
          a2:'zhanglei',
          a3:'行政管理部'
        },{
          date:'李飘飘',
          a2:'lipiaopiao',
          a3:'理科组'
        },{
          date:'张小英',
          a2:'zhangxiaoying',
          a3:'语文组'
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
        },{
          date:'',
          a2:'',
          a3:''
       }],
       tableData: [{
          date: '行政办公设备-桌椅类',
          a2:'办公桌',
          a3:'03036752',
          a4:'100.00',
          a5:'1',
          a6:'普通',
          a7:'实验室1',
          a8:'2017-10-6',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
        }, {
          date: '',
          a2:'',
          a3:'',
          a4:'',
          a5:'',
          a6:'',
          a7:'',
          a8:'',
          a9:''
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
        ],data: [{
          id: 1,
          label: '01恒谦中学',
          children: [{
            id: 4,
            label: '011初中部',
            children:[{
              id:16,
              label:''
            }]
          },{
            id:9,
            label:'012高中部',
            children:[{
              id:10,
              label:'012a数学组'
            },{
              id:11,
              label:'012b语文组'
            },{
              id:12,
              label:'012c英语组'
            },{
              id:13,
              label:'012d理科组'
            },{
              id:14,
              label:'012e文科组'
            }]
          },{
            id:15,
            label:'013行政组',
            children:[{
              id:15,
              label:''
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
        }
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
#div2{
  width: 400px;
  height: 610px;
  border: 1px solid #999999;
  margin-left: 35px;
  margin-top: 15px;
}
#div3{
  margin-left: 450px;
  margin-top: -612px;
}
#all {
  width: 100%;
  height: 1600px;
  background-color: #f4f4f6;
}
.div1 {
  width: 94%;
  background-color: white;
  height: 1450px;
  margin-left: 3%;
  margin-top: 10px;
}
#span4{
  display: block;
  margin-top: 30px;
   margin-left: 35px;
   color: #666666;
}
#span3{
    display: block;
    margin-top: 10px;
    color: #1C85C7;
    font-size: 13px;
    margin-left: 35px;
}
#span5{
  display: block;
    margin-top: 10px;
    color: #1C85C7;
    font-size: 13px;
    margin-left: 35px;
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
.sp2 {
  float: left;
  font-size: 16px;
  color: #606266;
  margin-top: 20px;
  margin-left: 35px;
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