const { MessageEmbed } = require("discord.js")
//commande suggestion
module.exports = {

    name: 'suggestion',
    description: 'Permet de faire une suggestion',
  
      run: async (bot, message, args) => {
       const Suggestion = args.join(" ");

        if(!Suggestion) return message.reply("Veuillez indiquer une phrase pour votre suggestion !")

        let laDate = new Date();
      const messagee = message.author;
      const embedSuggestion = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(
            {
                name: `Suggestion de ${messagee.tag}`, 
                iconURL: messagee.displayAvatarURL({dynamic: true})
            })
        
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setFooter({ text: `${message.member.displayName}`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}`})
        .setDescription(`🗞️ |Auteur du message : ${message.author}\nDate de création du message : <t:${Math.floor(message.createdAt / 1000)}:F>\nContenu : \`\`\`${message.content}\`\`\``)
        .addField('Commande effectuée sur le Channel: ',` ${message.channel }`,"\`", true)
        .setTimestamp()

    return message.guild.channels.cache.get("995932693768445993").send({embeds: [embedSuggestion]
        }).then(async msg => {
            msg.react('✅')
            msg.react('❌')
            message.delete().catch(() => {})
            console.log(`
            ╔══════════════════════════════════╗
            Nouvelle suggestion :
            Auteur : ${message.author.username}
            Suggestion : ${Suggestion}
            Heure : ${laDate.getHours() + 'h' + laDate.getMinutes()}
            ╚══════════════════════════════════╝
            `);

        });
    
  },
};