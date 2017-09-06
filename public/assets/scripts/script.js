function closeBtn() {
    var btn = document.getElementsByClassName("close")
    btn.onclick = function(event) {
        btn.parentElement.style.display='none'
    }
}

closeBtn();