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
      if (target.hasOwnProperty('final')) {
        setProperty(target,calcNew(target.original,target.final,animPos));
      } else {
        setProperty(target,target.original+(target.delta*animPos));
      }
    }
  }
}

function setProperty(target, newVal) {
  if (target.hasOwnProperty('id')) {
    let e = document.getElementById(target.id);
    e.style[target.property.name] = newVal+target.property.suffix;
  } else {
    let all = document.getElementsByClassName(target.class);
    for(let e of all) {
      e.style[target.property.name] = newVal+target.property.suffix;
    }
  }
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

function getPropVal(id, propName, propType){
  let e = document.getElementById(id);
  let org = window.getComputedStyle(e);
  org = org.getPropertyValue(propName);
  if (propType == "int") {
    org = parseInt(org);
  } else if (propType == "float") {
    org = parseFloat(org);
  }
  return org;
}

function getPropValClass(className, propName, propType){
  let e = document.getElementsByClassName(className)[0];
  let org = window.getComputedStyle(e);
  org = org.getPropertyValue(propName);
  if (propType == "int") {
    org = parseInt(org);
  } else if (propType == "float") {
    org = parseFloat(org);
  }
  return org;
}

function init() {
  for(let animation of config.animations) {
    for(let target of animation.targets) {
      if (target.hasOwnProperty('id')) {
        target.original = getPropVal(target.id, target.property.name, target.property.type);
      } else {
        target.original = getPropValClass(target.class, target.property.name, target.property.type);
      }

      /* grab any reference finals */
      if(target.hasOwnProperty('final') && typeof target.final == "string") {
        target.final = getPropVal(target.final, target.property.name, target.property.type);
      }
    }
  }
}
