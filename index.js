// Importation de la classe Client dans le module discord.js pour se connecter au bot
const { Client, Collection } = require('discord.js');

// Importatuon du module dotenv et configuration
const dotenv = require('dotenv'); dotenv.config();

// Création du client pour le bot
const bot = new Client({
  intents: 32767
});

// On crée une collection
bot.commands = new Collection();
['EventHandler', 'CommandHandler'].forEach(handler => { require(`./utils/handlers/${handler}`) (bot) });

// Le bot détecte les erreurs et les met dans la console
process.on('exit', code => {console.log(`Le processus s'est arrêté avec le code ${code}`)});
//process.on('uncaughtException', (err, origin) => {console.log(`UNCAUGHT_EXCEPTION: ${err}`, `Origine: ${origin}`)});
process.on('unhandledRejection', (reason, promise) => {console.log(`UNHANDLED_REJECTION: ${reason}\n-------\n`, promise)});
process.on('warning', (...args) => {console.log(...args)});





// Lancer le bot
bot.login(process.env.BOT_TOKEN);