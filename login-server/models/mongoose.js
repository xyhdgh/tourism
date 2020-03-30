// 引入mongoose
let mongoose = require("mongoose");

// 连接数据库
mongoose.connect('mongodb://127.0.0.1:27017/tourism', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// 连接失败
mongoose.connection.on("error", function (err) {
  console.error("数据库连接失败:" + err);
});

// 连接成功
mongoose.connection.on("open", function () {
  console.log("数据库连接成功");
});

// 断开数据库
mongoose.connection.on("disconnected", function () {
  console.log("数据库断开");
})

//查询
exports.selectFn = function(collection, obj, callback) {
  mongoose.connection.db.collection(collection).find(obj).toArray(function(err, data) {
    if(err) {
      throw err
    } else {
      callback(null, data)
    }
  })
}

//插入
exports.insertFn = function(collection, obj, callback) {
  mongoose.connection.db.collection(collection).insertOne(obj, function(err, data) {
    if(err) {
      throw err
    } else {
      callback(null, data)
    }
  })
}

//更新
exports.updateFn = function(collection, obj, updateObj, callback) {
  mongoose.connection.db.collection(collection).updateOne(obj, updateObj, function(err, data) {
    if(err) {
      throw err;
    } else {
      callback(null, data)    
    }
  })
}

