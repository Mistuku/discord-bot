const Discord = require('discord.js');

module.exports = {
  
    name: 'kick',
    description: 'Permet de kick une personne',
    run: async (bot, message, args) => {
      
        if(!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('Vous n\avez pas les permissions requises pour utiliser cette commande !');

        const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first()

        if(!target) return message.channel.send('Merci de préciser un membre à kick');

        const embedKickedMessage = new Discord.MessageEmbed()
        .setTitle('Vous avez kick quelqu\'un')
        .setDescription(`Vous avez expulser ${target.user.tag}`)

        await message.channel.send({embeds: [embedKickedMessage]});

        await target.kick();

    },
    options: [
        {
            name: 'membre',
            description: 'Le membre à kick',
            type: 'USER',
            required: true
        }
    ],
    runSlash: async (bot, interaction) => {
        if(!interaction.member.permissions.has('KICK_MEMBERS')) return interaction.reply('Vous n\avez pas les permissions requises pour utiliser cette commande !');

        const target = interaction.options.getUser('membre');
        if(!target) return interaction.reply('Merci de préciser un membre à kick');

        const embedKickedInteraction = new Discord.MessageEmbed()
        .setTitle('Vous avez kick quelqu\'un')
        .setDescription(`Vous avez kick ${target.tag}`)
        
        await interaction.reply({embeds: [embedKickedInteraction]})

        await interaction.guild.members.cache.get(target.id).kick()
    }
  }