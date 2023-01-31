//Задание 1.
//Написать, функцию, которая принимает в качестве аргумента объект
//и выводит в консоль все ключи и значения только собственных свойств. 
//Данная функция не должна возвращать значение.

const user = {
    name: "polina",
    age: 24,
    
  }; 
  
  function db(usr) {
      for (let key in usr) {
          
           if (usr.hasOwnProperty(key)) {
  
              console.log(`${key}: ${usr[key]}`); 
          };   
       
      };
      
  };
  db(user);
  
  //Задание 2.
  //Написать функцию, которая принимает в качестве аргументов строку и объект, 
  //а затем проверяет есть ли у переданного объекта свойство с данным именем. 
  //Функция должна возвращать true или false
  
   function check(str, obj) {
      
      console.log(str in obj);
      
  };
  check('name', user);
  check('position', user);
  
//Задание 3.
//Написать функцию, которая создает пустой объект, но без прототипа.
  
  function createObj(obj) {
      let staples = {};
      
      return obj = staples;
    }
  
    let object = createObj('obj')
    console.log((object));
   

//Задание 4.
//Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах
//Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
//Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
//У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
//Создать экземпляры каждого прибора.
//Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

function ElectricalAppliance(name) {
    this.device = 'household electrical appliance',
    this.name = name
	
}

ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
    let turnOn = on;
    if(on === 1){
        turnOn = 'Вкл';
    }else{
        turnOn = 'Выкл';
    };


    console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};

function Characteristic(name, color) {
    this.name = name,
    this.color = color
}

Characteristic.prototype = new ElectricalAppliance();

const teapot = new Characteristic ('Teapot', 'black');
const fridge = new Characteristic ('Fridge', 'red');
const luminaire = new Characteristic ('Luminaire', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);



//Задание 5.
//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name) {
        this.device = 'household electrical appliance';
        this.name = name;
    }

    getPowerConsumption (power, t, on) {
        let turnOn = on;
        if(on === 1){
            turnOn = 'Вкл';
        }else{
            turnOn = 'Выкл';
        };
        
    
        console.log(`Расход эл. энергии ${this.name} - (${this.color}) за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
    }

}

class Characteristic extends ElectricalAppliance {
    constructor (name, color) {
        super(name);
        this.color = color;
    }
}

const teapot = new Characteristic ('Teapot', 'black');
const fridge = new Characteristic ('Fridge', 'red');
const luminaire = new Characteristic ('Luminaire', 'green');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);
 