// change color Navbar
window.addEventListener('scroll', () => {
    var navbar = document.getElementById('navbar');
    var item = document.getElementById('item');
    var logo = document.getElementById('logo');
    var toggler = document.getElementById('toggler-icon');
    var navlink = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navlink.length; i++) { 
        if (window.scrollY > 650) { 
            navbar.style.backgroundColor = '#292C30'; 
            navlink[i].style.color = '#FFFF';
            logo.style.color = '#FFFF';
            toggler.style.backgroundColor = '#FFFF';
        } else {
            navbar.style.backgroundColor = '#FFFF';
            navlink[i].style.color = '#212529';
            logo.style.color = '#292C30';
            item.style.fontWeight = '600';
        }
    } 
  });
  