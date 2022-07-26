module.exports = {
  
    name: 'say',
    description: 'Répète un msg',
    run: async (bot, message, args) => {
      if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas les permissiosn pour effectuer cette commande !')
        const MessageCopied = args.join(' ')
        message.delete()
        message.channel.send(MessageCopied)
    },
    options: [
      {
          name: 'say',
          description: 'Répète un msg',
          type: 'STRING',
          required: true
      }
  ],
    
    runSlash: async (bot, interaction) => {
      if(!interaction.member.permissions.has('MANAGE_MESSAGES')) return interaction.channel.send('Vous n\'avez pas les permissiosn pour effectuer cette commande !')
      const MessageCopier = interaction.options(" ")
      await interaction.delete()
      await interaction.channel.send(MessageCopier)
    }
    
  }