var counter = 0;


var plusDivs = (param) => {
    var imageArray = ["../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.30.33 AM.png", "../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.30.53 AM.png", "../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.57.19 AM.png", "../Images/Character ScreenShots/Screen Shot 2019-03-11 at 9.31.26 AM.png", "../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.31.39 AM.png", "../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.31.51 AM.png", "../images/Character ScreenShots/Screen Shot 2019-03-11 at 9.32.05 AM.png"]
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