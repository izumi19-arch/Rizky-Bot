// sc by rizky
//buy sc no enc chat 628993937289

const fs = require('fs');
const chalk = require('chalk');

global.ytname = 'YouTube: ChuugeSenpai' // Nama YouTube Kamu
global.socialm = 'GitHub: ???' // Nama GitHub Kamu
global.location = '11 Naitōmachi, Shinjuku City, Tokyo 160-0014, Jepang' // Lokasi Kamu

global.botName = 'ChuuzBotz' // Nama Bot Kamu
global.ownerNumber = '60149881595' // Nomor Kamu
global.ownerName = 'Chuuge' // Nama Kamu
global.website = 'https://whatsapp.com/channel/0029VaYrPmgATRSmekpfTD3t' // Web Kamu
global.wagc = 'https://whatsapp.com/channel/0029VaYrPmgATRSmekpfTD3t' // Web Kamu
global.packname = 'nigga' // Nama Pack
global.author = 'hitam' // Nama Author
global.creator = '60149881595@s.whatsapp.net' // Nomor Creator
global.premium = ['628993937289'] // User Premium
global.hituet = 0 // Hit Command
global.prefa = './*///#/'; // Prefix
global.tempatDB = 'database.json'; // Tempat Database

global.saluran = '120363279461241063@newsletter' // ID Saluran Kamu
global.saluranName = 'Chuzz Bot ⬤' // Nama Saluran Kamu
global.sessionName = 'session' // Nama Folder Sesi Bot Kamu

global.panel = 'https://'; // Link Panel Kamu
global.cred = 'ptla'; // API PTLA Kamu
global.apiuser = 'ptlc'; // API PTLC Kamu
global.eggs = '15', // Eggs Number (Recommended)
global.nets = '5', // Nets Number (Recommended)
global.location = '1', // Location Number (Recommended)

global.typereply = 'v1' // Gaya Reply v1-v4
global.autoblocknumber = '62' // Auto Block Number
global.antiforeignnumber = '62' // Anti Foreign Number
global.welcome = true // Auto Welcome Msg
global.anticall = true // Anti Call
global.autoswview = true // Auto View Status
global.adminevent = true // Admin Event Msg
global.groupevent = true // Group Event Msg

global.limit = {
	free: 100, // Limit User Non-premium
	premium: 999999999, // Limit User Premium
	vip: 'VIP' // Limit User VIP 👑
};

global.uang = {
	free: 10000, // Uang User Non-premium
	premium: 1000000, // Uang User Premium
	vip: 10000000 // Uang User VIP 👑
};

global.bot = {
	limit: 0, // Limit Awal Bot
	uang: 0 // Uang Awal Bot
};

global.game = {
	suit: {}, // Sesi Game Suit
	menfes: {}, // Sesi Menfess
	tictactoe: {}, // Sesi Tictactoe
	kuismath: {}, // Sesi Kuis Mathematics
	tebakbom: {}, // Sesi Tebak Bom
};

global.mess = {
	admin: 'Fitur ini khusus buat admin aja ya, Kak! 🫢',
	botAdmin: 'Rizky harus jadi admin dulu biar bisa jalanin ini! 😭',
	done: 'Done Kak! ✨',
	error: 'Eh, ada yang salah nih... coba lagi ya, Kak! 😖',
	group: 'Eits, fitur ini cuma bisa dipakai di grup~ 🫡',
	limit: 'Yah, limit penggunaan Kakak udah habis... 😢\n\nCoba ketik .buy untuk membeli dan menambah limit ✨',
	noCmd: 'Hmm... perintahnya gak ada di daftar Rizky nih. Coba cek lagi ya, Kak! 🤔',
	nsfw: 'Fitur NSFW dimatikan di grup ini, coba minta izin ke admin dulu ya~ 🫣',
	owner: 'Hanya pemilik yang bisa akses fitur ini, Kak! 👑',
	premium: 'Fitur ini cuma buat pengguna premium, Kak! 🌟',
	private: 'Fitur ini cuma bisa dipakai di chat pribadi, Kak! 💌',
	success: 'Yeay, berhasil! 🎉',
	wait: 'Tunggu sebentar ya, Kak... Rizky lagi proses nih! ⏳🤗'
};

global.thumb = fs.readFileSync('./media/icon.png'); // Buffer Image
global.thumbUrl = 'https://files.catbox.moe/q3rrx6.jpg'; // Url Image

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
