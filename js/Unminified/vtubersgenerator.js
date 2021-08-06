// javascript for the random vtubers generator used on rng.html

// for maintainability purposes to construct an array using a function
function constructVtubersArray(min, max){
  var arrayVtubers = []; // makes a new array
  // for loop to push all the values from min to the max number into the array
  for(var j = min; j <= max; j++){
    arrayVtubers.push(j);
  }
  return arrayVtubers;
}

var num_vtuber = constructVtubersArray(1,12);
function getrandomVtuber(){
  // Random number generator starts here

  // randomly generates a number from the array num
  randNum_vtuber = num_vtuber[Math.floor(Math.random() * num_vtuber.length)];
  // console.log(num);

  // going from highest number to the lowest, go through the array and see if it matches the generated number
  for (var i = num_vtuber.length - 1; i >= 0; i--){
    if (num_vtuber[i] === randNum_vtuber){
      num_vtuber.splice(i, 1); // if matched, it will delete the generated number from the array num to prevent duplicated generated number
    }
  }
// if the array randNum_vtuber do not have any elements anymore, reset the array num by calling out the function to construct a new array
  if (typeof randNum_vtuber == "undefined"){
    num_vtuber = constructVtubersArray(1,12);
  }

  // main DOM manipulation js starts here for the random vtubers generator

  // finds the div with the id, vtuberimagehidden
  let vtuberhidden = document.getElementById('vtuberimagehidden');
  // finds the img element with the id vtuberimage and resets the src to an empty src
  let vtuberimg = document.getElementById('vtuberimage').src="";
  // finds paragraph element with the id vtuberdescription
  let vtuberdesc = document.getElementById('vtuberdescription');
  // finds the small element with the id vtubercredit to put in the photo credits
  let creditVtuber = document.getElementById('vtubercredit');
  // finds the paragraph tags with the id channel to put in the vtuber's channel links
  let linkVtuber = document.getElementById('channel');

  // switch statement to put in/change the generated title, image, description, channel link, and the credit of the image
  switch (randNum_vtuber){
    case 1:
      document.getElementById("GeneratedVtuber").textContent = "Watame Tsunomaki [JP]";
      vtuberimage.src = "multimedia/sub/Hololive/Tsunomaki_Watame.webp";
      vtuberdesc.innerHTML = 'Profile: Tsunomaki Watame, a sheep bard that goes around everywhere. She loves singing and is fluffy! YES! FLUFFY! Being a herbivore, she loves potato chips.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCqm3BQLlJfvkTsX_hvm0UmA/featured" target="_blank">Watame Ch. 角巻わため</a>';
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/tsunomaki-watame" target="_blank">Portrait image</a> from Hololive Production\'s official website.';
      break;
    case 2:
      document.getElementById("GeneratedVtuber").textContent = "Momosuzu Nene [JP]";
      vtuberimage.src = "multimedia/sub/Hololive/Nene.webp";
      vtuberdesc.innerHTML = "Profile: A girl who came from another world to chase after her idol dream. She likes singing, dancing, and drawing. She trains hard every day in order to win the hearts of even more people.";
      linkVtuber.innerHTML = "Youtube Channel: <a href='https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA' target='_blank'>Nene Ch.桃鈴ねね</a>";
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/momosuzu-nene" target="_blank">Portrait image</a> from <a href="https://en.hololive.tv/" target="_blank">Hololive Production</a>.';
      break;
    case 3:
      document.getElementById("GeneratedVtuber").textContent = "Ninomae Ina'nis [EN]";
      vtuberimage.src = "multimedia/sub/Hololive/Ina.webp";
      vtuberdesc.innerHTML = 'Profile: One day, Ina\'nis picked up a strange book and then started to gain the power of controlling tentacles. To her, tentacles are just a part in her ordinary life; it has never been a big deal for her. However, her girly mind does want to get them dressed up and stay pretty. After gaining power, she started hearing Ancient Whispers and Revelations. Hence, she began her VTuber activities to deliver random sanity checks on humanity, as an ordinary girl.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCMwGHR0BTZuLsmjY_NT5Pwg" target="_blank">Ninomae Ina\'nis Ch. hololive-EN</a>';
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/ninomae-ina-nis" target="_blank">Portrait image</a> from Hololive Production\'s official website.';
      break;
    case 4:
      document.getElementById("GeneratedVtuber").textContent = "Hana Macchia [ID]";
      vtuberimage.src = "multimedia/sub/Nijisanji/Hana.webp";
      vtuberdesc.innerHTML = 'Profile: A university student majoring in design, Hana debuted to create a safe space for people to feel comfortable, entertained, and not alone. She will always accompany and encourage you from afternoon to evening.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCpJtk0myFr5WnyfsmnInP-w/featured" target="_blank">Hana Macchia Ch.【NIJISANJI ID】</a>';
      creditVtuber.innerHTML = '<a href="https://www.nijisanji.jp/en/members/hana-macchia?filter=NIJISANJI%20ID" target="_blank">Portrait image</a> from NIJISANJI\'s official website.';
      break;
    case 5:
      document.getElementById("GeneratedVtuber").textContent = "Yuzuki Roa [JP]";
      vtuberimage.src = "multimedia/sub/Nijisanji/Yuzuki_Roa.webp";
      vtuberdesc.innerHTML = 'Profile: She is a 13-year old demon from the underworld who came to Earth in order to play pranks on humans. She wishes to ascend as a demon, but her kindhearted nature often results in her going out of her way to help people in need. She is using streaming as a way to possibly cause mischief in the human world.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCCVwhI5trmaSxfcze_Ovzfw" target="_blank">夢月ロア🌖Yuzuki Roa</a>';
      creditVtuber.innerHTML = '<a href="https://www.nijisanji.jp/en/members/roa-yuzuki" target="_blank">Portrait image</a> from NIJISANJI\'s official website.';
      break;
    case 6:
      document.getElementById("GeneratedVtuber").textContent = "Finana Ryuga [EN]";
      vtuberimage.src = "multimedia/sub/Nijisanji/Finana.webp";
      vtuberdesc.innerHTML = 'Profile: A mermaid who spends her time with tropical fish in the sea of coral reefs. Has a heart as clear and pure as the calm and beautiful sea.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCu-J8uIXuLZh16gG-cT1naw" target="_blank">Finana Ryugu 【NIJISANJI EN】</a>';
      creditVtuber.innerHTML = '<a href="https://www.nijisanji.jp/en/members/finana-ryugu?filter=NIJISANJI%20EN" target="_blank">Portrait image</a> from NIJISANJI\'s official website.';
      break;
    case 7:
      document.getElementById("GeneratedVtuber").textContent = "Uto Amatsuka [JP]";
      vtuberimage.src = "multimedia/sub/IndependentVtubers/Uto.webp";
      vtuberdesc.innerHTML = 'Profile: An immature angel girl. She loves FPS and shotguns. She can use her wings if she puts her mind to it. She\'s actually a big momma\'s girl.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCdYR5Oyz8Q4g0ZmB4PkTD7g" target="_blank">Uto Ch. 天使うと</a>';
      creditVtuber.innerHTML = '<a href="https://twitter.com/amatsukauto/status/1338401730879373312" target="_blank">Portrait image</a> from @amatsukauto on Twitter.';
      break;
    case 8:
      document.getElementById("GeneratedVtuber").textContent = "Ui Shigure [JP]";
      vtuberimage.src = "multimedia/sub/IndependentVtubers/ShigureUi.webp";
      vtuberdesc.innerHTML = 'Profile: Ui Shigure (Japanese: しぐれうい; Shigure Ui) is a female Japanese Virtual YouTuber and illustrator.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCt30jJgChL8qeT9VPadidSw" target="_blank">しぐれうい</a>';
      creditVtuber.innerHTML = '<a href="https://twitter.com/ui_shig/status/1086248197574410241" target="_blank">Portrait image</a> from @ui_shig on Twitter.';
      break;
    case 9:
      document.getElementById("GeneratedVtuber").textContent = "Bao [EN]";
      vtuberimage.src = "multimedia/sub/IndependentVtubers/Bao.webp";
      vtuberdesc.innerHTML = 'Profile: 🐳 My name is Bao and I am whale deity VTuber! My lore is based off of the world\'s loneliest whale, the 52-hertz whale. It is a blue whale whose song is too high of a frequency for other whales to hear.';
      linkVtuber.innerHTML = 'Twitch: <a href="https://www.twitch.tv/hikarustation" target="_blank">hikarustation</a>';
      creditVtuber.innerHTML = '<a href="https://virtualyoutuber.fandom.com/wiki/Bao/Gallery?file=Bao.png" target="_blank">Portrait image</a> from Bao\'s Fandom.';
      break;
    case 10:
      document.getElementById("GeneratedVtuber").textContent = "Inugami Korone [JP]";
      vtuberimage.src = "multimedia/sub/Hololive/Inugami_Korone.webp";
      vtuberdesc.innerHTML = 'Profile: "G\'morning! Fingers! Give me your fingers!!"<br/>The dog from a random bakery. She likes to play games when she has free time while watchdogging.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UChAnqc_AY5_I3Px5dig3X1Q" target="_blank">Korone Ch. 戌神ころね</a>';
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/inugami-korone" target="_blank">Portrait image</a> from Hololive Production\'s official website.';
      break;
    case 11:
      document.getElementById("GeneratedVtuber").textContent = "Gawr Gura [EN]";
      vtuberimage.src = "multimedia/sub/Hololive/Gawr_Gura.webp";
      vtuberdesc.innerHTML = 'Profile: A descendant of the Lost City of Atlantis, who swam to Earth while saying, "It\'s so boring down there LOLOLOL!" Gura bought her clothes (and her shark hat) in the human world and she really loves them. In her spare time, she enjoys talking to marine life.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCoSrY_IQQVpmIRZ9Xf-y93g" target="_blank">Gawr Gura Ch. hololive-EN</a>';
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/gawr-gura" target="_blank">Portrait image</a> from Hololive Production\'s official website.';
      break;
    case 12:
      document.getElementById("GeneratedVtuber").textContent = "Yukoku Roberu [JP]";
      vtuberimage.src = "multimedia/sub/Hololive/Yukoku_Roberu.webp";
      vtuberdesc.innerHTML = 'Profile: The master of a hideaway bar: ROBEL. He streams before opening time. He talks to anyone openly, however it is hard to guess what he is thinking. Even though there are many chances for him to drink, it doesn’t necessarily mean he is a good drinker. His motto is: Men happily believe what they wish.';
      linkVtuber.innerHTML = 'Youtube Channel: <a href="https://www.youtube.com/channel/UCANDOlYTJT7N5jlRC3zfzVA" target="_blank">Roberu Ch. 夕刻ロベル</a>';
      creditVtuber.innerHTML = '<a href="https://en.hololive.tv/portfolio/items/yukoku-roberu" target="_blank">Portrait image</a> from Hololive Production\'s official website.';
      break;
    default:
      document.getElementById("GeneratedVtuber").innerText ="";
      vtuberimage.src = "multimedia/empty.webp";
      vtuberdesc.innerHTML = 'You have already generated all 12 unique vtubers which has been recommended on this website. If you wish to generate them again, please click on the generate button again!';
      linkVtuber.innerHTML = "";
      creditVtuber.innerHTML = "";
      break;
  }
  // removes the hidden attribute from the small tags with the id, vtubercredit
  creditVtuber.removeAttribute("hidden");
  // removes the hidden attribute from the paragraph with the id, vtuberdescription
  vtuberdesc.removeAttribute("hidden");
  // removes the hidden attribute from the img with the id, vtuberimagehidden
  vtuberhidden.removeAttribute("hidden");
  // removes the hidden attribute for the vtuber's channel link with the id, channel
  linkVtuber.removeAttribute("hidden");
}
