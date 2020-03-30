<template>
  <div>
    <form>
      <div class="content">
        <div class="title">账号{{describe}}</div>
        <div class="main" ref="main">
          <div class="form-control">
            <label class="control-label">账号</label>
            <div class="inp-content" v-if="isShow">
              <input
                type="tel"
                placeholder="用户名"
                maxlength="10"
                v-model="user_desc.username"
                @input="verify_samename(user_desc.username)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',user_heightLight? 'active-color': '']"></i>
              </span>
            </div>
            <div class="inp-content" v-else>
              <input
                type="tel"
                placeholder="用户名"
                maxlength="10"
                v-model="user_desc.username"
                @input="verify_havename(user_desc.username)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',user_heightLight? 'active-color' : '']"></i>
              </span>
            </div>
          </div>
          <div class="form-control">
            <label class="control-label">密码</label>
            <div class="inp-content" v-if="isShow">
              <input
                type="tel"
                placeholder="请输入密码"
                maxlength="10"
                v-model="user_desc.password"
                @input="judge_pass(user_desc.password)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',pass_heightLight? 'active-color': '']"></i>
              </span>
            </div>
            <div class="inp-content" v-else>
              <input
                type="tel"
                placeholder="请输入密码"
                maxlength="10"
                v-model="user_desc.password"
                @input="judge_have_pass(user_desc.password)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',pass_heightLight? 'active-color': '']"></i>
              </span>
            </div>
          </div>
          <div class="form-control" v-if="isShow">
            <label class="control-label">再次输入</label>
            <div class="inp-content">
              <input
                type="tel"
                placeholder="请再次输入密码"
                maxlength="10"
                v-model="user_desc.repeat_password"
                @input="judge_repeat_pass(user_desc.repeat_password)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',repeat_pass_heightLight? 'active-color': '']"></i>
              </span>
            </div>
          </div>
          <div class="form-control special" v-if="isShow">
            <label class="control-label">验证码</label>
            <div class="inp-captcha inp-content">
              <input
                type="tel"
                placeholder="验证码"
                maxlength="4"
                v-model="user_desc.verify_code"
                @input="send_captcha(user_desc.verify_code)"
              />
              <span class="able-pass">
                <i :class="['iconfont','icon-duihao',verify_code_heightLight? 'active-color': '']"></i>
              </span>
            </div>
            <div class="captcha" v-html="captcha" @click="changeCaptcha"></div>
          </div>
        </div>
        <div class="btn">
          <!-- 注册按钮 -->
          <div @click="logined" :class="isAdd? '' : 'disabled'" v-if="isShow">{{describe}}</div>
          <!-- 登录按钮 -->
          <div @click="do_login" :class="isAdd? '' : 'disabled'" v-else>{{describe}}</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login_regForm",
  components: {},
  data() {
    return {
      isShow: false,
      describe: "",
      user_desc: {
        username: "",
        password: "",
        repeat_password: "",
        verify_code: ""
      },
      isAdd: false,
      user_heightLight: false,
      pass_heightLight: false,
      repeat_pass_heightLight: false,
      verify_code_heightLight: false
    };
  },
  methods: {
    logined() {
      let username = this.user_desc.username;
      let password = this.user_desc.password;
      if(!this.isAdd) return false;
      this.$axios.post('http://localhost:3001/register', {username: username, password: password})
      .then(res => {
        if(res.data.errno === 101) {
          localStorage.setItem("token_id", res.data.data.token_id)
          this.$router.push({
            name: "login"
          })
        }
      }).catch(err => {
        throw err
      })
    },
    judge() {
      let [, pathname] = location.pathname.split("/");
      if (pathname === "login") {
        this.describe = "登录";
        this.isShow = false;
        this.repeat_pass_heightLight = true;
        this.verify_code_heightLight = true;
      } else {
        this.describe = "注册";
        this.isShow = true;
        this.$refs.main.style.height = "4rem";
      }
    },
    changeCaptcha() {
      this.$emit("changeCaptcha");
    },
    verify_samename(username) {
      let _this = this;
      this.$axios
        .post("http://localhost:3001/verify_same_name", { username: username })
        .then(res => {
          if (res.data.errno === 101) {
            //验证用户名是否合法
            let reg = /^\w{6,10}$/;
            reg.test(this.user_desc.username)
              ? (this.user_heightLight = true)
              : (this.user_heightLight = false);
            this.change_button(_this)
          }
        })
        .catch(err => {
          throw err;
        });
    },
    //判断验证码是否正确
    send_captcha(verify_code) {
      let _this = this;
      this.$axios
        .post("http://localhost:3001/verify_same_code", {
          verify_code: verify_code
        })
        .then(res => {
          res.data.errno === 101
            ? (this.verify_code_heightLight = true)
            : (this.verify_code_heightLight = false);
          this.change_button(_this)
        })
        .catch(err => {
          throw err;
        });
    },
    //判断密码是否符合标准
    judge_pass(pass) {
      let reg = /^\w{6,10}$/;
      let _this = this;
      reg.test(pass)
        ? (this.pass_heightLight = true)
        : (this.pass_heightLight = false);
      this.change_button(_this)
    },
    //判断是否和密码相同
    judge_repeat_pass(repeat_pass) {
      let _this = this;
      this.user_desc.password == repeat_pass
        ? (this.repeat_pass_heightLight = true)
        : (this.repeat_pass_heightLight = false);
      this.change_button(_this)
    },
    //四个条件都满足 改变按钮的样式
    change_button(_this) {
      if(_this.repeat_pass_heightLight && _this.pass_heightLight && _this.verify_code_heightLight && _this.user_heightLight) {
        _this.isAdd = true;
      } else {
        _this.isAdd = false;
      }
    },
    do_login() {
      let username = this.user_desc.username;
      let password = this.user_desc.password;
      let token_id = localStorage.getItem("token_id");
      this.$axios.post('http://localhost:3001/login', {username, password, token_id})
      .then(res => {
        if(res.data.errno === 101) {
          sessionStorage.setItem("token", res.data.data.token)
        }
        this.$router.push({
          name: "home"
        })
      }).catch(err => {
        throw err
      })
    },
    verify_havename(username) {
      let _this = this;
      this.$axios
        .post("http://localhost:3001/verify_have_name", { username: username })
        .then(res => {
          if (res.data.errno === 101) {
            this.user_heightLight = true
            this.change_button(_this)
          } else {
            this.user_heightLight = false
          }
        })
        .catch(err => {
          throw err;
        });
    },
    judge_have_pass(password) {
      let _this = this;
      this.$axios
        .post("http://localhost:3001/verify_have_pass", { password: password })
        .then(res => {
          if (res.data.errno === 101) {
            this.pass_heightLight = true
            this.change_button(_this)
          } else {
            this.pass_heightLight = false
          }
        })
        .catch(err => {
          throw err;
        });
    }
  },
  mounted() {
    this.judge();
  },
  props: ["captcha"]
};
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  form,
  form content {
    height: calc(100vh - 1rem);
    font-size: 0.3rem;
  }
  .content .title {
    height: 0.8rem;
    color: #25a4bb;
    line-height: 0.8rem;
    text-align: center;
    font-weight: bold;
  }
  .content .main {
    width: 100vw;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 0.02rem solid #ccc;
    border-bottom: 0.02rem solid #ccc;
  }
  .form-control {
    display: flex;
    height: 0.8rem;
    line-height: 0.8rem;
  }
  .form-control .control-label {
    width: 25vw;
    margin-left: 5vw;
  }
  .form-control div,
  .form-control div input {
    width: 70vw;
  }
  .form-control div input {
    border: 0;
    height: 0.6rem;
    outline: none;
  }
  .btn {
    height: 1.2rem;
    display: flex;
  }
  .btn div {
    width: calc(100vw - 0.2rem);
    height: 1rem;
    margin: auto;
    border-radius: 0.1rem;
    text-align: center;
    line-height: 1rem;
    background: #25a4bb;
    color: #fff;
  }
  .main input::-webkit-input-placeholder {
    font-size: 0.2rem;
  }
  .special div input,
  .special .inp-captcha {
    width: 25vw;
  }
  .main .special .captcha {
    width: 45vw;
    height: 0.8rem;
    text-align: center;
    line-height: 0.8rem;
  }
  .btn .disabled {
    background: #85d1db;
  }
  .inp-content {
    position: relative;
  }
  .able-pass {
    position: absolute;
    top: 50%;
    right: 0.2rem;
    transform: translateY(-50%);
  }
  .able-pass i {
    color: #999;
  }
  .active-color {
    color: #18a9b9 !important;
  }
}
</style>