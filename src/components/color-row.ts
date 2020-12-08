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
            <td v-if="edit"><input v-model="changedColor.name"/></td>
            <td v-if="edit"><input v-model="changedColor.year" /></td>
            <td v-if="edit"><input v-model="changedColor.color" /></td>
            <td>
                <span class="icon" @click="updateColor">
                    <i class="fas fa-edit"></i>
                </span>
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
                this.$emit('update-color', {
                    id: this.id,
                    name: this.name,
                    color: this.color,
                    year: this.year
                })
            }
            this.edit = !this.edit
        }
    }
})