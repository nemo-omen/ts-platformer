import { Actor, ActorArgs, CollisionType, Engine } from 'https://esm.sh/excalibur@0.27.0';
class Platform extends Actor {
   constructor (config: ActorArgs) {
      super(config);
   }

   // onInitialize(_engine: Engine): void {
   //    console.log(_engine.screenToWorldCoordinates(this.pos));
   //    console.log(_engine.worldToScreenCoordinates(this.pos));
   // }
}

export { Platform };