import { createApp } from 'vue'
import axios from 'axios'
import colorRow from './components/color-row'
import newColorForm from './components/new-color-form'

console.log("hello world...")

const app = createApp( {
    data() {
        return  {
            hello: "hello world",
            colors: []
        }
    },
    mounted() {
        this.getColors()
    },
    methods: {
        deleteColor(id: number) {
            console.log(`Delete color with id: ${id}`)
            axios.delete(`https://reqres.in/api/color/${id}`)
            .then( () => {
                this.getColors()
            })
        },
        updateColor( color: {id: number, name: string, year: string, color: string}) {
            console.log('Update color: ', color)
            axios.put(`https://reqres.in/api/color/${color.id}`, color)
            .then( () => {
                this.getColors()
            })
        },
        createColor( color: {name: string, year: string, color: string}) {
            console.log("Create color:", color)
            axios.post('https://reqres.in/api/color', color)
            .then( () => {
                this.getColors()
            })
        },
        getColors() {
            axios.get('https://reqres.in/api/color')
            .then( (result) => {
                console.log(result.data.data)
                this.colors = result.data.data
             })
        }
    }
})

app.component('color-row', colorRow)
app.component('new-color-form', newColorForm)

app.mount('#app')