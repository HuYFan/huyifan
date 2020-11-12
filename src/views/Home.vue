<template>
  <div class="home">
    <Header></Header>
    <div class="a1">
      <el-badge :value="9" class="item">
        <el-button>待办事项</el-button>
      </el-badge>
      <ul class="ul1">
        <li>4条教学设备借入申请</li>
        <li>1条易耗品领用申请</li>
        <li>1条教学设备报修申请</li>
      </ul>
      <ul class="ul2">
        <li>最近一条时间：2017-11-03  09:00</li>
        <li>最近一条时间：2017-11-03  09:00</li>
        <li>最近一条时间：2017-11-03  09:00</li>
      </ul>
      <img src="../assets/xuxian.png" class="img1">
      <ul class="ul3">
        <li>1条教学设备挂失申请</li>
        <li>1条教学设备报废申请</li>
        <li>1条易耗品核销申请</li>
      </ul>
      <ul class="ul4">
        <li>最近一条时间：2017-11-03  09:00</li>
        <li>最近一条时间：2017-11-03  09:00</li>
        <li>最近一条时间：2017-11-03  09:00</li>
      </ul>
    </div>
    <div class="a2">
      <span class="sp1">资产监控</span>
      <div class="zi1">
        <div class="zuo1">
          <img src="../assets/zi1.png">
        </div>
        <div class="you1">
          <p style="font-size:17px;margin-left:10px;margin-top:5px;">资产总量</p><br>
          <p style="font-size:25px;margin-left:90px;margin-top:-10px;"><strong>138,000</strong></p>
        </div>
      </div>
      <div class="zi2">
        <div class="zuo2">
          <img src="../assets/zi2.png">
        </div>
        <div class="you2">
          <p style="font-size:17px;margin-left:85px;margin-top:-75px;">资产总额</p><p>
          <p style="font-size:25px;margin-left:130px;margin-top:12px;"><strong>10,138,000</strong></p>
        </div>
      </div>
      <div class="zi3">
        <div class="zuo3">
          <img src="../assets/zi3.png">
        </div>
        <div class="you3">
          <p style="font-size:17px;margin-left:10px;margin-top:5px;">房产面积</p><p>
          <p style="font-size:25px;margin-left:80px;margin-top:12px;"><strong>7,738,000</strong></p>
        </div>
      </div>
      <div class="zi4">
        <div class="zuo4">
          <img src="../assets/zi4.png">
        </div>
        <div class="you4">
          <p style="font-size:17px;margin-left:10px;margin-top:5px;">地产面积</p><br>
          <p style="font-size:25px;margin-left:100px;margin-top:-8px;"><strong>638,000</strong></p>
        </div>
      </div>
      <img src="../assets/chang.png">
    </div>
    <div class="a3">
      <span class="sp1">资产统计</span>
      <ul class="ul5">
        <li>设备分类数量统计</li>
        <li>设备分类金额统计</li>
        <li>易耗品分类数量统计</li>
        <li>易耗品分类金额统计</li>
      </ul>
      <img src="../assets/chang2.png" class="img2">
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style scoped>
.home {
  width: 100%;
  height: 1170px;
  background-color: #f4f4f6;
  /* height: 1000px; */
}
.a1 {
  width: 94%;
  background-color: white;
  height: 200px;
  margin-left: 3%;
  margin-top: 30px;
}
.item {
  margin-top: 10px;
}
.el-button {
  border: none;
  font-size: 16px;
  margin-left: 5px;
  position: relative;
  top: -18px;
}
.el-button:hover {
  color: black;
  border-color: none;
  background-color: white;
  cursor: text;
}
.ul1 li{
  font-size: 14px;
  list-style-image: url("../assets/dian.png");
  margin-left: 40px;
  margin-top: 15px;
}
.ul2{
  margin-left: 250px;
  margin-top: -102px;
}
.ul2 li{
  font-size: 14px;
  margin-top: 15px;
}
.img1{
  float: left;
  margin-top: -102px;
  margin-left: 670px;
}
.ul3{
  margin-top: -102px;
}
.ul3 li{
  font-size: 14px;
  list-style-image: url("../assets/dian.png");
  margin-left: 720px;
  margin-top: 15px;
}
.ul4{
  margin-left: 930px;
  margin-top: -102px;
}
.ul4 li{
  font-size: 14px;
  margin-top: 15px;
}
.a2{
  width: 94%;
  background-color: white;
  margin-left: 3%;
  margin-top: 30px;
}
.sp1{
  float: left;
  font-size: 16px;
  color: #606266;
  margin-top: 15px;
  margin-left: 20px;
}
.zi1 div{
  float: left;
}
.item{
  position: relative;
  top: 20px;
}
.zi1{
  width: 23%;
  height: 80px;
  background-color: #ED5665;
  margin-left: -63px;
}
.zuo1{
  width: 25%;
  height: 80px;
  background-color: #C45A65;
}
.zuo1 img{
  float: left;
  margin-left: 10px;
  margin-top: 15px;
}
.you1 p{
  color: white;
}
.zi2 div{
  float: left;
}
.zi2{
  width: 23%;
  height: 80px;
  background-color: #F7A54F;
  margin-left: 20px;
  /* margin-top: 40px; */
}
.zuo2{
  width: 25%;
  height: 80px;
  background-color:#CB9255;
}
.zuo2 img{
  float: left;
  margin-left: 10px;
  margin-top: 15px;
}
.you2 p{
  color: white;
}
.zi3 div{
  float: left;
}
.zi3{
  width: 23%;
  height: 80px;
  background-color: #1C85C7;
  margin-left: 20px;
  /* margin-top: 40px; */
}
.zuo3{
  width: 25%;
  height: 80px;
  background-color: #327BAA;
}
.zuo3 img{
  float: left;
  margin-left: 10px;
  margin-top: 15px;
}
.you3 p{
  color: white;
}
.zi4 div{
  float: left;
}
.zi4{
  width: 23%;
  height: 80px;
  background-color: #1AB394;
  margin-left: 20px;
  /* margin-top: 40px; */
}
.zuo4{
  width: 25%;
  height: 80px;
  background-color: #309C86;
}
.zuo4 img{
  float: left;
  margin-left: 10px;
  margin-top: 15px;
}
.you4 p{
  color: white;
}
.zi1,.zi2,.zi3,.zi4{
  float: left;
  margin-top: 60px;
}
.a3{
  width: 94%;
  height: 450px;
  background-color: white;
  margin-left: 3%;
  margin-top: 30px;
}
.ul5 li:nth-of-type(1){
  background: #1AB394;
  color: white;
}
.ul5 li{
  display: inline-block;
  background: #E4E4E4;
  font-size: 14px;
  margin-left: 10px;
  width: 140px;
  text-align: center;
  height: 35px;
  line-height: 35px;
  color: #666666;
}
.ul5{
  float: left;
  margin-top: 55px;
  margin-left: -72px;
}
.img2{
  float: left;
  margin-top: 20px;
  margin-left: 10px;
}
</style>