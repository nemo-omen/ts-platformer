import "./chunk-RSJERJUL.js";

// node_modules/.deno/kontra@8.0.0/node_modules/kontra/kontra.mjs
var noop = () => {
};
var srOnlyStyle = "position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);";
function addToDom(node, canvas) {
  let container = canvas.parentNode;
  node.setAttribute("data-kontra", "");
  if (container) {
    let target = container.querySelector("[data-kontra]:last-of-type") || canvas;
    container.insertBefore(node, target.nextSibling);
  } else {
    document.body.appendChild(node);
  }
}
function removeFromArray(array, item) {
  let index = array.indexOf(item);
  if (index != -1) {
    array.splice(index, 1);
    return true;
  }
}
var callbacks$2 = {};
function on(event, callback) {
  callbacks$2[event] = callbacks$2[event] || [];
  callbacks$2[event].push(callback);
}
function off(event, callback) {
  callbacks$2[event] = (callbacks$2[event] || []).filter(
    (fn) => fn != callback
  );
}
function emit(event, ...args) {
  (callbacks$2[event] || []).map((fn) => fn(...args));
}
var canvasEl;
var context;
var handler$1 = {
  get(target, key) {
    if (key == "_proxy")
      return true;
    return noop;
  }
};
function getCanvas() {
  return canvasEl;
}
function getContext() {
  return context;
}
function init$1(canvas, { contextless = false } = {}) {
  canvasEl = document.getElementById(canvas) || canvas || document.querySelector("canvas");
  if (contextless) {
    canvasEl = canvasEl || new Proxy({}, handler$1);
  }
  if (!canvasEl) {
    throw Error("You must provide a canvas element for the game");
  }
  context = canvasEl.getContext("2d") || new Proxy({}, handler$1);
  context.imageSmoothingEnabled = false;
  emit("init");
  return { canvas: canvasEl, context };
}
var Animation = class {
  constructor({ spriteSheet, frames, frameRate, loop = true }) {
    this.spriteSheet = spriteSheet;
    this.frames = frames;
    this.frameRate = frameRate;
    this.loop = loop;
    let { width, height, margin = 0 } = spriteSheet.frame;
    this.width = width;
    this.height = height;
    this.margin = margin;
    this._f = 0;
    this._a = 0;
  }
  clone() {
    return new Animation(this);
  }
  reset() {
    this._f = 0;
    this._a = 0;
  }
  update(dt = 1 / 60) {
    if (!this.loop && this._f == this.frames.length - 1)
      return;
    this._a += dt;
    while (this._a * this.frameRate >= 1) {
      this._f = ++this._f % this.frames.length;
      this._a -= 1 / this.frameRate;
    }
  }
  render({
    x,
    y,
    width = this.width,
    height = this.height,
    context: context2 = getContext()
  }) {
    let row = this.frames[this._f] / this.spriteSheet._f | 0;
    let col = this.frames[this._f] % this.spriteSheet._f | 0;
    context2.drawImage(
      this.spriteSheet.image,
      col * this.width + (col * 2 + 1) * this.margin,
      row * this.height + (row * 2 + 1) * this.margin,
      this.width,
      this.height,
      x,
      y,
      width,
      height
    );
  }
};
function factory$b() {
  return new Animation(...arguments);
}
var imageRegex = /(jpeg|jpg|gif|png|webp)$/;
var audioRegex = /(wav|mp3|ogg|aac)$/;
var leadingSlash = /^\//;
var trailingSlash = /\/$/;
var dataMap = /* @__PURE__ */ new WeakMap();
var imagePath = "";
var audioPath = "";
var dataPath = "";
function getUrl(url, base) {
  return new URL(url, base).href;
}
function joinPath(base, url) {
  return [
    base.replace(trailingSlash, ""),
    base ? url.replace(leadingSlash, "") : url
  ].filter((s) => s).join("/");
}
function getExtension(url) {
  return url.split(".").pop();
}
function getName(url) {
  let name = url.replace("." + getExtension(url), "");
  return name.split("/").length == 2 ? name.replace(leadingSlash, "") : name;
}
function getCanPlay(audio) {
  return {
    wav: audio.canPlayType('audio/wav; codecs="1"'),
    mp3: audio.canPlayType("audio/mpeg;"),
    ogg: audio.canPlayType('audio/ogg; codecs="vorbis"'),
    aac: audio.canPlayType("audio/aac;")
  };
}
var imageAssets = {};
var audioAssets = {};
var dataAssets = {};
function addGlobal() {
  if (!window.__k) {
    window.__k = {
      dm: dataMap,
      u: getUrl,
      d: dataAssets,
      i: imageAssets
    };
  }
}
function setImagePath(path) {
  imagePath = path;
}
function setAudioPath(path) {
  audioPath = path;
}
function setDataPath(path) {
  dataPath = path;
}
function loadImage(url) {
  addGlobal();
  return new Promise((resolve, reject) => {
    let resolvedUrl, image, fullUrl;
    resolvedUrl = joinPath(imagePath, url);
    if (imageAssets[resolvedUrl])
      return resolve(imageAssets[resolvedUrl]);
    image = new Image();
    image.onload = function loadImageOnLoad() {
      fullUrl = getUrl(resolvedUrl, window.location.href);
      imageAssets[getName(url)] = imageAssets[resolvedUrl] = imageAssets[fullUrl] = this;
      emit("assetLoaded", this, url);
      resolve(this);
    };
    image.onerror = function loadImageOnError() {
      reject(
        "Unable to load image " + resolvedUrl
      );
    };
    image.src = resolvedUrl;
  });
}
function loadAudio(url) {
  return new Promise((resolve, reject) => {
    let _url = url, audioEl, canPlay, resolvedUrl, fullUrl;
    audioEl = new Audio();
    canPlay = getCanPlay(audioEl);
    url = [].concat(url).reduce(
      (playableSource, source) => playableSource ? playableSource : canPlay[getExtension(source)] ? source : null,
      0
    );
    if (!url) {
      return reject(
        "cannot play any of the audio formats provided " + _url
      );
    }
    resolvedUrl = joinPath(audioPath, url);
    if (audioAssets[resolvedUrl])
      return resolve(audioAssets[resolvedUrl]);
    audioEl.addEventListener("canplay", function loadAudioOnLoad() {
      fullUrl = getUrl(resolvedUrl, window.location.href);
      audioAssets[getName(url)] = audioAssets[resolvedUrl] = audioAssets[fullUrl] = this;
      emit("assetLoaded", this, url);
      resolve(this);
    });
    audioEl.onerror = function loadAudioOnError() {
      reject(
        "Unable to load audio " + resolvedUrl
      );
    };
    audioEl.src = resolvedUrl;
    audioEl.load();
  });
}
function loadData(url) {
  addGlobal();
  let resolvedUrl, fullUrl;
  resolvedUrl = joinPath(dataPath, url);
  if (dataAssets[resolvedUrl])
    return Promise.resolve(dataAssets[resolvedUrl]);
  return fetch(resolvedUrl).then((response) => {
    if (!response.ok)
      throw response;
    return response.clone().json().catch(() => response.text());
  }).then((response) => {
    fullUrl = getUrl(resolvedUrl, window.location.href);
    if (typeof response == "object") {
      dataMap.set(response, fullUrl);
    }
    dataAssets[getName(url)] = dataAssets[resolvedUrl] = dataAssets[fullUrl] = response;
    emit("assetLoaded", response, url);
    return response;
  });
}
function load(...urls) {
  addGlobal();
  return Promise.all(
    urls.map((asset) => {
      let extension = getExtension([].concat(asset)[0]);
      return extension.match(imageRegex) ? loadImage(asset) : extension.match(audioRegex) ? loadAudio(asset) : loadData(asset);
    })
  );
}
function degToRad(deg) {
  return deg * Math.PI / 180;
}
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}
function angleToTarget(source, target) {
  return Math.atan2(target.y - source.y, target.x - source.x) + Math.PI / 2;
}
function rotatePoint(point, angle) {
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos
  };
}
function movePoint(point, angle, distance) {
  return {
    x: point.x + Math.sin(angle) * distance,
    y: point.y - Math.cos(angle) * distance
  };
}
function randInt(min, max) {
  return (Math.random() * (max - min + 1) | 0) + min;
}
function seedRand(str) {
  for (var i = 0, h = 2166136261 >>> 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  }
  h += h << 13;
  h ^= h >>> 7;
  h += h << 3;
  h ^= h >>> 17;
  let seed = (h += h << 5) >>> 0;
  let rand = () => (2 ** 31 - 1 & (seed = Math.imul(48271, seed))) / 2 ** 31;
  rand();
  return rand;
}
function lerp(start, end, percent) {
  return start * (1 - percent) + end * percent;
}
function inverseLerp(start, end, value) {
  return (value - start) / (end - start);
}
function clamp(min, max, value) {
  return Math.min(Math.max(min, value), max);
}
function setStoreItem(key, value) {
  if (value == void 0) {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
function getStoreItem(key) {
  let value = localStorage.getItem(key);
  try {
    value = JSON.parse(value);
  } catch (e) {
  }
  return value;
}
function collides(obj1, obj2) {
  [obj1, obj2] = [obj1, obj2].map((obj) => getWorldRect(obj));
  return obj1.x < obj2.x + obj2.width && obj1.x + obj1.width > obj2.x && obj1.y < obj2.y + obj2.height && obj1.y + obj1.height > obj2.y;
}
function getWorldRect(obj) {
  let { x = 0, y = 0, width, height } = obj.world || obj;
  if (obj.mapwidth) {
    width = obj.mapwidth;
    height = obj.mapheight;
  }
  if (obj.anchor) {
    x -= width * obj.anchor.x;
    y -= height * obj.anchor.y;
  }
  if (width < 0) {
    x += width;
    width *= -1;
  }
  if (height < 0) {
    y += height;
    height *= -1;
  }
  return {
    x,
    y,
    width,
    height
  };
}
function depthSort(obj1, obj2, prop = "y") {
  [obj1, obj2] = [obj1, obj2].map(getWorldRect);
  return obj1[prop] - obj2[prop];
}
var Vector = class {
  constructor(x = 0, y = 0, vec = {}) {
    this.x = x;
    this.y = y;
    if (vec._c) {
      this.clamp(vec._a, vec._b, vec._d, vec._e);
      this.x = x;
      this.y = y;
    }
  }
  add(vec) {
    return new Vector(this.x + vec.x, this.y + vec.y, this);
  }
  subtract(vec) {
    return new Vector(this.x - vec.x, this.y - vec.y, this);
  }
  scale(value) {
    return new Vector(this.x * value, this.y * value);
  }
  normalize(length = this.length()) {
    return new Vector(this.x / length, this.y / length);
  }
  dot(vec) {
    return this.x * vec.x + this.y * vec.y;
  }
  length() {
    return Math.hypot(this.x, this.y);
  }
  distance(vec) {
    return Math.hypot(this.x - vec.x, this.y - vec.y);
  }
  angle(vec) {
    return Math.acos(this.dot(vec) / (this.length() * vec.length()));
  }
  clamp(xMin, yMin, xMax, yMax) {
    this._c = true;
    this._a = xMin;
    this._b = yMin;
    this._d = xMax;
    this._e = yMax;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  set x(value) {
    this._x = this._c ? clamp(this._a, this._d, value) : value;
  }
  set y(value) {
    this._y = this._c ? clamp(this._b, this._e, value) : value;
  }
};
function factory$a() {
  return new Vector(...arguments);
}
var Updatable = class {
  constructor(properties) {
    return this.init(properties);
  }
  init(properties = {}) {
    this.position = factory$a();
    this.velocity = factory$a();
    this.acceleration = factory$a();
    this.ttl = Infinity;
    Object.assign(this, properties);
  }
  update(dt) {
    this.advance(dt);
  }
  advance(dt) {
    let acceleration = this.acceleration;
    if (dt) {
      acceleration = acceleration.scale(dt);
    }
    this.velocity = this.velocity.add(acceleration);
    let velocity = this.velocity;
    if (dt) {
      velocity = velocity.scale(dt);
    }
    this.position = this.position.add(velocity);
    this._pc();
    this.ttl--;
  }
  get dx() {
    return this.velocity.x;
  }
  get dy() {
    return this.velocity.y;
  }
  set dx(value) {
    this.velocity.x = value;
  }
  set dy(value) {
    this.velocity.y = value;
  }
  get ddx() {
    return this.acceleration.x;
  }
  get ddy() {
    return this.acceleration.y;
  }
  set ddx(value) {
    this.acceleration.x = value;
  }
  set ddy(value) {
    this.acceleration.y = value;
  }
  isAlive() {
    return this.ttl > 0;
  }
  _pc() {
  }
};
var GameObject = class extends Updatable {
  init({
    width = 0,
    height = 0,
    context: context2 = getContext(),
    render = this.draw,
    update = this.advance,
    children = [],
    anchor = { x: 0, y: 0 },
    opacity = 1,
    rotation = 0,
    scaleX = 1,
    scaleY = 1,
    ...props
  } = {}) {
    this._c = [];
    super.init({
      width,
      height,
      context: context2,
      anchor,
      opacity,
      rotation,
      scaleX,
      scaleY,
      ...props
    });
    this._di = true;
    this._uw();
    this.addChild(children);
    this._rf = render;
    this._uf = update;
  }
  update(dt) {
    this._uf(dt);
    this.children.map((child) => child.update && child.update(dt));
  }
  render() {
    let context2 = this.context;
    context2.save();
    if (this.x || this.y) {
      context2.translate(this.x, this.y);
    }
    if (this.rotation) {
      context2.rotate(this.rotation);
    }
    if (this.scaleX != 1 || this.scaleY != 1) {
      context2.scale(this.scaleX, this.scaleY);
    }
    let anchorX = -this.width * this.anchor.x;
    let anchorY = -this.height * this.anchor.y;
    if (anchorX || anchorY) {
      context2.translate(anchorX, anchorY);
    }
    this.context.globalAlpha = this.opacity;
    this._rf();
    if (anchorX || anchorY) {
      context2.translate(-anchorX, -anchorY);
    }
    let children = this.children;
    children.map((child) => child.render && child.render());
    context2.restore();
  }
  draw() {
  }
  _pc() {
    this._uw();
    this.children.map((child) => child._pc());
  }
  get x() {
    return this.position.x;
  }
  get y() {
    return this.position.y;
  }
  set x(value) {
    this.position.x = value;
    this._pc();
  }
  set y(value) {
    this.position.y = value;
    this._pc();
  }
  get width() {
    return this._w;
  }
  set width(value) {
    this._w = value;
    this._pc();
  }
  get height() {
    return this._h;
  }
  set height(value) {
    this._h = value;
    this._pc();
  }
  _uw() {
    if (!this._di)
      return;
    let {
      _wx = 0,
      _wy = 0,
      _wo = 1,
      _wr = 0,
      _wsx = 1,
      _wsy = 1
    } = this.parent || {};
    this._wx = this.x;
    this._wy = this.y;
    this._ww = this.width;
    this._wh = this.height;
    this._wo = _wo * this.opacity;
    this._wsx = _wsx * this.scaleX;
    this._wsy = _wsy * this.scaleY;
    this._wx = this._wx * _wsx;
    this._wy = this._wy * _wsy;
    this._ww = this.width * this._wsx;
    this._wh = this.height * this._wsy;
    this._wr = _wr + this.rotation;
    let { x, y } = rotatePoint({ x: this._wx, y: this._wy }, _wr);
    this._wx = x;
    this._wy = y;
    this._wx += _wx;
    this._wy += _wy;
  }
  get world() {
    return {
      x: this._wx,
      y: this._wy,
      width: this._ww,
      height: this._wh,
      opacity: this._wo,
      rotation: this._wr,
      scaleX: this._wsx,
      scaleY: this._wsy
    };
  }
  set children(value) {
    this.removeChild(this._c);
    this.addChild(value);
  }
  get children() {
    return this._c;
  }
  addChild(...objects) {
    objects.flat().map((child) => {
      this.children.push(child);
      child.parent = this;
      child._pc = child._pc || noop;
      child._pc();
    });
  }
  removeChild(...objects) {
    objects.flat().map((child) => {
      if (removeFromArray(this.children, child)) {
        child.parent = null;
        child._pc();
      }
    });
  }
  get opacity() {
    return this._opa;
  }
  set opacity(value) {
    this._opa = value;
    this._pc();
  }
  get rotation() {
    return this._rot;
  }
  set rotation(value) {
    this._rot = value;
    this._pc();
  }
  setScale(x, y = x) {
    this.scaleX = x;
    this.scaleY = y;
  }
  get scaleX() {
    return this._scx;
  }
  set scaleX(value) {
    this._scx = value;
    this._pc();
  }
  get scaleY() {
    return this._scy;
  }
  set scaleY(value) {
    this._scy = value;
    this._pc();
  }
};
function factory$9() {
  return new GameObject(...arguments);
}
var Sprite = class extends GameObject {
  init({
    image,
    width = image ? image.width : void 0,
    height = image ? image.height : void 0,
    ...props
  } = {}) {
    super.init({
      image,
      width,
      height,
      ...props
    });
  }
  get animations() {
    return this._a;
  }
  set animations(value) {
    let prop, firstAnimation;
    this._a = {};
    for (prop in value) {
      this._a[prop] = value[prop].clone();
      firstAnimation = firstAnimation || this._a[prop];
    }
    this.currentAnimation = firstAnimation;
    this.width = this.width || firstAnimation.width;
    this.height = this.height || firstAnimation.height;
  }
  playAnimation(name) {
    this.currentAnimation = this.animations[name];
    if (!this.currentAnimation.loop) {
      this.currentAnimation.reset();
    }
  }
  advance(dt) {
    super.advance(dt);
    if (this.currentAnimation) {
      this.currentAnimation.update(dt);
    }
  }
  draw() {
    if (this.image) {
      this.context.drawImage(
        this.image,
        0,
        0,
        this.image.width,
        this.image.height
      );
    }
    if (this.currentAnimation) {
      this.currentAnimation.render({
        x: 0,
        y: 0,
        width: this.width,
        height: this.height,
        context: this.context
      });
    }
    if (this.color) {
      this.context.fillStyle = this.color;
      this.context.fillRect(0, 0, this.width, this.height);
    }
  }
};
function factory$8() {
  return new Sprite(...arguments);
}
var fontSizeRegex = /(\d+)(\w+)/;
function parseFont(font) {
  let match = font.match(fontSizeRegex);
  let size = +match[1];
  let unit = match[2];
  let computed = size;
  return {
    size,
    unit,
    computed
  };
}
var Text = class extends GameObject {
  init({
    text = "",
    textAlign = "",
    lineHeight = 1,
    font = getContext().font,
    ...props
  } = {}) {
    text = "" + text;
    super.init({
      text,
      textAlign,
      lineHeight,
      font,
      ...props
    });
    this._p();
  }
  get width() {
    return this._w;
  }
  set width(value) {
    this._d = true;
    this._w = value;
    this._fw = value;
  }
  get text() {
    return this._t;
  }
  set text(value) {
    this._d = true;
    this._t = "" + value;
  }
  get font() {
    return this._f;
  }
  set font(value) {
    this._d = true;
    this._f = value;
    this._fs = parseFont(value).computed;
  }
  get lineHeight() {
    return this._lh;
  }
  set lineHeight(value) {
    this._d = true;
    this._lh = value;
  }
  render() {
    if (this._d) {
      this._p();
    }
    super.render();
  }
  _p() {
    this._s = [];
    this._d = false;
    let context2 = this.context;
    context2.font = this.font;
    if (!this._s.length && this._fw) {
      let parts = this.text.split(" ");
      let start = 0;
      let i = 2;
      for (; i <= parts.length; i++) {
        let str = parts.slice(start, i).join(" ");
        let width = context2.measureText(str).width;
        if (width > this._fw) {
          this._s.push(parts.slice(start, i - 1).join(" "));
          start = i - 1;
        }
      }
      this._s.push(parts.slice(start, i).join(" "));
    }
    if (!this._s.length && this.text.includes("\n")) {
      let width = 0;
      this.text.split("\n").map((str) => {
        this._s.push(str);
        width = Math.max(width, context2.measureText(str).width);
      });
      this._w = this._fw || width;
    }
    if (!this._s.length) {
      this._s.push(this.text);
      this._w = this._fw || context2.measureText(this.text).width;
    }
    this.height = this._fs + (this._s.length - 1) * this._fs * this.lineHeight;
    this._uw();
  }
  draw() {
    let alignX = 0;
    let textAlign = this.textAlign;
    let context2 = this.context;
    textAlign = this.textAlign || (context2.canvas.dir == "rtl" ? "right" : "left");
    alignX = textAlign == "right" ? this.width : textAlign == "center" ? this.width / 2 | 0 : 0;
    this._s.map((str, index) => {
      context2.textBaseline = "top";
      context2.textAlign = textAlign;
      context2.fillStyle = this.color;
      context2.font = this.font;
      context2.fillText(
        str,
        alignX,
        this._fs * this.lineHeight * index
      );
    });
  }
};
function factory$7() {
  return new Text(...arguments);
}
var pointers = /* @__PURE__ */ new WeakMap();
var callbacks$1 = {};
var pressedButtons = {};
var pointerMap = {
  0: "left",
  1: "middle",
  2: "right"
};
function getPointer(canvas = getCanvas()) {
  return pointers.get(canvas);
}
function circleRectCollision(object, pointer) {
  let { x, y, width, height } = getWorldRect(object);
  do {
    x -= object.sx || 0;
    y -= object.sy || 0;
  } while (object = object.parent);
  let dx = pointer.x - Math.max(x, Math.min(pointer.x, x + width));
  let dy = pointer.y - Math.max(y, Math.min(pointer.y, y + height));
  return dx * dx + dy * dy < pointer.radius * pointer.radius;
}
function getCurrentObject(pointer) {
  let renderedObjects = pointer._lf.length ? pointer._lf : pointer._cf;
  for (let i = renderedObjects.length - 1; i >= 0; i--) {
    let object = renderedObjects[i];
    let collides2 = object.collidesWithPointer ? object.collidesWithPointer(pointer) : circleRectCollision(object, pointer);
    if (collides2) {
      return object;
    }
  }
}
function getPropValue(style, value) {
  return parseFloat(style.getPropertyValue(value)) || 0;
}
function getCanvasOffset(pointer) {
  let { canvas, _s } = pointer;
  let rect = canvas.getBoundingClientRect();
  let transform = _s.transform != "none" ? _s.transform.replace("matrix(", "").split(",") : [1, 1, 1, 1];
  let transformScaleX = parseFloat(transform[0]);
  let transformScaleY = parseFloat(transform[3]);
  let borderWidth = (getPropValue(_s, "border-left-width") + getPropValue(_s, "border-right-width")) * transformScaleX;
  let borderHeight = (getPropValue(_s, "border-top-width") + getPropValue(_s, "border-bottom-width")) * transformScaleY;
  let paddingWidth = (getPropValue(_s, "padding-left") + getPropValue(_s, "padding-right")) * transformScaleX;
  let paddingHeight = (getPropValue(_s, "padding-top") + getPropValue(_s, "padding-bottom")) * transformScaleY;
  return {
    scaleX: (rect.width - borderWidth - paddingWidth) / canvas.width,
    scaleY: (rect.height - borderHeight - paddingHeight) / canvas.height,
    offsetX: rect.left + (getPropValue(_s, "border-left-width") + getPropValue(_s, "padding-left")) * transformScaleX,
    offsetY: rect.top + (getPropValue(_s, "border-top-width") + getPropValue(_s, "padding-top")) * transformScaleY
  };
}
function pointerDownHandler(evt) {
  let button = evt.button != null ? pointerMap[evt.button] : "left";
  pressedButtons[button] = true;
  pointerHandler(evt, "onDown");
}
function pointerUpHandler(evt) {
  let button = evt.button != null ? pointerMap[evt.button] : "left";
  pressedButtons[button] = false;
  pointerHandler(evt, "onUp");
}
function mouseMoveHandler(evt) {
  pointerHandler(evt, "onOver");
}
function blurEventHandler$2(evt) {
  let pointer = pointers.get(evt.target);
  pointer._oo = null;
  pressedButtons = {};
}
function callCallback(pointer, eventName, evt) {
  let object = getCurrentObject(pointer);
  if (object && object[eventName]) {
    object[eventName](evt);
  }
  if (callbacks$1[eventName]) {
    callbacks$1[eventName](evt, object);
  }
  if (eventName == "onOver") {
    if (object != pointer._oo && pointer._oo && pointer._oo.onOut) {
      pointer._oo.onOut(evt);
    }
    pointer._oo = object;
  }
}
function pointerHandler(evt, eventName) {
  evt.preventDefault();
  let canvas = evt.target;
  let pointer = pointers.get(canvas);
  let { scaleX, scaleY, offsetX, offsetY } = getCanvasOffset(pointer);
  let isTouchEvent = evt.type.includes("touch");
  if (isTouchEvent) {
    Array.from(evt.touches).map(
      ({ clientX, clientY, identifier }) => {
        let touch = pointer.touches[identifier];
        if (!touch) {
          touch = pointer.touches[identifier] = {
            start: {
              x: (clientX - offsetX) / scaleX,
              y: (clientY - offsetY) / scaleY
            }
          };
          pointer.touches.length++;
        }
        touch.changed = false;
      }
    );
    Array.from(evt.changedTouches).map(
      ({ clientX, clientY, identifier }) => {
        let touch = pointer.touches[identifier];
        touch.changed = true;
        touch.x = pointer.x = (clientX - offsetX) / scaleX;
        touch.y = pointer.y = (clientY - offsetY) / scaleY;
        callCallback(pointer, eventName, evt);
        emit("touchChanged", evt, pointer.touches);
        if (eventName == "onUp") {
          delete pointer.touches[identifier];
          pointer.touches.length--;
          if (!pointer.touches.length) {
            emit("touchEnd");
          }
        }
      }
    );
  } else {
    pointer.x = (evt.clientX - offsetX) / scaleX;
    pointer.y = (evt.clientY - offsetY) / scaleY;
    callCallback(pointer, eventName, evt);
  }
}
function initPointer({
  radius = 5,
  canvas = getCanvas()
} = {}) {
  let pointer = pointers.get(canvas);
  if (!pointer) {
    let style = window.getComputedStyle(canvas);
    pointer = {
      x: 0,
      y: 0,
      radius,
      touches: { length: 0 },
      canvas,
      _cf: [],
      _lf: [],
      _o: [],
      _oo: null,
      _s: style
    };
    pointers.set(canvas, pointer);
  }
  canvas.addEventListener("mousedown", pointerDownHandler);
  canvas.addEventListener("touchstart", pointerDownHandler);
  canvas.addEventListener("mouseup", pointerUpHandler);
  canvas.addEventListener("touchend", pointerUpHandler);
  canvas.addEventListener("touchcancel", pointerUpHandler);
  canvas.addEventListener("blur", blurEventHandler$2);
  canvas.addEventListener("mousemove", mouseMoveHandler);
  canvas.addEventListener("touchmove", mouseMoveHandler);
  if (!pointer._t) {
    pointer._t = true;
    on("tick", () => {
      pointer._lf.length = 0;
      pointer._cf.map((object) => {
        pointer._lf.push(object);
      });
      pointer._cf.length = 0;
    });
  }
  return pointer;
}
function track(...objects) {
  objects.flat().map((object) => {
    let canvas = object.context ? object.context.canvas : getCanvas();
    let pointer = pointers.get(canvas);
    if (!pointer) {
      throw new ReferenceError(
        "Pointer events not initialized for the objects canvas"
      );
    }
    if (!object._r) {
      object._r = object.render;
      object.render = function() {
        pointer._cf.push(this);
        this._r();
      };
      pointer._o.push(object);
    }
  });
}
function untrack(...objects) {
  objects.flat().map((object) => {
    let canvas = object.context ? object.context.canvas : getCanvas();
    let pointer = pointers.get(canvas);
    if (!pointer) {
      throw new ReferenceError(
        "Pointer events not initialized for the objects canvas"
      );
    }
    object.render = object._r;
    object._r = 0;
    removeFromArray(pointer._o, object);
  });
}
function pointerOver(object) {
  let canvas = object.context ? object.context.canvas : getCanvas();
  let pointer = pointers.get(canvas);
  if (!pointer) {
    throw new ReferenceError(
      "Pointer events not initialized for the objects canvas"
    );
  }
  return pointer._o.includes(object) && getCurrentObject(pointer) === object;
}
function onPointer(direction, callback) {
  let eventName = direction[0].toUpperCase() + direction.substr(1);
  callbacks$1["on" + eventName] = callback;
}
function offPointer(direction) {
  let eventName = direction[0].toUpperCase() + direction.substr(1);
  callbacks$1["on" + eventName] = 0;
}
function pointerPressed(button) {
  return !!pressedButtons[button];
}
var Button = class extends Sprite {
  init({
    padX = 0,
    padY = 0,
    text,
    disabled = false,
    onDown,
    onUp,
    ...props
  } = {}) {
    super.init({
      padX,
      padY,
      ...props
    });
    this.textNode = factory$7({
      ...text,
      context: this.context
    });
    if (!this.width) {
      this.width = this.textNode.width;
      this.height = this.textNode.height;
    }
    track(this);
    this.addChild(this.textNode);
    this._od = onDown || noop;
    this._ou = onUp || noop;
    let button = this._dn = document.createElement("button");
    button.style = srOnlyStyle;
    button.textContent = this.text;
    if (disabled) {
      this.disable();
    }
    button.addEventListener("focus", () => this.focus());
    button.addEventListener("blur", () => this.blur());
    button.addEventListener("keydown", (evt) => this._kd(evt));
    button.addEventListener("keyup", (evt) => this._ku(evt));
    addToDom(button, this.context.canvas);
    this._uw();
    this._p();
  }
  get text() {
    return this.textNode.text;
  }
  set text(value) {
    this._d = true;
    this.textNode.text = value;
  }
  destroy() {
    this._dn.remove();
  }
  _p() {
    if (this.text != this._dn.textContent) {
      this._dn.textContent = this.text;
    }
    this.textNode._p();
    let width = this.textNode.width + this.padX * 2;
    let height = this.textNode.height + this.padY * 2;
    this.width = Math.max(width, this.width);
    this.height = Math.max(height, this.height);
    this._uw();
  }
  render() {
    if (this._d) {
      this._p();
    }
    super.render();
  }
  enable() {
    this.disabled = this._dn.disabled = false;
    this.onEnable();
  }
  disable() {
    this.disabled = this._dn.disabled = true;
    this.onDisable();
  }
  focus() {
    if (!this.disabled) {
      this.focused = true;
      if (document.activeElement != this._dn)
        this._dn.focus();
      this.onFocus();
    }
  }
  blur() {
    this.focused = false;
    if (document.activeElement == this._dn)
      this._dn.blur();
    this.onBlur();
  }
  onOver() {
    if (!this.disabled) {
      this.hovered = true;
    }
  }
  onOut() {
    this.hovered = false;
  }
  onEnable() {
  }
  onDisable() {
  }
  onFocus() {
  }
  onBlur() {
  }
  onDown() {
    if (!this.disabled) {
      this.pressed = true;
      this._od();
    }
  }
  onUp() {
    if (!this.disabled) {
      this.pressed = false;
      this._ou();
    }
  }
  _kd(evt) {
    if (evt.code == "Enter" || evt.code == "Space") {
      this.onDown();
    }
  }
  _ku(evt) {
    if (evt.code == "Enter" || evt.code == "Space") {
      this.onUp();
    }
  }
};
function factory$6() {
  return new Button(...arguments);
}
function clear(context2) {
  let canvas = context2.canvas;
  context2.clearRect(0, 0, canvas.width, canvas.height);
}
function GameLoop({
  fps = 60,
  clearCanvas = true,
  update = noop,
  render,
  context: context2 = getContext(),
  blur = false
} = {}) {
  if (!render) {
    throw Error("You must provide a render() function");
  }
  let accumulator = 0;
  let delta = 1e3 / fps;
  let step = 1 / fps;
  let clearFn = clearCanvas ? clear : noop;
  let last, rAF, now, dt, loop;
  let focused = true;
  if (!blur) {
    window.addEventListener("focus", () => {
      focused = true;
    });
    window.addEventListener("blur", () => {
      focused = false;
    });
  }
  function frame() {
    rAF = requestAnimationFrame(frame);
    if (!focused)
      return;
    now = performance.now();
    dt = now - last;
    last = now;
    if (dt > 1e3) {
      return;
    }
    emit("tick");
    accumulator += dt;
    while (accumulator >= delta) {
      loop.update(step);
      accumulator -= delta;
    }
    clearFn(context2);
    loop.render();
  }
  loop = {
    update,
    render,
    isStopped: true,
    start() {
      last = performance.now();
      this.isStopped = false;
      requestAnimationFrame(frame);
    },
    stop() {
      this.isStopped = true;
      cancelAnimationFrame(rAF);
    },
    _frame: frame,
    set _last(value) {
      last = value;
    }
  };
  return loop;
}
var gamepads = [];
var gamepaddownCallbacks = {};
var gamepadupCallbacks = {};
var gamepadMap = {
  0: "south",
  1: "east",
  2: "west",
  3: "north",
  4: "leftshoulder",
  5: "rightshoulder",
  6: "lefttrigger",
  7: "righttrigger",
  8: "select",
  9: "start",
  10: "leftstick",
  11: "rightstick",
  12: "dpadup",
  13: "dpaddown",
  14: "dpadleft",
  15: "dpadright"
};
function gamepadConnectedHandler(event) {
  gamepads[event.gamepad.index] = {
    pressedButtons: {},
    axes: {}
  };
}
function gamepadDisconnectedHandler(event) {
  delete gamepads[event.gamepad.index];
}
function blurEventHandler$1() {
  gamepads.map((gamepad) => {
    gamepad.pressedButtons = {};
    gamepad.axes = {};
  });
}
function updateGamepad() {
  let pads = navigator.getGamepads ? navigator.getGamepads() : navigator.webkitGetGamepads ? navigator.webkitGetGamepads : [];
  for (let i = 0; i < pads.length; i++) {
    let gamepad = pads[i];
    if (!gamepad) {
      continue;
    }
    gamepad.buttons.map((button, index) => {
      let buttonName = gamepadMap[index];
      let { pressed } = button;
      let { pressedButtons: pressedButtons2 } = gamepads[gamepad.index];
      let state = pressedButtons2[buttonName];
      if (!state && pressed) {
        [
          gamepaddownCallbacks[gamepad.index],
          gamepaddownCallbacks
        ].map((callback) => {
          var _a;
          (_a = callback == null ? void 0 : callback[buttonName]) == null ? void 0 : _a.call(callback, gamepad, button);
        });
      } else if (state && !pressed) {
        [gamepadupCallbacks[gamepad.index], gamepadupCallbacks].map(
          (callback) => {
            var _a;
            (_a = callback == null ? void 0 : callback[buttonName]) == null ? void 0 : _a.call(callback, gamepad, button);
          }
        );
      }
      pressedButtons2[buttonName] = pressed;
    });
    let { axes } = gamepads[gamepad.index];
    axes.leftstickx = gamepad.axes[0];
    axes.leftsticky = gamepad.axes[1];
    axes.rightstickx = gamepad.axes[2];
    axes.rightsticky = gamepad.axes[3];
  }
}
function initGamepad() {
  window.addEventListener(
    "gamepadconnected",
    gamepadConnectedHandler
  );
  window.addEventListener(
    "gamepaddisconnected",
    gamepadDisconnectedHandler
  );
  window.addEventListener("blur", blurEventHandler$1);
  on("tick", updateGamepad);
}
function onGamepad(buttons, callback, { gamepad, handler: handler2 = "gamepaddown" } = {}) {
  let callbacks2 = handler2 == "gamepaddown" ? gamepaddownCallbacks : gamepadupCallbacks;
  [].concat(buttons).map((button) => {
    if (isNaN(gamepad)) {
      callbacks2[button] = callback;
    } else {
      callbacks2[gamepad] = callbacks2[gamepad] || {};
      callbacks2[gamepad][button] = callback;
    }
  });
}
function offGamepad(buttons, { gamepad, handler: handler2 = "gamepaddown" } = {}) {
  let callbacks2 = handler2 == "gamepaddown" ? gamepaddownCallbacks : gamepadupCallbacks;
  [].concat(buttons).map((button) => {
    if (isNaN(gamepad)) {
      delete callbacks2[button];
    } else {
      callbacks2[gamepad] = callbacks2[gamepad] || {};
      delete callbacks2[gamepad][button];
    }
  });
}
function gamepadPressed(button, { gamepad } = {}) {
  if (isNaN(gamepad)) {
    return gamepads.some((pad) => pad.pressedButtons[button]);
  }
  if (gamepads[gamepad]) {
    return !!gamepads[gamepad].pressedButtons[button];
  }
  return false;
}
function gamepadAxis(name, gamepad) {
  var _a;
  return ((_a = gamepads[gamepad]) == null ? void 0 : _a.axes[name]) || 0;
}
var callbacks = {};
var currGesture;
var init = false;
var gestureMap = {
  swipe: {
    touches: 1,
    threshold: 10,
    touchend({ 0: touch }) {
      let x = touch.x - touch.start.x;
      let y = touch.y - touch.start.y;
      let absX = Math.abs(x);
      let absY = Math.abs(y);
      if (absX < this.threshold && absY < this.threshold)
        return;
      return absX > absY ? x < 0 ? "left" : "right" : y < 0 ? "up" : "down";
    }
  },
  pinch: {
    touches: 2,
    threshold: 2,
    touchstart({ 0: touch0, 1: touch1 }) {
      this.prevDist = Math.hypot(
        touch0.x - touch1.x,
        touch0.y - touch1.y
      );
    },
    touchmove({ 0: touch0, 1: touch1 }) {
      let dist = Math.hypot(touch0.x - touch1.x, touch0.y - touch1.y);
      if (Math.abs(dist - this.prevDist) < this.threshold)
        return;
      let dir = dist > this.prevDist ? "out" : "in";
      this.prevDist = dist;
      return dir;
    }
  }
};
function initGesture() {
  if (!init) {
    init = true;
    on("touchChanged", (evt, touches) => {
      Object.keys(gestureMap).map((name) => {
        var _a, _b;
        let gesture = gestureMap[name];
        let type;
        if ((!currGesture || currGesture == name) && touches.length == gesture.touches && [...Array(touches.length).keys()].every(
          (key) => touches[key]
        ) && (type = (_b = (_a = gesture[evt.type]) == null ? void 0 : _a.call(gesture, touches)) != null ? _b : "") && callbacks[name + type]) {
          currGesture = name;
          callbacks[name + type](evt, touches);
        }
      });
    });
    on("touchEnd", () => {
      currGesture = 0;
    });
  }
}
function onGesture(gestures, callback) {
  [].concat(gestures).map((gesture) => {
    callbacks[gesture] = callback;
  });
}
function offGesture(gestures) {
  [].concat(gestures).map((gesture) => {
    callbacks[gesture] = 0;
  });
}
var handler = {
  set(obj, prop, value) {
    if (!prop.startsWith("_")) {
      obj._d = true;
    }
    return Reflect.set(obj, prop, value);
  }
};
var alignment = {
  start(rtl) {
    return rtl ? 1 : 0;
  },
  center() {
    return 0.5;
  },
  end(rtl) {
    return rtl ? 0 : 1;
  }
};
var Grid = class extends GameObject {
  init({
    flow = "column",
    align = "start",
    justify = "start",
    colGap = 0,
    rowGap = 0,
    numCols = 1,
    dir = "",
    breakpoints = [],
    ...props
  } = {}) {
    super.init({
      flow,
      align,
      justify,
      colGap,
      rowGap,
      numCols,
      dir,
      breakpoints,
      ...props
    });
    this._p();
    return new Proxy(this, handler);
  }
  addChild(child) {
    this._d = true;
    super.addChild(child);
  }
  removeChild(child) {
    this._d = true;
    super.removeChild(child);
  }
  render() {
    if (this._d) {
      this._p();
    }
    super.render();
  }
  destroy() {
    this.children.map((child) => child.destroy && child.destroy());
  }
  _p() {
    this._d = false;
    this.breakpoints.map((breakpoint) => {
      if (breakpoint.metric.call(this) && this._b !== breakpoint) {
        this._b = breakpoint;
        breakpoint.callback.call(this);
      }
    });
    let grid = this._g = [];
    let colWidths = this._cw = [];
    let rowHeights = this._rh = [];
    let children = this.children;
    let numCols = this._nc = this.flow == "column" ? 1 : this.flow == "row" ? children.length : this.numCols;
    let row = 0;
    let col = 0;
    for (let i = 0, child; child = children[i]; i++) {
      grid[row] = grid[row] || [];
      if (child._p) {
        child._p();
      }
      let { width, height } = child.world || child;
      rowHeights[row] = Math.max(rowHeights[row] || 0, height);
      let spans = child.colSpan || 1;
      let colSpan = spans;
      do {
        colWidths[col] = Math.max(
          colWidths[col] || 0,
          width / colSpan
        );
        grid[row][col] = child;
      } while (col++ <= numCols && --spans);
      if (col >= numCols) {
        col = 0;
        row++;
      }
    }
    while (col > 0 && col < numCols) {
      grid[row][col++] = false;
    }
    let numRows = grid.length;
    let colGap = [].concat(this.colGap);
    let rowGap = [].concat(this.rowGap);
    this._w = colWidths.reduce((acc, width) => acc += width, 0);
    for (let i = 0; i < numCols - 1; i++) {
      this._w += colGap[i % colGap.length];
    }
    this._h = rowHeights.reduce((acc, height) => acc += height, 0);
    for (let i = 0; i < numRows - 1; i++) {
      this._h += rowGap[i % rowGap.length];
    }
    this._uw();
    let dir = this.context.canvas.dir;
    let rtl = dir == "rtl" && !this.dir || this.dir == "rtl";
    this._rtl = rtl;
    if (rtl) {
      this._g = grid.map((row2) => row2.reverse());
      this._cw = colWidths.reverse();
      colGap = colGap.reverse();
    }
    let topLeftY = -this.anchor.y * this.height;
    let rendered = [];
    let justify = [].concat(this.justify);
    let align = [].concat(this.align);
    this._g.map((gridRow, row2) => {
      let topLeftX = -this.anchor.x * this.width;
      gridRow.map((child, col2) => {
        if (child && !rendered.includes(child)) {
          rendered.push(child);
          let justifySelf = alignment[child.justifySelf || justify[col2 % justify.length]](this._rtl);
          let alignSelf = alignment[child.alignSelf || align[row2 % align.length]]();
          let colSpan = child.colSpan || 1;
          let colWidth = colWidths[col2];
          if (colSpan > 1 && col2 + colSpan <= this._nc) {
            for (let i = 1; i < colSpan; i++) {
              colWidth += colWidths[col2 + i] + colGap[(col2 + i) % colGap.length];
            }
          }
          let pointX = colWidth * justifySelf;
          let pointY = rowHeights[row2] * alignSelf;
          let anchorX = 0;
          let anchorY = 0;
          let { width, height } = child.world || child;
          if (child.anchor) {
            anchorX = child.anchor.x;
            anchorY = child.anchor.y;
          }
          if (justifySelf == 0) {
            pointX = pointX + width * anchorX;
          } else if (justifySelf == 0.5) {
            let sign = anchorX < 0.5 ? -1 : anchorX == 0.5 ? 0 : 1;
            pointX = pointX + sign * width * justifySelf;
          } else {
            pointX = pointX - width * (1 - anchorX);
          }
          if (alignSelf == 0) {
            pointY = pointY + height * anchorY;
          } else if (alignSelf == 0.5) {
            let sign = anchorY < 0.5 ? -1 : anchorY == 0.5 ? 0 : 1;
            pointY = pointY + sign * height * alignSelf;
          } else {
            pointY = pointY - height * (1 - anchorY);
          }
          child.x = topLeftX + pointX;
          child.y = topLeftY + pointY;
        }
        topLeftX += colWidths[col2] + colGap[col2 % colGap.length];
      });
      topLeftY += rowHeights[row2] + rowGap[row2 % rowGap.length];
    });
  }
};
function factory$5() {
  return new Grid(...arguments);
}
var keydownCallbacks = {};
var keyupCallbacks = {};
var pressedKeys = {};
var keyMap = {
  Enter: "enter",
  Escape: "esc",
  Space: "space",
  ArrowLeft: "arrowleft",
  ArrowUp: "arrowup",
  ArrowRight: "arrowright",
  ArrowDown: "arrowdown"
};
function call(callback = noop, evt) {
  if (callback._pd) {
    evt.preventDefault();
  }
  callback(evt);
}
function keydownEventHandler(evt) {
  let key = keyMap[evt.code];
  let callback = keydownCallbacks[key];
  pressedKeys[key] = true;
  call(callback, evt);
}
function keyupEventHandler(evt) {
  let key = keyMap[evt.code];
  let callback = keyupCallbacks[key];
  pressedKeys[key] = false;
  call(callback, evt);
}
function blurEventHandler() {
  pressedKeys = {};
}
function initKeys() {
  let i;
  for (i = 0; i < 26; i++) {
    keyMap["Key" + String.fromCharCode(i + 65)] = String.fromCharCode(
      i + 97
    );
  }
  for (i = 0; i < 10; i++) {
    keyMap["Digit" + i] = keyMap["Numpad" + i] = "" + i;
  }
  window.addEventListener("keydown", keydownEventHandler);
  window.addEventListener("keyup", keyupEventHandler);
  window.addEventListener("blur", blurEventHandler);
}
function onKey(keys, callback, { handler: handler2 = "keydown", preventDefault = true } = {}) {
  let callbacks2 = handler2 == "keydown" ? keydownCallbacks : keyupCallbacks;
  callback._pd = preventDefault;
  [].concat(keys).map((key) => callbacks2[key] = callback);
}
function offKey(keys, { handler: handler2 = "keydown" } = {}) {
  let callbacks2 = handler2 == "keydown" ? keydownCallbacks : keyupCallbacks;
  [].concat(keys).map((key) => delete callbacks2[key]);
}
function keyPressed(key) {
  return !!pressedKeys[key];
}
function contains(value, map) {
  return Object.values(map).includes(value);
}
function isGesture(value) {
  return Object.keys(gestureMap).some((name) => value.startsWith(name));
}
function initInput(options = {}) {
  initKeys();
  let pointer = initPointer(options.pointer);
  initGesture();
  initGamepad();
  return { pointer };
}
function onInput(inputs, callback, { gamepad, key } = {}) {
  [].concat(inputs).map((input) => {
    if (contains(input, gamepadMap)) {
      onGamepad(input, callback, gamepad);
    } else if (isGesture(input)) {
      onGesture(input, callback);
    } else if (contains(input, keyMap)) {
      onKey(input, callback, key);
    } else if (["down", "up"].includes(input)) {
      onPointer(input, callback);
    } else {
      throw new TypeError(`"${input}" is not a valid input name`);
    }
  });
}
function offInput(inputs, { gamepad, key } = {}) {
  [].concat(inputs).map((input) => {
    if (contains(input, gamepadMap)) {
      offGamepad(input, gamepad);
    } else if (isGesture(input)) {
      offGesture(input);
    } else if (contains(input, keyMap)) {
      offKey(input, key);
    } else if (["down", "up"].includes(input)) {
      offPointer(input);
    }
  });
}
function getMethod(methodName) {
  let methodTitle = methodName.substr(methodName.search(/[A-Z]/));
  return methodTitle[0].toLowerCase() + methodTitle.substr(1);
}
function registerPlugin(kontraObj, pluginObj) {
  let objectProto = kontraObj.prototype;
  if (!objectProto)
    return;
  if (!objectProto._inc) {
    objectProto._inc = {};
    objectProto._bInc = function beforePlugins(context2, method, ...args) {
      return this._inc[method].before.reduce((acc, fn) => {
        let newArgs = fn(context2, ...acc);
        return newArgs ? newArgs : acc;
      }, args);
    };
    objectProto._aInc = function afterPlugins(context2, method, result, ...args) {
      return this._inc[method].after.reduce((acc, fn) => {
        let newResult = fn(context2, acc, ...args);
        return newResult ? newResult : acc;
      }, result);
    };
  }
  Object.getOwnPropertyNames(pluginObj).map((methodName) => {
    let method = getMethod(methodName);
    if (!objectProto[method])
      return;
    if (!objectProto["_o" + method]) {
      objectProto["_o" + method] = objectProto[method];
      objectProto[method] = function interceptedFn(...args) {
        let alteredArgs = this._bInc(this, method, ...args);
        let result = objectProto["_o" + method].call(
          this,
          ...alteredArgs
        );
        return this._aInc(this, method, result, ...args);
      };
    }
    if (!objectProto._inc[method]) {
      objectProto._inc[method] = {
        before: [],
        after: []
      };
    }
    if (methodName.startsWith("before")) {
      objectProto._inc[method].before.push(pluginObj[methodName]);
    } else if (methodName.startsWith("after")) {
      objectProto._inc[method].after.push(pluginObj[methodName]);
    }
  });
}
function unregisterPlugin(kontraObj, pluginObj) {
  let objectProto = kontraObj.prototype;
  if (!objectProto || !objectProto._inc)
    return;
  Object.getOwnPropertyNames(pluginObj).map((methodName) => {
    let method = getMethod(methodName);
    if (methodName.startsWith("before")) {
      removeFromArray(
        objectProto._inc[method].before,
        pluginObj[methodName]
      );
    } else if (methodName.startsWith("after")) {
      removeFromArray(
        objectProto._inc[method].after,
        pluginObj[methodName]
      );
    }
  });
}
function extendObject(kontraObj, properties) {
  let objectProto = kontraObj.prototype;
  if (!objectProto)
    return;
  Object.getOwnPropertyNames(properties).map((prop) => {
    if (!objectProto[prop]) {
      objectProto[prop] = properties[prop];
    }
  });
}
var Pool = class {
  constructor({ create, maxSize = 1024 } = {}) {
    let obj;
    if (!create || !(obj = create()) || !(obj.update && obj.init && obj.isAlive && obj.render)) {
      throw Error(
        "Must provide create() function which returns an object with init(), update(), render(), and isAlive() functions"
      );
    }
    this._c = create;
    this.objects = [create()];
    this.size = 0;
    this.maxSize = maxSize;
  }
  get(properties = {}) {
    if (this.size == this.objects.length) {
      if (this.size == this.maxSize) {
        return;
      }
      for (let i = 0; i < this.size && this.objects.length < this.maxSize; i++) {
        this.objects.push(this._c());
      }
    }
    let obj = this.objects[this.size];
    this.size++;
    obj.init(properties);
    return obj;
  }
  getAliveObjects() {
    return this.objects.slice(0, this.size);
  }
  clear() {
    this.size = this.objects.length = 0;
    this.objects.push(this._c());
  }
  update(dt) {
    let obj;
    let doSort = false;
    for (let i = this.size; i--; ) {
      obj = this.objects[i];
      obj.update(dt);
      if (!obj.isAlive()) {
        doSort = true;
        this.size--;
      }
    }
    if (doSort) {
      this.objects.sort((a, b) => b.isAlive() - a.isAlive());
    }
  }
  render() {
    for (let i = this.size; i--; ) {
      this.objects[i].render();
    }
  }
};
function factory$4() {
  return new Pool(...arguments);
}
function getIndices(object, bounds) {
  let indices = [];
  let verticalMidpoint = bounds.x + bounds.width / 2;
  let horizontalMidpoint = bounds.y + bounds.height / 2;
  let intersectsTopQuadrants = object.y < horizontalMidpoint;
  let intersectsBottomQuadrants = object.y + object.height >= horizontalMidpoint;
  if (object.x < verticalMidpoint) {
    if (intersectsTopQuadrants) {
      indices.push(0);
    }
    if (intersectsBottomQuadrants) {
      indices.push(2);
    }
  }
  if (object.x + object.width >= verticalMidpoint) {
    if (intersectsTopQuadrants) {
      indices.push(1);
    }
    if (intersectsBottomQuadrants) {
      indices.push(3);
    }
  }
  return indices;
}
var Quadtree = class {
  constructor({ maxDepth = 3, maxObjects = 25, bounds } = {}) {
    this.maxDepth = maxDepth;
    this.maxObjects = maxObjects;
    let canvas = getCanvas();
    this.bounds = bounds || {
      x: 0,
      y: 0,
      width: canvas.width,
      height: canvas.height
    };
    this._b = false;
    this._d = 0;
    this._o = [];
    this._s = [];
    this._p = null;
  }
  clear() {
    this._s.map((subnode) => {
      subnode.clear();
    });
    this._b = false;
    this._o.length = 0;
  }
  get(object) {
    let objects = /* @__PURE__ */ new Set();
    while (this._s.length && this._b) {
      getIndices(object, this.bounds).map((index) => {
        this._s[index].get(object).map((obj) => objects.add(obj));
      });
      return Array.from(objects);
    }
    return this._o.filter((obj) => obj !== object);
  }
  add(...objects) {
    objects.flat().map((object) => {
      if (this._b) {
        this._a(object);
        return;
      }
      this._o.push(object);
      if (this._o.length > this.maxObjects && this._d < this.maxDepth) {
        this._sp();
        this._o.map((obj) => this._a(obj));
        this._o.length = 0;
      }
    });
  }
  _a(object) {
    getIndices(object, this.bounds).map((index) => {
      this._s[index].add(object);
    });
  }
  _sp(subWidth, subHeight, i) {
    this._b = true;
    if (this._s.length) {
      return;
    }
    subWidth = this.bounds.width / 2 | 0;
    subHeight = this.bounds.height / 2 | 0;
    for (i = 0; i < 4; i++) {
      this._s[i] = new Quadtree({
        bounds: {
          x: this.bounds.x + (i % 2 == 1 ? subWidth : 0),
          y: this.bounds.y + (i >= 2 ? subHeight : 0),
          width: subWidth,
          height: subHeight
        },
        maxDepth: this.maxDepth,
        maxObjects: this.maxObjects
      });
      this._s[i]._d = this._d + 1;
    }
  }
};
function factory$3() {
  return new Quadtree(...arguments);
}
function getAllNodes(object) {
  let nodes = [];
  if (object._dn) {
    nodes.push(object._dn);
  } else if (object.children) {
    object.children.map((child) => {
      nodes = nodes.concat(getAllNodes(child));
    });
  }
  return nodes;
}
var Scene = class {
  constructor({
    id,
    name = id,
    objects = [],
    context: context2 = getContext(),
    cullObjects = true,
    cullFunction = collides,
    sortFunction,
    ...props
  }) {
    this._o = [];
    let canvas = context2.canvas;
    let section = this._dn = document.createElement("section");
    section.tabIndex = -1;
    section.style = srOnlyStyle;
    section.id = id;
    section.setAttribute("aria-label", name);
    addToDom(section, canvas);
    Object.assign(this, {
      id,
      name,
      context: context2,
      cullObjects,
      cullFunction,
      sortFunction,
      ...props
    });
    let { width, height } = canvas;
    let x = width / 2;
    let y = height / 2;
    this.camera = factory$9({
      x,
      y,
      width,
      height,
      context: context2,
      centerX: x,
      centerY: y,
      anchor: { x: 0.5, y: 0.5 },
      render: this._rf.bind(this)
    });
    this.add(objects);
  }
  set objects(value) {
    this.remove(this._o);
    this.add(value);
  }
  get objects() {
    return this._o;
  }
  add(...objects) {
    objects.flat().map((object) => {
      this._o.push(object);
      getAllNodes(object).map((node) => {
        this._dn.appendChild(node);
      });
    });
  }
  remove(...objects) {
    objects.flat().map((object) => {
      removeFromArray(this._o, object);
      getAllNodes(object).map((node) => {
        addToDom(node, this.context);
      });
    });
  }
  show() {
    this.hidden = this._dn.hidden = false;
    let focusableObject = this._o.find((object) => object.focus);
    if (focusableObject) {
      focusableObject.focus();
    } else {
      this._dn.focus();
    }
    this.onShow();
  }
  hide() {
    this.hidden = this._dn.hidden = true;
    this.onHide();
  }
  destroy() {
    this._dn.remove();
    this._o.map((object) => object.destroy && object.destroy());
  }
  lookAt(object) {
    let { x, y } = object.world || object;
    this.camera.x = x;
    this.camera.y = y;
  }
  update(dt) {
    if (!this.hidden) {
      this._o.map((object) => object.update && object.update(dt));
    }
  }
  _rf() {
    let {
      _o,
      context: context2,
      _sx,
      _sy,
      camera,
      sortFunction,
      cullObjects,
      cullFunction
    } = this;
    context2.translate(_sx, _sy);
    let objects = _o;
    if (cullObjects) {
      objects = objects.filter(
        (object) => cullFunction(camera, object)
      );
    }
    if (sortFunction) {
      objects.sort(sortFunction);
    }
    objects.map((object) => object.render && object.render());
  }
  render() {
    if (!this.hidden) {
      let { context: context2, camera } = this;
      let { x, y, centerX, centerY } = camera;
      context2.save();
      this._sx = centerX - x;
      this._sy = centerY - y;
      context2.translate(this._sx, this._sy);
      camera.render();
      context2.restore();
    }
  }
  onShow() {
  }
  onHide() {
  }
};
function factory$2() {
  return new Scene(...arguments);
}
function parseFrames(consecutiveFrames) {
  if (+consecutiveFrames == consecutiveFrames) {
    return consecutiveFrames;
  }
  let sequence = [];
  let frames = consecutiveFrames.split("..");
  let start = +frames[0];
  let end = +frames[1];
  let i = start;
  if (start < end) {
    for (; i <= end; i++) {
      sequence.push(i);
    }
  } else {
    for (; i >= end; i--) {
      sequence.push(i);
    }
  }
  return sequence;
}
var SpriteSheet = class {
  constructor({
    image,
    frameWidth,
    frameHeight,
    frameMargin,
    animations
  } = {}) {
    if (!image) {
      throw Error("You must provide an Image for the SpriteSheet");
    }
    this.animations = {};
    this.image = image;
    this.frame = {
      width: frameWidth,
      height: frameHeight,
      margin: frameMargin
    };
    this._f = image.width / frameWidth | 0;
    this.createAnimations(animations);
  }
  createAnimations(animations) {
    let sequence, name;
    for (name in animations) {
      let { frames, frameRate, loop } = animations[name];
      sequence = [];
      if (frames == void 0) {
        throw Error(
          "Animation " + name + " must provide a frames property"
        );
      }
      [].concat(frames).map((frame) => {
        sequence = sequence.concat(parseFrames(frame));
      });
      this.animations[name] = factory$b({
        spriteSheet: this,
        frames: sequence,
        frameRate,
        loop
      });
    }
  }
};
function factory$1() {
  return new SpriteSheet(...arguments);
}
function getRow(y, tileheight) {
  return y / tileheight | 0;
}
function getCol(x, tilewidth) {
  return x / tilewidth | 0;
}
var TileEngine = class {
  constructor(properties = {}) {
    let {
      width,
      height,
      tilewidth,
      tileheight,
      tilesets
    } = properties;
    let mapwidth = width * tilewidth;
    let mapheight = height * tileheight;
    let canvas = document.createElement("canvas");
    canvas.width = mapwidth;
    canvas.height = mapheight;
    this._c = canvas;
    this._ctx = canvas.getContext("2d");
    tilesets.map((tileset) => {
      let { __k, location } = window;
      let url = (__k ? __k.dm.get(properties) : "") || location.href;
      let { source } = tileset;
      if (source) {
        if (!__k) {
          throw Error(
            `You must use "load" or "loadData" to resolve tileset.source`
          );
        }
        let resolvedSorce = __k.d[__k.u(source, url)];
        if (!resolvedSorce) {
          throw Error(
            `You must load the tileset source "${source}" before loading the tileset`
          );
        }
        Object.keys(resolvedSorce).map((key) => {
          tileset[key] = resolvedSorce[key];
        });
      }
      let { image } = tileset;
      if ("" + image === image) {
        if (!__k) {
          throw Error(
            `You must use "load" or "loadImage" to resolve tileset.image`
          );
        }
        let resolvedImage = __k.i[__k.u(image, url)];
        if (!resolvedImage) {
          throw Error(
            `You must load the image "${image}" before loading the tileset`
          );
        }
        tileset.image = resolvedImage;
      }
    });
    Object.assign(this, {
      context: getContext(),
      layerMap: {},
      layerCanvases: {},
      mapwidth,
      mapheight,
      _sx: 0,
      _sy: 0,
      _o: [],
      ...properties
    });
    this._p();
  }
  get sx() {
    return this._sx;
  }
  get sy() {
    return this._sy;
  }
  set sx(value) {
    this._sx = clamp(0, this.mapwidth - getCanvas().width, value);
  }
  set sy(value) {
    this._sy = clamp(0, this.mapheight - getCanvas().height, value);
  }
  set objects(value) {
    this.remove(this._o);
    this.add(value);
  }
  get objects() {
    return this._o;
  }
  add(...objects) {
    objects.flat().map((object) => {
      this._o.push(object);
    });
  }
  remove(...objects) {
    objects.flat().map((object) => {
      removeFromArray(this._o, object);
    });
  }
  setTileAtLayer(name, position, tile) {
    let { layerMap, tileheight, tilewidth, width } = this;
    let { row, col, x, y } = position;
    let tileRow = row != null ? row : getRow(y, tileheight);
    let tileCol = col != null ? col : getCol(x, tilewidth);
    if (layerMap[name]) {
      this._d = true;
      layerMap[name]._d = true;
      layerMap[name].data[tileRow * width + tileCol] = tile;
    }
  }
  setLayer(name, data) {
    let { layerMap } = this;
    if (layerMap[name]) {
      this._d = true;
      layerMap[name]._d = true;
      layerMap[name].data = data;
    }
  }
  layerCollidesWith(name, object) {
    let { tilewidth, tileheight, layerMap } = this;
    let { x, y, width, height } = getWorldRect(object);
    let row = getRow(y, tileheight);
    let col = getCol(x, tilewidth);
    let endRow = getRow(y + height, tileheight);
    let endCol = getCol(x + width, tilewidth);
    let layer = layerMap[name];
    for (let r = row; r <= endRow; r++) {
      for (let c = col; c <= endCol; c++) {
        if (layer.data[c + r * this.width]) {
          return true;
        }
      }
    }
    return false;
  }
  tileAtLayer(name, position) {
    let { layerMap, tileheight, tilewidth, width } = this;
    let { row, col, x, y } = position;
    let tileRow = row != null ? row : getRow(y, tileheight);
    let tileCol = col != null ? col : getCol(x, tilewidth);
    if (layerMap[name]) {
      return layerMap[name].data[tileRow * width + tileCol];
    }
    return -1;
  }
  render(_canvas = this._c, _renderObjects = true) {
    let { _d, context: context2, sx = 0, sy = 0 } = this;
    if (_d) {
      this._p();
    }
    let { width, height } = getCanvas();
    let sWidth = Math.min(_canvas.width, width);
    let sHeight = Math.min(_canvas.height, height);
    context2.drawImage(
      _canvas,
      sx,
      sy,
      sWidth,
      sHeight,
      0,
      0,
      sWidth,
      sHeight
    );
    if (_renderObjects) {
      context2.save();
      if (sx || sy) {
        context2.translate(-sx, -sy);
      }
      this.objects.map((obj) => obj.render && obj.render());
      context2.restore();
    }
  }
  renderLayer(name) {
    let { layerCanvases, layerMap } = this;
    let layer = layerMap[name];
    let canvas = layerCanvases[name];
    let context2 = canvas == null ? void 0 : canvas.getContext("2d");
    if (!canvas) {
      let { mapwidth, mapheight } = this;
      canvas = document.createElement("canvas");
      context2 = canvas.getContext("2d");
      canvas.width = mapwidth;
      canvas.height = mapheight;
      layerCanvases[name] = canvas;
      this._r(layer, context2);
    }
    if (layer._d) {
      layer._d = false;
      context2.clearRect(0, 0, canvas.width, canvas.height);
      this._r(layer, context2);
    }
    this.render(canvas, false);
  }
  _p() {
    let { _ctx, layers = [], layerMap } = this;
    this._d = false;
    layers.map((layer) => {
      let { name, data, visible } = layer;
      layer._d = false;
      layerMap[name] = layer;
      if (data && visible != false) {
        this._r(layer, _ctx);
      }
    });
  }
  _r(layer, context2) {
    let { opacity, data = [] } = layer;
    let { tilesets, width, tilewidth, tileheight } = this;
    context2.save();
    context2.globalAlpha = opacity;
    data.map((tile, index) => {
      if (!tile)
        return;
      let tileset;
      for (let i = tilesets.length - 1; i >= 0; i--) {
        tileset = tilesets[i];
        if (tile / tileset.firstgid >= 1) {
          break;
        }
      }
      let { image, margin = 0, firstgid, columns } = tileset;
      let offset = tile - firstgid;
      let cols = columns != null ? columns : image.width / (tilewidth + margin) | 0;
      let x = index % width * tilewidth;
      let y = (index / width | 0) * tileheight;
      let sx = offset % cols * (tilewidth + margin);
      let sy = (offset / cols | 0) * (tileheight + margin);
      context2.drawImage(
        image,
        sx,
        sy,
        tilewidth,
        tileheight,
        x,
        y,
        tilewidth,
        tileheight
      );
    });
    context2.restore();
  }
};
function factory() {
  return new TileEngine(...arguments);
}
var kontra = {
  Animation: factory$b,
  AnimationClass: Animation,
  imageAssets,
  audioAssets,
  dataAssets,
  setImagePath,
  setAudioPath,
  setDataPath,
  loadImage,
  loadAudio,
  loadData,
  load,
  Button: factory$6,
  ButtonClass: Button,
  init: init$1,
  getCanvas,
  getContext,
  on,
  off,
  emit,
  GameLoop,
  GameObject: factory$9,
  GameObjectClass: GameObject,
  gamepadMap,
  updateGamepad,
  initGamepad,
  onGamepad,
  offGamepad,
  gamepadPressed,
  gamepadAxis,
  gestureMap,
  initGesture,
  onGesture,
  offGesture,
  Grid: factory$5,
  GridClass: Grid,
  degToRad,
  radToDeg,
  angleToTarget,
  rotatePoint,
  movePoint,
  randInt,
  seedRand,
  lerp,
  inverseLerp,
  clamp,
  setStoreItem,
  getStoreItem,
  collides,
  getWorldRect,
  depthSort,
  initInput,
  onInput,
  offInput,
  keyMap,
  initKeys,
  onKey,
  offKey,
  keyPressed,
  registerPlugin,
  unregisterPlugin,
  extendObject,
  initPointer,
  getPointer,
  track,
  untrack,
  pointerOver,
  onPointer,
  offPointer,
  pointerPressed,
  Pool: factory$4,
  PoolClass: Pool,
  Quadtree: factory$3,
  QuadtreeClass: Quadtree,
  Scene: factory$2,
  SceneClass: Scene,
  Sprite: factory$8,
  SpriteClass: Sprite,
  SpriteSheet: factory$1,
  SpriteSheetClass: SpriteSheet,
  Text: factory$7,
  TextClass: Text,
  TileEngine: factory,
  Vector: factory$a,
  VectorClass: Vector
};
export {
  factory$b as Animation,
  Animation as AnimationClass,
  factory$6 as Button,
  Button as ButtonClass,
  GameLoop,
  factory$9 as GameObject,
  GameObject as GameObjectClass,
  factory$5 as Grid,
  Grid as GridClass,
  factory$4 as Pool,
  Pool as PoolClass,
  factory$3 as Quadtree,
  Quadtree as QuadtreeClass,
  factory$2 as Scene,
  Scene as SceneClass,
  factory$8 as Sprite,
  Sprite as SpriteClass,
  factory$1 as SpriteSheet,
  SpriteSheet as SpriteSheetClass,
  factory$7 as Text,
  Text as TextClass,
  factory as TileEngine,
  factory$a as Vector,
  Vector as VectorClass,
  angleToTarget,
  audioAssets,
  clamp,
  collides,
  dataAssets,
  kontra as default,
  degToRad,
  depthSort,
  emit,
  extendObject,
  gamepadAxis,
  gamepadMap,
  gamepadPressed,
  gestureMap,
  getCanvas,
  getContext,
  getPointer,
  getStoreItem,
  getWorldRect,
  imageAssets,
  init$1 as init,
  initGamepad,
  initGesture,
  initInput,
  initKeys,
  initPointer,
  inverseLerp,
  keyMap,
  keyPressed,
  lerp,
  load,
  loadAudio,
  loadData,
  loadImage,
  movePoint,
  off,
  offGamepad,
  offGesture,
  offInput,
  offKey,
  offPointer,
  on,
  onGamepad,
  onGesture,
  onInput,
  onKey,
  onPointer,
  pointerOver,
  pointerPressed,
  radToDeg,
  randInt,
  registerPlugin,
  rotatePoint,
  seedRand,
  setAudioPath,
  setDataPath,
  setImagePath,
  setStoreItem,
  track,
  unregisterPlugin,
  untrack,
  updateGamepad
};
//# sourceMappingURL=kontra.js.map
