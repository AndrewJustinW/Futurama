var counter = 0;


var plusDivs = (param) => {
    var imageArray = ["../images/Character ScreenShots/fry.png", "../images/Character ScreenShots/leela.png", "../images/Character ScreenShots/bender.png", "../images/Character ScreenShots/amy.png", "../images/Character ScreenShots/hermes.png", "../images/Character ScreenShots/professor.png", "../images/Character ScreenShots/zoidberg.png"]
    var size = imageArray.length - 1;

    counter = (counter + param);

    if (counter > size) {
        counter = 0;
    }
    if (counter < 0) {
        counter = size;
    }
    document.querySelector('#landing').src = imageArray[counter];

}