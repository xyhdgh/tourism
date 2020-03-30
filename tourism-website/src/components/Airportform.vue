<template>
  <div class="airport-form">
    <div class="container">
      <div v-show="false">机票预订</div>
      <div class="outLine">
        <a href="javascript:void(0);">国内机票</a>
      </div>
      <div>
        <form>
          <div class="form-content">
            <label>
              <input type="radio" name="way" value="single" checked @click="checkedSingle" />单程
            </label>
            <label>
              <input type="radio" name="way" value="roundtrip" @click="checkedAll" />往返
            </label>
            <div ref="firstPlace" class="one-class">
              <span>出发</span>
              <input type="text" placeholder="输入城市" @click="showfPlace" v-model="firstInPlace" />
              <i class="iconfont icon-jianpan" @click="toggleFirstPlace"></i>
              <Place v-show="showFirstPlace" @fplacename="inplace"></Place>
            </div>
            <div ref="firstDate">
              <span>日期</span>
              <input type="text" v-model="nowOneDate" @click="showFirstCalendar" />
              <i class="iconfont icon-jianpan" @click="toggleFirstCalendar"></i>
              <Calendar @choseDay="clickGoDay" v-show="firstCalendar"></Calendar>
            </div>
            <div ref="secondPlace" class="two-class">
              <span>到达</span>
              <input type="text" placeholder="输入城市" @click="showsPlace" v-model="firstOutPlace" />
              <i class="iconfont icon-jianpan" @click="toggleSecondPlace"></i>
              <Place v-show="showSecondPlace" @fplacename="outplace"></Place>
            </div>
            <div ref="secondDate" v-show="backTime">
              <span>日期</span>
              <input type="text" v-model="nowTwoDate" @click="showSecondCalendar" />
              <i class="iconfont icon-jianpan" @click="toggleSecondCalendar"></i>
              <Calendar @choseDay="clickBackDay" v-show="secondCalendar"></Calendar>
            </div>
          </div>
          <button type="button">立即搜索</button>
        </form>
      </div>
    </div>
    <!-- 移动端
    <div class="phone-form"></div> -->
  </div>
</template>
<script>
import Calendar from "vue-calendar-component";
import Place from "./Place.vue";

