window.onload = function() {
    var denglu = document.getElementById('denglu');
    var dengluye = document.querySelector('.main2');
    console.log(dengluye);
    denglu.onclick = function() {
        dengluye.style.display = 'block'
    }
}