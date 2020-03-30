let db = require('./mongoose.js');

// 查询是否重名
exports.select_username_by_username = function(collection_name, obj, callback) {
  db.selectFn(collection_name, obj, callback)
}

// 插入用户
exports.insert_user_by_obj = function(collection_name, obj, callback) {
  db.insertFn(collection_name, obj, callback)
}

//更新数据库
exports.update_token_by_tokenId = function(collection_name, obj, updateObj, callback) {
  db.updateFn(collection_name, obj, updateObj, callback)
}

//查询密码是否正确
exports.select_password_by_password = function(collection_name, obj, callback) {
  db.selectFn(collection_name, obj, callback)
}

//根据token查询用户
exports.select_user_by_token = function(collection_name, obj, callback) {
  db.selectFn(collection_name, obj, callback)
}

//根据token更新头像url
exports.update_head_portrait_url_by_token = function(collection_name, obj, updateObj, callback) {
  db.updateFn(collection_name, obj, updateObj, callback)
}