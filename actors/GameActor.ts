
import {
   Actor,
   ActorArgs,
   CollisionEndEvent,
   CollisionType,
   ContactStartEvent,
   Engine,
   Input,
   PostCollisionEvent,
   Side,
   Sprite
} from "https://esm.sh/v99/excalibur@0.27.0";

import { Platform } from './Platform.ts';

class GameActor extends Actor {
   onFloor = false;
   isFalling = false;
   constructor (config: ActorArgs) {
      super(config);
      super.on('postcollision', (event: PostCollisionEvent) => this.onPostCollision(event));
      super.on('collisionend', (event: CollisionEndEvent) => this.onCollisionEnd(event));
   }

   onInitialize(engine: Engine) {
      super.onInitialize(engine);
      this.body.collisionType = CollisionType.Active;
      this.body.useGravity = true;
   }

   public onPreUpdate(engine: Engine) {
      const isMoving = (engine.input.keyboard.isHeld(Input.Keys.ArrowRight) || engine.input.keyboard.isHeld(Input.Keys.ArrowLeft));
      if (!isMoving) {
         this.vel.x = 0;
      }
   }

   public onPostUpdate(engine: Engine, delta: number): void {
      if (engine.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
         this.vel.x = 400;
      }

      if (engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
         this.vel.x = -400;
      }

      if (engine.input.keyboard.isHeld(Input.Keys.ArrowDown)) {
         if (engine.input.keyboard.isHeld(Input.Keys.Space)) {
            console.log('downjump');
         }
      } else {
         if (engine.input.keyboard.isHeld(Input.Keys.Space) && this.onFloor) {
            super.vel.y = (-800);
         }
      }
   }

   public onPostCollision(event: PostCollisionEvent) {
      // super.onPostCollision(event);
      if (event.other instanceof Platform) {
         const other = event.other;
         if (event.side === Side.Bottom) {
            this.onFloor = true;
         }
      }
   }

   onCollisionEnd(event: CollisionEndEvent) {
      const other = event.other;
      if (other.name === 'platform') {
         // if (event.other instanceof Platform) {
         if (this.onFloor === true) {
            this.onFloor = false;
         }
      }
   }
}

export { GameActor };