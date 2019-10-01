const Discord = require("discord.js")
const bot = new Discord.Client()
const fs = require("fs")
const database = require("./database")
const server = require("./server")
const axios = require("axios")
bot.database = database
bot.commands = new Discord.Collection();
bot.alias = new Discord.Collection();

    fs.readdir("./eventos", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
          const event = require(`./eventos/${file}`);
          let eventName = file.split(".")[0];
          bot.on(eventName, event.bind(null, bot));
      });
      });

    fs.readdir('./comandos', async (err, file) => {
      if(err) console.log(err.stack)
      let jsf = file.filter(f => f.split('.').pop() === 'js')
      if(jsf.length < 0){
        console.log('Nenhum comandos foi encontrado');
        return;
      }
      jsf.forEach((f,i) => {
        let p = require(`./comandos/${f}`)
        console.log(`${f} carregado`)
        bot.commands.set(p.config.name, p)
        p.config.alias.forEach(a => {
          bot.alias.set(a, p.config.name)
        })
      })
    })

bot.login(process.env.TOKEN)
async function saveColor(userID, color){
  var database2 = await bot.database.Users.findById(userID) ? await bot.database.Users.findById(userID) : await new bot.database.Users({_id: userID})
    database2.color = color
    database2.save()
}
async function getColor(userID){
  var database2 = await bot.database.Users.findById(userID) ? await bot.database.Users.findById(userID) : await new bot.database.Users({_id: userID})
  var color = database2.color
  return color
}

module.exports = { saveColor, getColor, bot }