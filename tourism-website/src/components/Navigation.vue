<template>
  <div class="nav_bar">
    <ul class="clearfix">
      <li v-for="(item,index) in navList" :key="index" :class="{active: item.isSelected}" @mouseover="controlOver(item.id)" @mouseleave="controlLeave(item.id)">
        <router-link :to="item.navUrl">{{item.navName}}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "navigation",
  data() {
    return {
      navList: [
        {
          navName: "首页",
          navUrl: "/",
          isSelected: true,
          id: 0
        },
        {
          navName: "酒店",
          navUrl: "/hotel",
          isSelected: false,
          id: 1
        },
        {
          navName: "机票",
          navUrl: "/airticket",
          isSelected: false,
          id: 2
        },
        {
          navName: "火车票",
          navUrl: "/trainticket",
          isSelected: false,
          id: 3
        },
        {
          navName: "门票",
          navUrl: "/admissionticket",
          isSelected: false,
          id: 4
        },
        {
          navName: "团购",
          navUrl: "/grouppurchase",
          isSelected: false,
          id: 5
        },
        {
          navName: "度假",
          navUrl: "/holiday",
          isSelected: false,
          id: 6
        },
        {
          navName: "攻略",
          navUrl: "/strategy",
          isSelected: false,
          id: 7
        }
      ]
    }
  },
  methods: {
    controlOver(id){
      this.navList.slice(1,8).filter((item) => {
        if(item.id == id){
          item.isSelected = true;
        }
      })
    },
    controlLeave(id){
      this.navList.slice(1,8).filter((item) => {
        if(item.id == id){
          item.isSelected = false;
        }
      })
    }
  },
}
</script>
<style scoped>
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
ul{
  background: linear-gradient(to right,#13e09e,#8cf593);
}
ul li{
  float: left;
  font-size: 20px;
  list-style: none;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
.nav_bar{
  width: 100%;
  margin-top: 10px;
}
a{
  text-decoration: none;
  color: #fff;
  display: block;
  width: 100px;
  height: 50px;;
}
</style>