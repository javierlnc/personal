(()=>{"use strict";window.addEventListener("load",(async()=>{const a=document.querySelector("#header"),n=document.querySelector("#main-navbar");a.innerHTML=await'\n    <div class="title">\n        <h1>Alvaro Javier Leon</h1>\n        <h3>Frontend/Software Developer</h3>\n    </div>\n    <div class="socialbar">\n        <ul>\n            <li><span class="social-media"></span></li>\n            <li><span class="social-media"></span></li>\n            <li><span class="social-media"></span></li>\n        </ul>\n    </div>\n    ',n.innerHTML=await'\n    <nav class="navbar">\n        <ul>\n            <li><a href="">About Me</a></li>\n            <li><a href="">Curriculum Vitale</a></li>\n            <li><a href="">Portafolio</a></li>\n            <li><a href="">Contact</a></li>\n        </ul>\n        <img src="" alt="Logo">\n    </nav>\n    '}))})();