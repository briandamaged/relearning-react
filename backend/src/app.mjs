
import Koa from 'koa'

const app = new Koa();

app.use(async function(ctx) {
  ctx.body = "Hello!";
});


app.listen(3000);
