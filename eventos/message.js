module.exports = async (bot, message) => {
    let prefix = "!"
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let comando = args.shift().toLowerCase();
    let commandfile = bot.commands.get(comando) || bot.commands.get(bot.alias.get(comando));
    if(commandfile){
        commandfile.run(bot, message, args)
    }

}