<template>
  <div class="head-nav">
    <div class="clearfix">
      <ul class="clearfix">
        <li v-for="(item,index) in funs" :key="index" @click="goBackUrl(item.url)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "lrm",
  data() {
    return {
      funs: [
        {
          name: "登录",
          url: "/login"
        },
        {
          name: "注册",
          url: "/register"
        },
        {
          name: "首页",
          url: "/"
        }
      ]
    };
  },
  methods: {
    //页面跳转
    goBackUrl(url) {
      if (url != "/register") this.$router.push(url);
    }
  }
};
</script>
<style scoped>
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
/* PC 平板 */
@media screen and (min-width: 768px) {
  .head-nav {
    border-bottom: 1px solid #ddd;
    background-color: #fff;
  }
  .head-nav ul {
    margin-block-start: 0.5rem;
    margin-block-end: 0.5rem;
    padding: 0;
    float: right;
    margin-right: 50px;
  }
  ul li {
    list-style: none;
    float: left;
    cursor: pointer;
    font-size: 10px;
    padding: 0 6px;
  }
  ul li:last-child {
    color: #ff7c00;
  }
}

/*移动端 */
@media screen and (max-width: 767px){
  
}
</style>