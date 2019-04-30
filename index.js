const Koa = require('koa');
const axios = require('axios');

const koa = new Koa();

const httpClint = axios.create({
    baseURL: 'http://m.d-hu.cn'
})

// log request URL:
koa.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    httpClint.get('/car/api/car-brand-info/getCarBrandInfoList').then(reqponse => {
        console.log(reqponse);
    })
    await next();
    console.log(`End ${ctx.request.method} ${ctx.request.url}...`);
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

koa.listen(3000);
