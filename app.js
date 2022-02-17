const app = Vue.createApp({ //Vue enabled by cdn, takes object
    // template: '<h1>Hello {{firstName}}</h1>',  //interpolation, can also move tag in div id=app
    data() {
        return {
            firstName: 'Sazzad',
            lastName: 'Saju',
            email: 'sazzadsaju17@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            // dynamic fetch data
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json() //gives results arrary, instead destructure result
                // console.log(results);
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large;
        },
        // getUser() {
        //     // can use any data above
        //     // console.log(this.firstName)
        //     this.firstName = 'Sam'
        //     this.lastName = 'Smith'
        //     this.email = 'sam.smith@gmail.com'
        //     this.gender = 'female'
        //     this.picture = 'https://randomuser.me/api/portraits/women/10.jpg'
        // },
    },
})

app.mount('#app') //mount to the div id=app