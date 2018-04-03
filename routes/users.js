import UserClass from './handle/user'
const router = require('koa-router')()


// 注册


router.post('/api/users/create', UserClass.create_user)
    .post('/api/users/login', UserClass.login)
    .get('/api/user', UserClass.users)
    

module.exports = router
