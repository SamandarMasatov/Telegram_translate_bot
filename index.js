const { Telegraf } = require('telegraf');
const translator = require('translation-google');
const config = require('./config.json')

const bot = new Telegraf(config.BOT_TOKEN); 

bot.start((ctx) => {
    ctx.reply('Salom, Men tarjima qilishim uchun matn junating')
})


bot.on('text', async (ctx) => {
  const text = ctx.update.message.text;

  const translation = await translator(text, { from: "en", to: "uz" })

  ctx.reply(translation.text)
})


bot.launch()