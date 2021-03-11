const heroes = [
    {
        "id": 1,
        "name": "Ana",
        "image": "/images/Ana.png",
        "pose": "/victoryPoses/Ana.png",
        "role": "Support",
        "desc": "Ana’s versatile arsenal allows her to affect heroes all over the battlefield. Her Biotic Rifle rounds and Biotic Grenades heal allies and damage or impair enemies; her sidearm tranquilizes key targets, and Nano Boost gives one of her comrades a considerable increase in power."
    },
    {
        "id": 2,
        "name": "Ashe",
        "image": "/images/Ashe.png",
        "pose": "/victoryPoses/Ashe.png",
        "role": "DPS",
        "desc": "Ashe quickly fires her rifle from the hip or uses her weapon’s aim-down sights to line up a high damage shot. She blasts enemies by throwing dynamite, and her coach gun packs enough punch to put some distance between her and her foes. And Ashe is not alone, as she can call on her omnic ally Bob, to join the fray when the need arises."
    },
    {
        "id": 3,
        "name": "Baptiste",
        "image": "/images/Baptiste.png",
        "pose": "/victoryPoses/Baptiste.png",
        "role": "Support",
        "desc": "Baptiste wields an assortment of experimental devices and weaponry to keep allies alive and eliminate threats under fierce conditions. A battle-hardened combat medic, he is just as capable of saving lives as he is taking out the enemy."
    },
    {
        "id": 4,
        "name": "Bastion",
        "image": "/images/Bastion.png",
        "pose": "/victoryPoses/Bastion.png",
        "role": "DPS",
        "desc": "Repair protocols and the ability to transform between stationary Assault, mobile Recon and devastating Tank configurations provide Bastion with a high probability of victory."
    },
    {
        "id": 5,
        "name": "Brigitte",
        "image": "/images/Brigitte.png",
        "pose": "/victoryPoses/Brigitte.png",
        "role": "Support",
        "desc": "Brigitte specializes in armor. She can throw Repair Packs to heal teammates, or automatically heal nearby allies when she damages foes with her Flail. Her Flail is capable of a wide swing to strike multiple targets, or a Whip Shot that stuns an enemy at range. When entering the fray, Barrier Shield provides personal defense while she attacks enemies with Shield Bash. Brigitte’s ultimate ability, Rally, gives her a substantial short-term boost of speed and provides long-lasting armor to all her nearby allies."
    },
    {
        "id": 6,
        "name": "D.va",
        "image": "/images/D.va.png",
        "pose": "/victoryPoses/D.va.png",
        "role": "Tank",
        "desc": "D.Va’s mech is nimble and powerful—its twin Fusion Cannons blast away with autofire at short range, and she can use its Boosters to barrel over enemies and obstacles, or deflect attacks with her projectile-dismantling Defense Matrix."
    },
    {
        "id": 7,
        "name": "Doomfist",
        "image": "/images/Doomfist.png",
        "pose": "/victoryPoses/Doomfist.png",
        "role": "DPS",
        "desc": "Doomfist’s cybernetics make him a highly-mobile, powerful frontline fighter. In addition to dealing ranged damage with his Hand Cannon, Doomfist can slam the ground, knock enemies into the air and off balance, or charge into the fray with his Rocket Punch. When facing a tightly packed group, Doomfist leaps out of view, then crashes down to earth with a spectacular Meteor Strike."
    },
    {
        "id": 8,
        "name": "Echo",
        "image": "/images/Echo.png",
        "pose": "/victoryPoses/Echo.png",
        "role": "DPS",
        "desc": "Echo is an evolutionary robot programmed with a rapidly adapting artificial intelligence, versatile enough to fill multiple battlefield combat roles."
    },
    {
        "id": 9,
        "name": "Genji",
        "image": "/images/Genji.png",
        "pose": "/victoryPoses/Genji.png",
        "role": "DPS",
        "desc": "Genji flings precise and deadly Shuriken at his targets, and uses his technologically-advanced katana to deflect projectiles or deliver a Swift Strike that cuts down enemies."
    },
    {
        "id": 10,
        "name": "Hanzo",
        "image": "/images/Hanzo.png",
        "pose": "/victoryPoses/Hanzo.png",
        "role": "DPS",
        "desc": "Hanzo’s versatile arrows can reveal his enemies or fragment to strike multiple targets. He can scale walls to fire his bow from on high, or summon a titanic spirit dragon."
    },
    {
        "id": 11,
        "name": "Junkrat",
        "image": "/images/Junkrat.png",
        "pose": "/victoryPoses/Junkrat.png",
        "role": "DPS",
        "desc": "Junkrat’s area-denying armaments include a Frag Launcher that lobs bouncing grenades, Concussion Mines that send enemies flying, and Steel Traps that stop foes dead in their tracks."
    },
    {
        "id": 12,
        "name": "Lucio",
        "image": "/images/Lucio.png",
        "pose": "/victoryPoses/Lucio.png",
        "role": "Support",
        "desc": "On the battlefield, Lúcio’s cutting-edge Sonic Amplifier buffets enemies with projectiles and knocks foes back with blasts of sound. His songs can both heal his team or boost their movement speed, and he can switch between tracks on the fly."
    },
    {
        "id": 13,
        "name": "McCree",
        "image": "/images/McCree.png",
        "pose": "/victoryPoses/McCree.png",
        "role": "DPS",
        "desc": "Armed with his Peacekeeper revolver, McCree takes out targets with deadeye precision and dives out of danger with eagle-like speed."
    },
    {
        "id": 14,
        "name": "Mei",
        "image": "/images/Mei.png",
        "pose": "/victoryPoses/Mei.png",
        "role": "DPS",
        "desc": "Mei’s weather-altering devices slow opponents and protect locations. Her Endothermic Blaster unleashes damaging icicles and frost streams, and she can Cryo-Freeze herself to guard against counterattacks, or obstruct the opposing team's movements with an Ice Wall."
    },
    {
        "id": 15,
        "name": "Mercy",
        "image": "/images/Mercy.png",
        "pose": "/victoryPoses/Mercy.png",
        "role": "Support",
        "desc": "Mercy’s Valkyrie Suit helps keep her close to teammates like a guardian angel; healing, resurrecting or strengthening them with the beams emanating from her Caduceus Staff."
    },
    {
        "id": 16,
        "name": "Moira",
        "image": "/images/Moira.png",
        "pose": "/victoryPoses/Moira.png",
        "role": "Support",
        "desc": "Moira’s biotic abilities enable her to contribute healing or damage in any crisis. While Biotic Grasp gives Moira short-range options, her Biotic Orbs contribute longer-range, hands-off damage and healing; she can also Fade to escape groups or remain close to allies in need of support. Once she’s charged Coalescence, Moira can save multiple allies from elimination at once or finish off weakened enemies."
    },
    {
        "id": 17,
        "name": "Orisa",
        "image": "/images/Orisa.png",
        "pose": "/victoryPoses/Orisa.png",
        "role": "Tank",
        "desc": "Orisa serves as the central anchor of her team, and defends her teammates from the frontline with a protective barrier. She can attack from long range, fortify her own defenses, launch graviton charges to slow and move enemies, and deploy a Supercharger to boost the damage output of multiple allies at once."
    },
    {
        "id": 18,
        "name": "Pharah",
        "image": "/images/Pharah.png",
        "pose": "/victoryPoses/Pharah.png",
        "role": "DPS",
        "desc": "Soaring through the air in her combat armor, and armed with a launcher that lays down high-explosive rockets, Pharah is a force to be reckoned with."
    },
    {
        "id": 19,
        "name": "Reaper",
        "image": "/images/Reaper.png",
        "pose": "/victoryPoses/Reaper.png",
        "role": "DPS",
        "desc": "Hellfire Shotguns, the ghostly ability to become immune to damage, and the power to step between shadows make Reaper one of the deadliest beings on Earth."
    },
    {
        "id": 20,
        "name": "Reinhardt",
        "image": "/images/Reinhardt.png",
        "pose": "/victoryPoses/Reinhardt.png",
        "role": "Tank",
        "desc": "Clad in powered armor and swinging his hammer, Reinhardt leads a rocket-propelled charge across the battleground and defends his squadmates with a massive energy barrier."
    },
    {
        "id": 21,
        "name": "Roadhog",
        "image": "/images/Roadhog.png",
        "pose": "/victoryPoses/Roadhog.png",
        "role": "Tank",
        "desc": "Roadhog uses his signature Chain Hook to pull his enemies close before shredding them with blasts from his Scrap Gun. He’s hardy enough to withstand tremendous damage, and can recover his health with a short breather."
    },
    {
        "id": 22,
        "name": "Sigma",
        "image": "/images/Sigma.png",
        "pose": "/victoryPoses/Sigma.png",
        "role": "Tank",
        "desc": "Sigma is an eccentric astrophysicist and volatile tank who gained the power to control gravity in an orbital experiment gone wrong. Manipulated by Talon and deployed as a living weapon, Sigma’s presence on the battlefield cannot be ignored."
    },
    {
        "id": 23,
        "name": "Soldier: 76",
        "image": "/images/Soldier-76.png",
        "pose": "/victoryPoses/Soldier-76.png",
        "role": "DPS",
        "desc": "Armed with cutting-edge weaponry, including an experimental pulse rifle that’s capable of firing spirals of high-powered Helix Rockets, Soldier: 76 has the speed and support know-how of a highly trained warrior."
    },
    {
        "id": 24,
        "name": "Sombra",
        "image": "/images/Sombra.png",
        "pose": "/victoryPoses/Sombra.png",
        "role": "DPS",
        "desc": "Stealth and debilitating attacks make Sombra a powerful infiltrator. Her hacking can disrupt her enemies, ensuring they're easier to take out, while her EMP provides the upper hand against multiple foes at once. Sombra’s ability to Translocate and camouflage herself makes her a hard target to pin down."
    },
    {
        "id": 25,
        "name": "Symmetra",
        "image": "/images/Symmetra.png",
        "pose": "/victoryPoses/Symmetra.png",
        "role": "DPS",
        "desc": "Symmetra utilizes her Photon Projector to dispatch adversaries, shield her associates, construct teleportation pads and deploy particle-blasting Sentry Turrets."
    },
    {
        "id": 26,
        "name": "Torbjorn",
        "image": "/images/Torbjorn.png",
        "pose": "/victoryPoses/Torbjorn.png",
        "role": "DPS",
        "desc": "Torbjörn’s extensive arsenal includes a rivet gun, hammer, and a personal forge that he can use to build turrets."
    },
    {
        "id": 27,
        "name": "Tracer",
        "image": "/images/Tracer.png",
        "pose": "/victoryPoses/Tracer.png",
        "role": "DPS",
        "desc": "Toting twin pulse pistols, energy-based time bombs, and rapid-fire banter, Tracer is able to blink through space and rewind her personal timeline as she battles to right wrongs the world over."
    },
    {
        "id": 28,
        "name": "Widowmaker",
        "image": "/images/Widowmaker.png",
        "pose": "/victoryPoses/Widowmaker.png",
        "role": "DPS",
        "desc": "Widowmaker equips herself with whatever it takes to eliminate her targets, including mines that dispense poisonous gas, a visor that grants her squad infra-sight, and a powerful sniper rifle that can fire in fully-automatic mode."
    },
    {
        "id": 29,
        "name": "Winston",
        "image": "/images/Winston.png",
        "pose": "/victoryPoses/Winston.png",
        "role": "Tank",
        "desc": "Winston wields impressive inventions—a jump pack, electricity-blasting Tesla Cannon, portable shield projector and more—with literal gorilla strength."
    },
    {
        "id": 30,
        "name": "Hammond",
        "image": "/images/Hammond.png",
        "pose": "/victoryPoses/Hammond.png",
        "role": "Tank",
        "desc": "Wrecking Ball rolls across the battlefield, using his arsenal of weapons and his mech’s powerful body to crush his enemies."
    },
    {
        "id": 31,
        "name": "Zarya",
        "image": "/images/Zarya.png",
        "pose": "/victoryPoses/Zarya.png",
        "role": "Tank",
        "desc": "Deploying powerful personal barriers that convert incoming damage into energy for her massive Particle Cannon, Zarya is an invaluable asset on the front lines of any battle."
    },
    {
        "id": 32,
        "name": "Zenyatta",
        "image": "/images/Zenyatta.png",
        "pose": "/victoryPoses/Zenyatta.png",
        "role": "Support",
        "desc": "Zenyatta calls upon orbs of harmony and discord to heal his teammates and weaken his opponents, all while pursuing a transcendent state of immunity to damage."
}];

