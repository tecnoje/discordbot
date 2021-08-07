const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('MESSAGE AUTOMATIQUE')
            .setTitle('**INFORMATION TICKET**')
            .setDescription('ton ticket va etre pris en charge par un membre du staff merci de patientez')
            .setColor('#edfc00')
            .addField('ETAPE A SUIVRE', '1.ne mentione personne  2.dis nous ton problème 3.un membre du staff t aide  4.ton ticket ferme et tu peut noter le staff qui t as aider dans note staff', true)
            .addField('NOTES !', 'si tu n a montrer aucun problème ton ticket fermeras automatiquement au bout de 3h', true)
            .setAuthor('message automatique', 'https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.PNG', 'https://google.fr')
            .setImage('https://media.giphy.com/media/YqFagsnUJ2glxnzthM/giphy.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.png')
            .setFooter('bot d administration et d information de MlF-dev', 'https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.PNG')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed2'
}
