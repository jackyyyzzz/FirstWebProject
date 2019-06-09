timenow()

var looptime = setInterval(timenow, 1000);

function timenow () {
    var today = new Date();
    var time = today.toLocaleTimeString();
    document.getElementById('time').innerHTML=time;
}
