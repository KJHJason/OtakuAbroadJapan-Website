// javascript for the random music generator used on rng.html

// for maintainability purposes to construct an array using a function
function constructMusicArray(min, max){
  var arrayMusic = []; // makes a new array
  // for loop to push all the values from min to the max number into the array
  for(var j = min; j <= max; j++){
    arrayMusic.push(j);
  }
  return arrayMusic;
}

var num_music = constructMusicArray(1,19);
function getrandomMusic(){
  // Random number generator starts here

  // randomly generates a number from the array num
  randNum_music = num_music[Math.floor(Math.random() * num_music.length)];
  // console.log(num);

  // going from highest number to the lowest, go through the array and see if it matches the generated number
  for (var i = num_music.length - 1; i >= 0; i--){
    if (num_music[i] === randNum_music){
      num_music.splice(i, 1); // if matched, it will delete the generated number from the array num to prevent duplicated generated number
    }
  }
  // if the array randNum_music do not have any elements anymore, reset the array num_music by calling out the function to construct a new array
  if (typeof randNum_music == "undefined"){
    num_music = constructMusicArray(1, 19);
  }

  // main DOM manipulation js starts here for the random music generator

  // finds the div with the id, musicimagehidden
  let musichidden = document.getElementById('musicimagehidden');
  // finds the img element with the id musicimage and resets the src to an empty src
  let musicimg = document.getElementById('musicimage').src="";
  // finds paragraph element with the id musicdescription
  let musicdesc = document.getElementById('musicdescription');
  // finds the div with the id musicembedspotify
  let spotifyhidden = document.getElementById('musicembedspotify');
  // finds the iframe with the id embedspotifygenerate
  let spotifysong = document.getElementById('embedspotifygenerate');
  // finds the small element with the id musiccredit to put in the photo credits
  let credit = document.getElementById('musiccredit');
  // finds the paragraph tag with the id spotifylink to put the musician's spotify link
  let spotifycredit = document.getElementById("spotifylink");

  // switch statement to put in/change the generated title, image, description, spotify iframe source,  and the credit of the image
  switch (randNum_music){
    case 1:
      document.getElementById('GeneratedMusic').innerText = "Vivy: Fluorite Eye's Song Anisong";
      musicimage.src = "multimedia/sub/AnimeRecommend/Vivy2.webp";
      spotifysong.src = "https://open.spotify.com/embed/playlist/6oNwTOtvndlSK8baxKDNDu";
      musicdesc.innerHTML = 'Personal comments for the music: Definitely one of my favourite anisong, I would usually listen to it when doing work or just chill to it. Give it a try by clicking the embedded Spotify tracks below! My personal favourite track for Vivy is Harmony of One\'s Heart. Additionally, it is also in my <a href="blogs/sub/AnimeRecommend#vivy">anime recommendations blog</a>.';
      credit.innerHTML = 'Image: Vivy: Fluorite Eye\'s Song key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 2:
      document.getElementById('GeneratedMusic').innerText = "Camellia (Musician)";
      musicimage.src = "multimedia/sub/Musician/Camellia.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/6HBznW6Doe0w8WBazMavO5";
      musicdesc.innerHTML = 'Personal comments: Camellia whose real name is Masaya Oya (Japanese: 大箭将也; Oya Masaya) is a Japanese musician, born on September 28, 1992, is well known for his fast-paced music. He is very popular among rhythm gamers for having his music being hard to clear on rhythm games such as Osu!, Sound Voltex, and Robeats. His song mostly runs more than 200 BPM which makes his song difficult to clear on rhythm games. Fun fact: his song, "M1LLI0N PP" has an estimated of 24 genres and the BPM ranges from 125 to 234!';
      credit.innerHTML = '<a href="https://pbs.twimg.com/profile_images/1245357551832535040/ko6DuZG7_400x400.png" target="_blank">Portrait image</a> from @cametek on Twitter.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/4bwIf0yXJf0F9AmOl2J78M?si=me6hwOT9S3qVQQXrqlsNlg&dl_branch=1" target="_blank">Camellia</a>';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 3:
      document.getElementById('GeneratedMusic').innerText = "Tsuki ga Kirei Anisong";
      musicimage.src = "multimedia/sub/AnimeRecommend/TsukiGaKirei.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/4mL5uStl7EzFIjrZbgdd0y";
      musicdesc.innerHTML = 'Personal comments for the music: Honestly, for this anisong from the anime, Tsuki ga kirei, they are one of my personal favourite songs. It actually has been a while since I listened to it but it brings back all the memories from the anime, tsuki ga kirei, when I watched it a few years ago. Definitely a must-try if you have watched the anime, tsuki ga kirei, and in fact, it is also in my <a href="blogs/sub/AnimeRecommend#tsuki">anime recommendations blog</a> on this website.';
      credit.innerHTML = 'Image: Tsuki ga Kirei';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 4:
      document.getElementById('GeneratedMusic').innerText = "Gyakusatsu Kikan [Anime Movie] Anisong";
      musicimage.src = "multimedia/sub/Anisong/Project-Itoh-Gyakusatsu-kikan-Image-1.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/7ISfH1G7GDz5VPAi200l2B";
      musicdesc.innerHTML =  'Personal comments for the music: Honestly, I have not watched this movie yet but I have always listened to it occasionally until recently when I found it out it was an Anisong. However, based on the synopsis and the key visual image, it seems interesting. It is set in a world where war broke out, and Sarajevo was destroyed by a homemade nuclear device. Afterwards, the leading democracies transformed into total surveillance states, and the developing world has drowned under a wave of genocides. Hence, the main character, Clavis Shepherd, an intelligence agent is tasked to track the mysterious American John Paul as he is behind the collapse of the world system. Do be warned as the anime can get very gruesome and bloody and is rated R+ - Mild Nudity.';
      credit.innerHTML = 'Image: Gyakusatsu Kikan key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 5:
      document.getElementById('GeneratedMusic').innerText = "Re:Creators Anisong";
      musicimage.src = "multimedia/sub/Anisong/RECREATORS.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/5vM7uTVvj65yNYKwnuERFo";
      musicdesc.innerHTML =  'Personal comments for the music: Re:Creators is a reverse isekai anime where anime characters in the anime get transported into the real world. If you did not know, isekai is basically about the main character being transported or reincarnated into another world. I know it sounds confusing but these anime characters from their original world who got transported to the real world are still able to use their abilities but risk getting the real world being destroyed due to "physics". That is the brief synopsis of the anime, and below are the songs from the anime, Re:Creators. It is one of personal favourite as I usually like to listen to Hiroyuki Sawano\'s songs which are also <a href="blogs/sub/Musician#hiroyuki">featured on this website</a>.';
      credit.innerHTML = 'Image: Re:Creators key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 6:
      document.getElementById('GeneratedMusic').innerText = "Tenki no Ko Anisong";
      musicimage.src = "multimedia/sub/Anisong/Tenki_no_ko.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/4hAlZU3JXoThQ3jnF4CGiZ";
      musicdesc.innerHTML =  'Personal comments for the music: Tenki no ko or weathering with you in English, is an anime movie. It is set in a world where Tokyo experiences constant rain showers that disrupt the usual pace of everyone who lives there. The main character, Hodaka then discovers that Hina has the power to call out the sun and stop the rain showers. However, that power also comes with a hefty price. Personally, I like to listen to RADWIMPS\'s songs as they previously made the songs for the anime, Your Name, which is by far the most popular anime among the anime community. Give it a try and see if it is to your likings.';
      credit.innerHTML = 'Image: Tenki no Ko key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 7:
      document.getElementById('GeneratedMusic').innerText = "A Silent Voice OST";
      musicimage.src = "multimedia/sub/Ost/A_Silent_Voice.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/3WlmFFtmePwfhN9pQdVJ5v";
      musicdesc.innerHTML =  'Personal comments for the music: This anime OST has an emotional feel to it, you would like it if you like emotional songs. My personal favourites tracks in this OST are "fractal", "mon", "van", and "rev".';
      credit.innerHTML = 'Image: A Silent Voice';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 8:
      document.getElementById('GeneratedMusic').innerText = "Japan Sinks: 2020 OST";
      musicimage.src = "multimedia/sub/Ost/Japan_Sinks_2020.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/7H2yGw6fYr7mO3NJLFa5ah";
      musicdesc.innerHTML =  'Personal comments for the music: You would definitely like this anime OST if you like to listen to the piano and electronic music. If you did watch the anime, you can feel the nostalgia of those characters who did not make it out alive. My personal favourite tracks for this OST are "days", "a shelter", "reprise - based on \'CREEK\'-", and "rising suns -theme from JAPAN SINKS 2020-".';
      spotifycredit.innerHTML = '';
      credit.innerHTML = 'Image: Japan Sinks: 2020';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 9:
      document.getElementById('GeneratedMusic').innerText = "Dr. Stone OST";
      musicimage.src = "multimedia/sub/Ost/Dr_Stone.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/7rphokb5ngFoll2nGwvcEY";
      musicdesc.innerHTML =  'Personal comments for the music: This anime OST has a more traditional feel to it, do give it a try as I am not really into traditional music but it is good, especially the track, "From Zero". My personal favourite tracks in this OST are "STONE WORLD", "From Zero", "Be The Adam and Eve Of This Stone World".';
      credit.innerHTML = 'Image: Dr. Stone key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 10:
      document.getElementById('GeneratedMusic').innerText = "Tsuki ga Kirei OST";
      musicimage.src = "multimedia/sub/Ost/Tsuki_ga_Kirei_OST.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/1nkVaKzXEbjzC0nnf0oomR";
      musicdesc.innerHTML =  'The anime OST is mainly classical music (mainly the piano) and can be emotional as this anime is about a romance story. My personal favourite tracks are 「気づき」、「月がきれい」、「そのままの君でいい」.<br/>(Note that "「」" and "、" are quotation marks and comma in the Japanese language respectively)';
      credit.innerHTML = 'Image: Tsuki ga Kirei OST cover';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 11:
      document.getElementById('GeneratedMusic').innerText = "Val x Love Original Soundtracks";
      musicimage.src = "multimedia/sub/Ost/Val_x_Love.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/4XTdzMx0myrqrawDph1kHC";
      musicdesc.innerHTML =  'Personal comments for the music: This anime OST is mainly electronic music so if you are into that, you would like this OST. My personal favourites are "Preview", "VAL x LOVE Theme", and "LOVE Theme".';
      credit.innerHTML = 'Image: Val x Love key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 12:
      document.getElementById('GeneratedMusic').innerText = "Utawarerumono: Itsuwari no Kamen OST";
      musicimage.src = "multimedia/sub/AnimeRecommend/Itsuwari_no_kamen.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/6ZuL6lbYE7qE88h0a5v8Zs";
      musicdesc.innerHTML =  'Personal comments for the music: The original soundtracks for Utawarerumono: Itsuwari no Kamen have a more traditional feel to them which if you like listening to traditional Japanese music, you might like this original soundtracks album. Additionally, if you are into listening to an orchestral piece, you might like this too!';
      credit.innerHTML = 'Image: Utawarerumono: Itsuwari no Kamen key visual';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 13:
      document.getElementById('GeneratedMusic').innerText = "Yunomi (Musician)";
      musicimage.src = "multimedia/sub/Musician/Yunomi.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/15St0qWPnH4xKflV39vk28";
      musicdesc.innerHTML =  'Personal comments: Yunomi (ゆのみ) is a DJ, lyricist, composer and arranger and has been active since 2015. He was born in Sapporo, Hokkaido, Japan. He would usually release music as a soloist or would invite other music artists to collaborate with him. He would also compose and write for other artists and groups too. He is also one of the more recent J-pop sensations to appear in the music industry, theming his songs around the concept of "cute". His music is heavily based on EDM, trap, and future bass or kawaii future bass.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/2j00CVYTPx6q9ANbmB2keb?si=B41l-4ZdQ42eEXqt3C5dlQ&dl_branch=1" target="_blank">Yunomi</a>';
      credit.innerHTML = '<a href="https://twitter.com/cy8erinfo/status/1135909127887106050" target="_blank">Portrait image</a> from @CY8ERinfo on Twitter.';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 14:
      document.getElementById('GeneratedMusic').innerText = "Egoist (Musician)";
      musicimage.src = "multimedia/sub/Musician/Egoist.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/2fkSKbhD79K9JRFUSuhzk3";
      musicdesc.innerHTML =  'Personal comments: Egoist is a music duo, originally created for the anime, Guilty Crown. However, they have continued to release music separately since then. Egoist (band) consists of Chelly (Vocal) and Ryo (Producer) and has been active since 2011. The main genre that Egoist focuses on is J-pop and has also made music for various anime such as Pyscho-Pass. Below are some of my personal favourites songs from Egoist.';
      credit.innerHTML = '<a href="https://www.artstation.com/artwork/3dXDdv" target="_blank">Portrait image</a> by Tomoyuki Yamasaki on ArtStation.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/0k7JZhYS35IewiKNHW7KMj?si=z1QFwYCWSo-g2ej7wMSRfA&dl_branch=1" target="_blank">Egoist</a>';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 15:
      document.getElementById('GeneratedMusic').innerText = "yanaginagi (Musician)";
      musicimage.src = "multimedia/sub/Musician/YanagiNagi.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/2EKBJB1H8eknpYglNvsvw5";
      musicdesc.innerHTML =  'Personal comments: Nagi Yanagi (Japanese: やなぎなぎ; Yanagi Nagi) or yanaginagi is a Jpop singer-songwriter and composer signed under NBC Universal Entertainment Japan. She initially started by uploading cover songs on Nico Nico Douga under the name "Gazelle". She was then scouted by Ryo, the founder of supercell, and started working with him in 2009. However, she decided to quit supercell in 2011 and made a debut as a solo artist in 2012. Additionally, she mainly focuses on the Jpop genre for her music.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/15MlyDyZofFYpLb5MrLKVo?si=n7QqYLQvSzS0x5deFD3enQ&dl_branch=1" target="_blank">yanaginagi</a>';
      credit.innerHTML = '<a href="http://yanaginagi.net/profile/" target="_blank">Portrait image</a> from her <a href="http://yanaginagi.net/" target="_blank">official website</a>.';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 16:
      document.getElementById('GeneratedMusic').innerText = "Kensuke Ushio (Musician)";
      musicimage.src = "multimedia/sub/Musician/KensukeUshio.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/22bdVhJPD7Rqq1Zz6EzRL8";
      musicdesc.innerHTML =  'Personal comments: Kensuku Ushio (Japanese: 牛尾憲輔; Ushio Kensuke) is a Japanese composer that goes by the stage name "agraph". He was born on March 1, 1983 and mainly does original soundtracks for various anime such as "Japan Sinks: 2020". He is also a rock and EBM (Electronic body music) and a member of the Japanese rock band, Lama.';
      credit.innerHTML = '<a href="https://pbs.twimg.com/profile_images/1380464302155427840/HcHvReT2_400x400.jpg" target="_blank">Portrait image</a> from @agraph on Twitter.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/4L0gz16xuM1as1OgYzh1SR?si=XcKVBLjKQYOXl0VjqeAIpg&dl_branch=1" target="_blank">Kensuke Ushio</a>';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 17:
      document.getElementById('GeneratedMusic').innerText = "Nanahira (Musician)";
      musicimage.src = "multimedia/sub/Musician/Nanahira.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/3q6fwV911vTYbOq7CbdeVG";
      musicdesc.innerHTML =  'Personal comments: Nanahira (ななひら) is well known for making covers with her loli voice. If you did not know, a loli basically refers to a female with a childlike appearance and would have a cute, high-pitched voice to sound like a little girl in the anime community. She is also capable of voice acting and would put in some dialogue to make the song more interesting to listen to such as songs like <a href="https://open.spotify.com/track/5wEy787VwmAnA7GGhEzjHR?si=6513542cf9eb4ee1" target="_blank">"Can I Friend You On Bassbook?"</a>. She would often collaborate with Camellia as her voice fits well with Camellia\'s music.';
      credit.innerHTML = '<a href="https://yt3.ggpht.com/ytc/AAUvwnjYSRi4oSeg-2G8h6YjvjPFZ7lDq3unetKM1LWW8w=s900-c-k-c0x00ffffff-no-rj" target="_blank">Portrait image</a> from her <a href="https://www.youtube.com/channel/UC_fYA9QRK-aJnFTgvR_4zug" target="_blank">YouTube channel</a>.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/0bkkiFN0ghGl4j9aLi3oQx?si=QNyT2ji0R5-e4dVBTeApjQ&dl_branch=1" target="_blank">Nanahira</a>';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 18:
      document.getElementById('GeneratedMusic').innerText = "Hiroyuki Sawano (Musician)";
      musicimage.src = "multimedia/sub/Musician/HiroyukiSawano.webp";
      spotifysong.src = "https://open.spotify.com/embed/track/3DTCJovOSM3wX8PLa00qQ3";
      musicdesc.innerHTML =  'Personal comments for his music: Hiroyuki Sawano (Japanese: 澤野弘之; Sawano Hiroyuki) is a Japanese musician and composer who is well known for making original soundtracks for various anime and movies. In 2014, he began a vocal song project named SawanoHiroyuki[nZk]. Additionally, he was born on September 12, 1980, and has been active since 2004.';
      credit.innerHTML = '<a href="https://www.moshimoshi-nippon.jp/156109/%e9%9d%92%e3%81%ae%e7%a5%93%e9%ad%94%e5%b8%ab-damned-chord%e3%80%80%e6%be%a4%e9%87%8e%e5%bc%98%e4%b9%8b%e3%80%80sawanohiroyuki_3rdal_mainweb-2" target="_blank">Portrait image</a> from Moshi Nippon.';
      spotifycredit.innerHTML = 'Spotify: <a href="https://open.spotify.com/artist/0Riv2KnFcLZA3JSVryRg4y?si=AUBC9pziT5qyeH0l6OB_5w&dl_branch=1" target="_blank">Hiroyuki Sawano</a>';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "30%";
      }
      else if (screen.width <= 768 && screen.width >= 400){
        musicimage.style.width = "50%";
      }
      else{
        musicimage.style.width = "80%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    case 19:
      document.getElementById('GeneratedMusic').innerText = "Vivy: Fluorite Eye's Song OST";
      musicimage.src = "multimedia/sub/Ost/Vivy_OST_Cover.webp";
      spotifysong.src = "https://open.spotify.com/embed/album/2QAzSH1mwne0Ps5HLZ2naR";
      musicdesc.innerHTML =  'Personal comments for the music: Vivy’s original soundtracks were recently released and I have been listening to them recently. My personal favourites are “Project: Singularity”, "It\'s not about how long we live, it\'s how we live.", “Peaceful Moment in a Sunrise” and “Time Flies”. “Project: Singularity” has a more sci-fi and serious feel to it as the main concept of the anime is to carry out Project Singularity to save humanity. “It\'s not about how long we live, it\'s how we live.” has a more powerful and dramatic feel to it as the name implies. On the other hand, “Peaceful Moment in a Sunrise” and “Time Flies” has a more chill vibe to them which I like to listen to while I reflect on myself or while I do work or assignments. Give them a listen and see if it is to your likings!';
      credit.innerHTML = 'Image: Vivy: Fluorite Eye\'s Song OST Cover';
      spotifycredit.innerHTML = '';
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // removes the hidden attribute from the div with an iframe tag inside with the id, musicembedspotify
      spotifyhidden.removeAttribute("hidden");
      break;
    // default case as once the array num has ran out of elements, it will execute this before resetting the array num_music by calling out the function to construct a new array
    default:
      document.getElementById("GeneratedMusic").innerText ="";
      musicimage.src = "multimedia/empty.webp";
      // if else block of codes to change the width of image depending on the user's screen width
      if (screen.width > 768){
        musicimage.style.width = "60%";
      }
      else if (screen.width <= 768 && screen.width >= 576){
        musicimage.style.width = "70%";
      }
      else{
        musicimage.style.width = "90%";
      }
      // hides the spotify part as there is no spotify track to share
      spotifyhidden.setAttribute("hidden", "");
      // resets the src to an empty src
      spotifysong.src = "";
      credit.innerHTML = "";
      spotifycredit.innerHTML = '';
      musicdesc.innerHTML = 'You have already generated all 19 unique music related recommendations which has been recommended on this website. If you wish to generate them again, please click on the generate button again!';
      break;
  }
  // removes the hidden attribute from the small tags with the id, musiccredit
  credit.removeAttribute("hidden");
  // removes the hidden attribute from the paragraph with the id, musicdescription
  musicdesc.removeAttribute("hidden");
  // removes the hidden attribute from the img with the id, musicimagehidden
  musichidden.removeAttribute("hidden");
  // removes the hidden attribute from the paragraph tag with the id, spotifylink
  spotifycredit.removeAttribute("hidden");
}
