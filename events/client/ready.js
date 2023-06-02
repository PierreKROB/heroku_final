module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Je suis prêt !');

        const devGuild = await client.guilds.cache.get('481419883423465472');
        devGuild.commands.set(client.commands.map(cmd=>cmd));
    },
};