<template>
    <div>
        <el-button type="text" @click="dialogVisible = true" style="color:#606266;font-size:12px;position:absolute;top:266px;left:1170px;opacity:0">查看</el-button>
        <el-button type="text" @click="dialogVisible = true" style="color:#606266;font-size:12px;position:absolute;top:337px;left:1159px;opacity:0">查看</el-button>
        <el-button type="text" @click="dialogVisible = true" style="color:#606266;font-size:12px;position:absolute;top:408px;left:1159px;opacity:0">查看</el-button>
        <el-button type="text" @click="dialogVisible = true" style="color:#606266;font-size:12px;position:absolute;top:479px;left:1159px;opacity:0">查看</el-button>
        <el-button type="text" @click="dialogVisible = true" style="color:#606266;font-size:12px;position:absolute;top:550px;left:1159px;opacity:0">查看</el-button>
        <el-dialog title="归还" :visible.sync="dialogVisible" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-50px">03036752</span><span style="margin-left:20px">行政办公设备</span><span style="margin-left:20px">办公桌</span></p><br>
        <p><span style="margin-left:50px">单价：100.00元</span><span style="margin-left:200px">规格：普通</span></p><br>
        <p><span style="margin-left:50px">存放地点：实验室1</span><span style="margin-left:178px">借用人姓名：李飘飘</span></p><br>
        <p><span style="margin-left:50px">借出时间：2017-11-15</span><span style="margin-left:151px">借出数量：10</span></p><br>
        <p><span style="margin-left:50px">归还数量：10</span><span style="margin-left:212px">是否有损坏：是</span></p><br>
        <p><span style="margin-left:50px">情况说明：借出时使用不当造成损坏</span></p><br>
      </el-dialog>
      <el-button type="text" @click="dialogVisible1 = true" style="color:#606266;font-size:12px;position:absolute;top:266px;left:1197px;opacity:0">归还</el-button>
      <el-button type="text" @click="dialogVisible1 = true" style="color:#606266;font-size:12px;position:absolute;top:408px;left:1187px;opacity:0">归还</el-button>
        <el-dialog title="归还" :visible.sync="dialogVisible1" width="45%" :before-close="handleClose">
        <p style="text-align:center"><span style="margin-left:-50px">03036752</span><span style="margin-left:20px">行政办公设备</span><span style="margin-left:20px">办公桌</span></p><br>
        <p><span style="margin-left:50px">单价：100.00元</span><span style="margin-left:200px">规格：普通</span></p><br>
        <p><span style="margin-left:50px">存放地点：实验室1</span><span style="margin-left:178px">借用人姓名：李飘飘</span></p><br>
        <p><span style="margin-left:50px">借出时间：2017-11-15</span><span style="margin-left:151px">借出数量：10</span></p><br>
        <p><span style="margin-left:50px">归还数量：<el-input-number v-model="num" :step="1" style="width:150px"></el-input-number></span><span style="margin-left:78px">是否有损坏：<el-radio v-model="radio" label="1">是</el-radio><el-radio v-model="radio" label="2">否</el-radio></span></p><br>
        <p><span style="margin-left:50px"><span style="position:relative;top:-50px">情况说明：</span><el-input type="textarea" :rows="3" style="width:350px;" v-model="textarea"></el-input></span></p><br>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible1 = false" style="position: absolute;left: 251px;top:394px;background:#1AB394;width:100px;border:none">提交</el-button>
        </span>
      </el-dialog>
      <el-button type="text" @click="dialogVisible2 = true" style="color:#606266;font-size:12px;position:absolute;top:408px;left:1225px;opacity:0">挂失</el-button>
      <el-button type="text" @click="dialogVisible2 = true" style="color:#606266;font-size:12px;position:absolute;top:266px;left:1214px;opacity:0">挂失</el-button>
        <el-dialog title="借出挂失" :visible.sync="dialogVisible2" width="45%" :before-close="handleClose">
        <p><span style="margin-left:50px">分类：行政办公设备</span><span style="margin-left:182px">名称：办公桌</span></p><br>
        <p><span style="margin-left:50px">编码：03036752</span><span style="margin-left:200px">单价：100.00元</span></p><br>
        <p><span style="margin-left:50px">规格：普通</span><span style="margin-left:237px">存放地点：实验室1</span></p><br>
        <p><span style="margin-left:50px">借用人姓名：李飘飘</span><span style="margin-left:181px">借出时间：2017-11-15</span></p><br>
        <p><span style="margin-left:50px">借出数量：10</span><span style="margin-left:221px">归还数量：0</span></p><br>
        <p><span style="margin-left:50px">挂失数量：<el-input-number v-model="num" :step="1" style="width:150px"></el-input-number></span></p><br>
        <p><span style="margin-left:50px"><span style="position:relative;top:-50px">挂失原因：</span><el-input type="textarea" :rows="3" style="width:350px;" v-model="textarea"></el-input></span></p><br>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="dialogVisible2 = false" style="position: absolute;left: 251px;top:433px;background:#1AB394;width:100px;border:none">提交</el-button>
        </span>
      </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
    return {
      num: 10,
      dialogVisible2: false,
      dialogVisible: false,
      dialogVisible1: false
    }
    }
}
</script>