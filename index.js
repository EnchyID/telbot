                                                                                
const Telegraf = require("telegraf");                                           
const bot  = new Telegraf("1395527061:AAEMPOUJm5-dl3B_wZE1H0JVdaPcUa8BD2E");    
                                                                                
bot.start((ctx) => {                                                            
  ctx.reply("I See You :D");                                                    
});

bot.command("help", (ctx) => {
  ctx.reply("Apa yang tidak anda mengerti?", {
    reply_markup: {
      inline_keyboard: [
        [{text: "Gk ada", callback_data: "A"}]
      ]
    }
  });
}); 

bot.hears("A", (ctx) => {
  ctx.cbQuery();
  ctx.reply("Okay berarti anda mengerti wkwk!");
});                                                                          
                                                                                
bot.launch();
