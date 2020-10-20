// console.log('Destructuring');

// const person = {
//     age: 28,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name: firstName = 'Hoang', age } = person;

// console.log(`My name is ${firstName} and I'm ${age}`);

// const { city, temp } = person.location;

// if (city && temp) {
//     console.log(`It's ${temp} in ${city}`);
// } else {
//     console.log('Dell co gi')
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {

//     }
// }

// const { name: publisherName = 'Nam dep zai' } = book.publisher;

// console.log(publisherName);

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pensylanvia', 19147];

// const [street, city, state, zip] = address;

// console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price,] = item;

console.log(`A medium ${coffee} costs ${price} `)

