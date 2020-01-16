// function car (name, model, owner, phone, image, year) {
//    return {
//        name, model, owner, phone, image, year
//    }
// }

const car = (name, model, owner, phone, image, year) => ({name, model, owner, phone, image, year}) // сокращенное написание функции



const cars = [
    car('Honda', 'Civic', 'Kavinski', '+7123123123', 'Images/Civic.jpg', 2015)
//    { name: 'Honda', model: 'Civic', owner: 'Kavikski', year: 2015, phone: '+7123123123', image:'Images/Civic.jpg' }
]




new Vue ({
    el:'#app',
    data: {
cars: cars

    }
})