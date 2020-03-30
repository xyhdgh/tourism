<template>
  <div class="container">
    <header>
      <Backbtn>
        <span slot="title">毕业设计</span>
      </Backbtn>
    </header>
    <ul ref="ul">
      <li>版本阶段:{{version.versionStage}}</li>
      <li>版本号:{{version.versionNumber}}</li>
      <li>开发人员:{{version.author}}</li>
      <li>发布时间:{{version.releaseTime}}</li>
      <li>祝福语:{{version.wishes}}</li>
    </ul>
  </div>
</template>

<script>
import Backbtn from '../components/Backbtn.vue'

export default {
  name: "version",
  components: {
    Backbtn
  },
  data() {
    return {
      version: {
        versionStage: "Alpha版",
        versionNumber: "v1.0.0",
        author: "Mr.Xiao",
        releaseTime: "2020.06",
        wishes: "旅程愉快!"
      }
    };
  },
  methods: {
    end() {
      let oUl = this.$refs.ul;
      oUl.childNodes.forEach(item => {
        item.addEventListener("animationend", function() {
          this.style.borderRight = "0px solid";
        });
      });
    }
  },
  mounted() {
    this.end();
  }
};
</script>

<style scoped>
/* 起始文本的宽度 */
@keyframes typing {
  from {
    width: 0;
  }
}

/* 光标动画 */
@keyframes caret {
  50% {
    border-color: transparent;
  }
}

/* 移动端 */
@media screen and (max-width: 768px) {
  .container {
    width: 100vw;
    height: 100vh;
    font-size: 0.5rem;
  }
  header {
    height: 1rem;
    text-align: center;
    line-height: 1rem;
    background: linear-gradient(to right, #19a9ba, #7bd07e);
    color: #fff;
    font-size: 0.4rem;
    font-weight: bold;
  }
  ul {
    height: calc(100vh - 1rem);
    background: url("../assets/images/version.jpg") no-repeat;
  }
  ul li {
    overflow: hidden;
    white-space: nowrap;
    border-right: 0.05rem solid;
    padding: 0.2rem;
  }
  ul li:nth-child(1) {
    width: 14ch;
    animation: typing 10s steps(14), caret 1s steps(1) 14 forwards;
    color: rgb(254, 67, 101);
  }
  ul li:nth-child(2) {
    width: 11ch;
    animation: typing 10s steps(11), caret 1s steps(1) 14 forwards;
    color: rgb(220, 87, 18);
  }
  ul li:nth-child(3) {
    width: 14ch;
    animation: typing 10s steps(14), caret 1s steps(1) 14 forwards;
    color: rgb(178, 200, 187);
  }
  ul li:nth-child(4) {
    width: 14ch;
    animation: typing 10s steps(14), caret 1s steps(1) 14 forwards;
    color: rgb(35, 235, 185);
  }
  ul li:nth-child(5) {
    width: 14ch;
    animation: typing 10s steps(14), caret 1s steps(1) 14 forwards;
    color: rgb(64, 116, 52);
  }
  .back-btn {
    height: 1rem;
    position: relative;
  }
  .back-btn i {
    font-size: 0.5rem;
    color: #fff;
    position: absolute;
    left: 0.2rem;
  }
}
</style>