// Importation de la classe promisify du module util
const { promisify } = require('util');

// Importation de la classe glob du module glob
const { glob } = require('glob');
const pGlob = promisify(glob);

// Exportation
module.exports = async bot => {
  
  // On prend les fichiers qui contiennent les évènements
  (await pGlob(`${process.cwd()}/events/*/*.js`)).map(async eventFile => {
    
    // On définit les évènements
    const event = require(eventFile);
    
    // Si l'événement n'a pas de nom alors ça log une erreur
    if(!eventList.includes(event.name) || !event.name) return console.log(`Évènement non lancé: erreur dûe à l'orthographe ou bien pas de nom\nFichier => ${eventFile}`)
    
    // On vérifie si le paramètre once que l'on a vu précédemment est true ou false
    if(event.once) {
      
      bot.once(event.name, (...args) => event.execute(bot, ...args))
      
    } else {
      
      // Si once est false
      bot.on(event.name, (...args) => event.execute(bot, ...args))
      
    }
    
    // Log les évènements prêts à l'emploi
    // Vous pouvez changer à votre guise
    console.log(`Évènement prêt: ${event.name}`);
    
  })
  
}

const eventList = ['apiRequest', 'apiResponse', 'applicationCommandCreate', 'applicationCommandDelete', 'applicationCommandUpdate', 'channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'debug', 'emojiCreate', 'emojiDelete', 'emojiUpdate', 'error', 'guildBanAdd', 'guildBanRemove', 'guildCreate', 'guildDelete', 'guildIntegrationsUpdate', 'guildMemberAdd', 'guildMemberAvailable', 'guildMemberRemove', 'guildMembersChunk', 'guildMemberUpdate', 'guildScheduledEventCreate', 'guildScheduledEventDelete', 'guildScheduledEventUpdate', 'guildScheduledEventUserAdd', 'guildScheduledEventUserRemove', 'guildUnavailable', 'guildUpdate', 'interaction', 'interactionCreate', 'invalidated', 'invalidRequestWarning', 'inviteCreate', 'inviteDelete', 'message', 'messageCreate', 'messageDelete', 'messageDeleteBulk', 'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageReactionRemoveEmoji', 'messageUpdate', 'presenceUpdate', 'rateLimit', 'ready', 'roleCreate', 'roleDelete', 'roleUpdate', 'shardDisconnect', 'shardError', 'shardReady', 'shardReconnecting', 'shardResume', 'stageInstanceCreate', 'stageInstanceDelete', 'stageInstanceUpdate', 'stickerCreate', 'stickerDelete', 'stickerUpdate', 'threadCreate', 'threadDelete', 'threadListSync', 'threadMembersUpdate', 'threadMemberUpdate', 'threadUpdate', 'typingStart', 'userUpdate', 'voiceStateUpdate', 'warn', 'webhookUpdate'];
