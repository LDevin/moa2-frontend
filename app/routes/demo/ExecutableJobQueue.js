const router = require('koa-router')()
/* GET home page. */
router.get('/', (ctx, next) => {
  return ctx.render('demo/executableJobQueue', {
    title: 'executableJobQueue'
  });
});

module.exports = router;
