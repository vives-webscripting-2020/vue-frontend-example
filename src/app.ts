import { createApp } from 'vue'

console.log("hello world...")

const app = createApp( {
    data() {
        return  {
            hello: "hello world",
        }
    },
})

app.mount('#app')