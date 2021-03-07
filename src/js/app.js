export default function hpColor(person) {
  let hp = null;
  if (person.health < 15) {
    hp = 'critical';
  } else if (person.health > 50) {
    hp = 'healthy';
  } else {
    hp = 'wounded';
  }

  return hp;
}
