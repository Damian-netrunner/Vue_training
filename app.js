// function car (name, model, owner, phone, image, year) {
//    return {
//        name, model, owner, phone, image, year
//    }
// }

const car = (name, model, owner, phone, image, year) => ({name, model, owner, phone, image, year}) // сокращенное написание функции

const cars = [
    car('Honda', 'Civic', 'Kavinski', '+7123123123', 'Images/Civic.jpg', 2015),
    car('Mitsubishi', 'Lancer', 'Keks', '+7956178913', 'Images/Civic.jpg', 2013),
    car('Dodge', 'GT', 'Alex', '+753144521', 'Images/Civic.jpg', 2016)
]


new Vue ({
    el:'#app',
    data: {
cars: cars,
car: cars [0]
    },
methods: {
    selectCar: function(){
        console.log('click')
    }
}    
})

