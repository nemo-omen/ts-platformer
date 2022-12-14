import './style.css';
import {
  Engine,
  Actor,
  Color,
  CollisionType,
  Input,
  Physics,
  vec,
  Vector,
  CollisionStartEvent,
  CollisionEndEvent
} from 'https://esm.sh/excalibur@0.27.0';
import { KeyEvent } from 'https://esm.sh/v99/excalibur@0.27.0/build/dist/Input/Keyboard';

let onFloor = false;

// Physics.useRealisticPhysics();
Physics.gravity = vec(0, 800);

const game = new Engine({
  height: document.body.clientHeight,
  width: document.body.clientWidth,
  backgroundColor: Color.fromHex('#051126'),
});

const paddle = new Actor({
  // x: game.halfDrawWidth,
  // y: game.halfDrawHeight,
  pos: vec(game.halfDrawWidth, game.halfDrawHeight),
  width: 30,
  height: 30,
  color: Color.Chartreuse
});

paddle.body.collisionType = CollisionType.Active;
paddle.body.useGravity = true;

const floor = new Actor({
  x: game.halfDrawWidth,
  y: game.drawHeight,
  width: game.drawWidth,
  height: 40,
  color: Color.Gray,
  collisionType: CollisionType.Fixed,
});

// floor.body.friction = 2;

const wall1 = new Actor({
  x: 0,
  y: game.halfDrawHeight,
  width: 40,
  height: game.drawHeight,
  color: Color.Gray,
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

// paddle.body.collisionType = CollisionType.Fixed;

paddle.on('postupdate', () => {
  if (game.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
    paddle.vel.x += 15.0;
  }

  if (game.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
    paddle.vel.x -= 15.0;
  }

  game.input.keyboard.on('press', (event: KeyEvent) => {
    if (event.key == 'Space') {
      paddle.vel.y = (-700);
    }
  });

});

paddle.on('collisionstart', (event: CollisionStartEvent) => {
  if (event.other === floor) {
    onFloor = true;
  }
});

paddle.on('collisionend', (event: CollisionEndEvent) => {
  if (event.other === floor) {
    onFloor = false;
  }
});

game.start().then(() => {
  game.add(paddle);
  game.add(floor);
  game.add(wall1);
  game.add(wall2);
});