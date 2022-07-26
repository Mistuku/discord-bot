// Importation de la classe promisify du module util
const { promisify } = require('util');

// Importation de la classe glob du module glob
const { glob } = require('glob');
const pGlob = promisify(glob);

// Exportation
module.exports = async bot => {
  
  // On prend les fichiers qui contiennent les commandes
  (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async cmdFile => {
    
    // On définit le fichier de la commande
    const cmd = require(cmdFile);
    
    // Si la commande n'a pas de nom alors on log une erreur
    if(!cmd.name || !cmd.description) return console.log(`Commande non prête: la commande n'a pas de nom ou pas de description\nFichier => ${cmdFile}`)
    
    // On met la commande dans la collection dans index.js
    bot.commands.set(cmd.name, cmd)
    
    // Log les commandes prêtes à l'emploi (slash commands et commands confondues)
    //Vous pouvez changer à votre guise
    console.log(`Commande prête: ${cmd.name}`);
    
  })
  
}