<template>
  <div class="container">
    <!-- 移动端  -->
    <div class="mine-phone">
      <!--  头部  -->
      <header>
        <Backbtn>
          <div slot="reg" class="upload-img" v-if="isLogin">
            <button class="btn" @click.prevent="update_img">更换头像</button>
            <input
              type="file"
              name="avatar"
              style="filter:alpha(opacity:0);opacity: 0;width:0px"
              ref="update_input"
              @change="sub"
            />
          </div>
        </Backbtn>
        <div class="content">
          <div class="people">
            <div class="head">
              <div v-if="!img_url">
                <i class="iconfont icon-touxiang-copy"></i>
              </div>
              <div v-else class="peo-img">
                <img :src="img_url" alt="img">
              </div>
            </div>
          </div>
          <!-- 未登录 -->
          <div class="log-reg">
            <div @click="goLogin" v-if="!isLogin">登录/注册</div>
            <div v-else>{{login_name}}</div>
          </div>
        </div>
      </header>
      <!-- 内容区域 -->
      <div class="aside-content">
        <div v-for="item in options" :key="item.id" @click="goDetail(item)">
          <div class="center-content">
            <div class="left-icon">
              <i :class="['iconfont', item.iconName]"></i>
            </div>
            <span class="list-name">{{item.name}}</span>
            <span class="icon">
              <i class="iconfont icon-right-angle-copy"></i>
            </span>
          </div>
        </div>
        <div v-show="isLogin" class="quik">
          <button @click="quik">退出登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Backbtn from "../components/Backbtn.vue";

export default {
  name: "mine",
  components: {
    Backbtn
  },
  data() {
    return {
      options: [
        {
          name: "我的订单",
          id: 1,
          routeName: "order",
          iconName: "icon-icon--copy"
        },
        {
          name: "我的退款",
          id: 2,
          routeName: "login",
          iconName: "icon-tuikuan-copy"
        },
        {
          name: "我的发票",
          id: 3,
          routeName: "login",
          iconName: "icon-fapiao-copy"
        },
        {
          name: "我的攻略",
          id: 4,
          routeName: "login",
          iconName: "icon-gonglve-copy"
        },
        {
          name: "我的收藏",
          id: 5,
          routeName: "login",
          iconName: "icon-shoucang-copy"
        }
      ],
      //判断是否登录的变量
      isLogin: false,
      //登录成功后的名字
      login_name: "",
      //更改头像后的图片url
      img_url: ""
    };
  },
  methods: {
    goDetail({ routeName }) {
      this.$router.push({
        name: routeName
      });
    },
    goLogin() {
      this.$router.push({
        name: "login"
      });
    },
    change() {
      document
        .querySelector(".aside-content")
        .querySelectorAll(".left-icon")[2]
        .querySelector("i")
        .classList.add("changefont");
    },
    update_img() {
      this.$refs.update_input.click();
    },
    sub(avatar) {
      // 发送上传图片的请求
      let file = avatar.target.files[0];
      let data = new FormData();
      data.append("file", file, file.name); //很重要 data.append("file", file);不成功
      data.append("data", 112);
      this.$axios.post("http://localhost:3001/profile", data, {
        headers: { 
          "content-type": "multipart/form-data",
          "token": sessionStorage.token
        }
      }).then(res => {
        window.console.log(res)
        if(res.data.errno === 101) {
          this.img_url = res.data.data.img_url;
        }
      }).catch(err => {
        throw err;
      })
    },
    //注销用户 退出登录
    quik() {
      if(!sessionStorage.getItem("token")) {
        return
      } else {
        sessionStorage.removeItem("token")
      }
      this.$router.push({
        name: "login"
      })
    }
  },
  mounted() {
    if (sessionStorage.getItem("token")) {
      this.$axios
        .post("http://localhost:3001/getMessage", {
          token: sessionStorage.getItem("token")
        })
        .then(res => {
          if (res.data.errno === 101) {
            this.login_name = res.data.data.username;
            this.isLogin = true;
            this.img_url = res.data.data.img_url;
          }
        })
        .catch(err => {
          throw err;
        });
    }
    this.change();
  }
};
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .container,
  .mine-phone {
    width: 100vw;
    height: 100vh;
  }
  header {
    background: linear-gradient(to right, #19a9ba, #7bd07e);
    width: 100%;
    height: 3.5rem;
  }
  .content {
    height: 2.5rem;
  }
  .people {
    display: flex;
    height: 1.5rem;
  }
  .people .head {
    margin: auto;
    display: flex;
    position: relative;
  }
  .head div {
    margin: auto;
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
    line-height: 1.2rem;
  }
  .people .head i {
    font-size: 1rem;
    color: #fff;
  }
  .log-reg {
    height: 1rem;
    display: flex;
  }
  .log-reg div {
    font-size: 0.4rem;
    padding: 0.05rem 0.1rem;
    margin: auto;
    color: #fff;
  }
  .aside-content {
    height: auto;
  }
  .aside-content > div {
    height: 1.2rem;
    font-size: 0.3rem;
  }
  .center-content {
    padding: 0 0.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .center-content i {
    font-size: 0.4rem;
    color: #fff;
  }
  .center-content .icon {
    display: block;
    transform: rotate(180deg);
  }
  .center-content span i {
    color: #c7c7cc;
  }
  .center-content > div {
    width: 0.6rem;
    height: 0.6rem;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 50%;
    background: #19a9ba;
  }
  .center-content .list-name {
    position: absolute;
    left: 1rem;
  }
  .changefont {
    font-size: 0.35rem !important;
  }
  .upload-img {
    position: absolute;
    font-size: 0.3rem;
    color: #fff;
    right: 0.2rem;
    overflow: hidden;
    width: 1.5rem;
    text-align: right;
  }
  .btn {
    border: none;
    color: #fff;
    background: linear-gradient(to right, #65c78b, #7bd07e);
    outline: none;
  }
  .head .peo-img img {
    width: 100%;
    height: 1.2rem;
    border-radius: 50%;
  }
  .quik {
    height: calc(100vh - 9.5rem) !important;
    text-align: center;
    line-height: calc(100vh - 9.5rem);
  }
  .quik button {
    padding: .2rem .4rem;
    border-radius: .4rem;
    background: #f44336;
    color: #fff;
    border: 0;
    outline: none;
  }
}
</style>