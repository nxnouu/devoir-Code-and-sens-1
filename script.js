var time = (12 * 60 * 60) + (40 * 60) + 8;

setInterval(function() {

    var hours = Math.floor(time / (60 * 60));
    var minutes = Math.floor(time / 60 % 60);
    var seconds = Math.floor(time % 60);

    var spans = document.querySelector(".timer").children;

    spans[0].innerHTML = Math.floor(hours / 10);
    spans[1].innerHTML = hours % 10;

    spans[3].innerHTML = Math.floor(minutes / 10);
    spans[4].innerHTML = minutes % 10;

    spans[6].innerHTML = Math.floor(seconds / 10);
    spans[7].innerHTML = seconds % 10;

    time--;

}, 1000);
function notifyMe() {
    Swal.fire({
        title: "You'll be notified!",
        icon: "success",
        draggable: true
    });
}