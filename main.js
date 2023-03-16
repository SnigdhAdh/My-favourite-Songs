song1="";
song2="";
function preload(){
    song1=loadSound("StarWalkin.mp3");
    song2=loadSound("WavinFlag.mp3");

}

function play_1(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);    
}

function play_2(){
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}