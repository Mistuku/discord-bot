const Discord = require('discord.js');

module.exports = {
  
    name: 'ban',
    description: 'Permet de bannir une personne',
    run: async (bot, message, args) => {
      
        if(!message.member.permissions.has('BAN_MEMBERS')) return message.channel.send('Vous n\avez pas les permissions requises pour utiliser cette commande !');

        const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first()

        if(!target) return message.channel.send('Merci de préciser un membre à bannir');

        const embedBannedMessage = new Discord.MessageEmbed()
        .setTitle('Vous avez banni quelqu\'un')
        .setDescription(`Vous avez banni ${target.user.tag}`)

        await message.channel.send({embeds: [embedBannedMessage]});

        await target.ban();

    },
    options: [
        {
            name: 'membre',
            description: 'Le membre à bannir',
            type: 'USER',
            required: true
        }
    ],
    runSlash: async (bot, interaction) => {
        if(!interaction.member.permissions.has('BAN_MEMBERS')) return interaction.reply('Vous n\avez pas les permissions requises pour utiliser cette commande !');

        const target = interaction.options.getUser('membre');
        if(!target) return interaction.reply('Merci de préciser un membre à bannir');

        const embedBannedInteraction = new Discord.MessageEmbed()
        .setTitle('Vous avez banni quelqu\'un')
        .setDescription(`Vous avez banni ${target.tag}`)
        
        await interaction.reply({embeds: [embedBannedInteraction]})

        await interaction.guild.members.cache.get(target.id).ban()
    }
  }