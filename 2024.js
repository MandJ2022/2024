var container = document.getElementById('container');
var inner = document.getElementById('inner');
        
var onMouseEnterHandler = function(event) {
  update(event);
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
  }
};

container.onmouseenter = onMouseEnterHandler;
container.onmouseleave = onMouseLeaveHandler;
container.onmousemove = onMouseMoveHandler;

var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};

// Init
var container = document.getElementById('container');
var inner = document.getElementById('inner');
// Mouse 
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the container.
mouse.setOrigin(container);

var update = function(event) {
  mouse.updatePosition(event);
  updateTransformStyle(
    (mouse.y / inner.offsetHeight/2).toFixed(2),
    (mouse.x / inner.offsetWidth/2).toFixed(2)
  );
};

var updateTransformStyle = function(x, y) {
  var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  inner.style.transform = style;
  inner.style.webkitTransform = style;
  inner.style.mozTransform = style;
  inner.style.msTransform = style;
  inner.style.oTransform = style;
};

window.onscroll = function() {
  var textElement1 = document.getElementById('animated-text');
  var textElement2 = document.getElementById('animated-text2');
  var textElement3 = document.getElementById('animated-text3');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollPosition > 600) { // Change this value to the scroll position you want the first text to appear at
    textElement1.style.opacity = "1";
  } else {
    textElement1.style.opacity = "0";
  }
  if (scrollPosition > 1200) { // Change this value to the scroll position you want the second text to appear at
    textElement2.style.opacity = "1";
  } else {
    textElement2.style.opacity = "0";
  }
  if (scrollPosition > 800) { // Change this value to the scroll position you want the second text to appear at
    textElement3.style.opacity = "1";
  } else {
    textElement3.style.opacity = "0";
  }
};
