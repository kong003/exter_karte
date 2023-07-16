<template>
    <div style="height:85vh; margin-top: 8px; border-radius: 5px !important">
    <l-map 
      style="border-radius: 5px;"
      ref="map" 
      :zoom="16" 
      :center="[59.2283190,10.3642812]" 
      :options="{
        zoomControl: false, 
        minZoom: 16, 
        maxZoom: 18
      }">
       <l-tile-layer
        :url="layerurl"
        layer-type="overlay"
        name="Brunstad"
      />
      
      <l-marker 
        v-for="house in houses" 
        :lat-lng="house.coordinates" 
        :key="house.id"
        @click="text = getNames(house.house, people)"
        :visible="isVisible(house.house, people)"
        :ref="'marker' + house.house">
        <l-icon
          :icon-size="[40,40]"
          :icon-url="iconUrl"
          :icon-anchor="[20,40]"
        >
        </l-icon>
        <l-popup>
          <h3>Haus {{ house.house }}</h3>
          <table>
            <tr>
              <th class="name">
                <div class="testus">
                  Name
                </div>
                
              </th>
              <th class="suite">
                Suite
              </th>
            </tr>
            <tr v-for="(person, index) in text" :key="person + index">
              <td class="name">
                 {{ person.name }}
              </td>
              <td class="suite">
                {{ person.suite }}
              </td>
            </tr>
          </table>
        </l-popup>
      </l-marker>
      
  
      
    </l-map>
  </div>
  </template>
  <script>

/* eslint-disable */
import { LMap, LMarker, LPopup, LIcon, LTileLayer} from "vue2-leaflet";
  import db from ".././assets/db.json"
  import 'leaflet/dist/leaflet.css';
  
  
  export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LIcon

  },
  
   methods: {
    isVisible: function(house, people){
      var i = 0
      var result = false

      while(i < people.length){
        if ( people[i].house == house ) {
          result = true
        }
        if(result) {i = people.lenght}
        i++
      }

      return result
      
    },
    getNames: function(house, people) {
      var myArray = []
      var i = 0
  
      while(i < people.length){
        if ( people[i].house == house ) {
          myArray.push(people[i])
        }
        i++
      }
      myArray.sort(function(a, b) {
        var keyA = a.suite,
          keyB = b.suite

        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });


      console.log(myArray)
      return myArray
    },
  },

  computed: {
    id: function() {
      return this.$route.params.id
    }
  },
  
  data() {
    return {
      iconUrl:"",
      layerurl: "",
      text: "",
      zoom: 20,
      width: 3900,
      height: 5000,
      houses: db.houses,
      people: db.people,
      bounds:[[59.2235096301784, 10.3543929315586], [59.233596018987, 10.3699098607275]],
    }
  },
  mounted() {
    this.$nextTick(() =>{
      if (!this.id){ return }
      this.text = this.getNames(this.id, this.people)
      this.$refs['marker' + this.id][0].mapObject.openPopup()
    })
    this.layerurl = 'http://'+ process.env.VUE_APP_PUBLIC_URL +'/MapTiles/{z}/{x}/{y}.png'
    this.iconUrl = 'http://'+ process.env.VUE_APP_PUBLIC_URL +'/marker.png'
  }
}
  
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');
  l-popup {
    
    font-family: 'Montserrat';
    display: block;
  }
  .leaflet-container {
    background-color: #333;
    border-radius: 5px;
  }
  .map-popup,
.leaflet-popup-content-wrapper {
  background-color: white;
  border-radius: 5px;
  width: 20em;
  text-align: center;
}

/* spacing */
h3{
  margin: 0px;
}

table {
  padding-left: 0;
  margin-left: 0;
  table-layout: fixed;
  width: 100%;

}

th {
  margin-top: 1em;
}


th,
td {
  align-items: center;
  background-color: darkgrey;
  font-family: "Montserrat";
  height: 25px;
  text-align: center;
  margin-left: 0;
  margin-right: 0;
  margin-top: 8px;
  justify-content: center;
  border-radius: 5px;
}


.name {
  width: 70%;
}
.suite {
  width: 30%;
}


</style>