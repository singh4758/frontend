export function getRandomNumber() {
  return (Math.floor(Math.random() * 10));
}

export function getRoundRobin(value) {
  return ((value + 1) % 10);
}
