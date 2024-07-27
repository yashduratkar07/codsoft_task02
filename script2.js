let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x')
  navbar.classList.toggle('active');
}

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const url = this.getAttribute('data-url');
    const target = this.getAttribute('data-target');

    if (target === '_blank') {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  });
});

var btn = document.getElementById('btn');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Hi');
});

