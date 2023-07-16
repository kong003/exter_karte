<template lang="">
    <div>
        <input type="text" v-model="inputText" placeholder="Suche nach Namen" class="search"/>
        <div class="box">
            <div class="resultItem" v-for="person in filteredList()" :key="person.name">
                <router-link class="link" :to="'/map/' + person.house"><a>{{ person.name }}</a></router-link> <br>
            </div>
            <div class="itemerror" v-if="inputText&&!filteredList().length">
                <p>Keine Person gefunden</p>
            </div>
        </div>
        
    </div>
</template>
<script>
import db from '@/assets/db.json'

export default {
    data() {
        return{
            inputText:""
        }
    },
    methods: {
        filteredList: function(){
            let myArray=[]
            let i = 0
            const people = this.people
            while(i < people.length){
                if(people[i].name.toLowerCase().includes(this.inputText.toLowerCase())) {
                    myArray.push(people[i])
                }
                i++
            }
            return myArray
        }
    },
    computed: {
        people() {
            return db.people.sort(function(a, b){
                var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
                if (nameA < nameB) //sort string ascending
                    return -1 
                if (nameA > nameB)
                    return 1
                return 0 //default return value (no sorting)
            })
        }
    }
}
</script>
<style scoped>
.search {
    padding: 6px;
    border: none;
    margin-top: 8px;
    margin-right: auto;
    margin-left: auto;
    display: block;
    font-size: 17px;
    font-family: "Montserrat";
    text-align: center;
}

.resultItem {
    display: flex;
    align-items: center;
    background-color: darkgrey;
    font-family: "Montserrat";
    width: 75%;
    height: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    justify-content: center;
    border-radius: 5px;
}

a {
    font-family: "MontserratSB", 'Montserrat';
    color: black;
    text-decoration: none
    
}

.itemerror {
    display: flex;
    align-items: center;
    background-color: lightcoral;
    font-family: "MontserratSB", 'Montserrat';
    width: 75%;
    height: 30px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    justify-content: center;
    border-radius: 5px;
}
    
</style>