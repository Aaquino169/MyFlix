const express = require('express')

const router = express.Router()

const Movie = require('../models/movies')

const User = require('../models/users')

//index
router.get('/',(req,res) => {
    Movie.find({},(error,allMovies) => {
        res.render('movies/home.ejs', {
            movie: allMovies,
            currentUser: req.session.currentUser 
        })
    })
})

//create
router.get('/new', (req, res) => {
	res.render('movies/new.ejs', { 
        currentUser: req.session.currentUser 
    })
})

router.post('/', (req, res) => {
	Movie.create(req.body, (error, createMovie) => {
        console.log(createMovie)
		res.redirect('/')
	})
})


// router.post('/addFavorite', (req,res) => {
//     User.favorites.create(req.body, (err,favoriteMovie) => {
//         res.redirect('/user/home')
//     })
// })

//seed
router.get('/seed',(req,res) => {
    Movie.create([
        {
            title:'The Avengers',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/69A3D94641BFFE32322028A3551BCA26F2E648C87D694800C2C3246F6351C150/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpaperaccess.com/full/884080.jpg',
            "release date": 2012,
            description:'Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. The Avengers — Iron Man, The Incredible Hulk, Thor and Captain America — assemble alongside Black Widow and Hawkeye to battle an unexpected enemy:  the Asgardian God Loki, who commands a powerful Chitauri army threatening global safety and security.',
            director:'Joss Whedon',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johanson, Jeremy Runner',
            icon:'https://i.pinimg.com/originals/18/a1/39/18a139c5af7c80f8cf7ff4c930660a5a.jpg',
            "num of favorites":0
        },
        {
            title:'Avengers Age Of Ultron',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8A8E294F9FBA556566DCBF7EE3BFD5AA7C782CB4252A9F085392B084852EBBE6/scale?width=1080&aspectRatio=1.78',
            img:'https://cdn.onebauer.media/one/empire-tmdb/films/99861/images/rFtsE7Lhlc2jRWF7SRAU0fvrveQ.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg',
            "release date": 2015,
            description:'Good intentions wreak havoc when Tony Stark (Robert Downey Jr.) unwittingly creates Ultron (James Spader), a terrifying A.I. monster who vows to achieve “world peace” via mass extinction. Now, Iron Man, Captain America (Chris Evans), Thor (Chris Hemsworth) and The Hulk (Mark Ruffalo)---alongside Black Widow (Scarlett Johansson), Hawkeye (Jeremy Renner) and Nick Fury (Samuel L. Jackson)---must reassemble to defeat Ultron and save mankind…if they can. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Joss Whedon',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johanson, Jeremy Runner',
            icon:'https://i.pinimg.com/originals/d9/38/9f/d9389fed9de03201b5ab200480e7ec25.jpg',
            "num of favorites":0
        },
        {
            title:'Avengers Infinity War',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/943BA64ECE5E31DE6CE00C66A6E819BF00F8F8F0F9F58FF2120EA34E2B370EAB/scale?width=1080&aspectRatio=1.78',
            img:'https://cdn.arstechnica.net/wp-content/uploads/2018/04/aveng-infinwar-logo.jpg',
            "release date": 2018,
            description:'An unprecedented cinematic journey ten years in the making and spanning the entire Marvel Cinematic Universe, Marvel Studios’ Avengers: Infinity War brings to the screen the ultimate, deadliest showdown of all time. The Avengers and their Super Hero allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos, before his blitz of devastation and ruin puts an end to the universe. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Anthony Russo, Joe Russo',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johanson, Jeremy Runner',
            icon:'https://i.pinimg.com/originals/97/48/82/9748827b7898a1398704def653fe647c.jpg',
            "num of favorites":0
        },
        {
            title:'Avengers Endgame',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D0AB0FAB942B4A3AFA4AE6C47D3A44E67C32CE57A57DEE7E1173381A361B4309/scale?width=1080&aspectRatio=1.78',
            img:'https://www.sealynews.com/uploads/original/20190507-142212-avengers-endgame-poster-top-half.jpg',
            "release date":2019,
            description:'The epic conclusion to the Infinity Saga that became a critically acclaimed worldwide phenomenon, this dramatic showdown pits the Avengers against the universe’s most powerful villain, Thanos. After devastating events wiped out half the world’s population and fractured their ranks, the remaining heroes struggle to move forward. But they must come together to restore order and harmony in the universe and bring their loved ones back. Featuring Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Benedict Cumberbatch, Chadwick Boseman, Brie Larson, Tom Holland, Karen Gillan, Zoe Saldana and Evangeline Lilly, Marvel Studios’ “Avengers: Endgame” is produced by Kevin Feige and directed by Anthony and Joe Russo. Louis D’Esposito, Victoria Alonso, Michael Grillo, Trinh Tran, Jon Favreau, James Gunn and Stan Lee are the executive producers, and Christopher Markus &amp; Stephen McFeely wrote the screenplay. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Anthony Russo, Joe Russo',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johanson, Jeremy Runner',
            icon:'https://www.designbolts.com/wp-content/uploads/2019/01/Avengers-Endgame-2019-Desktop-Wallpapers-HD-1.jpg',
            "num of favorites":0
        },
        {
            title:'Captain Marvel',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B8AC1A5A91071CC92904DDAE33E7EE229DFFE5CB918D2C8FEEF4D01EEF9EB832/scale?width=1080&aspectRatio=1.78',
            img:'https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainmarvel_lob_mas_mob_03_0.jpg',
            "release date":2019,
            description:'Marvel Studios’ Captain Marvel takes you on a spectacular adventure from the 1990s, tracing the path of Carol Danvers (Brie Larson) as she becomes one of the most powerful heroes in the universe. When a galactic war reaches Earth, she meets young agent Nick Fury (Samuel L. Jackson) at the center of a maelstrom, leading to her ultimate destiny as an Avenger! Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Anna Boden, Ryan Fleck',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Brie Larson, Samuel Jackson, Ben Mendelsohn, Djimon Hounsou, Lee Pace, Lashana Lynch',
            icon:'https://www.designbolts.com/wp-content/uploads/2019/02/Captain-Marvel-Movie-2019-HD-Wallpaper-2-1.jpg',
            "num of favorites":0
        },
        {
            title:'Ant-Man',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/91BC611614CC6F51ADED53058A2F377E5FC5530B27BB9B2665A8181A358D7D74/scale?width=1080&aspectRatio=1.78',
            img:'https://quantumfrontiers.files.wordpress.com/2015/07/ant-man-2015-marvel-movie.jpg',
            "release date":2015,
            description:'The next evolution of the Marvel Cinematic Universe brings a founding member of The Avengers to the screen for the first time with Marvel Studios’ Ant-Man. Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Peyton Reed',
            genre:'Science Fiction, Comedy, Fantasy, Superhero, Action-Adventure',
            staring:'Paul Rudd, Evangeline Lilly, Corey Stoll, Bobby Cannavale, Michael Pena, Tip Harris',
            icon:'https://wallpapercave.com/wp/wp1810492.jpg',
            "num of favorites":0
        },
        {
            title:'Ant-Man and The Wasp',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C4985C608BA88E6AD080AEE79C0192B35AFC59889EFD938A761F813FB014DDF4/scale?width=1080&aspectRatio=1.78',
            img:'https://lh3.googleusercontent.com/proxy/i2a-ykj9jzhd-wz-xS3lkx0vM1834pjo9ac4WMh4wSX06MIhbhc_qFnBaYueI2P5gHeJTybvkEvGVpwPWFseYE08QS2ErbAEF4MUsGRt7RwZA-XiDzyYvsjK-Y3XrRQo5gs5ROlHL-BsmpM',
            "release date":2018,
            description:'Scott Lang grapples with his choices as both a Super Hero and a father. As he struggles to balance his home life with his responsibilities as Ant-Man, he’s confronted by Hope van Dyne and Dr. Hank Pym with an urgent new mission. Scott must once again put on the suit and learn to fight alongside the Wasp as they join forces to uncover secrets from the past. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Peyton Reed',
            genre:'Science Fiction, Comedy, Fantasy, Superhero, Action-Adventure',
            staring:'Paul Rudd, Evangeline Lilly Michael Pena, Walton Goggin, Hannah John-Kamen, David Dastmalchian',
            icon:'https://i.pinimg.com/originals/24/00/c5/2400c5d72ffd2c24ddccbf5bf7b44767.jpg',
            "num of favorites":0
        },
        {
            title:'Black Panther',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/956B3C6078657E5747CF1B6DFC9F421E6F423FE6509ABC8ADFB2439FB82D4DA9/scale?width=1080&aspectRatio=1.78',
            img:'https://w.wallhaven.cc/full/3k/wallhaven-3kjydv.jpg',
            "release date":2018,
            description:'After the death of his father, the king of Wakanda, young T’Challa returns home to the isolated high-tech African nation to succeed to the throne and take his rightful place as king. But when a powerful enemy appears, T’Challa’s mettle as king---and Black Panther---is tested as he’s drawn into a formidable conflict that puts the fate of Wakanda and the entire world at risk. Faced with treachery and danger, he must release the full power of Black Panther to defeat his foes and secure the safety of his people and their way of life. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Ryan Coogler',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Chadwick Boseman, Michael Jordan, Lupita Myongo, Danai Gurira, Martin Freeman, Daniel Kaluuya',
            icon:'https://justformoviefreaks.in/wp-content/uploads/2019/04/black-panther-movie-wallpaper.png',
            "num of favorites":0
        },
        {
            title:'Thor',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/33FDA13F50EB9CFD2EB05F9816A41602336C328108EB43BD06DE4A2D075285D4/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpaperaccess.com/full/645141.jpg',
            "release date":2011,
            description:"This epic adventure spans the Marvel universe from present-day Earth to the cosmic realm of Asgard. At the center of the story is The Mighty Thor, a powerful but arrogant warrior whose reckless actions reignite an ancient war. As a result, Thor's father Odin banishes his son to Earth where he is forced to live among humans. From Earth, Thor must make preparations to stop his evil brother Loki from dethroning Odin, seizing power and imposing his villainous rule on all of Asgard. When the darkest forces are sent to invade Earth, Thor learns what it takes to be a true hero.",
            director:'Kenneth Branagh',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Stellan Skarsgard, Kat Dennings',
            icon:'https://wallpapercave.com/wp/qXb0oh4.jpg',
            "num of favorites":0
        },
        {
            title:'Thor: The Dark World',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/36387C706AB9BCEF6908B73C8D729686C88411BBFBC2AD171F2DBE2108D9D614/scale?width=1080&aspectRatio=1.78',
            img:'https://images.hdqwalls.com/wallpapers/thor-2-the-dark-world.jpg',
            "release date":2013,
            description:"Marvel Studios' Thor: The Dark World continues the adventures of Thor, the Mighty Avenger, as he battles to save Earth and all the Nine Realms from a shadowy enemy that predates the universe itself. In the aftermath of Marvel Studios' Thor and Marvel Studios' The Avengers, Thor fights to restore order across the cosmos...but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. To defeat an enemy that even Odin and Asgard cannot withstand, Thor sets out on his most dangerous and personal journey yet, forced into an alliance with the treacherous Loki to save not only his people and those he loves…but our universe itself.",
            director:'Alan Taylor',
            genre:'Science Fiction, Fantasy, Superhero, Action-Adventure',
            staring:'Chris Hemsworth, Natalie Portman, Tom Hiddleston, Anthony Hopkins, Stellan Skarsgard, Rene Russo',
            icon:'https://wallpapercave.com/wp/wp3079593.jpg',
            "num of favorites":0
        },
        {
            title:'Thor: Ragnarok',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8879BC2B12CC6B1BBE1508C102A2390AF043B5958628341984CEBF719935B99F/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpapercave.com/wp/wp2497187.jpg',
            "release date":2017,
            description:"The Mighty Thor is imprisoned on the other side of the universe...without his mighty hammer. He's in a race against time to get back to Asgard to stop Ragnarok, the cataclysmic destruction of his home world and the end of Asgardian civilization at the hands of an all-powerful new threat, the ruthless Hela. But first, he must survive a deadly gladiatorial contest that pits him against his former ally and fellow Avenger – the Incredible Hulk. Some flashing lights sequences or patterns may affect photosensitive viewers.",
            director:'Taika Waititi',
            genre:'Science Fiction, Comedy, Fantasy, Superhero, Action-Adventure',
            staring:'Chris Hemsworth, Tom Hiddleston, Cate Blanchett, Idris Elba, Jeff Goldblum, Tessa Thompson',
            icon:'https://cutewallpaper.org/21/thor-ragnarok-wallpaper-valkyrie/Thor-Ragnarok-Loki-Wallpaper-Ryanmartinproductions.com.jpg',
            "num of favorites":0
        },
        {
            title:'Doctor Strange',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7C370FBE5346549D4E94049EADCD11AB9CD454A12B7F4978C9CF3DB4AA7FC436/scale?width=1080&aspectRatio=1.78',
            img:'https://www.themeraider.com/wp-content/uploads/2016/10/feat-aug-1-1.jpg',
            "release date":2016,
            description:"From Marvel Studios comes the story of world-famous neurosurgeon Dr. Stephen Strange, whose life changes forever after a horrific car accident robs him of the use of his hands. When traditional medicine fails him, he's forced to look for healing, and hope, in a mysterious enclave known as Kamar-Taj. He quickly learns that this is not just a center for healing...it's also the front line of a battle against unseen dark forces bent on destroying our reality. Before long, Strange, armed with newly acquired magical powers, is forced to choose whether to return to his old life or leave it behind to defend the world as the most powerful sorcerer in existence. Some flashing lights sequences or patterns may affect photosensitive viewers.",
            director:'Scott Derrickson',
            genre:'Fantasy, Superhero, Action-Adventure',
            staring:'Benedict Cumberbatch, Chiwetel Ejiofor, Rachel McAdams, Benedict Wong, Michael Stuhbarg, Benjamin Bratt',
            icon:'https://www.comicbookmovie.com/images/wallpaper/288_988.jpg',
            "num of favorites":0
        },
        {
            title:'Guardians Of the Galaxy',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/889E94697303D26986FCC0F32B4D8C85A239C4388AA1C70F7AC4FDD5C73ADADD/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpapercave.com/wp/wp1814938.jpg',
            "release date":2014,
            description:"An action-packed, epic space adventure, Marvel Studios' Guardians of the Galaxy expands the Marvel Cinematic Universe into the cosmos, where brash adventurer Peter Quill finds himself the object of an unrelenting bounty hunt after stealing a mysterious orb coveted by Ronan, a powerful villain with ambitions that threaten the entire universe. To evade the ever-persistent Ronan, Quill is forced into an uneasy truce with a quartet of disparate misfits: Rocket, a gun-toting raccoon; Groot, a tree-like humanoid; the deadly and enigmatic Gamora; and revenge-driven Drax the Destroyer. But when Quill discovers the true power of the orb and the menace it poses to the cosmos, he must do his best to rally his ragtag rivals for a last, desperate stand—with the galaxy’s fate in the balance. Some flashing lights sequences or patterns may affect photosensitive viewers.",
            director:'James Gunn',
            genre:'Science Fiction, Comedy, Fantasy, Superhero, Action-Adventure',
            staring:'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace',
            icon:'https://wallpapercave.com/wp/wp1814954.jpg',
            "num of favorites":0
        },
        {
            title:'Guardians Of The Galaxy Vol.2',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB1F506AAE5E8DAD00D89CA0C35A780BFD87C32DDCCA26F7862D36573B9CD039/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpapercave.com/wp/wp2033181.jpg',
            "release date":2017,
            description:'Set to the sonic backdrop of Awesome Mixtape #2, Marvel Studios’ Guardians of the Galaxy Vol. 2 continues the team’s adventures as they traverse the outer reaches of the cosmos. The Guardians must fight to keep their newfound family together as they unravel the mystery of Peter Quill’s true parentage. Old foes become new allies, and characters from the classic comics come to their aid as the Marvel Cinematic Universe continues to expand. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'James Gunn',
            genre:'Science Fiction, Comedy, Fantasy, Superhero, Action-Adventure',
            staring:'Chris Pratt, Zoe Saldana, Dave Bautista, Vin Diesel, Bradley Cooper, Lee Pace',
            icon:'https://images.alphacoders.com/900/900383.jpg',
            "num of favorites":0
        },
        {
            title:'Captain America: The First Avenger',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FABDF88471EE770A75BE13201E991E8671FFF41EDF07A0341BD7E840000DBD19/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpapercave.com/wp/wp3775630.jpg',
            "release date":2011,
            description:"After being deemed unfit for military service, Steve Rogers volunteers for a top- secret research project that turns him into Captain America, a super hero dedicated to defending America's ideals and leading the fight for freedom as the ultimate weapon against evil. When a terrifying force threatens everyone across the globe, the world's greatest soldier wages war on the evil HYDRA organization, led by the villainous Red Skull.",
            director:'Joe Johnston',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Chris Evans, Tommy Jones, Hugo Weaving, Hayley Atwell, Sebastian Stan, Dominic Cooper',
            icon:'https://wallpaperaccess.com/full/1112990.jpg',
            "num of favorites":0
        },
        {
            title:'Captain America: The Winter Soldier',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7974BE3EA0DDF5D372422EFC3CCC930CD0B6D96315C50B756032547D06B301D3/scale?width=1080&aspectRatio=1.78',
            img:'https://wallpaperaccess.com/full/219380.jpg',
            "release date":2014,
            description:'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America, is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier. Some flashing lights sequences or patterns may affect photosensitive viewers.',
            director:'Anthony Russo, Joe Russo',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Chris Evans, Sebastian Stan, Scarlett Johansson, Anthony Mackie, Cobie Smulders, Frank Grillo',
            icon:'https://images8.alphacoders.com/453/thumb-1920-453112.jpg',
            "num of favorites":0
        },
        {
            title:'Captain America: Civil War',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/188F4FC2AFD790C4C33351D744881A8DB16C65C6982517280439C469C9F6E31D/scale?width=1080&aspectRatio=1.78',
            img:'https://images5.alphacoders.com/689/thumb-1920-689398.jpg',
            "release date":2016,
            description:'Marvel’s Captain America: Civil War finds Steve Rogers leading the newly formed team of Avengers in their continued efforts to safeguard humanity. But after another incident involving the Avengers results in collateral damage, political pressure mounts to install a system of accountability, headed by a governing body to oversee and direct the team. The new status quo fractures the Avengers, resulting in two camps—one led by Steve Rogers and his desire for the Avengers to remain free to defend humanity without government interference, and the other following Tony Stark’s surprising decision to support government oversight and accountability.',
            director:'Anthony Russo, Joe Russo',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Chris Evans, Scarlett Johansson, Sebastian Stan, Anthony Mackie, Don Cheadle',
            icon:'https://i.pinimg.com/originals/79/b8/45/79b84509433202e7d0895ce430252122.jpg',
            "num of favorites":0
        },
        {
            title:'Iron Man',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/759CD82187E8DE2A7A96C17B22EA97DD05F2644352B5AA9EA0B6049D25044CF4/scale?width=1080&aspectRatio=1.78',
            img:'https://c4.wallpaperflare.com/wallpaper/381/254/535/iron-man-movie-tony-stark-wallpaper-preview.jpg',
            "release date":2008,
            description:'Tony Stark, a billionaire industrialist and genius inventor, is kidnapped and forced to build a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor and vows to protect the world as Iron Man. Contains tobacco depictions.',
            director:'Jon Favreau',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Terrence Howard, Jeff Bridges, Gwyneth Paltrow, Leslie Bibb, Shaun Toub',
            icon:'https://wallpapercave.com/wp/wp2547005.jpg',
            "num of favorites":0
        },
        {
            title:'Iron Man 2',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EAA8BBDBE39A77AE1830027420045E3F82DEC5ABC81DB036DDB8516676DEC89D/scale?width=1080&aspectRatio=1.78',
            img:'https://images.alphacoders.com/689/thumb-1920-689262.jpg',
            "release date":2010,
            description:'With the world now aware that he is Iron Man, billionaire inventor Tony Stark faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts and "Rhodey" Rhodes by his side, Tony must forge new alliances and confront a powerful new enemy, all the while realizing that not only is there a madman out to destroy him, but the very technology designed to save his life is slowly killing him. Contains tobacco depictions.',
            director:'Jon Favreau',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Scarlett Johansson, Sam Rockwell, Clark Gregg',
            icon:'https://wallpapercave.com/wp/AFtCNLt.jpg',
            "num of favorites":0
        },
        {
            title:'Iron Man 3',
            "title img":'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4FA73155AFCA92BE74914D2E633F62713D4C215C52F71EE2348A1804A52315FE/scale?width=1080&aspectRatio=1.78',
            img:'https://images4.alphacoders.com/886/thumb-1920-886518.jpg',
            "release date":2013,
            description:"Marvel Studios' Iron Man 3 pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: Does the man make the suit, or does the suit make the man?",
            director:'Shane Black',
            genre:'Science Fiction, Superhero, Action-Adventure',
            staring:'Robert Downey Jr., Gwyneth Paltrow, Don Cheadle, Guy Pearce, Rebecca Hall, Stephanie Szostak',
            icon:'https://wallpaperaccess.com/full/259316.jpg',
            "num of favorites":0
        }
    ], (err,data) => {
        res.redirect('/movies')
    })
})



//show
router.get('/:id',(req,res) => {
    Movie.findById(req.params.id, (err,targetMovie) => {
        console.log(targetMovie)
        res.render('movies/show.ejs',{
            movie: targetMovie,
            currentUser: req.session.currentUser 
        })
    })
})

//delete route
router.delete('/:id',(req, res) => {
    Movie.findByIdAndRemove(req.params.id, (err, data) => {
      res.redirect('/')
    })
  })


module.exports = router