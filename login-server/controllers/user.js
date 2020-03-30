const User_model = require('../models/user_model.js');
const svgCaptcha = require('svg-captcha');
let ObjectID = require('mongodb').ObjectID;
/* 验证码 */
let captchaText = "";
/* jwt鉴权 */
let jwt = require("jsonwebtoken")
/* 加密key */
let secretKey = '1998-10-13';

/* 用户注册 POST */
exports.do_register = async function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  let collection_name = "users"
  let insert_obj = {
    "username": username,
    "password": password,
    "token": "",
    "head_portrait_url": ""
  }
  // 插入insert_obj
  await new Promise((resolve, reject) => {
    User_model.insert_user_by_obj(collection_name, insert_obj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "注册异常",
          "errno": 0
        })
        reject()
      } else {
        if (result.result.ok === 1) {
          //插入成功
          res.json({
            "data": {
              "token_id": result.ops[0]._id.toString()
            },
            "errmsg": "注册成功",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "注册失败",
            "errno": 1
          })
          reject()
        }
      }
    })
  })
}

/* 登录输入框 POST */
exports.verify_have_name = async function (req, res, next) {
  let collection_name = "users";
  let username = req.body.username;
  let findObj = {
    "username": username
  }
  // 根据username查询是否重复
  await new Promise((resolve, reject) => {
    User_model.select_username_by_username(collection_name, findObj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "查询用户名异常",
          "errno": 0
        })
        reject()
      } else {
        if (result.length > 0) {
          res.json({
            "errmsg": "用户名存在",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "用户名不存在",
            "errno": 1
          })
          reject()
        }
      }
    })
  })
}

/* 登录PASS POST */
exports.verify_have_pass = async function (req, res, next) {
  let collection_name = "users";
  let password = req.body.password;
  let findObj = {
    "password": password
  }
  // 根据password查询是否正确
  await new Promise((resolve, reject) => {
    User_model.select_password_by_password(collection_name, findObj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "查询异常",
          "errno": 0
        })
        reject()
      } else {
        if (result.length > 0) {
          res.json({
            "errmsg": "密码正确",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "密码错误",
            "errno": 1
          })
          reject()
        }
      }
    })
  })
}

/* 用户登录 POST */
exports.do_login = async function (req, res, next) {
  let collection_name = "users";
  let token_id = req.body.token_id
  let obj = {
    username: req.body.username,
    password: req.body.password
  }
  // 根据obj查询
  await new Promise((resolve, reject) => {
    User_model.select_username_by_username(collection_name, obj, function (err, result) {
      if (err) {
        reject()
      } else {
        if (result.length > 0) {
          //查询成功
          resolve();
        } else {
          reject();
        }
      }
    })
  }).catch(e => {
    throw e;
  })
  // 查询成功后 生成token 再根据token_id更新数据库
  await new Promise((resolve, reject) => {
    let ByObj = {
      "_id": ObjectID(token_id)
    };
    let token = jwt.sign({
      'username': obj.username
    }, secretKey);
    let updateObj = {
      $set: {
        "token": token
      }
    }
    User_model.update_token_by_tokenId(collection_name, ByObj, updateObj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "登录异常",
          "errno": 0
        })
        reject()
      } else {
        if (result.result.nModified > 0) {
          res.json({
            "data": {
              "token": token
            },
            "errmsg": "登录成功",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "登录失败",
            "errno": 1
          })
          reject()
        }
      }
    })
  }).catch(e => {
    throw e
  })
}

/* 验证码 GET */
exports.captcha = function (req, res, next) {
  /* 生成验证码 */
  var captcha = svgCaptcha.create({
    size: 4,
    ignoreChars: '0o1iOILl',
    width: 140,
    height: 40,
    fontSize: 50
  });
  captchaText = captcha.text;
  res.type("svg")
  res.json({
    "data": captcha.data,
    "errno": 101
  })
}

/* 验证用户名重复 */
exports.verify_same_name = async function (req, res, next) {
  let collection_name = "users";
  let username = req.body.username;
  let findObj = {
    "username": username
  }
  // 根据username查询是否重复
  await new Promise((resolve, reject) => {
    User_model.select_username_by_username(collection_name, findObj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "查询用户名异常",
          "errno": 0
        })
        reject()
      } else {
        if (result.length > 0) {
          res.json({
            "errmsg": "用户名重复",
            "errno": 1
          })
          reject()
        } else {
          res.json({
            "errmsg": "用户名不存在",
            "errno": 101
          })
          resolve()
        }
      }
    })
  })
}

/* 验证码是否正确 */
exports.verify_same_code = function (req, res, next) {
  let code = req.body.verify_code;
  let reg = new RegExp(captchaText, "ig")
  if (reg.test(code)) {
    res.json({
      "errmsg": "验证码正确",
      "errno": 101
    })
  } else {
    res.json({
      "errmsg": "验证码错误",
      "errno": 1
    })
  }
}

/* 返回基本信息 */
exports.getMessage = async function (req, res, next) {
  let token = req.body.token;
  let obj = {
    "token": token
  }
  /* 根据token查询用户信息 */
  await new Promise((resolve, reject) => {
    User_model.select_user_by_token("users", obj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "用户信息查询异常",
          "errno": 1
        })
        reject()
      } else {
        if (result.length > 0) {
          res.json({
            "data": {
              "username": result[0].username,
              "img_url": result[0].head_portrait_url
            },
            "errmsg": "用户信息查询成功",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "用户信息查询失败",
            "errno": 1
          })
          reject()
        }
      }
    })
  })
}

//上传图片 并更新数据
exports.update_img = async function (req, res, next) {
  console.log(req.file)
  //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Inh5aW5naGFvIiwiaWF0IjoxNTgxMzE0MzMxfQ.xHJTBwB6MFdOZn3QxmtWqEL_cCrvalCS-iiD3-vu1_Q
  /* 根据token来查询 其实应该根据token_id来查询 但是token没有设置过期时间 不会改变 */
  let updateObj = {
    $set: {
      "head_portrait_url": "http://localhost:3001/" + req.file.filename
    }
  }
  let obj = {
    "token": req.headers.token
  }
  await new Promise((resolve, reject) => {
    User_model.select_user_by_token("users", obj, function (err, result) {
      if (err) reject();
      console.log(result)
      if (result.length > 0) {
        resolve()
      } else {
        reject()
      }
    })
  })

  // 更新头像url
  await new Promise((resolve, reject) => {
    User_model.update_head_portrait_url_by_token("users", obj, updateObj, function (err, result) {
      if (err) {
        res.json({
          "errmsg": "上传图片异常",
          "errno": 0
        })
      } else {
        //更新成功
        if (result.result.nModified > 0 && result.result.ok) {
          res.json({
            "data": {
              "img_url": updateObj.$set["head_portrait_url"]
            },
            "errmsg": "上传图片成功",
            "errno": 101
          })
          resolve()
        } else {
          res.json({
            "errmsg": "上传图片失败",
            "errno": 1
          })
          reject()
        }
      }
    })
  })
}