<template>
  <div class="container">
    <!-- PC 平板 -->
    <div class="PC" style="display:none;">
      <Lrm></Lrm>
      <div class="account-registration">
        <form>
          <div class="container">
            <div class="reg-content">
              <div class="reg-title">账号注册</div>
              <div>
                <label>注册用户名</label>
                <input
                  type="text"
                  placeholder="输入用户名"
                  @focus="hidePh($event)"
                  @blur="showPh($event)"
                />
                <span></span>
              </div>
              <div>
                <label>注册密码</label>
                <input
                  type="password"
                  placeholder="输入密码"
                  @focus="hidePh($event)"
                  @blur="showPh($event)"
                />
                <span></span>
              </div>
              <div>
                <label>再次输入密码</label>
                <input
                  type="password"
                  placeholder="再次输入密码"
                  @focus="hidePh($event)"
                  @blur="showPh($event)"
                />
                <span></span>
              </div>
              <div>
                <label>验证码</label>
                <input
                  type="text"
                  placeholder="输入验证码"
                  @focus="hidePh($event)"
                  @blur="showPh($event)"
                />
                <a href="javascript:void(0);" class="check-img">换一张</a>
              </div>
              <div class="reg-sub">
                <button>注册</button>
              </div>
            </div>
            <div class="reglogin-img"></div>
          </div>
        </form>
      </div>
    </div>
    <!-- 移动端 -->
    <div class="phone-container">
      <header>
        <Backbtn>
          <span slot="title">注册</span>
        </Backbtn>
      </header>
      <LoginorRegForm :captcha="captcha" @changeCaptcha="getCaptcha"></LoginorRegForm>
    </div>
  </div>
</template>
<script>
import Lrm from "../components/Lrm"
import Backbtn from "../components/Backbtn.vue"
import LoginorRegForm from '../components/LoginorRegForm.vue'

export default {
  name: "register",
  components: {
    Lrm,
    Backbtn,
    LoginorRegForm
  },
  data() {
    return {
      phMsg: "",
      captcha: ""
    };
  },
  methods: {
    hidePh(e) {
      this.phMsg = e.target.placeholder;
      e.target.placeholder = "";
    },
    showPh(e) {
      e.target.placeholder = this.phMsg;
    },
    getCaptcha() {
      this.$axios.get('http://localhost:3001/captcha')
      .then(res => {
        if(res.data.errno === 101) {
          this.captcha = res.data.data;
        }
      }).catch(err => {
        throw err;
      })
    }
  },
  mounted() {
    this.getCaptcha();
  }
};
</script>
<style scoped>
/* 屏幕宽度最小为992px PC端*/
@media screen and (min-width: 992px) {
  a {
    text-decoration: none;
    display: inline-block;
    color: #006bc8;
  }
  a:hover {
    color: #f60;
  }
  .account-registration {
    position: fixed;
    top: 33px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0 auto;
    background: url("../assets/images/bc.jpg") no-repeat center/100%;
  }
  form,
  .container {
    height: calc(100vh - 33px);
  }
  form div div {
    text-align: left;
    margin-top: 20px;
  }
  .reg-title {
    height: 100px;
    line-height: 100px;
    font-size: 30px;
    margin-top: 30px;
    color: #fff;
    text-align: center;
    display: inline-block;
    width: 100%;
    font-weight: 400;
    color: #666;
  }
  .reg-content {
    width: 510px;
    margin: 0;
    align-self: center;
  }
  .reg-content label {
    color: #666;
  }
  input {
    width: 250px;
    height: 35px;
    overflow: hidden;
    color: #666;
    outline: none;
    border: 1px solid #999;
    padding-left: 10px;
  }
  label {
    display: inline-block;
    color: #fff;
    padding: 0 10px 0 20px;
    width: 100px;
    text-align: right;
  }
  .reg-content span {
    display: inline-block;
    width: 100px;
    height: 20px;
    margin-left: 15px;
  }
  .reg-sub {
    height: 106px;
    position: relative;
    margin: 0;
  }
  .reg-sub button {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0;
    width: 100px;
    height: 30px;
    outline: none;
    color: #fff;
    background-color: #ff8200;
    border-radius: 4px;
  }
  .reg-sub button:hover {
    background-color: #ff9c00;
  }
  input:focus,
  input:hover {
    border: 1px solid #5abec6;
  }
  .check-img {
    font-size: 13px;
    padding-left: 10px;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
  .reglogin-img {
    width: 407px;
    height: 214px;
    background: url("../assets/images/registerlogin.jpg") no-repeat 50%/100%;
    margin: 0;
    align-self: center;
  }
}
/* 屏幕宽度最大为992px 平板*/
@media screen and (max-width: 991px) {
}
/* 移动端 */
@media screen and (max-width: 767px) {
  .phone-container {
    width: 100vw;
    height: 100vh;
    font-size: 0.3rem;
  }
  header {
    background: #18a9b9;
    height: 1rem;
    color: #fff;
    text-align: center;
  }
}
</style>