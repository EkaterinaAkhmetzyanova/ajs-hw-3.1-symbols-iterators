export default class Character {
  constructor(name, type, health = 100) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = 1;
    this.attack = null;
    this.defence = null;
    const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Имя героя должно состоять от 2 до 10 символов.');
    } else if (!(types.includes(this.type))) {
      throw new Error('Выбранный тип не существует.');
    }
  }
}
