<template>
  <div id="app">
    <router-link to="/" class="title" tag="div">&nbsp;<strong>XX学校资产管理系统</strong></router-link>
    <el-dropdown trigger="click" class="sp2">
      <span style="font-size:16px;cursor: pointer;">资产管理</span>
      <el-dropdown-menu slot="dropdown" class="xiala" id="lef" style="">
        <el-dropdown-item>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>教学设备</strong>
              </li>
              <router-link to="/shebeiruku" tag="li" class="li2">入库</router-link>
              <router-link to="/jiecguih" tag="li" class="li2">借出和归还</router-link>
              <router-link to="/shebeiguas" tag="li" class="li2">挂失</router-link>
              <router-link to="/shebeibaox" tag="li" class="li2">报修</router-link>
              <router-link to="/shebeibaof" tag="li" class="li2">报废</router-link>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>易耗品<span style="opacity:0">啊</span></strong>
              </li>
              <router-link to="/yihaoruku" tag="li" class="li2">入库</router-link>
              <router-link to="/yihaofenfa" tag="li" class="li2">分发</router-link>
              <router-link to="/yihaohex" tag="li" class="li2">核销</router-link>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>地产<span style="opacity:0">啊啊</span>
                </strong>
              </li>
              <router-link to="/dichandj" tag="li" class="li2">登记</router-link>
              <router-link to="/dichangz" tag="li" class="li2">改造</router-link>
              <li class="li2">核销</li>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>房产<span style="opacity:0">啊啊</span>
                </strong>
              </li>
              <router-link to="/fangchandj" tag="li" class="li2">登记</router-link>
              <router-link to="/fangchanwx" tag="li" class="li2">维修</router-link>
              <router-link to="/fangchangz" tag="li" class="li2">改造</router-link>
              <li class="li2">核销</li>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>其他资产</strong>
              </li>
              <router-link to="/shebeiruku" tag="li" class="li2">入库</router-link>
              <router-link to="/shebeiguas" tag="li" class="li2">挂失</router-link>
              <router-link to="/shebeibaox" tag="li" class="li2">报修</router-link>
              <router-link to="/shebeibaof" tag="li" class="li2">报废</router-link>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>项目<span style="opacity:0">啊啊</span>
                </strong>
              </li>
              <router-link to="/xiangmulr" tag="li" class="li2">录入</router-link>
            </ul>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown trigger="click" class="sp1">
      <span style="font-size:16px;cursor: pointer;">申请&审批</span>
      <el-dropdown-menu slot="dropdown" class="xiala2">
        <el-dropdown-item>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>申请</strong>
              </li>
              <router-link to="/jierusq" tag="li" class="li2">教学设备借入申请</router-link>
              <router-link to="/lingyongsq" tag="li" class="li2">易耗品领用申请</router-link>
              <router-link to="/caigousq" tag="li" class="li2">采购申请</router-link>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>审批</strong>
              </li>
              <li class="li2">教学设备借入审批</li>
              <li class="li2">易耗品领用审批</li>
              <li class="li2">采购审批</li>
            </ul>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown trigger="click" class="sp1">
      <span style="font-size:16px;cursor: pointer;">统计</span>
      <el-dropdown-menu slot="dropdown" class="xiala3">
        <el-dropdown-item>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>统计</strong>
              </li>
              <li class="li3">库存</li>
              <li class="li3">台账</li>
              <li class="li3">盘点</li>
            </ul>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown trigger="click" class="sp1">
      <span style="font-size:16px;cursor: pointer;">设置</span>
      <el-dropdown-menu slot="dropdown" class="xiala4">
        <!-- <div x-arrow="" class="popper__arrow" style="display:none !important;"></div> -->
        <el-dropdown-item>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>基础设置</strong>
              </li>
              <li class="li2">审批流程设置</li>
              <li class="li2">资产存放地点设置</li>
              <li class="li2">资产分类设置</li>
            </ul>
          </div>
          <div class="eldiv">
            <ul class="ul1">
              <li class="li1">
                <strong>系统设置</strong>
              </li>
              <li class="li2">组织结构管理</li>
              <li class="li2">用户管理</li>
              <li class="li2">角色管理</li>
            </ul>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span style="font-size:16px;cursor: pointer;" class="sp1">操作日志</span>
    <span style="font-size:16px;" class="sp1">帮助</span>
    <img src="../assets/u9.png" id="img1">
    <span class="sp3">张小丰</span>
    <span class="sp4">学校管理员</span>
  </div>
</template>
<style scoped>
::v-deep.el-popper[x-placement^=bottom] .popper__arrow{
  display: none;
}

#app {
  background-color: #273341;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
}
.title {
  border-left: 4px solid #1ab394;
  color: white;
  font-size: 18px;
  margin-left: 0.7%;
  cursor: pointer;
}
.eldiv {
  color: white !important;
}
.li1 {
  cursor: text;
}
.xiala {
  background-color: #273341 !important;
  color: white;
  width: 40%;
  position: absolute;
  left: 340px !important;
}
.xiala2 {
  background-color: #273341 !important;
  color: white;
  width: 38%;
  position: absolute;
  left: 475px !important;
}
.xiala3 {
  background-color: #273341 !important;
  color: white;
  width: 20%;
  position: absolute;
  left: 625px !important;
}
.xiala4 {
  background-color: #273341 !important;
  color: white;
  width: 40%;
  position: absolute;
  left: 725px !important;
}
.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #273341;
  color: white;
}
el-dropdown-item {
  display: inline-block;
}
.el-dropdown-menu__item {
  color: white;
}
span {
  color: white;
}
.ul1 li {
  display: inline-block;
}
.li2 {
  margin-left: 10%;
}
.li3 {
  margin-left: 15%;
}
.sp1 {
  display: inline-block;
  margin-left: 5.4%;
}
.sp2 {
  display: inline-block;
  margin-left: 13.7%;
}
.el-dropdown-menu{
  border: none;
  border-radius: 0%;
}
#img1{
  width: 45px;
  margin-left: 100px;
}
.sp3{
  font-size: 14px;
  margin-left: 10px;
}
.sp4{
  background-color: #1AB394;
  font-size: 14px;
  display: inline-block;
  width: 80px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  margin-left: 10px;
}
</style>