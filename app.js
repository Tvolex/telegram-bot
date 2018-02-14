const telebot = require('telebot');
const config = require('./config');

const bot = new telebot(config.token);

bot.start();

bot.on('/start', function (msg) {
    msg.reply.text("Hello")
});

bot.on('/img', function (msg) {
    const size = msg.text.substr(5);
    msg.reply.photo('https://source.unsplash.com/random/'+size);
})

