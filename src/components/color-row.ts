import { defineComponent } from 'vue'

export default defineComponent({
    name: 'color-row',
    props: {
        id: { type: Number },
        name: { type: String },
        year: { type: String },
        color: { type: String }
    },
    data() {
        return {
            edit: false,
            changedColor: {
                id: this.id,
                name: this.name,
                year: this.year,
                color: this.color
            }
        }
    },
    template:
        /*html*/
        `
        <tr>
            <td v-if="!edit">{{ name }}</td>
            <td v-if="!edit">{{ year }}</td>
            <td v-if="!edit">{{ color }}</td>
            <td v-if="edit"><input class="input" v-model="changedColor.name"/></td>
            <td v-if="edit"><input class="input" v-model="changedColor.year" /></td>
            <td v-if="edit"><input class="input" v-model="changedColor.color" /></td>
            <td>
                <span class="icon" v-if="!edit" @click="edit = true">
                    <i class="fas fa-edit"></i>
                </span>
                <button v-if="edit" class="button is-danger" @click="updateColor">
                    Save
                </button>
                <span class="icon" @click="deleteColor">
                    <i class="fas fa-trash-alt"></i>
                </span>
            </td>
        </tr>
        `,
    methods: {
        deleteColor() {
            this.$emit('delete-color', this.id)
        },
        updateColor() {
            if(this.edit){
                this.$emit('update-color', this.changedColor)
            }
            this.edit = false
        }
    }
})