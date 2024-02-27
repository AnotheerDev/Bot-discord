require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');



// Créer une instance de client avec des intents
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
  console.log('Ready!');
});

client.on('messageCreate', message => {
  // Ignore les messages provenant des bots
  if (message.author.bot) return; 
  console.log(`Message reçu: ${message.content}`);
  if (message.content === '!ping') {
      console.log('Commande !ping détectée');
      message.channel.send('Pong.');
  }
});



client.login(process.env.BOT_TOKEN);