const team = [];
let teamID = 1;
const accountSid = "AC21aef9d2fc2fa6fe8029fefccb2e0e9c";
const authToken = "203a166676417dd6e5d1c8b80e35d6ce";
const client = require('twilio')(accountSid, authToken);

module.exports = {
    getHeroes: (req,res) => {
        res.status(200).send(heroes)
    },

    getTeam: (req,res) => {
        res.status(200).send(team)
    },

    addHero: (req,res) => {
        if(team.length < 6){
            const index = heroes.findIndex( hero => hero.id === +req.params.id);
            team.push(heroes[index])
            res.status(200).send("Hero Added")
        } else {
            res.status(500).send("Max Team Members Achieved (cheater)")
        }   
    },
    deleteTeammate: (req,res) => {
        const index = team.findIndex( hero => hero.id === +req.params.id);
        team.splice(index,1)
        res.status(200).send(team);
    },
    textTeam: (req,res) => {
        let {number,names} = req.body
        
        client.messages
        .create({
            body: `This is your squad: \n${names} \nFrom Overwatch Team Builder`,
            from: '+15083881440',
            to: `+1${number}`
        })
        .then(message => console.log(message.sid));
    },
    emailNewsletter: (req,res) => {
        let {email} = req.body

        const nodemailer = require('nodemailer'); 
  
  
        let mailTransporter = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
               user: 'overwatchteambuilder@gmail.com', 
               pass: 'Kenai24!'
            } 
        }); 
  
        let mailDetails = { 
            from: 'overwatchteambuilder@gmail.com', 
            to: `${email}`, 
            subject: 'Overwatch Newsletter', 
            html: `
            <!doctype html><html ⚡4email data-css-strict><head><meta charset="utf-8"><style amp4email-boilerplate>body{visibility:hidden}</style><script async src="https://cdn.ampproject.org/v0.js"></script><style amp-custom>.es-desk-hidden {	display:none;	float:left;	overflow:hidden;	width:0;	max-height:0;	line-height:0;}.es-button-border:hover {	border-style:solid solid solid solid;	background:#0B317E;	border-color:#42D159 #42D159 #42D159 #42D159;}.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {	background:#0B317E;	border-color:#0B317E;}body {	width:100%;	font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;}table {	border-collapse:collapse;	border-spacing:0px;}table td, body, .es-wrapper {	padding:0;	Margin:0;}.es-content, .es-header, .es-footer {	table-layout:fixed;	width:100%;}p, hr {	Margin:0;}h1, h2, h3, h4, h5 {	Margin:0;	line-height:120%;	font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;}.es-left {	float:left;}.es-right {	float:right;}.es-p5 {	padding:5px;}.es-p5t {	padding-top:5px;}.es-p5b {	padding-bottom:5px;}.es-p5l {	padding-left:5px;}.es-p5r {	padding-right:5px;}.es-p10 {	padding:10px;}.es-p10t {	padding-top:10px;}.es-p10b {	padding-bottom:10px;}.es-p10l {	padding-left:10px;}.es-p10r {	padding-right:10px;}.es-p15 {	padding:15px;}.es-p15t {	padding-top:15px;}.es-p15b {	padding-bottom:15px;}.es-p15l {	padding-left:15px;}.es-p15r {	padding-right:15px;}.es-p20 {	padding:20px;}.es-p20t {	padding-top:20px;}.es-p20b {	padding-bottom:20px;}.es-p20l {	padding-left:20px;}.es-p20r {	padding-right:20px;}.es-p25 {	padding:25px;}.es-p25t {	padding-top:25px;}.es-p25b {	padding-bottom:25px;}.es-p25l {	padding-left:25px;}.es-p25r {	padding-right:25px;}.es-p30 {	padding:30px;}.es-p30t {	padding-top:30px;}.es-p30b {	padding-bottom:30px;}.es-p30l {	padding-left:30px;}.es-p30r {	padding-right:30px;}.es-p35 {	padding:35px;}.es-p35t {	padding-top:35px;}.es-p35b {	padding-bottom:35px;}.es-p35l {	padding-left:35px;}.es-p35r {	padding-right:35px;}.es-p40 {	padding:40px;}.es-p40t {	padding-top:40px;}.es-p40b {	padding-bottom:40px;}.es-p40l {	padding-left:40px;}.es-p40r {	padding-right:40px;}.es-menu td {	border:0;}s {	text-decoration:line-through;}a {	text-decoration:underline;}p, ul li, ol li {	font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;	line-height:150%;}ul li, ol li {	Margin-bottom:15px;}.es-menu td a {	text-decoration:none;	display:block;}.es-menu amp-img, .es-button amp-img {	vertical-align:middle;}.es-wrapper {	width:100%;	height:100%;}.es-wrapper-color {	background-color:#F8F9FD;}.es-header {	background-color:transparent;}.es-header-body {	background-color:#FFFFFF;}.es-header-body p, .es-header-body ul li, .es-header-body ol li {	color:#333333;	font-size:14px;}.es-header-body a {	color:#1376C8;	font-size:14px;}.es-content-body {	background-color:transparent;}.es-content-body p, .es-content-body ul li, .es-content-body ol li {	color:#131313;	font-size:16px;}.es-content-body a {	color:#2CB543;	font-size:16px;}.es-footer {	background-color:#F6F6F6;}.es-footer-body {	background-color:transparent;}.es-footer-body p, .es-footer-body ul li, .es-footer-body ol li {	color:#131313;	font-size:16px;}.es-footer-body a {	color:#FFFFFF;	font-size:16px;}.es-infoblock, .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li {	line-height:120%;	font-size:12px;	color:#FFFFFF;}.es-infoblock a {	font-size:12px;	color:#FFFFFF;}h1 {	font-size:30px;	font-style:normal;	font-weight:bold;	color:#212121;}h2 {	font-size:24px;	font-style:normal;	font-weight:bold;	color:#212121;}h3 {	font-size:20px;	font-style:normal;	font-weight:normal;	color:#212121;}.es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a {	font-size:30px;}.es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a {	font-size:24px;}.es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a {	font-size:20px;}a.es-button, button.es-button {	border-style:solid;	border-color:#071F4F;	border-width:10px 20px 10px 20px;	display:inline-block;	background:#071F4F;	border-radius:5px;	font-size:16px;	font-family:roboto, "helvetica neue", helvetica, arial, sans-serif;	font-weight:normal;	font-style:normal;	line-height:120%;	color:#FFFFFF;	text-decoration:none;	width:auto;	text-align:center;}.es-button-border {	border-style:solid solid solid solid;	border-color:#2CB543 #2CB543 #2CB543 #2CB543;	background:#071F4F;	border-width:0px 0px 0px 0px;	display:inline-block;	border-radius:5px;	width:auto;}.es-button img {	display:inline-block;	vertical-align:middle;}.es-p-default {	padding-top:20px;	padding-right:20px;	padding-bottom:0px;	padding-left:20px;}.es-p-all-default {	padding:0px;}@media only screen and (max-width:600px) {.st-br { padding-left:10px; padding-right:10px } p, ul li, ol li, a { line-height:150% } h1 { font-size:30px; text-align:center; line-height:120% } h2 { font-size:26px; text-align:center; line-height:120% } h3 { font-size:20px; text-align:center; line-height:120% } h1 a { text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px } h2 a { text-align:center } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px } h3 a { text-align:center } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px } .es-menu td a { font-size:14px } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:14px } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px } *[class="gmail-fix"] { display:none } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left } .es-m-txt-r amp-img { float:right } .es-m-txt-c amp-img { margin:0 auto } .es-m-txt-l amp-img { float:left } .es-button-border { display:block } a.es-button, button.es-button { font-size:16px; display:block; border-left-width:0px; border-right-width:0px } .es-adaptive table, .es-left, .es-right { width:100% } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%; max-width:600px } .es-adapt-td { display:block; width:100% } .adapt-img { width:100%; height:auto } td.es-m-p0 { padding:0 } td.es-m-p0r { padding-right:0 } td.es-m-p0l { padding-left:0 } td.es-m-p0t { padding-top:0 } td.es-m-p0b { padding-bottom:0 } td.es-m-p20b { padding-bottom:20px } .es-mobile-hidden, .es-hidden { display:none } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto; overflow:visible; float:none; max-height:inherit; line-height:inherit } tr.es-desk-hidden { display:table-row } table.es-desk-hidden { display:table } td.es-desk-menu-hidden { display:table-cell } table.es-table-not-adapt, .esd-block-html table { width:auto } table.es-social { display:inline-block } table.es-social td { display:inline-block } td.es-m-p5 { padding:5px } td.es-m-p5t { padding-top:5px } td.es-m-p5b { padding-bottom:5px } td.es-m-p5r { padding-right:5px } td.es-m-p5l { padding-left:5px } td.es-m-p10 { padding:10px } td.es-m-p10t { padding-top:10px } td.es-m-p10b { padding-bottom:10px } td.es-m-p10r { padding-right:10px } td.es-m-p10l { padding-left:10px } td.es-m-p15 { padding:15px } td.es-m-p15t { padding-top:15px } td.es-m-p15b { padding-bottom:15px } td.es-m-p15r { padding-right:15px } td.es-m-p15l { padding-left:15px } td.es-m-p20 { padding:20px } td.es-m-p20t { padding-top:20px } td.es-m-p20r { padding-right:20px } td.es-m-p20l { padding-left:20px } td.es-m-p25 { padding:25px } td.es-m-p25t { padding-top:25px } td.es-m-p25b { padding-bottom:25px } td.es-m-p25r { padding-right:25px } td.es-m-p25l { padding-left:25px } td.es-m-p30 { padding:30px } td.es-m-p30t { padding-top:30px } td.es-m-p30b { padding-bottom:30px } td.es-m-p30r { padding-right:30px } td.es-m-p30l { padding-left:30px } td.es-m-p35 { padding:35px } td.es-m-p35t { padding-top:35px } td.es-m-p35b { padding-bottom:35px } td.es-m-p35r { padding-right:35px } td.es-m-p35l { padding-left:35px } td.es-m-p40 { padding:40px } td.es-m-p40t { padding-top:40px } td.es-m-p40b { padding-bottom:40px } td.es-m-p40r { padding-right:40px } td.es-m-p40l { padding-left:40px } }</style></head>
<body><div class="es-wrapper-color"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"> <v:fill type="tile" color="#f8f9fd"></v:fill> </v:background><![endif]--><table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"><tr><td valign="top"><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tr><td align="center" bgcolor="#F99E1A" style="background-color: #f99e1a;background-image: url(https://nqknkh.stripocdn.email/content/guids/CABINET_0dd8163bb51422355208c3a7320aee1f/images/68711615502727185.jpeg);background-repeat: no-repeat;background-position: 30% 26%"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tr><td class="es-p40t es-p40b es-p30r es-p30l" align="left"><table cellpadding="0" cellspacing="0" width="100%"><tr><td width="540" align="center" valign="top"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" height="20"></td>
</tr><tr><td align="left" class="es-p10b"><h1 style="text-align: center;color: #000000">Overwatch Team Builder</h1></td></tr><tr><td align="center" class="es-p10t es-p10b"><p style="color: #000000">Thank you for receiving our news letter!!</p></td></tr></table></td></tr></table></td></tr></table></td>
</tr></table><table cellpadding="0" cellspacing="0" class="es-content" align="center"><tr><td align="center"><table bgcolor="#ffffff" class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="600"><tr><td class="es-p20t es-p20r es-p20l" align="left"> <!--[if mso]><table width="560" cellpadding="0" cellspacing="0"><tr><td width="270" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-left" align="left"><tr><td width="270" class="es-m-p20b" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="center" style="font-size: 0px"><amp-img class="adapt-img" src="https://nqknkh.stripocdn.email/content/guids/CABINET_0dd8163bb51422355208c3a7320aee1f/images/66101615503064423.jpeg" alt style="display: block" width="270" height="96" layout="responsive"></amp-img></td></tr></table></td></tr></table> <!--[if mso]></td><td width="20"></td>
<td width="270" valign="top"><![endif]--><table cellpadding="0" cellspacing="0" class="es-right" align="right"><tr><td width="270" align="left"><table cellpadding="0" cellspacing="0" width="100%" role="presentation"><tr><td align="left"><p style="color: #f99e1a">Up Next: Competitive</p></td></tr><tr><td align="left"><p>The teams next goal is to update the site to allow for competitiveteam comps to be made. Although teams that use this mode will already be making their teams in the format, we believe that this addition will improve site functionality and use.</p></td></tr></table></td></tr></table> <!--[if mso]></td></tr></table><![endif]--></td></tr></table></td></tr></table></td></tr></table></div></body></html>
`
        }; 
  
        mailTransporter.sendMail(mailDetails, function(err, data) { 
            if(err) { 
              console.log('Error Occurs'); 
            } else { 
              console.log('Email sent successfully'); 
            } 
        }); 
    }
}