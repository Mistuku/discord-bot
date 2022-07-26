// On prend le préfixe du fichier .env et on le définit
const prefix = 'w/';
// Exporation de l'événement ready qui détecte quand le bot est en ligne

module.exports = {
  
  name: 'messageCreate',
  once: false,
  execute(bot, message) {
    
    // Si l'autheur du message est un bot ça l'ignore
    if(message.author.bot) return;
    
    // Si le message ne commence pas par le préfixe ça ignore
    if(!message.content.startsWith(prefix)) return;
    
    // On définit les arguments de la commande
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    
    // On définit le nom de la commande
    const cmdName = args.shift().toLowerCase();
    
    // Si il n'y a pas de nom de commande
    if(cmdName.length == 0) return;
    
    // On prend la commande depuis la Collection crée dans index.js
    let cmd = bot.commands.get(cmdName);
    
    // Si il y a cmd alors on la lance
    if(cmd) cmd.run(bot, message, args)
    
  }
}
