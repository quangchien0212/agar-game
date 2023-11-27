export function randomColor(): string {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
}

export function getRandomArbitrary(min, max): number {
  return Math.random() * (max - min) + min;
}

export function getDistance(obj1, obj2): number {
  const dx = obj1.x - obj2.x
  const dy = obj1.y - obj2.y
  return Math.hypot(dy, dx)
}

export function checkImpact(obj1, obj2): boolean {
  const distance = getDistance(obj1, obj2)
  const sumRadii = obj1.radius + obj2.radius

  return distance <= sumRadii
}