<template lang="">
    <div>
        <label>Name</label>
        <input type="text" v-model="name">
        <br>
        <label>House</label>
        <input type="text" v-model="house">
        <br>
        <label>Suite</label>
        <input type="text" v-model="suite">
        <br>
        <input type="button" @click="submit()">
        <span>
            {{ db }}
        </span>
    </div>
</template>
<script>
import db from ".././assets/db.json"

export default {
    data(){ return {
        db: db,
        name: "",
        house: "",
        suite: ""
    }},

    methods: {
        submit: function() {
            var newPerson = {}
            newPerson.name = this.name,
            newPerson.house = this.house,
            newPerson.suite = this.suite

            this.db.people.push(newPerson)

        }
    },
}
</script>
<style lang="">
    
</style>