$(function() {
  var carouselList = $("#carousel ul");

function setIntervalPic() {
    setInterval(changePic, 3000);
}
function changePic() {
    carouselList.animate({'marginLeft':-400}, 500, moveFirstPic);
}
function moveFirstPic() {
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0});
    
}
setIntervalPic();
});
