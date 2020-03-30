<template>
  <!-- 左侧表单 -->
  <div class="form-notes">
    <!-- 搜索 -->
    <div class="form-menu">
      <ul>
        <li v-for="item in serviceList" :key="item.id" @click="checkOrder(item.id)" @mouseover="addClassname(item.id)" @mouseleave="removeClassname(item.id)">
          <a href="javascript:void(0);" :class="{selected: item.isSelected}">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 组件 -->
    <div class="specific-content">
      <airportform></airportform>
    </div>
  </div>
</template>
<script>
import airportform from '../components/Airportform';


export default {
  name: "ticketform",
  components: {
    airportform
  },
  data() {
    return {
      selectedId: 0,
      serviceList: [
        {
          name: "机票",
          id: 0,
          isSelected: true
        },
        {
          name: "酒店",
          id: 1,
          isSelected: false
        },
        {
          name: "火车票",
          id: 2,
          isSelected: false
        },
        {
          name: "门票",
          id: 3,
          isSelected: false
        },
        {
          name: "团购",
          id: 4,
          isSelected: false
        },
        {
          name: "度假",
          id: 5,
          isSelected: false
        }
      ]
    };
  },
  methods: {
    checkOrder(id){
      let arr = [];
      this.selectedId = id;
      for(let i = 0; i < this.serviceList.length; i++){
        if(this.serviceList[i].id != this.selectedId){
          arr.push(this.serviceList[i]);
        }
      }
      arr.filter((item) => {
        if(item.id == id){
          item.isSelected = true;
        }else{
          item.isSelected = false;
        }
      })
    },
    addClassname(id){
      let arr = [];
      for(let i = 0; i < this.serviceList.length; i++){
        if(this.serviceList[i].id != this.selectedId){
          arr.push(this.serviceList[i]);
        }
      }
      arr.filter((item) => {
        if(item.id == id){
          item.isSelected = true;
        }
      })
    },
    removeClassname(id){
      let arr = [];
      for(let i = 0; i < this.serviceList.length; i++){
        if(this.serviceList[i].id != this.selectedId){
          arr.push(this.serviceList[i]);
        }
      }
      arr.filter((item) => {
        if(item.id == id){
          item.isSelected = false;
        }
      })
    }
    
  },
};
</script>
<style scoped>
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
li {
  list-style: none;
  font-size: 18px;
  width: 100px;
  height: 50px;
}
.form-notes {
  display: flex;
  flex: none;
  width: 550px;
  border: 5px solid #00d0d4; 
  margin-left: 40px;
  position: relative;
}
ul{
  margin-block-start: 0;
  padding: 0;
  margin-block-end: 0;
}

.specific-content{
  position: absolute;
  left: 325px;
  top: 50%;
  transform: translate(-50%,-50%);
}
a{
  text-decoration: none;
  display: block;
  width: 100px;
  height: 50px;
  color: #fff;
  background-color: #00d0d4;
  text-align: center;
  line-height: 50px;
}

</style>