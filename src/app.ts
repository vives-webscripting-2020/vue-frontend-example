import { createApp } from 'vue'
import axios from 'axios'

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
    }
})

app.mount('#app')