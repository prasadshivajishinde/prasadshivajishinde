var songs=[
{   
	id:1,
	imageSrc:"./images/dil me ho tum.jpg",
	audioSrc:"./music/Dil Mein Ho Tum - Cheat India.mp3",
	title:"Dil Mein Ho Tum"
},
{
	id:2,
	imageSrc:"./images/meri maa ke barabar.jpg",
	audioSrc:"./music/Meri Maa Ke Barabar Koi Nahi - Jubin Nautiyal- [MyMp3Bhojpuri.In].mp3",
	title:"Meri Make Barabar - Jubin Nautiyal"
},
{
	id:3,
	imageSrc:"./images/tere-naam.jpg",
	audioSrc:"./music/07 - Tere Naam - PagalSongs.com.mp3",
	title:"Tere Naam - Udit Narayan&Alka Yagnik"
},
{
	id:4,
	imageSrc:"./images/bewafa-tera-masoom-chehra.jpg",
	audioSrc:"./music/Bewafa Tera Masoom Chehra - Jubin Nautiyal.mp3",
	title:"bewafa-tera-masoom-chehra - Jubin Nautiyal"
},
{
	id:5,
	imageSrc:"./images/pardes-1997-250.jpg",
	audioSrc:"./music/05 - Meri Mehbooba - Pardes (1997).mp3",
	title:"Meri Mehbooba -Kumar Sanu"
},
{
	id:6,
	imageSrc:"./images/thumb-kabhi-khushi-kabhi-ghum-300.jpg",
	audioSrc:"./music/06. Yeh Ladka Hai Allah.mp3",
	title:"kabhi-khushi-kabhi-ghum - Alka Yagnik"
},
{
	id:7,
	imageSrc:"./images/id3Picture_1786459886.jpg",
	audioSrc:"./music/Bol Do Na Zara.mp3",
	title:"Bol Do Na Zara - Armaan MAlik"
}

]

function play(songid){
	var song=songs.find(function(song,index){
		return song.id===songid
	});


document.getElementById("thumnail").src=song.imageSrc
document.getElementById("audio_play").src=song.audioSrc
document.getElementById("audio_play_title").innerText=song.title

}



