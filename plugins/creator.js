let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let res = JSON.parse(readFileSync('./json/emoji.json'))
  let em = res.emoji

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *OWNER* ${htka}
✦ @${nomorown.split`@`[0]} ✦
------- ${nameown} -------

📮 *Note:*
• Owner tidak menerima save contact
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Telp`

//------------ BIO
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `${htki} *BIODATA* ${htka}
${htjava} *Nama* : 𝘢𝘯𝘥𝘪𝘪𝘨𝘯𝘥𝘳
${htjava} *Nama RL* : HAMBA ALLAH
${htjava} *♂Gender* : Boys
${htjava} *Agama* : Islam
${htjava} *Tanggal lahir* : Private 🥶
${htjava} *Umur* : 18
${htjava} *Kelas* : Otw TAMAT
${htjava} *Hobby* : Musik, Turu
${htjava} *Sifat* : ASIK DAH KALAU DAH KENAL
${htjava} *Tinggal* : Indo, Banyumas, Jawa Tengah
${htjava} *Waifu* : Megachan

${htjava} *ɪɴsᴛᴀɢʀᴀᴍ* : ${sig}
${htjava} *ɢɪᴛʜᴜʙ* : ${sgh}
•·––––––––––––––––––––––––––·•
`
  let teks = 'Pilih dibawah kak ! o(〃＾▽＾〃)o'


// LIST MESSAGE MODEL OLD , NO SUPPORT WHATSAPP BASE NEW
/*
  const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	{title: "📱 • Nomor Owner", rowId: ".owner nomor"},
	{title: "🎨 • Biodata", rowId: ".owner bio"},
	{title: "🌎 • Script", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".owner nomor"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	{title: "🌟 • Buy Premium", rowId: ".premium"},
	]
  },
]

const listMessage = {
  text: teks,
  footer: null,
  title: `${htki} *OWNER* ${htka}`,
  buttonText: "Click Here !",
  sections
}
*/

// LIST MESSAGE MODEL NEW , SUPPORT WHATSAPP BASE NEW
let namop = ["📱 • Nomor Owner",
"📱 • Nomor Owner V2",
"📱 • Pengembang",
"📱 • Creator",
"🎨 • Biodata",
"🌎 • Script",
"💹 • Donasi",
"🔖 • Sewa",
"🌟 • Buy Premium"
]

let idop = [".owner nomor",
".whmods1",
".whmods2",
".whmods3",
".owner bio",
".sc",
".donasi",
".sewa",
".premium"
]

let desop = ["• Nomor Owner",
"• Nomor Owner V2",
"• Pengembang",
"• Creator",
"• Biodata",
"• Script",
"• Donasi",
"• Sewa",
"• Buy Premium"
]
let row = Object.keys(namop, desop, idop).map((v, index) => ({
  title: `${htki} ${dmenub} ${namop[v]} ${htka}`,
  description: `\nNo.${1 + index}\n${htjava}${desop[v]}\n${dmenuf}`,
  rowId: `${idop[v]}`
}))
let button = {
  buttonText: `☂️ CLICK HERE ☂️`,
  description: teks,
  footerText: wm
}

  try {
    if (/(creator|owner)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'nomor':
          conn.reply(m.chat, teksnomor, m, { contextInfo: { mentionedJid: [nowner] }})
            break
            case 'bio':
          //conn.sendHydrated(m.chat, teksbio, wm, ppown, sig, "📷 Instagram", nomorown, '🌹 Nomor', [[null, null], [null, null],[null,null]], m)

          conn.sendButton(m.chat, teksbio, wm, ppown, [
                ['Sewa Bot', `${usedPrefix}sewa`],
                ['Menu', `${usedPrefix}menu`]
            ], m)
            break
            
          default:
            return await conn.sendListM(m.chat, button, row, m)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['owner', 'creator']
handler.tags = ['main', 'info']
handler.command = /^(owner|creator)/i

export default handler
