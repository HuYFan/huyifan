<template>
    <div>
    <el-button type="text" @click="dialogTableVisible = true" style="position:absolute;left: 1181px;top: 257px;color:#606266;opacity:0">{{bj}}</el-button>
      <el-button type="primary" @click="dialogTableVisible = true" style="position:absolute;left: 64px;top: 765px;background:white;color:#ED5665;border:1px solid #ED5665;border-radius: 0%;">{{sb}}</el-button>
      <el-dialog title="数据上报" :visible.sync="dialogTableVisible" style="width:158%;margin-left:-400px">
        <el-table :data="gridData" :header-cell-style="{background:'#D7D7D7',color:'#666666'}" border>
          <el-table-column label="分类" width="160"><template slot-scope="scope">{{ scope.row.date }}</template></el-table-column>
          <el-table-column property="name" label="名称" width="70"></el-table-column>
          <el-table-column property="bianma" label="编码" width="100"></el-table-column>
          <el-table-column property="danj" label="单价(元)" width="100"></el-table-column>
          <el-table-column property="shul" label="数量" width="100"></el-table-column>
          <el-table-column property="guig" label="规格" width="100"></el-table-column>
          <el-table-column property="cunf" label="存放地点" width="120"></el-table-column>
          <el-table-column property="shif" label="是否唯一" width="100"></el-table-column>
          <el-table-column property="time" label="入库时间" width="100"></el-table-column>
          <el-table-column property="zhuangt" label="上报状态" width="80"></el-table-column>
        </el-table>
        <span id="span1">注：再次编辑已上报的数据将会覆盖原有上报数据，而不会新增数据。</span>
        <el-button type="primary" @click="dialogTableVisible = false" style="background:white;color:#ED5665;border:1px solid #ED5665;border-radius: 0%;top:25px;position:relative;">确定上传</el-button>
      </el-dialog>
      </div>
</template>
<script>
export default {
    name:'shujusb1',
    props:{
        bj:{
            type:String,
            default:''
        },
        sb:{
          type:String,
           default:''
        }
    },
    data() {
        return {
          dialogTableVisible: false,
          dialogFormVisible: false,
        gridData: [{
          date: '行政办公设备-桌椅类',
          name: '办公桌',
          bianma: '03036752',
          danj:'100.00',
          shul:'1',
          guig:'普通',
          cunf:'库房1',
          shif:'否',
          time:'2017-11-6',
          zhuangt:'✔'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'✔'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'未上报'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:'未上报'
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }, {
          date: '',
          name: '',
          bianma: '',
          danj:'',
          shul:'',
          guig:'',
          cunf:'',
          shif:'',
          time:'',
          zhuangt:''
        }],
        }
    },
}
</script>
<style scoped>
#span1{
  display: inline-block;
  color: #ED5665;
  margin-top: 30px;
}
</style>