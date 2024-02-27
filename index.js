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
    if (message.content === '!ping') {
        message.channel.send('Pong.');
    }
});

client.login(process.env.BOT_TOKEN);
