import './style.css';
import { Engine, Actor, Color, CollisionType, Input, Physics, vec, Vector } from 'https://esm.sh/excalibur@0.27.0';

// Physics.useRealisticPhysics();
Physics.gravity = vec(0, 200);

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

paddle.body.collisionType = CollisionType.active;
paddle.body.useGravity = true;

const floor = new Actor({
  x: game.halfDrawWidth,
  y: game.drawHeight,
  width: game.drawWidth,
  height: 40,
  color: Color.Gray,
  collisionType: CollisionType.fixed,
});

const wall1 = new Actor({
  x: 0,
  y: game.halfDrawHeight,
  width: 40,
  height: game.drawHeight,
  color: Color.Gray,
  collisionType: CollisionType.fixed,
});

const wall2 = new Actor({
  x: game.drawWidth,
  y: game.halfDrawHeight,
  width: 40,
  height: game.drawHeight,
  color: Color.Gray,
  collisionType: CollisionType.fixed,
});

// paddle.body.collisionType = CollisionType.Fixed;

paddle.on('postupdate', () => {
  //   if (game.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
  //     if (paddle.pos.x <= game.drawWidth - paddle.width) {
  //       // paddle.pos.x += 20;
  //       paddle.vel.x += 20;
  //     } else {
  //       paddle.vel.x = 0;
  //     }
  //   } else if (game.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
  //     if (paddle.pos.x >= paddle.width) {
  //       // paddle.pos.x -= 20;
  //       paddle.vel.x -= 20;
  //     } else {
  //       paddle.vel.x = 0;
  //     }
  //   } else {
  //     if (paddle.vel.x <= 0) {
  //       paddle.vel.x += 20;
  //     }

  //     if (paddle.vel.x >= 0) {
  //       paddle.vel.x -= 20;
  //     }
  //   }

  //   if (game.input.keyboard.wasReleased(Input.Keys.ArrowLeft)) {
  //     if (paddle.pos.x <= paddle.width / 2) {
  //       // paddle.pos.x += 20;
  //     }
  //   }
});

game.start().then(() => {
  game.add(paddle);
  game.add(floor);
  game.add(wall1);
  game.add(wall2);
});