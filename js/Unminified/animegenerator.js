// javascript for the random anime generator used on rng.html

// for maintainability purposes to construct an array using a function
function constructAnimeArray(min, max){
  var arrayAnime = []; // makes a new array
  // for loop to push all the values from min to the max number into the array
  for(var j = min; j <= max; j++){
    arrayAnime.push(j);
  }
  return arrayAnime;
}

var num_anime = constructAnimeArray(1,11);
function getrandomAnime(){
  // Random number generator starts here

  // randomly generates a number from the array num_anime
  randNum_anime = num_anime[Math.floor(Math.random() * num_anime.length)];
  // console.log(num);

  // going from highest number to the lowest, go through the array and see if it matches the generated number
  for (var i = num_anime.length - 1; i >= 0; i--){
    if (num_anime[i] === randNum_anime){
      num_anime.splice(i, 1); // if matched, it will delete the generated number from the array num_anime to prevent duplicated generated number
    }
  }
  // if the array num_anime do not have any elements anymore, reset the array num_anime by calling out the function to construct a new array
  if (typeof randNum_anime == "undefined"){
    num_anime = constructAnimeArray(1, 11);
  }

  // main DOM manipulation js starts here for the random anime generator

  // finds the div with the id, animeimagehidden
  let animehidden = document.getElementById('animeimagehidden');
  // finds the img element with the id animeimage and resets the src to an empty src
  let animeimg = document.getElementById('animeimage').src="";
  // finds paragraph element with the id animedescription
  let animedesc = document.getElementById('animedescription');

  // switch statement to put in/change the generated title, image, description
  switch (randNum_anime){
    case 1:
      document.getElementById("GeneratedAnime").innerText = "Tsuki ga kirei [Romance]";
      animeimage.src = "multimedia/sub/AnimeRecommend/TsukiGaKirei.webp";
      animedesc.innerHTML = 'Anime Description: Tsuki ga Kirei or "As the Moon, So Beautiful" in English, is an adolescent romance story. Some may find it quite relatable too! It is a romance story between an aspiring writer Kotarou Azumi and a track team member Akane Mizuno who both ended up in the same class. They were both initially strangers but several opportunities brought them together.';
      break;
    case 2:
      document.getElementById("GeneratedAnime").innerText = "Vivy: Fluorite Eye's Song [Sci-fi]";
      animeimage.src = "multimedia/sub/AnimeRecommend/Vivy2.webp";
      animedesc.innerHTML = 'Anime Description: Vivy: Fluorite Eye\'s Song is an anime about AIs. These AIs are sustained by a single word which is "Mission". However, 100 years later, a war between AIs and Humanity will happen on April 11, 2161, and the main characters Vivy and Matsumoto are tasked to destroy AIs before that happens. To do that, Matsumoto is an AI from the future when the war broke out and time travelled 100 years back in time and met Vivy to carry out the "Singularity" project.';
      break;
    case 3:
      document.getElementById("GeneratedAnime").innerText = "Iroduku: The World in Colors [Fantasy/Magic]";
      animeimage.src = "multimedia/sub/AnimeRecommend/Iroduku.webp";
      animedesc.innerHTML = 'Anime Description: Iroduku is an anime set in a world where there are magic that some people can use freely. The others are able to use magic as well but they will have to purchase a small bottle filled with magic dust made by those who can use magic freely. So... the main character, Hitomi Tsukishiro has colour blindness and was sent 60 years back into the past to the year 2018 by her grandmother.';
      break;
    case 4:
      document.getElementById("GeneratedAnime").innerText = "Maquia: When the Promised Flower Blooms [Fantasy]";
      animeimage.src = "multimedia/sub/AnimeRecommend/Maquia.webp";
      animedesc.innerHTML = 'Anime Description: The anime, Maquia: When the Promised Flower Blooms, revolves around Maquia, the main character for the anime. Maquia is a member of a special race called the Iorph which are mystical beings who can live for hundreds of years. They would usually avoid humanity as it could stir up troubles within the Iorph community. However, the power-hungry kindom of Mezarte invades the homeland of Iorph and wanted to take away a selected few females of the Iorph community. They wanted to produce a hybrid of human and Iorph offspring to gain immortality. Maquia on the other hand was in the tower and was caught on a berserk Renato (A dragon basically) and stumbled onto a distant forest. She then finds a baby in a destroyed village and decided to take him in and named him Ariel.';
      break;
    case 5:
      document.getElementById("GeneratedAnime").innerText = "Comic Girls [Slice of life]";
      animeimage.src = "multimedia/sub/AnimeRecommend/comic_girls.webp";
      animedesc.innerHTML = 'Anime Description: Comic Girls revolves around mainly Kaoruko Moeta who also goes by her pen name, "Kaos", who is a young manga artist. Her manga was not well received by the others and she was depressed about it. Kaoruko Moeta also has a timid personality but was determined to draw a manga that would become popular. During a call with her editor, she was offered to move into a dormitory for female manga artists. She would then accept the offer and meet the other residents: Tsubasa Katsuki, Ruki Irokawa, Koyume Koizuka. They would then help one another out and improve their manga drawing skills.';
      break;
    case 6:
      document.getElementById("GeneratedAnime").innerText = "Yuru Camp [Slice of life]";
      animeimage.src = "multimedia/sub/AnimeRecommend/Yuru-Camp.webp";
      animedesc.innerHTML = 'Anime Description: Yuru Camp is a very peaceful anime that is about a group of girls camping at different campsites in Japan. There are five main characters who are Rin, Nadeshiko, Aoi, Chiaki, and Ena. Initially, Rin would usually camp alone at the base of Mount Fuji. However, Nadeshiko was lost and stumbled across Rin and had no choice but to take refuge at her campsite. Nadeshiko eventually got interested in camping as well from her experience with Rin and ponder about the possibility of another camping trip together. It turns out that Rin is a student from the same school that Nadeshiko enrolled in. These two then interacted with each other in school and Nadeshiko eventually joined the outdoor activities club and met Aoi and Chiaki. Ena is a friend of Nadeshiko who eventually joined her in camping.';
      break;
    case 7:
      document.getElementById("GeneratedAnime").innerText = "Kanata no Astra [Sci-fi]";
      animeimage.src = "multimedia/sub/AnimeRecommend/KanataNoAstra.webp";
      animedesc.innerHTML = 'Anime Description: Kanata no Astra is set in the year 2063 where space travel is feasible and commercially available. There are 9 main characters who are high school students about to go on a camping trip to the distant planet, McPa. However, upon reaching their campsite, a strange sphere, identical to a black hole, would suck them and they would end up somewhere lost in space. They then stumbled upon an unused spaceship in hopes to travel back to their home planet. Of course, there is a catch to this anime, someone among them caused the strange sphere to appear in an attempt to kill them somewhere in deep space.';
      break;
    case 8:
      document.getElementById("GeneratedAnime").innerText = "Aldnoah.Zero [Action]";
      animeimage.src = "multimedia/sub/AnimeRecommend/AldnoahZero.webp";
      animedesc.innerHTML = 'Anime Description: This anime is about humanity who left Earth and lived on Mars that had advanced technology called, "Aldnoah", using a hypergate discovered on the moon which allowed teleportation to Mars. They then founded the Vers Empire of Mars and declared war against the Terrans (basically Earthlings in another word). However, a battle on the moon later called "Heaven\'s Fall", caused the hypergate to explode and destroyed the moon, leading the two planets to establish an uneasy ceasefire. Fifteen years later, the main character, Inaho Kaizuka who is a high school student witnesses the plotted assassination of the Vers Empire\'s Princess Asseylum Vers Allusiam, who visited Earth in hopes to repair the relationship between the empire and the Terrans. War then broke out.';
      break;
    case 9:
      document.getElementById("GeneratedAnime").innerText = "Utawarerumono: Itsuwari no Kamen [Action]";
      animeimage.src = "multimedia/sub/AnimeRecommend/Itsuwari_no_kamen.webp";
      animedesc.innerHTML = 'Anime Description: Do take note that Utawarerumono: Itsuwari no Kamen is the second season of the Utawarerumono series. Hence, I recommend that you watch the first season which is "Utawarerumono" from the year 2006 which is relatively an old anime. The first season can get quite boring as it is slow-paced but it is worth the wait! Now I will get to the synopsis of the anime, Utawarerumono: Itsuwari no Kamen, it revolves around the main character, Haku who was waking up cold and alone in the woods. He suffers from amnesia and was found by Kuon, a young girl with animal ears and a tail. She then brings him back to a nearby town and named him "Haku" as he does not remember his name. The story continues as Kuon and Haku ventured off to the capital of Yamato. Haku will then work to solve mysteries and try to stop a war from erupting among the nearby countries.';
      break;
    case 10:
      document.getElementById("GeneratedAnime").innerText = "Steins;Gate [Sci-fi]";
      animeimage.src = "multimedia/sub/AnimeRecommend/SteinsGate.webp";
      animedesc.innerHTML = 'Anime Description: Steins;Gate revolves around Rintarou Okabe, a self-proclaimed mad scientist. He would usually conduct experiments with his group of friends in his rented room in an old building in Akihabara. He and his friends then accidentally made a time machine contraption that allowed him to send a "D-Mail", abbreviated for DeLorean Mail, which allowed Okabe to time travel with his memory intact. From time travelling, Okabe will face various troubles for sending a D-Mail with an organisation.';
      break;
    case 11:
      document.getElementById("GeneratedAnime").innerText ="Plastic Memories [Romance]";
      animeimage.src = "multimedia/sub/AnimeRecommend/plastic_memories.webp";
      animedesc.innerHTML = 'Anime Description: Plastic Memories revolves around a romance story between the main character Tsukasa Mizugaki and an android, Isla. It is set in a world where humanity has invented a highly advanced android or to put it simply, an advanced A.I. robot, which is referred to as a "Giftias" which is almost indistinguishable from a normal human being. However, they only have a maximum lifespan of 81,920 hours, or around nine years and four months. After their lifespan, they will have to be deactivated in order to avoid losing their memories and becoming a dangerous entity. Hence, the main characters are tasked as partners in the Terminal Service One to retrieve Giftias before their expiry date. Though in the process of it, they developed feelings for each other. However, nothing lasts forever as Isla\'s expiry date is near and Tsukasa has to come to terms with his feelings before then.';
      break;
    // default case as once the array num has ran out of elements, it will execute this before resetting the array num_anime by calling out the function to construct a new array
    default:
      document.getElementById("GeneratedAnime").innerText ="";
      animeimage.src = "multimedia/empty.webp";
      animedesc.innerHTML = 'You have already generated all 11 unique anime which has been recommended on this website. If you wish to generate them again, please click on the generate button again!';
      break;
  }
  // removes the hidden attribute from the paragraph with the id, animedescription
  animedesc.removeAttribute("hidden");

  // removes the hidden attribute from the img with the id, animeimagehidden
  animehidden.removeAttribute("hidden");
}
