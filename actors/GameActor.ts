
import {
   Actor,
   ActorArgs,
   CollisionEndEvent,
   CollisionType,
   ContactStartEvent,
   Engine,
   Input,
   PostCollisionEvent,
   Side
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
      super.body.collisionType = CollisionType.Active;
      super.body.useGravity = true;
   }

   public onPreUpdate(engine: Engine) {
      super.vel.x = 0;

      if (engine.input.keyboard.isHeld(Input.Keys.ArrowRight)) {
         super.vel.x = 500;
      }

      if (engine.input.keyboard.isHeld(Input.Keys.ArrowLeft)) {
         super.vel.x = -500;
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

      // const accel = super.acc.y;
      // console.log(accel);

      // if (super.acc.y < 0) {
      //    this.isFalling = true;
      // } else {
      //    this.isFalling = false;
      // }
      // console.log('falling: ', this.isFalling);
   }

   // public onPostUpdate(_engine: Engine, _delta: number): void {
   //    // console.log('world to screen: ', _engine.worldToScreenCoordinates(this.pos));
   //    // console.log('screen to world: ', _engine.screenToWorldCoordinates(this.pos));
   // }

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