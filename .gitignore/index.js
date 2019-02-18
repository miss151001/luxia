const Discord = require("discord.js");

const bot = new Discord.Client({ disableEveryone: true });

bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne !`);
});

bot.login(NTQ1NzgyMjMwNzMyMTExODkz.D0uPSQ.tXh_Zx659fnk4kEuDM7t3GNeizI);
