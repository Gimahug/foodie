'use strict';

let search=document.querySelector('.search');
let searchBox=document.querySelector('.searchBox');
let input=document.querySelector('.inputSearch');
search.onclick=function(e){
    e.target.style.display="none";
    searchBox.style.display="inline-block";
    input.focus();
}