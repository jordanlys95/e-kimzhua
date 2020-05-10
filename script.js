var kimzhua = document.getElementById('kimZhua');

document.addEventListener('touchstart', touch)
document.addEventListener('touchmove', move)
document.addEventListener('touchend', end)

function touch(e){
  // e.preventDefault();
}
function move(e){
  console.log(e)
  var x = e.changedTouches[0].pageX;
  var y = e.changedTouches[0].pageY;
  console.log(x,y)
    kimzhua.style.transition = '';
  kimzhua.style.transform = 'translate(calc(50vw - (90vw / 2)), '+y+'px) scale(1) rotate(0)';
}
function end(e){
  
  var dir = Math.floor((Math.random() * 2))==1? '-' : '';
  var deg = (360 + (360 * Math.random()));
  var x = e.changedTouches[0].pageX;
  var y = e.changedTouches[0].pageY;
  var kimzhua = document.querySelector('.kimzhua');
  kimzhua.style.transition = 'opacity 2s 1s, transform 3s';
  kimzhua.classList.add('released')
  var released = document.querySelector('.released');
  released.style.transform = "translate(calc(50vw - (90vw / 2)), "+y+
"px) scale(.25) rotate("+dir+deg+"deg)";
  released.style.opacity = 0;
  // released.style.boxShadow = "0px 0px 0px rgba(0,0,0,0.75)";
  setTimeout(()=>{
      released.classList.remove('released');
      kimzhua.style.transition = '';
      released.style.transform = "";
      released.style.boxShadow = "";
      released.style.opacity =1;
    // document.body.appendChild('<div id="kimZhua" class="kimzhua"></div>')
  }, 3000)
}
