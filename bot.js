const { Telegraf } = require('telegraf');


const bot = new Telegraf('8869215320:AAGB7fK1_4n8U2LNtr43VOp-Z71oP3Seap0');

bot.start((ctx) => {
    ctx.reply(
        '👋 Добро пожаловать в Wavy Store!\n\n👕 Покупайте стильную одежду и обувь в Узбекистане.\nНажмите кнопку ниже, чтобы открыть наш магазин и выбрать понравившиеся вещи! 🛍️',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: '🏪 Открыть Wavy Store',
                            web_app: { url: 'https://wavy-store-weld.vercel.app/' }
                        }
                    ]
                ]
            }
        }
    );
});

bot.launch();
console.log('Бот запущен!');