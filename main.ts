import './style.css';
import { Engine, Actor, Color, CollisionType } from 'excalibur';

const game = new Engine();

game.start();

const paddle = new Actor({
  x: 600,
  y: 600,
  width: 200,
  height: 20,
  color: Color.Chartreuse
});

paddle.body.collisionType = CollisionType.Fixed;

game.add(paddle);