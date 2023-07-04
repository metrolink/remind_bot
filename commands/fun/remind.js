const { SlashCommandBuilder } = require('discord.js');

module.exports = { data : new SlashCommandBuilder()
	.setName('remind')
	.setDescription('Sends a reminder to karin')
	.addUserOption(option => option
            .setName('target')
			.setDescription('The input to echo back')
			.setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        await interaction.reply({ content: 'you sent a message!', ephemeral: true })    
        await interaction.client.users.send(user,'reset router, check vpn, kick people from internet, put cat outside, lock door, prepare tea, check gametime');
            
        //await interaction.reply('this is a test')

    },
}


/**/