export default {
  name: "airportform",
  components: {
    Calendar,
    Place
  },
  data() {
    return {
      isCursor: true,
      firstCalendar: false,
      secondCalendar: false,
      nowOneDate: "",
      nowTwoDate: "",
      backTime: false,
      showFirstPlace: false,
      showSecondPlace: false,
      firstInPlace: "",
      firstOutPlace: ""
    };
  },
  created() {
    //获取当前时间
    this.nowOneDate = this.getDate();
    this.nowTwoDate = this.getDate();
  },
  // mounted() {
  //   //点击其他为位置让弹出层消失
  //   document.addEventListener(
  //     "click",
  //     e => {
  //       if (!this.$refs.firstDate.contains(e.target)) {
  //         window.console.log(this.$refs.firstDate);
  //         this.firstCalendar = false;
  //         if(this.$refs.firstDate.firstElementChild.nextSibling.value == ""){
  //           this.nowOneDate = this.getDate();
  //         }
  //       }
  //       if(!this.$refs.secondDate.contains(e.target)){
  //         this.secondCalendar = false;
  //         if(this.$refs.secondDate.firstElementChild.nextSibling.value == ""){
  //           this.nowTwoDate = this.getDate();
  //         }
  //       }
  //       if(!this.$refs.firstPlace.contains(e.target)){
  //         this.showFirstPlace = false;
  //         if(this.$refs.firstPlace.firstElementChild.nextSibling.value == ""){
  //           this.firstInPlace = "输入城市"
  //         }
  //       }
  //       if(!this.$refs.secondPlace.contains(e.target)){
  //         this.showSecondPlace = false;
  //         if(this.$refs.secondPlace.firstElementChild.nextSibling.value == ""){
  //           this.firstOutPlace = "输入城市"
  //         }
  //       }
  //     },
  //     false
  //   );
  // },
  methods: {
    showFirstCalendar() {
      this.firstCalendar = true;
      this.nowOneDate = "";
    },
    showSecondCalendar() {
      this.secondCalendar = true;
      this.nowTwoDate = "";
    },
    clickGoDay(data) {
      let arr = data.split("/");
      if (parseInt(arr[1]) < 10) {
        arr[1] = "0" + arr[1];
      }
      if (parseInt(arr[2]) < 10) {
        arr[2] = "0" + arr[2];
      }
      this.nowOneDate = arr.join("-");
      this.firstCalendar = false;
      this.secondCalendar = false;
    },
    clickBackDay(data) {
      let arr = data.split("/");
      if (parseInt(arr[1]) < 10) {
        arr[1] = "0" + arr[1];
      }
      if (parseInt(arr[2]) < 10) {
        arr[2] = "0" + arr[2];
      }
      this.nowTwoDate = arr.join("-");
      this.firstCalendar = false;
      this.secondCalendar = false;
    },
    getDate() {
      let year = new Date().getFullYear();
      let month = new Date().getMonth();
      let day = new Date().getDate();
      let nowTime = "";
      if (month + 1 < 10) {
        if (day < 10) {
          nowTime = `${year}-0${month + 1}-0${day}`;
          return nowTime;
        } else {
          nowTime = `${year}-0${month + 1}-${day}`;
          return nowTime;
        }
      } else {
        if (day < 10) {
          nowTime = `${year}-${month + 1}-0${day}`;
          return nowTime;
        } else {
          nowTime = `${year}-${month + 1}-${day}`;
          return nowTime;
        }
      }
    },
    toggleFirstCalendar() {
      this.firstCalendar = !this.firstCalendar;
    },
    toggleSecondCalendar() {
      this.secondCalendar = !this.secondCalendar;
    },
    checkedSingle() {
      this.backTime = false;
    },
    checkedAll() {
      this.backTime = true;
    },
    toggleFirstPlace() {
      this.showFirstPlace = !this.showFirstPlace;
    },
    showfPlace() {
      this.showFirstPlace = true;
      this.$refs.firstPlace.firstElementChild.nextSibling.placeholder = "";
    },
    inplace(val) {
      this.firstInPlace = val;
      this.showFirstPlace = false;
    },
    showsPlace() {
      this.showSecondPlace = true;
      this.$refs.secondPlace.firstElementChild.nextSibling.placeholder = "";
    },
    toggleSecondPlace() {
      this.showSecondPlace = !this.showSecondPlace;
    },
    outplace(val) {
      this.firstOutPlace = val;
      this.showSecondPlace = false;
    }
  }
};
</script>
<style scoped>
@media screen and (min-width: 769px) {
  .airport-form {
    width: 450px;
    height: 300px;
  }
  .container {
    height: 300px;
  }
  a {
    text-decoration: none;
  }
  .container div:nth-child(2) {
    position: relative;
  }
  .container div:nth-child(2),
  .container div:nth-child(2) a {
    width: 120px;
    height: 50px;
    display: block;
    text-align: center;
    line-height: 50px;
    color: #333;
    font-weight: bolder;
  }
  .outLine a::after {
    content: "";
    height: 3px;
    background-color: #00d0d4;
    width: 0;
    display: block;
    position: absolute;
    left: 50%;
    transition: all 0.5s ease;
  }
  .outLine a::before {
    content: "";
    height: 3px;
    background-color: #00d0d4;
    width: 0;
    display: block;
    position: absolute;
    left: 50%;
    top: 50px;
    transition: all 0.5s ease;
    transform: rotate(180deg);
    transform-origin: 0%;
  }
  .outLine a:hover::after,
  .outLine a:hover::before {
    width: 50px;
  }
  form label {
    padding-right: 15px;
  }
  form {
    padding-top: 5px;
    position: relative;
  }
  form label input {
    margin-right: 5px;
  }
  .form-content {
    padding-left: 28px;
  }
  .form-content div {
    border: 1px solid rgba(170, 170, 170, 0.932);
    width: 392px;
  }
  .form-content div div {
    width: 392px;
    border: 1px solid rgba(170, 170, 170, 0.932);
    height: 35px;
    margin-right: 28px;
  }
  .form-content div span {
    padding: 0 5px;
    line-height: 35px;
    color: rgba(170, 170, 170, 0.932);
    font-size: 12px;
    cursor: pointer;
  }
  .form-content div:nth-child(n + 2) {
    margin-top: 5px;
  }
  .form-content div input {
    width: 278px;
    height: 32px;
    line-height: 32px;
    border: 0;
    margin: 0 27px 0 22px;
    outline: none;
    color: rgba(170, 170, 170, 0.932);
  }
  .form-content div i {
    font-size: 17px;
    cursor: pointer;
  }
  form button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 133px;
    height: 44px;
    border: 0;
    border-radius: 5px;
    background: linear-gradient(-136deg, #fac928 0, #ff9800 100%);
    color: #fff;
    overflow: hidden;
    font-size: 18px;
    cursor: pointer;
    top: 50%;
    margin-top: 100px;
    outline: none;
  }
  .wh_container {
    background-color: #00d0d4 !important;
    position: relative;
    z-index: 10;
  }
  .one-class {
    position: relative;
  }
  .two-class {
    position: relative;
  }
}
/* 移动端 */
@media screen and (max-width: 768px){
  
}
</style>