import { DIRECTIONS, OBJECT_TYPE } from './setup';

class Ghost {
  constructor(speed = 5, startPos, movement, name) {
    this.name = name;
    this.movement = movement;
    this.startPos = startPos;
    this.pos = startPos;
    this.dir = DIRECTIONS.ArrowRight;
    this.speed = speed;
    this.timer = 0;
    this.isScared = false;
    this.rotation = false;
  }

  shouldMove() {
    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
    return false;
  }
  getNextmove(objectExists) {
    const { nextMovePos, direction } = this.movement(
      this.pos,
      this.dir,
      objectExists
    );
    return { nextMovePos, direction }
  }
 }