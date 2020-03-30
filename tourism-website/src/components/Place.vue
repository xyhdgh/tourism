<template>
  <div id="place-content">
    <div>
      <ul class="clearfix">
        <li v-for="(item,index) in areaClassify" :key="index" 
        @click="showOutline(item.id);showRel(item.id)"
        :class="{outline: item.outlineStyle}">
          {{item.name}}
          <div class="triangle" v-show="item.showTriangle"></div>
        </li>
      </ul>
    </div>
    <div class="area-content clearfix">
      <div v-for="(item,index) in allArr[0].hotAreaList[0].places" :key="'h'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[0].hotAreaList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div v-for="(item,index) in allArr[1].ABCDList[0].places" :key="'a'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[1].ABCDList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div v-for="(item,index) in allArr[2].EFGHList[0].places" :key="'e'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[2].EFGHList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div v-for="(item,index) in allArr[3].JKLMList[0].places" :key="'j'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[3].JKLMList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div v-for="(item,index) in allArr[4].NPQRSList[0].places" :key="'n'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[4].NPQRSList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
      <div v-for="(item,index) in allArr[5].TWXYZList[0].places" :key="'t'+index" 
      class="hotarea" @click="firstplaceName(item)" v-show="allArr[5].TWXYZList[0].showChunk">
        <a href="javascript:void(0);">{{item}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "place",
  data() {
    return {
      areaClassify: [
        {
          name: "国内热门",
          id: 0,
          outlineStyle: true,
          showTriangle: true
        },
        {
          name: "ABCD",
          id: 1,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "EFGH",
          id: 2,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "JKLM",
          id: 3,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "NPQRS",
          id: 4,
          outlineStyle: false,
          showTriangle: false
        },
        {
          name: "TWXYZ",
          id: 5,
          outlineStyle: false,
          showTriangle: false
        }
      ],
      allArr: [{ hotAreaList: [
        {
          places: ["上海","北京","成都","昆明","西安","深圳","重庆","杭州","厦门",
                  "乌鲁木齐","广州","海口","哈尔滨","南京","武汉","长沙"],
          id: 0,
          showChunk: true
        }
      ]},{ABCDList: [
        {
          places: ["安庆","安顺","安康","阿勒泰","鞍山","包头","北京","百色","博乐",
                  "毕节","长春","成都","重庆","长沙","朝阳","大同","大连","大庆","东营","敦煌"],
          id: 1,
          showChunk: false
        }
      ]},{EFGHList: [
        {
          places: ["恩施","鄂尔多斯","二连浩特","额济纳旗","佛山","福州","阜阳","抚远",
                  "贵阳","桂林","广州","固原","高雄","呼和浩特","黑河","哈尔滨","海口","杭州","合肥","邯郸"],
          id: 2,
          showChunk: false
        }
      ]},{JKLMList: [
        {
          places: ["锦州","嘉峪关","佳木斯","济南","嘉义","昆明","康定","喀什","凯里",
          "兰州","洛阳","柳州","连城","临沂","拉萨","牡丹江","满洲里","绵阳","漠河","茅台"],
          id: 3,
          showChunk: false
        }
      ]},{NPQRSList: [
        {
          places: ["南京","南宁","南阳","南通","南昌","宁波","攀枝花","普洱","黔江","秦皇岛",
                  "齐齐哈尔","青岛","祁连","衢州","日喀则","深圳","石家庄","三亚","沈阳","上海"],
          id: 4,
          showChunk: false
        }
      ]},{TWXYZList: [
        {
          places: ["唐山","台州","天津","太原","台北","威海","武汉","无锡","潍坊","温州","兴义",
                  "西昌","厦门","西安","徐州","义乌","扬州","延安","烟台","延吉","珠海","郑州","张家界","张家口"],
          id: 5,
          showChunk: false
        }
      ]}]
    }
  },
  methods: {
    showOutline(id){
      let arr = [];
      this.areaClassify.map((item) => {
        if(item.id == id){
          item.outlineStyle = true;
          item.showTriangle = true;
        }else{
          arr.push(item);
        }
      })
      arr.map((item) => {
        item.outlineStyle = false;
        item.showTriangle = false;
      })
    },
    firstplaceName(val){
      this.$emit("fplacename",val);
    },
    showRel(id){
      let arr = [];
      this.allArr.map((item) => {
        for(let key in item){
          item[key].map((val) => {
            if(val.id == id){
              val.showChunk = true;
            }else{
              arr.push(val)
            }
          })
        }
      })
      arr.map((item) => {
        item.showChunk = false;
      })
    }
  },
}
</script>
<style scoped>
.clearfix::after{
  content: "";
  display: block;
  clear: both;
}
a{
  text-decoration: none;
  display: block;
  color: #333;
  padding: 0 5px;
  text-align: center;
  line-height: 22px;
  height: 22px;
  width: 87px;
  font-size: 14px;
}
ul{
  width: 100%;
  padding-left: 0;
  height: 30px;
  margin-block-start: 0;
  margin-block-end: 0;
}
ul li{
  list-style: none;
  float: left;
  width: 64px;
  font-size: 13px;
  height: 30px;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  padding-right: 1px;
  position: relative;
}
ul li:hover{
  color: #00d0d4;
  cursor: pointer;
}
#place-content{
  width: 392px;
  height: 30px;
  margin-top: 0;
  background-color: #fff;
  position: absolute;
  z-index: 10;
  top: 35px;
  border: 1px solid rgba(170, 170, 170, 0.932);
  left: -1px;
}
.triangle{
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 5px solid #00d0d4;
  border-top: 5px solid transparent;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 21px;
  left: 28px;
}
.area-content{
  width: 100%;
  background-color: #fff;
  border: 1px solid rgba(170, 170, 170, 0.932);
  border-top: none;
  margin-top: 1px;
  position: absolute;
  top: 31px;
  left: -1px;
}
.hotarea{
  width: 96px;
  height: 22px;
  padding-top: 3px;
  float: left;
}
.hotarea:hover{
  background-color: #00d0d4;
}
</style>