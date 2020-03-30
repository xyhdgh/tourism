<template>
  <div class="container">
    <!-- 移动端 -->
    <div class="phone-container">
      <header>
        <Backbtn>
          <span slot="title" class="native-order">
            {{title}}
            <i class="iconfont icon-triangle-copy-copy-copy" @click="expendMenu" ref="icon"></i>
          </span>
          <span slot="reg" class="order-search" @click="selectOrder">订单查询</span>
        </Backbtn>
      </header>
      <!-- 点击下拉 蒙皮 -->
      <transition name="fade">
        <div class="todolist" ref="tic_list" v-show="isShow" @click="addClass">
          <div class="option" v-for="item in list" :key="item.id">
            <span>{{item.name}}</span>
          </div>
        </div>
      </transition>
      <Mock :isShow="isShow"></Mock>
      <div class="content">
        <div class="main">
          <img src="../assets/images/order_login.png" alt="img" />
          <div class="desc">
            您还没有本地订单
            <br />快登录查看在线订单吧
          </div>
          <div class="btn" @click="goLogin">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Backbtn from "../components/Backbtn.vue";
import Mock from "../components/Mock.vue";

export default {
  name: "order",
  components: {
    Backbtn,
    Mock
  },
  data() {
    return {
      isShow: false,
      list: [
        {
          name: "全部",
          id: 1,
          p_name: "all"
        },
        {
          name: "机票",
          id: 2,
          p_name: "airport"
        },
        {
          name: "酒店",
          id: 3,
          p_name: "hotel"
        },
        {
          name: "火车票",
          id: 4,
          p_name: "train"
        },
        {
          name: "门票",
          id: 5,
          p_name: "door"
        },
        {
          name: "团购",
          id: 6,
          p_name: "team"
        },
        {
          name: "度假",
          id: 7,
          p_name: "holiday"
        }
      ],
      title: "本地订单",
      val: "all"
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "login"
      });
    },
    expendMenu() {
      this.isShow = !this.isShow;
      this.isShow
        ? (this.$refs.icon.style.transform = "rotate(180deg)")
        : (this.$refs.icon.style.transform = "rotate(0deg)");
    },
    addClass(e) {
      if(e.target.classList.contains('todolist') || e.target.classList.contains('option')) {
        return;
      } else {
        // 动态加类名
        let childArr = this.$refs.tic_list.getElementsByTagName("span");
        Array.from(childArr).forEach((item) => {
          if(item.classList.contains("show")) {
            item.classList.remove("show");
          }
        })
        e.target.classList.add("show");
        // 改变标题并且关闭页面
        e.target.innerText === "全部" ? this.title = "本地订单" : this.title = e.target.innerText
        this.isShow = false
        this.$refs.icon.style.transform = "rotate(0deg)"
      }
    },
    // 查询订单
    selectOrder() {
      let val = "all";
      this.list.forEach(item => {
        if(item.name === this.title) {
          this.val = item.p_name;
          val = this.val;
        }
      })
      this.$router.push({
        name: "select_order",
        params: {
          val
        }
      })
    }
  },
  mounted() {
    this.$refs.tic_list.firstElementChild.firstElementChild.classList.add(
      "show"
    );
  }
};
</script>
<style scoped>
/* 移动端*/
@media screen and (max-width: 768px) {
  .phone-container {
    width: 100vw;
    height: 100vh;
    font-size: 0.4rem;
  }
  header {
    height: 1rem;
    background: #fff;
    color: #333;
    line-height: 1rem;
    position: relative;
    z-index: 11;
  }
  header >>> .back-btn i {
    color: #333;
  }
  .native-order {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .order-search {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);
    font-size: 0.3rem;
    color: #00bcd4;
  }
  .native-order i {
    position: absolute !important;
    left: 100%;
    top: 0;
    color: #bbb !important;
  }
  .content {
    width: 100vw;
    height: calc(100vh - 3rem);
  }
  .main {
    margin-top: 2rem;
    text-align: center;
  }
  .main img {
    width: 4rem;
  }
  .main .desc {
    font-size: 0.3rem;
    padding: 0.2rem 0;
  }
  .main .btn {
    background: #ff9800;
    font-size: 0.3rem;
    width: 1.5rem;
    height: 0.7rem;
    margin: 0 auto;
    color: #fff;
    text-align: center;
    line-height: 0.7rem;
    border-radius: 0.04rem;
  }
  .todolist {
    box-sizing: border-box;
    padding: 0.1rem;
    display: flex;
    flex-flow: row wrap;
    font-size: 0.3rem;
    position: absolute;
    left: 0;
    z-index: 10;
    background: #fff;
  }
  .option {
    width: 1.8rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center;
    margin: auto;
    padding: 0.1rem 0;
  }
  .option span {
    display: block;
    border: 0.02rem solid #d6d6d6;
    border-radius: 0.1rem;
    color: #212121;
  }
  /* 点击时的类 */
  .show {
    background: #00bcd4;
    color: #fff !important;
  }
  /* 过渡效果 */
  .fade-enter, .fade-leave-to {
    top: -1.3rem;
  }
  .fade-enter-to, .fade-leave {
    top: 1rem;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s ease;
  }
}
</style>