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

//make another an array for team
//display arrays on page
//add on characters adds to team
//delete on team removes from team

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
    }
}