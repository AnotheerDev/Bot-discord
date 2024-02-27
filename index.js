require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');



// Créer une instance de client avec des intents
const client = new Client({
    intents: [
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
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


// client.on('messageCreate', async message => {
//   if (!message.author.bot && message.content.startsWith('!chat')) {
//     const userMessage = message.content.slice('!chat'.length).trim();

//     try {
//       const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
//         prompt: userMessage,
//         max_tokens: 150
//       }, {
//         headers: {
//           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
//         }
//       });

//       const reply = response.data.choices[0].text.trim();
//       message.reply(reply);
//     } catch (error) {
//       console.error('Erreur lors de la connexion à OpenAI:', error);
//       message.reply("Désolé, je n'ai pas pu obtenir une réponse de ChatGPT.");
//     }
//   }
// });




client.login(process.env.BOT_TOKEN);
