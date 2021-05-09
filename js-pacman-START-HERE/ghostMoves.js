import { DIRECTIONS, OBJECT_TYPE } from './setup';

export function randomMovement(position, direction, objectExists) {
  let dir = direction;
  let nextMovePos = position + dir.movement;
  
  //array of possible random movements
  const keys = Object.keys(DIRECTIONS);

  while (objectExists(nextMovePos, OBJECT_TYPE.WALL) || objectExists(nextMovePos, OBJECT_TYPE.GHOST)) {
    const key = keys[Math.floor(Math.random() * keys.length)];
    dir = DIRECTIONS[key];
    nextMovePos = position + dir.movement;
  }
  return { nextMovePos, direction: dir };
}