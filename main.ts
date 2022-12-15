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
  Input,
  KeyEvent,
  Physics,
  PostCollisionEvent,
  Side,
  vec,
  Vector,
} from 'https://esm.sh/excalibur@0.27.0';

import { Platform } from './actors/Platform.ts';
import { GameActor } from './actors/GameActor.ts';
// let onFloor = false;

// Physics.useRealisticPhysics();
Physics.gravity = vec(0, 800);

const game = new Engine({
  // height: 1920,
  // width: 1920,
  displayMode: DisplayMode.FillScreen,
  backgroundColor: Color.fromHex('#051126'),
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
  x: game.getWorldBounds().width / 2,
  y: game.getWorldBounds().height,
  width: game.getWorldBounds().width,
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
  y: game.halfDrawHeight,
  width: 20,
  height: game.drawHeight,
  color: Color.Transparent,
  collisionType: CollisionType.Fixed,
});

const wall2 = new Actor({
  x: game.drawWidth,
  y: game.halfDrawHeight,
  width: 40,
  height: game.drawHeight,
  color: Color.Gray,
  collisionType: CollisionType.Fixed,
});

const platform1 = new Platform({
  x: game.drawWidth - 170,
  y: game.halfDrawHeight + 100,
  width: 300,
  height: 100,
  color: Color.Gray,
  collisionType: CollisionType.Fixed
});

let boundingBox = new BoundingBox(
  0,
  0,
  1920,
  1080
);

game.start().then(() => {
  game.add(player);
  game.add(floor);
  game.add(wall1);
  game.add(wall2);
  game.add(platform1);
  game.currentScene.camera.zoom = 1.25;
  game.currentScene.camera.strategy.limitCameraBounds(boundingBox);
  game.currentScene.camera.strategy.elasticToActor(player, 0.5, 0.85);
});