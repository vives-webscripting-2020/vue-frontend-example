import { createApp } from 'vue'
import axios from 'axios'
import colorRow from './components/color-row'

console.log("hello world...")

const app = createApp( {
    data() {
        return  {
            hello: "hello world",
            colors: []
        }
    },
    mounted() {
        axios.get('https://reqres.in/api/color')
        .then( (result) => {
            console.log(result.data.data)
            this.colors = result.data.data
         })
         this.$event
    },
    methods: {
        deleteColor(id: number) {
            console.log(`delete color with id: ${id}`)
            axios.delete(`https://reqres.in/api/color/${id}`)
            // .then( result => console.log(result))
        },
        updateColor( color: {id: number, name: string, year: string, color: string}) {
            console.log('Update color: ', color)
            axios.put(`https://reqres.in/api/color/${color.id}`, color)
        }
    }
})

app.component('color-row', colorRow)

app.mount('#app')