import './style.css';
import { Engine, Actor, Color, CollisionType, Input } from 'https://esm.sh/excalibur@0.27.0';

const game = new Engine({
  backgroundColor: Color.fromHex('#051126'),
});

game.start();

const paddle = new Actor({
  x: game.canvasWidth / 2,
  y: game.canvasHeight / 2,
  width: 30,
  height: 30,
  color: Color.Chartreuse
});

paddle.body.collisionType = CollisionType.Fixed;

paddle.on('postupdate', () => {
  if (game.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
    if (paddle.pos.x <= game.canvasWidth - (paddle.width / 2)) {
      // paddle.pos.x += 20;
      paddle.vel.x += 20;
    }
  } else if (game.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
    if (paddle.pos.x >= paddle.width / 2) {
      // paddle.pos.x -= 20;
      paddle.vel.x -= 20;
    }
  } else {
    if (paddle.vel.x <= 0) {
      paddle.vel.x += 20;
    }

    if (paddle.vel.x >= 0) {
      paddle.vel.x -= 20;
    }
  }

  if (game.input.keyboard.wasReleased(Input.Keys.ArrowLeft)) {
    if (paddle.pos.x <= paddle.width / 2) {
      // paddle.pos.x += 20;
    }
  }
});


game.add(paddle);