window.addEventListener('scroll', scrollEvent)

let defaults = {
  "profile": document.getElementById("profile").offsetWidth,
  "title": (viewportToPixels("100vh") - document.getElementById("title").offsetHeight)/2
}


function scrollEvent(e) {
  updateNav(window.scrollY)
}

/*
 * From
 * https://stackoverflow.com/questions/34166341/convert-vh-units-to-px-in-js
 */
function viewportToPixels(value) {
  var parts = value.match(/([0-9\.]+)(vh|vw)/)
  var q = Number(parts[1])
  var side = window[['innerHeight', 'innerWidth'][['vh', 'vw'].indexOf(parts[2])]]
  return side * (q/100)
}

function ratio(a,b){
  let r = 1-a/b
  if (r < 0) return 0
  return r
}


function updateNav(curr){
  let end = document.getElementById('landing').offsetHeight/2;
  let adjust = ratio(curr,end);
  document.getElementById('title').style.marginTop = defaults.title*adjust+"px";
  document.getElementById('profile').style.width = defaults.profile*adjust;
}

/* Trigger positionig */
updateNav(window.scrollY);
