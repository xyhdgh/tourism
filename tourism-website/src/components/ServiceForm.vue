<template>
  <div class="phone-form">
    <div class="search-box">
      <div class="search-header">国内</div>
      <div class="geographic">
        <div class="location">{{address}}</div>
        <div class="position-box" @click="locate">
          <i class="iconfont icon-REPEAT-copy"></i>
          <div>我的位置</div>
        </div>
      </div>
      <div class="live">
        <div class="live-left">
          <div class="live-left-date">
            <div class="live-desc">今日入住</div>
            <div class="live-time">02月04日</div>
          </div>
          <span>至</span>
          <div class="live-right-date">
            <div class="live-desc">明天离店</div>
            <div class="live-time">02月05日</div>
          </div>
        </div>
        <div class="live-right">共1晚</div>
      </div>
      <div class="search-keyword">
        搜索酒店名
      </div>
      <div class="submit">
        <button>搜索</button>
      </div>
      <div class="my-order">
        <span><i class="iconfont icon-right-angle-copy"></i>我的订单<i class="iconfont icon-right-angle-copy"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceform",
  data() {
    return {
      address: "北京"
    };
  },
  methods: {
    locate() {
      let url = '/api/location/ip?ak=RgHKdZTLmSyob3Btt1Kpgi4m2dRKps8I&ip=119.55.223.177&coor=bd09ll';
      this.$axios.get(url).then(res => {
        let cityName = res.data.content.address_detail.city;
        this.address = cityName.slice(0, cityName.length - 1);
      }).catch(err => {
        throw err;
      })

    }
  }
};
</script>

<style scoped>
/* 移动端 */
@media screen and (max-width: 768px) {
  .phone-form,
  .search-box {
    width: 100%;
  }
  .phone-form {
    box-sizing: border-box;
    padding: 0.2rem 0;
  }
  .search-box {
    border-radius: .2rem;
    background: #fff;
  }
  .search-header {
    width: 100%;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    color: #0AC4DD;
  }
  .geographic {
    display: flex;
    justify-content: space-between;
    height: 1rem;
    color: #333;
    margin-bottom: .2rem;
  }
  .geographic .location {
    padding-left: .2rem;
    line-height: 1rem;
  }
  .geographic .position-box {
    padding-right: .2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .live {
    display: flex;
    justify-content: space-between;
    height: 1rem;
  }
  .live-left {
    display: flex;
    padding-left: .2rem;
  }
  .live-right {
    padding-right: .2rem;
    line-height: 1rem;
    color: #212121;
    font-size: .25rem;
  }
  .live-left-date, .live-right-date{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
  }
  .live span {
    line-height: 1rem;
    padding-left: .2rem;
    padding-right: .2rem;
  }
  .live-desc {
    color: #9e9e9e;
    font-size: .25rem;
    text-align: left;
  }
  .live-time {
    color: #333;
    font-size: .35rem;
    font-weight: bold;
  }
  .search-keyword {
    box-sizing: border-box;
    padding: 0 .2rem;
    height: 1rem;
    line-height: 1rem;
    color: #BDBDBD;
    margin-bottom: .2rem;
  }
  .submit {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
  .submit button {
    width: calc(100% - .4rem);
    height: .8rem;
    background: #FF714A;
    border-radius: 1rem;
    border: none;
    color: #fff;
  }
  .my-order {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    color: #616161;
    font-size: .25rem;
  }
}
</style>