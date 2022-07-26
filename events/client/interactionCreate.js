const Discord = require('discord.js')
const transcript = require('discord-html-transcripts')

module.exports = {
  
  name: 'interactionCreate',
  once: false,
  async execute(bot, interaction) {
    
if(interaction.isButton()) {
      if(interaction.customId === "openticket") {

          const channel = await interaction.guild.channels.create(`⭕ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})

          await channel.setParent('997515969163448450')

          await interaction.reply({content: `Votre ticket commande à bien été créer ${channel} ! :tada:`, ephemeral: true})

          const EmbedTicketCreate = new Discord.MessageEmbed()
          .setTitle(':package: Ticket commande :package:')
          .setColor('RANDOM')
          .setDescription(`**Tu as bien ouvert un ticket commande ${interaction.user.username} !**\n\nNous te demanderons de suivre le patern indiqué ci-dessous :\n\n> Pseudo ig: (votre pseudo)\n> Commande: (votre commande)\n> Prix: (le prix total)\n> Grade: (<#997843265518837760>)\n\nUn vendeur va prendre votre commande au plus vite !`)
          .setTimestamp()
          .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))

          const ButtonTranscript = new Discord.MessageActionRow()
          .addComponents(
              new Discord.MessageButton()
                  .setCustomId('transcript-button')
                  .setLabel('Créer le transcript')
                  .setEmoji('📰')
                  .setStyle('PRIMARY')
              )

          const ButtonClose = new Discord.MessageActionRow()
          .addComponents(
              new Discord.MessageButton()
                  .setCustomId('close-button')
                  .setLabel('Close')
                  .setEmoji('🔒')
                  .setStyle('DANGER')
              )

       await channel.send({content: `${interaction.member}`,embeds: [EmbedTicketCreate], components: [ButtonTranscript, ButtonClose]})
      }

      if(interaction.customId === "transcript-button") {

        const topic = interaction.channel.topic 

        const MemberUserName = interaction.channel.name.slice(8)

        const ButtonLinkTranscript = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageButton()
            .setCustomId('buttonlinklogs')
            .setEmoji('🔗')
            .setLabel('Télécharger le transcript')
            .setStyle('SUCCESS')
        )

        const transcriptEmbed = new Discord.MessageEmbed()
        .setTitle('Nouveau transcript')
        .setColor('DARK_GOLD')
        .setThumbnail("https://cdn.discordapp.com/attachments/997843265518837760/1000141102118088825/unknown.png")
        .setDescription(`Nom du client: ${MemberUserName}\nId du vendeur: ${topic}\nTranscript créer par: ${interaction.user.username}`)

        await interaction.guild.channels.cache.get('998634683019558912').send({embeds: [transcriptEmbed], components: [ButtonLinkTranscript]})
        await interaction.reply('Le transcript à bien été créer dans <#996472574110347294> :newspaper:')
      }

      if(interaction.customId === "close-button") {

      let user = interaction.guild.members.cache.find(m => m.user.username === interaction.message.embeds[0].description.split(" ")[0].split("#")[0] && m.user.discriminator === interaction.message.embeds[0].description.split(" ")[0].split("#")[1])
      
      await interaction.channel.send(`Le ticket sera supprimé d'ici quelques secondes...`)

      setTimeout(async () => {
        await interaction.channel.delete()
      }, 5000)

      
      }

      if(interaction.customId === "buttonlinklogs") {

        await interaction.deferReply()
        await bot.channels.cache.get('996472574110347294').send({content: `Pour accéder à tout les messages du ticket, veuillez cliquer sur le petit bouton télécharger en bas à droite ^^`, files: [await transcript.createTranscript(interaction.channel)], ephemeral: true})

      }

      if(interaction.customId === "openticketr") { 

        const channel = await interaction.guild.channels.create(`📨ticket-${interaction.user.username}`, {type: "GUILD_TEXT"})

        await channel.setParent('997523114655227954')

        await interaction.reply({content: `Votre ticket commande à bien été créer ${channel} ! :postbox: `, ephemeral: true})

        const EmbedTicketCreate = new Discord.MessageEmbed()
        .setTitle('```Candidature witch\'s Shop```')
        .setColor('RANDOM')
        .setDescription(`\n\n\n**Nom In-Game & Pseudo Discord :**\n\n**Poste candidaté :**\n\n**Âge :**\n\n*[Vendeur uniquement] Sanctions en jeu :*\n\n**Présentation personnelle :**\n\n**Depuis quand jouez-vous à Paladium ?**\n\n**Pourquoi vouloir devenir Modérateur ou Vendeur pour le Witch\'s Shop ?**\n\n**Pour quelle raison devrions-nous vous prendre plutôt qu\'un autre ?**\n\n**Un mot de fin ?**`)
        .setTimestamp()
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))

        const ButtonClaim = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('claim-button')
                .setLabel(`S'occuper de la candidature`)
                .setEmoji('📰')
                .setStyle('SUCCESS')
            )

        const ButtonClose = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('close-button')
                .setLabel('Close')
                .setEmoji('🔒')
                .setStyle('DANGER')
            )

     await channel.send({content: `${interaction.member}`,embeds: [EmbedTicketCreate], components: [ButtonClaim, ButtonClose]})
    }

    if(interaction.customId === "transcript-button") {

      const topic = interaction.channel.topic 

      const MemberUserName = interaction.channel.name.slice(8)

      const ButtonLinkTranscript = new Discord.MessageActionRow()
      .addComponents(
        new Discord.MessageButton()
          .setCustomId('buttonlinklogs')
          .setEmoji('🔗')
          .setLabel('Télécharger le transcript')
          .setStyle('SUCCESS')
      )
      }
      if(interaction.customId === "claim-button") {

        const Modo = interaction.member
        
        const topic = interaction.channel.topic
        
        const MemberUserName = interaction.channel.name.slice(9)

        const Member = interaction.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)

        if(!interaction.channel.name.includes('ticket')) return interaction.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!interaction.member.roles.cache.find(r=> r.id === "1001500806169772143")) return interaction.channel.send(`Vous n'etes pas un membre du staff !`)
        
        if(Member === interaction.member) return interaction.reply(`Vous ne pouvez vous occupez de votre propre candidature !`)

        if(interaction.channel.name.startsWith("❌")) return interaction.channel.send(`La commande est déjà refusé`)
        if(interaction.channel.name.startsWith("✔️")) return interaction.channel.send(`La candidature est déjà accepté`)
        
        const ClaimEmbed = new Discord.MessageEmbed()
        .setTitle(`:pushpin: ${interaction.user.username} va traiter votre candidature :pushpin:`)
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
        .setFooter({ text: 'Pour ne plus prendre en charge cette demande clique sur le bouton unclaim`'})
        .setDescription(`**${interaction.member} va s'occuper de vous !**\n\nUne fois votre candidature terminé, il jugera, seul, ou avec l'avis de ses collègues, si vous êtes accepté ou non !\n\nUne fois sa décision prise, il sélectionnera soit l'option acceptée, soit l'option refusée\n\nPour toutes questions, veuillez contacter un membre du haut-staff par mp, tout troll sera sanctionner.`)

        const UnclaimButton = new Discord.MessageActionRow()
        .addComponents(
          new Discord.MessageSelectMenu()
          .setCustomId("Unclaim")
          .setMaxValues("1")
          .setMinValues("0")
          .setPlaceholder("Unclaim/Refuser/Retenir")
          .addOptions([
            {
            label: "Unclaim",
            description: "Pour annuler de traiter cette demande",
            value: "unclaim",
            emoji: "💥"
          },  {
            label: "Accepter",
            description: "Pour accepter la candidature d'un membre",
            value: "yes",
            emoji: "✔️"
          },  {
            label: "Refuser",
            description: "Pour refuser la candidature d'un membre",
            value: "no",
            emoji: "❌"
          }, ])
        )

        interaction.channel.setTopic(`${Modo.user.id}`)
        interaction.channel.setName(`📝ticket-${MemberUserName}`)

        await interaction.reply({content: `${Member}`, embeds: [ClaimEmbed], components: [UnclaimButton]})
      }  
     
  }if(interaction.isSelectMenu()) {
    if(interaction.customId === "Unclaim") {
      if(interaction.values == "unclaim") {
        const Modo = interaction.member;
        
        const topic = interaction.channel.topic
        
        const MemberUserName = interaction.channel.name.slice(9)

        const Member = interaction.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member === interaction.member) return interaction.reply(`Vous ne pouvez vous occupez de votre propre candidature !`)

        if(topic !== interaction.member.id) return interaction.reply(`Vous ne vous occupez pas de cette candidature !`)

        if(!interaction.channel.name.includes('ticket')) return interaction.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!interaction.member.roles.cache.find(r=> r.id === "1001500806169772143")) return interaction.channel.send(`Vous n'etes pas un membre du staff !`)
 
        const UnclaimEmbed = new Discord.MessageEmbed()
        .setTitle(`📍 ${Modo.user.username} ne peut plus traiter votre candidature ! 📍`)
        .setDescription(`${Modo} est dans l'incapacité de traiter votre candidature !\n\nLes membres du staff viennent à l'instant d'être ping , afin qu'un autre puisse s'occupez de vous ! 📁\n\nPour toutes questions, veuillez contacter un membre du haut-staff par mp, tout troll sera stanctionner`)
        .setTimestamp()
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
        .setFooter({ text: `Bot dev par Mistuku#0001`})

        await interaction.reply({content: `${Member}`, embeds: [UnclaimEmbed]})

        interaction.channel.setTopic(`Personne ne s'occupe de ce ticket`)
        interaction.channel.setName(`📨ticket-${MemberUserName}`)
      }else if(interaction.values == "yes") {
        
        const Modo = interaction.member;
        
        const topic = interaction.channel.topic
        
        const MemberUserName = interaction.channel.name.slice(8)

        const Member = interaction.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member === interaction.member) return interaction.reply(`Vous ne pouvez vous occupez de votre propre candidature !`)

        if(topic !== interaction.member.id) return interaction.reply(`Vous ne vous occupez pas de cette candidature !`)

        if(!interaction.channel.name.includes('ticket')) return interaction.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!interaction.member.roles.cache.find(r=> r.id === "1001500806169772143")) return interaction.channel.send(`Vous n'etes pas un membre du staff !`)

        if(interaction.channel.name.startsWith("❌")) return interaction.channel.send(`La candidature est déjà refusé`)
        if(interaction.channel.name.startsWith("✅")) return interaction.channel.send(`La commande est déjà prête !`)

        const YesEmbed = new Discord.MessageEmbed()
        .setTitle('✅ - Votre candidature a été acceptée - ✅')
        .setColor('GREEN')
        .setFooter({text: `Félécitations :)`})
        .setImage('https://pbs.twimg.com/media/EGyP8GvX0AAULL7.jpg')
        .setDescription(`**${Modo} a accepté votre candidature !**\n\nToutes mes félécitations ! :tada:\nJe vous laisse mp ${Modo} afin de fixer une date d'entratien oral !\n\nCet entretien servira à vous expliquez le fonctionnement du shop !\n\nEncore bravo ! :tada:`)

        await interaction.channel.send({embeds: [YesEmbed], content: `${Member}`})

        interaction.channel.setName(`✅ticket-${MemberUserName}`)
      }else if(interaction.values == "no") {
        const Modo = interaction.member;
        
        const topic = interaction.channel.topic
        
        const MemberUserName = interaction.channel.name.slice(8)

        const Member = interaction.guild.members.cache.find(m=> m.user.username.toLowerCase() === MemberUserName)
        
        if(Member === interaction.member) return interaction.reply(`Vous ne pouvez vous occupez de votre propre candidature !`)

        if(topic !== interaction.member.id) return interaction.reply(`Vous ne vous occupez pas de cette candidature !`)

        if(!interaction.channel.name.includes('ticket')) return interaction.channel.send(`Veuillez utilisez cette commande dans un ticket ! :eyes:`)

        if(!interaction.member.roles.cache.find(r=> r.id === "1001500806169772143")) return interaction.channel.send(`Vous n'etes pas un membre du staff !`)

        if(interaction.channel.name.startsWith("❌")) return interaction.channel.send(`La candidature est déjà refusé`)
        if(interaction.channel.name.startsWith("✅")) return interaction.channel.send(`La canidature est déjà prête !`)

        const NoEmbed = new Discord.MessageEmbed()
        .setTitle('❌ - Votre candidature a été refusée - ❌')
        .setColor('RED')
        .setFooter({text: `Merci d'avoir postulé`})
        .setImage('https://img-19.commentcamarche.com/V2QejGhL-6sZOyrbekQywHDPAks=/1500x/smart/4d5784b904744f738acb42471f120b3d/ccmcms-droit-finances/32167874.jpg')
        .setDescription(`**${Modo} a déclinée votre candidature !**\n\nNous sommes sincèrement désolé :sob:\nJe vous laisse mp ${Modo} afin d'avoir des informations supplémentaire\n\nSi vous n'êtes pas dans le staff il y a 3 cas de figure possible :\n\n> 1er : vous n'avez pas l'âge requis\n> 2ème: votre candidature n'est pas assez développée\n> 3ème: vous ne répondez pas à nos attentes\n\nMerci d'avoir postulé :tada:`)

        await interaction.channel.send({embeds: [NoEmbed], content: `${Member}`})

        interaction.channel.setName(`❌ticket-${MemberUserName}`) 
      }
    }

  }else if(interaction.isCommand()) {
    
    const cmd = bot.commands.get(interaction.commandName);
    
    // Si il n'y a pas cette commande alors il abandonne le reste du code et répond àbla personne qui a utilisé la commande
    if(!cmd) return interaction.reply("Cette commande n'existe pas.");
    
    // Si la commande existe alors on lance la commande avec le paramétre client et interaction
    cmd.runSlash(bot, interaction);
  }
    }
  }


