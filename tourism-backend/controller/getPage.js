// 返回未登录的主页
exports.getPage = function(req, res, next) {
  res.json({
    "data": {
      "phone": {
        "recommandList": [
          {
            "id": 1,
            "desc": "白山 - 沈阳3天自由行",
            "imgUrl": "http://localhost:3000/images/tuijian-one.jpg",
            "price": 4409
          },
          {
            "id": 2,
            "desc": "白山 - 沈阳3天跟团游",
            "imgUrl": "http://localhost:3000/images/tuijian-two.jpg",
            "price": 1990
          },
          {
            "id": 3,
            "desc": "白山 - 沈阳3天自由行",
            "imgUrl": "http://localhost:3000/images/tuijian-three.jpg",
            "price": 3200
          },
          {
            "id": 4,
            "desc": "白山 - 沈阳3天跟团游",
            "imgUrl": "http://localhost:3000/images/tuijian-three.jpg",
            "price": 3280
          }
        ],
        "holidayList": [
          {
            "id": 1,
            "desc": "白山 - 成都6天自由行",
            "imgUrl": "http://localhost:3000/images/holiday-one.jpg",
            "price": 3890
          },
          {
            "id": 2,
            "desc": "白山 - 重庆4天跟团游",
            "imgUrl": "http://localhost:3000/images/holiday-two.jpg",
            "price": 3013
          },
          {
            "id": 3,
            "desc": "白山 - 丽江5天自由行",
            "imgUrl": "http://localhost:3000/images/holiday-three.jpg",
            "price": 3990
          },
          {
            "id": 4,
            "desc": "白山 - 长白山4天自由行",
            "imgUrl": "http://localhost:3000/images/holiday-four.jpg",
            "price": 961
          },
          {
            "id": 5,
            "desc": "白山 - 厦门4天跟团游",
            "imgUrl": "http://localhost:3000/images/holiday-five.jpg",
            "price": 2230
          },
          {
            "id": 6,
            "desc": "白山 - 三亚6天跟团游",
            "imgUrl": "http://localhost:3000/images/holiday-six.jpg",
            "price": 3064
          },
          {
            "id": 7,
            "desc": "白山 - 巴厘岛6天跟团游",
            "imgUrl": "http://localhost:3000/images/holiday-seven.jpg",
            "price": 12400
          },
          {
            "id": 8,
            "desc": "白山 - 泰国6天跟团游",
            "imgUrl": "http://localhost:3000/images/holiday-eight.jpg",
            "price": 5533
          }
        ],
        "strategyList": [
          {
            "id": 1,
            "desc": "驾一叶扁舟，寻瓯江往事",
            "imgUrl": "http://localhost:3000/images/strategy-one.jpg"
          },
          {
            "id": 2,
            "desc": "不负嵊夏好时光，泗乎太安逸",
            "imgUrl": "http://localhost:3000/images/strategy-two.jpg"
          },
          {
            "id": 3,
            "desc": "探访日本，一部家庭旅行画册",
            "imgUrl": "http://localhost:3000/images/strategy-three.jpg"
          },
          {
            "id": 4,
            "desc": "厦门，带娃出行与幸福同行",
            "imgUrl": "http://localhost:3000/images/strategy-four.jpg"
          }
        ]
      },
      "PC": {
        "name": "ok"
      }
    },
    "errno": 101
  })
}