var handler = async m => m.reply(`
╭─「 Donasi 」
│ • DANA [082340108349]
│ • GOPAY [-]
│ • OVO [-]
╰────
╭─「 Hubungi 」
│ > /owner 082340108349
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['']
handler.command = /^dona(te|si)$/i

module.exports = handler
