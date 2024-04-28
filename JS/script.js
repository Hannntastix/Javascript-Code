console.log("Aing teh Mulai Belajar JawirScript,Doakeun Yeu.")


/* contoh mengubah value dari properti sebuah object menggunakan operator "=" */
const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray"
};
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
spaceship.name = "HelloWorld";
const newSpaceship = { ...spaceship } /* spread operator untuk memisahkan tiap value dari properti dari tiap objek */
console.log(newSpaceship);
console.log(spaceship.maxSpeed);




/* Spread Operator untuk menyebarkan data array */
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [...favorites, ...others];
console.log(allFavorites);



/* membuat sebuah array yang berisi bilangan genap dari angka 1-100 */
const evenNumber = [];

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        evenNumber.push(i);
    };
};
console.log(evenNumber);




/* Destructing = mengeluarkan nilai dalam suatu objek*/
const profile = {
    firstName: "John",
    lastName: "Doe",
    age: 18
}
const firstName = profile.firstName
const lastName = profile.lastName
const age = profile.age
console.log(firstName, lastName, age)




/* Destructing Object */
const profil = {
    namaDepan: "John",
    namaBelakang: "Doe",
    usia: 18
}
const { namaDepan, namaBelakang, usia } = profil; /* yang di dalam kurung kurawal adalah variabel untuk menampung value dari masing2 object sesuai namanya */
console.log(namaDepan, namaBelakang, usia);



/* Destrcuturing dengan menginisiasikan variabel baru */
const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;
console.log(localFirstName);
console.log(localLastName);
console.log(typeof (localAge))



/* Map (set and get) */
const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"],
    ["Amsterdam", "Netherlands"]
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));



/* data Set */

const numberSet = new Set([1, 4, 6, 4, 1]);
numberSet.add(5);
numberSet.add(10);
numberSet.add(6);

numberSet.delete(4);

console.log(numberSet);



/* WeakMap dan WeakSet */

/* map biasa */

const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
    let count = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas);  // Menambahkan user "Jonas"

let john = { age: 23 };
countUser(john);

jonas = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
    console.log(visitsCountMap);
}, 10000)


/* weakMap */


const visitsCountWeakMap = new WeakMap(); // Menyimpan daftar user

function countUsers(users) {
    let hitung = visitsCountWeakMap.get(users) || 0;
    visitsCountWeakMap.set(users, hitung + 1);
}

let jonis = { name: "Jonis" };
countUsers(jonis);  // Menambahkan user "Jonas"

jonis = null;  // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
    console.log(visitsCountWeakMap, { showHidden: true });
}, 1000);


/*Function in JavaScript */

//Function dengan Parameter berupa objek

const user = {
    id: 24,
    displayName: 'kren',
    fullName: 'Kylo Ren',
};

function introduce({ displayName, fullName }) {
    console.log(`${displayName} is ${fullName}`);
}

introduce(user);

//Function dengan Rest Parameter
function sum(...numbers) { //suatu parameter yang digunakan ketika jumlah dari parameter fungsinya tidak pasti
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log(sum(1, 2, 3, 4, 5)); //lihat,parameternya tergantung keinginan kita ingin memasukkan berapa parameter.
