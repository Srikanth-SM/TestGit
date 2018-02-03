function display() {
    setInterval(function() {
        document.getElementById("updateTime").innerHTML = new Date()
    }, 1);
}
//In branch 2