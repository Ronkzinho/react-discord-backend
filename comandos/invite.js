module.exports.run = async (bot, message, args) => { 
const usuario = message.mentions.members.first().id || args[0]
var type = args[1]
if(type === "play"){
    var game = args.slice(2).join(" ")
    message.channel.send(`@${bot.users.get(usuario)}`)
}

}
module.exports.config = {
    name: "invite",
    alias: ["invitar"]
}