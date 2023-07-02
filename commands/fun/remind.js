const { SlashCommandBuilder } = require('discord.js');

module.exports = { data : new SlashCommandBuilder()
	.setName('remind')
	.setDescription('Sends a reminder to karin')
	.addUserOption(option => option
            .setName('target')
			.setDescription('The input to echo back')
			.setRequired(true)),
    async execute(interaction) {
        const member = interaction.option.getMember('target');
        await interaction.reply({content: `hello you sent message to ${member.user.username}`, ephmeral:true });

    },
}
