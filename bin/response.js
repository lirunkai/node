module.exports = async (ctx, next) => {
  ctx.error = ({ data, msg, status,error }) => {
    ctx.status= status||400;
    ctx.body = { code: -200, msg, data, error };
  }
  ctx.success = ({ data, msg }) => {
    ctx.body = { code: 200, msg, data };
  }
  await next()
}