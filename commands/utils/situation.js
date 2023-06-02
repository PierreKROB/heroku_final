module.exports = {
    name: 'situation',
    description: 'otis',
    run: (client, message, args) => {
        message.channel.send("Je ne crois pas qu'il y ai de bonnes ou mauvaise situations");
    },
    runSlash: (client, interraction) =>{
        interraction.reply("Je ne crois pas qu'il y ai de bonnes ou mauvaise situations");
    }
};