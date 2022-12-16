// import './style.css';
import {
  Actor,
  BoundingBox,
  Camera,
  Color,
  CollisionEndEvent,
  CollisionStartEvent,
  CollisionType,
  DisplayMode,
  Engine,
  ImageSource,
  Input,
  KeyEvent,
  ParallaxComponent,
  Physics,
  PostCollisionEvent,
  Side,
  Sprite,
  TileMap,
  vec,
  Vector,
} from 'https://esm.sh/excalibur@0.27.0';

import { Platform } from './actors/Platform.ts';
import { GameActor } from './actors/GameActor.ts';

// bgActor.on('initialize', (event) => {
//   bgActor.graphics.use(bgSprite);
//   console.log(bgImage);
// });

// bgActor.graphics.use(bgImage.toSprite());
Physics.gravity = vec(0, 1000);

const game = new Engine({
  displayMode: DisplayMode.FillScreen,
  width: 4096,
  height: 2417,
  backgroundColor: Color.fromHex('#051126'),
});

const bgImage = new ImageSource('./public/webb.jpg');

const bgSprite = new Sprite({
  image: bgImage,
  sourceView: {
    x: 0,
    y: 0,
    width: 4096,
    height: 2417
  }
});

const bgActor = new Actor({
  pos: vec(0, 0),
  width: bgSprite.width,
  height: bgSprite.height
});

bgImage.load().then(() => {
  bgActor.graphics.use(bgImage.toSprite());
  bgActor.addComponent(new ParallaxComponent(vec(0.5, 0.5)));
});

// Engine.showDebug = true;

const tileMap = new TileMap({
  rows: 60,
  columns: 60,
  tileWidth: 32,
  tileHeight: 32
});

const player = new GameActor({
  // x: game.halfDrawWidth,
  // y: game.halfDrawHeight,
  name: 'player',
  pos: vec(game.halfDrawWidth, game.halfDrawHeight),
  width: 30,
  height: 30,
  color: Color.Chartreuse
});

// player.onInitialize(game);
// player.onPreUpdate(game);

// player.onPostCollision((event: PostCollisionEvent) => { });

const floor = new Platform({
  name: 'platform',
  x: bgActor.width / 2,
  y: bgActor.height - 600,
  width: bgActor.width,
  height: 40,
  color: Color.Gray,
  collisionType: CollisionType.Fixed,
});

// const floor = new Actor({
//   x: game.halfDrawWidth,
//   y: game.drawHeight - 20,
//   width: game.drawWidth,
//   height: 40,
//   color: Color.Gray,
//   collisionType: CollisionType.Fixed,
// });

const wall1 = new Actor({
  x: 0,
  y: bgActor.height / 2,
  width: 20,
  height: bgActor.height,
  color: Color.Transparent,
  collisionType: CollisionType.Fixed,
});

const wall2 = new Actor({
  x: bgActor.width - 600,
  y: bgActor.height / 2,
  width: 40,
  height: bgActor.height,
  color: Color.Transparent,
  collisionType: CollisionType.Fixed,
});

const platform1 = new Platform({
  name: 'platform',
  x: bgActor.width - 770,
  y: bgActor.height - 700,
  width: 300,
  height: 300,
  color: Color.Gray,
  collisionType: CollisionType.Fixed
});

let boundingBox = new BoundingBox(
  0,
  600,
  bgActor.width - 600,
  bgActor.height - 600,
);

game.start().then(() => {
  game.add(bgActor);
  game.add(player);
  game.add(floor);
  game.add(wall1);
  game.add(wall2);
  game.add(platform1);
  game.currentScene.camera.zoom = 1.5;
  game.currentScene.camera.strategy.limitCameraBounds(boundingBox);
  game.currentScene.camera.strategy.elasticToActor(player, 0.5, 0.85);
});