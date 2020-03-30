<template>
  <!-- 主页面 -->
  <div class="home">
    <!-- PC 平板 -->
    <div class="container" v-if="isShow">
      <!-- 头部导航栏 -->
      <Topnav></Topnav>
      <!-- 图片 输入框 图片 -->
      <div class="content_top">
        <div class="ct-left"></div>
        <Inputfield class="ct-middle"></Inputfield>
        <div class="ct-right"></div>
      </div>

      <!-- 功能导航栏 -->
      <Navigation class="nav-bar"></Navigation>
      <!-- 平板 -->
      <div class="py-top"></div>
      <div class="content-middle">
        <Ticketform></Ticketform>
        <div class="tour_one">
          <img src="../assets/images/tour_one.jpg" />
        </div>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="phone-container" v-else>
      <!-- 最上面 空白 -->
      <div class="vacancy"></div>
      <div class="list">
        <div
          class="every-service"
          v-for="item in list"
          :key="item.id"
          @click="goServiceDetail(item)"
        >
          <div class="every-icon" :style="{'background': item.color}">
            <i :class="['iconfont', item.iconName]"></i>
          </div>
          <div class="every-name">{{item.name}}</div>
        </div>
      </div>
      <div class="aside-content">
        <!-- 今日推荐 -->
        <div class="today-recommond">
          <div class="nav-bar">
            <a href="javascript: void(0);">今日推荐</a>
            <div class="right-arrow" @click="goMoreRecommond">
              <span>更多推荐</span>
              <i class="iconfont icon-right-angle-copy"></i>
            </div>
          </div>
          <Board :List="recommandList"></Board>
        </div>
      </div>
      <div class="aside-holiday">
        <!-- 热门度假 -->
        <div class="hot-holiday">
          <div class="holiday-title">
            <span class="holiday-icon">
              <i class="iconfont icon-dujia"></i>
            </span>
            <span class="title-name">热门度假</span>
          </div>
          <Board :List="holidayList"></Board>
        </div>
      </div>
      <div class="aside-strategy">
        <!-- 旅行攻略 -->
        <div class="tourist-strategy">
          <div class="strategy-title clearfix">
            <span class="strategy-icon" style="background: #9c27b0;">
              <i class="iconfont icon-gonglve-copy"></i>
            </span>
            <span class="title-name change">旅行攻略</span>
            <div class="right-arrow change-arrow" @click="goStrategyRecommond">
              <span>更多推荐</span>
              <i class="iconfont icon-right-angle-copy"></i>
            </div>
          </div>
          <Board :List="strategyList"></Board>
        </div>
      </div>
      <!-- 底部导航 -->
      <footer>
        <div v-for="item in navList" :key="item.id" @click="goPhoneDetail(item)">
          <div :class="['item',item.id === 1 ? 'item-1' : '']">
            <i :class="['iconfont',item.iconName]"></i>
            <span>{{item.content}}</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Topnav from "@/components/Topnav.vue";
import Inputfield from "@/components/Inputfield.vue";
import Navigation from "@/components/Navigation.vue";
import Ticketform from "@/views/Ticketform.vue";
import Board from "@/components/Board.vue";

