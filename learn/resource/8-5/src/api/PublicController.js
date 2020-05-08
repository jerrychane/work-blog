import svgCaptcha  from 'svg-captcha';

class PublicController {
    constructor() {}
    async getCaptcha(ctx) {
        const newCaptcha = svgCaptcha.create({})
        console.log(newCaptcha)
        ctx.body = {
            code: 200,
            data: newCaptcha.data,
        }
    }
}

export default new PublicController();