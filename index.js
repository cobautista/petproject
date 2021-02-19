// bmi=mass/height^2=mass/(height * height).(mass in kg height in meter)

var victor = {
mass: 100,
height: 1.75
}

var john = {
    mass: 200,
    height: 1.2,
}

function bmi(person){
return person.mass/(person.height*person.height)

}

victor.bmi = bmi(victor);
john.bmi = bmi(john);
var comp = victor.bmi > john.bmi;

console.log('Is Victor BMI higher than John?' + comp);