export default {
  name: "home",
  components: {
    Topnav,
    Inputfield,
    Navigation,
    Ticketform,
    Board
  },
  data() {
    return {
      currentWidth: 0,
      isShow: true,
      navList: [
        {
          content: "首页",
          iconName: "icon-jiaoya-copy",
          id: 1,
          name: "home"
        },
        {
          content: "订单",
          iconName: "icon-hanglixiang",
          id: 2,
          name: "order"
        },
        {
          content: "我的",
          iconName: "icon-xiaolian-copy",
          id: 3,
          name: "mine"
        },
        {
          content: "版本",
          iconName: "icon-banben-copy",
          id: 4,
          name: "version"
        }
      ],
      list: [
        {
          name: "酒店",
          id: 1,
          iconName: "icon-jiudian",
          color: "rgba(255, 87, 34, 1)",
          urlName: "hotel"
        },
        {
          name: "机票",
          id: 2,
          iconName: "icon-jipiao",
          color: "rgba(0, 188, 212, 1)",
          urlName: "airticket"
        },
        {
          name: "火车票",
          id: 3,
          iconName: "icon-huochepiao",
          color: "rgba(63, 81, 181, 1)",
          urlName: "trainticket"
        },
        {
          name: "度假",
          id: 4,
          iconName: "icon-dujia",
          color: "rgba(139, 195, 74, 1)",
          urlName: "holiday"
        },
        {
          name: "门票",
          id: 5,
          iconName: "icon-menpiao",
          color: "rgba(255, 193, 7, 1)",
          urlName: "admissionticket"
        },
        {
          name: "攻略",
          id: 6,
          iconName: "icon-gonglve-copy",
          color: "rgba(103, 58, 183, 1)",
          urlName: "strategy"
        },
        {
          name: "团购",
          id: 7,
          iconName: "icon-tuangou",
          color: "rgba(76, 175, 80, 1)",
          urlName: "grouppurchase"
        },
        {
          name: "其他功能",
          id: 8,
          iconName: "icon-qitagongneng",
          color: "rgba(0, 150, 136, 1)",
          urlName: "morefunc"
        }
      ],
      recommandList: [],
      holidayList: [],
      strategyList: []
    };
  },
  mounted() {
    //获取当前的宽度
    this.getWidth();
  },
  methods: {
    getWidth() {
      this.currentWidth = document.body.clientWidth;
      if (this.currentWidth > 750) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
    },
    //跳转到相应页面
    goPhoneDetail({ name }) {
      this.$router.push({
        name
      });
    },
    //跳转各个服务页
    goServiceDetail({ urlName }) {
      this.$router.push({
        name: urlName
      });
    },
    //更多推荐
    goMoreRecommond() {
      this.$router.push({
        name: "morerecommond"
      });
    },
    //更多攻略推荐
    goStrategyRecommond() {
      this.$router.push({
        name: "strategyrecommond"
      });
    },
    getData() {
      this.$axios
        .get("http://localhost:3000/")
        .then(res => {
          if (res.data.errno === 101) {
            this.recommandList = res.data.data.phone.recommandList;
            this.holidayList = res.data.data.phone.holidayList;
            this.strategyList = res.data.data.phone.strategyList;
          }
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    // 获取数据
    this.getData();
  }
};
</script>

<style scoped>
/* PC端 */
@media screen and (min-width: 992px) {
  .content_top {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .ct-left,
  .ct-right {
    width: 200px;
    height: 130px;
  }
  .ct-left {
    background: url("../assets/images/tourist.png?__sprite") no-repeat
      center/100%;
  }
  .ct-right {
    background: url("../assets/images/tourist.jpg?__sprite") no-repeat
      center/100%;
  }
  .ct-middle {
    width: 500px;
    height: 130px;
    position: relative;
  }
  .content-middle {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
  }
  .tour_one {
    width: 477px;
    height: 310px;
    margin-left: 20px;
    padding-right: 50px;
  }
  .tour_one img {
    width: 387px;
    height: 310px;
  }
  .py-top {
    display: none;
  }
}
/* 平板 */
@media screen and (min-width: 769px) and (max-width: 991px) {
  .content_top {
    display: none;
  }
  .nav-bar {
    display: none;
  }
  .py-top {
    width: 100%;
    padding-top: 24.53%;
    background: url("../assets/images/tour_top.png") no-repeat center/100%;
  }
}

/* 手机 */
@media screen and (max-width: 768px) {
  /* 底部 */
  footer {
    width: 100vw;
    height: 1rem;
    position: fixed;
    bottom: 0;
    display: flex;
    box-sizing: border-box;
    border-top: 0.02rem solid #888;
    background: rgba(255, 255, 255, 0.5);
  }
  footer > div {
    flex: 1;
    display: flex;
  }
  footer .item {
    width: 60%;
    margin: auto;
    text-align: center;
  }
  footer .item span {
    display: block;
    font-size: 0.25rem;
    font-family: inherit;
  }
  footer .item i {
    color: #333;
    display: block;
    font-size: 0.4rem;
  }
  footer .item-1 i,
  footer .item-1 span {
    color: #18c0c8;
  }
  /* 上面 */
  .vacancy {
    width: 100vw;
    height: 0.2rem;
  }
  .list {
    width: 100vw;
    padding: 0.2rem;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
  }
  .every-service {
    width: 25%;
    height: 1.5rem;
    text-align: center;
    box-sizing: border-box;
    padding: 0.1rem;
  }
  .phone-container {
    font-size: 0.25rem;
    margin-bottom: 1rem;
    overflow: scroll;
    height: auto;
  }
  .every-service i {
    font-size: 0.5rem;
  }
  .every-icon {
    width: 0.9rem;
    height: 0.9rem;
    text-align: center;
    line-height: 0.9rem;
    margin: 0 auto;
    border-radius: 50%;
    color: #fff;
  }
  .every-name {
    height: 0.4rem;
    line-height: 0.4rem;
    color: #333;
  }
  .aside-content {
    border-top: 0.02rem solid #aaaaaa9e;
    border-bottom: 0.02rem solid #aaaaaa9e;
  }
  .nav-bar {
    padding: 0 0.2rem;
    display: flex;
    justify-content: space-between;
  }
  .nav-bar a {
    display: block;
    padding: 0.1rem 0.2rem;
    background: #17c0c8;
    color: #fff;
    border-radius: 0.08rem;
    text-decoration: none;
  }
  .right-arrow {
    line-height: 2;
  }
  .right-arrow span {
    color: #757575;
    padding-right: 0.1rem;
  }
  .right-arrow i {
    display: inline-block;
    transform: rotate(180deg);
    color: #757575;
  }
  .today-recommond,
  .hot-holiday,
  .tourist-strategy {
    padding: 0.2rem 0;
  }
  .hot-holiday {
    font-size: 0.25rem;
  }
  .holiday-title,
  .strategy-title {
    padding: 0 0.2rem;
    height: 1rem;
    line-height: 1rem;
  }
  .holiday-icon,
  .strategy-icon {
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    text-align: center;
    line-height: 0.5rem;
    background: #8bc34a;
    color: #fff;
    border-radius: 50%;
  }
  .title-name {
    padding-left: 0.3rem;
    font-weight: bold;
    font-size: 0.3rem;
  }
  .aside-holiday {
    border-bottom: 0.02rem solid #aaaaaa9e;
  }
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
  .strategy-title > span {
    float: left;
  }
  .strategy-title > div {
    float: right;
  }
  .strategy-title {
    position: relative;
  }
  .strategy-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .change {
    padding-left: 0.8rem !important;
  }
  .change-arrow {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);
  }
  .home {
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }
}
</style>
