module.exports.run = async (bot, message, args) => { 
    if(!args[0]){
        var database = await bot.database.Users.findById(message.author.id) ? await bot.database.Users.findById(message.author.id) : await new bot.database.Users({_id: message.author.id, color: "nenhuma"})
        if(!database.color || database.color === "nenhuma"){
            return message.channel.send("Você não tem nenhuma cor setada")
        }
        message.channel.send(database.color)
    }
    else{
        const color = args[0]
        if(args[1]){
            return message.channel.send("não")
        }
        if(!color.includes("#")){
            color = "#" + color
        }
        var database = await bot.database.Users.findById(message.author.id) ? await bot.database.Users.findById(message.author.id) : await new bot.database.Users({_id: message.author.id})
        database.color = color
        database.save()
        message.channel.send("Cor setada")
    }
}
module.exports.config = {
    name: "color",
    alias: []
}