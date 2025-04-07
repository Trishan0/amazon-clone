document.getElementById("navbar-placeholder").innerHTML = fetch('navbar.html')
    .then(res => res.text())
    .then(data => document.getElementById("navbar-placeholder").innerHTML = data);

document.getElementById("footer-placeholder").innerHTML = fetch('footer.html')
    .then(res => res.text())
    .then(data => document.getElementById("footer-placeholder").innerHTML = data);