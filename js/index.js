let config = top.config
window.addEventListener('load', init);
window.addEventListener('scroll', scrollEvent);
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

function scrollEvent(e) {
  for(let animation of config.animations.filter(a => a.trigger == "scroll")) {
    let animPos = getAnimPos(animation.animationSpace);
    for(let target of animation.targets) {
      setProperty(target,calcNew(target.original,target.final,animPos));
    }
  }
}

function setProperty(target, newVal) {
  let e = document.getElementById(target.id);
  e.style[target.property.name] = newVal+target.property.suffix;

}
function calcNew(a,b,r) {
  let delta = (b-a);
  let progress = delta*r;
  return a+progress;
}

function getAnimPos(space) {
  let r = document.getElementById(space.id).clientHeight;
  r = r*space.adjust;
  r = window.scrollY/r;
  if (r > 1) return 1;
  return r;
}

function init() {
  for(let animation of config.animations) {
    for(let target of animation.targets) {
      let e = document.getElementById(target.id);
      let org = window.getComputedStyle(e);
      org = org.getPropertyValue(target.property.name);
      if (target.property.type == "int") {
        org = parseInt(org);
      } else if (target.property.type == "float") {
        org = parseFloat(org);
      }
      target.original = org;
    }
  }
}
