import { defineComponent } from 'vue'

export default defineComponent({
    name: 'new-color-form',
    data() {
        return {
            name: '',
            year: '',
            color: ''
        }
    },
    template:
        /*html*/
        `
        <div class="columns">
            <div class="field column">
                <label class="label">Name</label>
                <div class="control">
                <input class="input" v-model="name" type="text" placeholder="Name">
                </div>
                <p class="help">The name of the color</p>
            </div>
            <div class="field column">
                <label class="label">Year</label>
                <div class="control">
                <input class="input" v-model="year" type="text" placeholder="Year">
                </div>
                <p class="help">When is it created</p>
            </div>
            <div class="field column">
                <label class="label">Color</label>
                <div class="control">
                <input class="input" v-model="color" type="text" placeholder="#000000">
                </div>
                <p class="help">The hex value of the color</p>
            </div>
        </div>
        <div>
            <button class="button is-primary" @click="createColor">
                Add
            </button>
        </div>
        `,
    methods: {
        createColor() {
            this.$emit('create-color', { name: this.name, year: this.year, color: this.color})
        }
    }
})