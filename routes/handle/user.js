const User = require('../model/user.model')

class UserClass {
  static async create_user(ctx){
    const {username, password} = ctx.request.body;
    if(!username || !password){
      return ctx.body={
        msg: '必须输入用户名或密码',
        status: 500
      }
    }

    const isExit = await User.findOne({username});
    if(isExit){
      return ctx.body = {
        msg : '用户已注册',
        status: 500
      }
    }
    let id = new Date();
    const result = await User.create({username, password, id})
    return ctx.body = {
      msg: "成功",
      status: 200
    }
  }

  static async login(ctx){
    const {username, password} = ctx.request.body;
    if(!username || !password){
      return ctx.body = {
        msg: '必须输入用户名或密码',
        status: 500
      }
    }

    const isSuccess = await User.findOne({username})
    if(isSuccess){
      if(isSuccss.password == password){
        let date = new Date().getTime() + 1000*60*60*24;
        ctx.cookies.set('user_id', inSuccess.id, {
          domain: 'localhost',
          path: '/',
          maxAge: 100*60*1000,
          expires: new Date(date),
          httpOnly: false,
          overwrite: false
        })
        return ctx.body = {
          msg: '成功',
          status: 200
        }
      }
    } else {
      return ctx.body = {
        msg: '密码错误',
        status: 500
      }
    }
  }

  static async users(ctx){
    let id = ctx.cookies.get('user_id');
    let user = await User.findOne({id})
    if(user){
      return ctx.body = {
        status: 200,
        info: {
          user
        },
        msg: 'success'
      }
    } else {
      return ctx.body = {
        status: 500,
        msg: 'error'
      }
    }
  }
}

export default UserClass;