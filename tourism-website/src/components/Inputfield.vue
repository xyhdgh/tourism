<template>
  <div>
    <div class="input_content">
      <input type="text" placeholder="搜索目的地" style="padding-left:15px;" @focus="removeTips" ref="inp" @blur="recoverTips"/>
      <button>
        <i class="iconfont icon-fangdajing"></i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "inputfield",
  data() {
    return {
      
    }
  },
  methods: {
    removeTips(){
      this.$refs.inp.placeholder = "";
    },
    recoverTips(){
      this.$refs.inp.placeholder = "搜索目的地";
    }
  },
};
</script>
<style scoped>
input {
  float: left;
  width: 300px;
  height: 50px;
  border: 2px solid #13e09e;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  outline: none;
}
button {
  width: 80px;
  height: 56px;
  background: linear-gradient(to right,#13e09e,#9effa4);
  border: 1px solid #13e09e;
  outline: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
button i{
  font-size: 25px;
  text-align: center;
  line-height: 56px;
  color: #fff;
}
button:hover{
  cursor: pointer;
}
.input_content{
  width: 414px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
</style>