"use strict";

// eslint-disable-next-line func-names
(function (doc) {
  window.addEventListener('scroll', function () {
    var mainNav = doc.getElementById('mainNav');
    console.log('test');
    if (window.scrollY >= 10) mainNav.classList.add('on');else mainNav.classList.remove('on');
  });
})(document);