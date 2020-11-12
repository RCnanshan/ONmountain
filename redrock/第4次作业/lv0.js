const person = {
    name: 'Ezio Auditore Da Firenze',
    age: 65,
    address: [
        {city: 'Italia'},
        {area: 'Firenze'}
    ]
};
const {name} =person;
const {age} =person;
const {address:[{city},{area}]}=person;

console.log(name, age,city,area)

