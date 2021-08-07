const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('INFORMATION')
            .setTitle('**INFORMATION SERVEUR**')
            .setDescription('[clic pour voter pour le partenaire](https://top-serveurs.net/gta/vote/modernity-life-rp-606ad0fcd615b) vote le serveur')
            .setColor('#edfc00')
            .addField('NOUVELLE INFORMATION', 'le serveur est actuellement en remplissage des salon', true)
            .addField('comment demander de l aide ?', 'va dans entraide ou demande d aide si personne ne te repond', true)
            .setAuthor('Bot de MLF-dev', 'https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.PNG', 'https://google.fr')
            .setImage('https://media.giphy.com/media/YqFagsnUJ2glxnzthM/giphy.gif')
            .setThumbnail('https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.png')
            .setFooter('bot d administration et d information de MlF-dev', 'https://cdn.discordapp.com/attachments/870654637085167686/873331743246127134/gif_capture.PNG')
            .setTimestamp()
            .setURL('https://google.fr'))
    },
    name: 'embed'
}
