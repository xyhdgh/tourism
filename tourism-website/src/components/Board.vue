<template>
  <div class="recommand-content">
    <div
      class="recommand-item"
      v-for="item in List"
      :key="item.id"
      @click="goDetail(item)"
    >
      <div class="recommand-container">
        <img :src="item.imgUrl" alt="img" />
        <div class="recommand-desc">
          <div>{{item.desc}}</div>
          <div class="re-price" v-if="item.price">
            <span>￥{{item.price}}</span>&nbsp;起
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      
    }
  },
  methods: {
    //跳转详情页
    goDetail({id}) {
      this.$router.push({
        name: "recommondDetail",
        params: {
          id
        }
      })
    }
  },
  props: ["List"],
};
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .recommand-content {
    box-sizing: border-box;
    margin: 0 0.2rem;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .recommand-item {
    width: 49%;
    height: 3rem;
    margin: 0.1rem 0;
  }
  .recommand-container {
    width: 100%;
    margin: 0 auto;
  }
  .recommand-container img {
    width: 100%;
    height: auto;
    border-radius: 0.08rem;
  }
  .recommand-desc {
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .recommand-desc div {
    width: 100%;
    font-size: 0.25rem;
  }
  .recommand-desc div span {
    font-size: 0.32rem;
    font-weight: bold;
  }
  .re-price {
    color: #ff7400;
  }
}
</style>