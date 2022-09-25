console.log("Spotify Sunte Jaa");
let songIndex=0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterplay");
let progBar = document.getElementById("progBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songs = [
    {songName: "Be Intehaan", filePath: "songs/1.mp3", coverPath: "covers/race2.jpg"},
    {songName: "Aaj Zid", filePath: "songs/2.mp3", coverPath: "covers/aksar2.jpg"},
    {songName: "Jaana Ve", filePath: "songs/3.mp3", coverPath: "covers/aksar2.jpg"},
    {songName: "Jeene Laga Hoon", filePath: "songs/4.mp3", coverPath: "covers/rv.jpg"},
    {songName: "Tera Hone Laga Hoon", filePath: "songs/5.mp3", coverPath: "covers/ajab.jpg"},
    {songName: "Insane", filePath: "songs/6.mp3", coverPath: "covers/insane.jpg"}
]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        gif.style.opacity= 0;
    }
})
audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    progBar.value = progress;
})
progBar.addEventListener("change", ()=>{
    audioElement.currentTime= progBar.value * audioElement.duration/100
})
const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName("songItemsPlay")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    })
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=5){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText= songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity= 1;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
})