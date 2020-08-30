const Discord = require('discord.js');
const client = new Discord.Client();

client.login(token);

client.on('ready', () => {

console.log("The bots, on");

});

client.on('message' , message => {
 
if(message.author.bot) return;

if (message.channel.id === '749514140153937991') {
message.channel.send(message.content)
message.delete()}
});

bot.login(process.env.token);