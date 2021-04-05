<template>
  <div id="garage">
    <Header></Header>
    <VehicleForm v-model="vehicle"
                  :makes="makes"
                  :models="models"
                  :drivers="drivers"
                  @submit="submitNewVehicle()">

    </Vehicleform>
    <VehicleTable :vehicles="vehicles"></VehicleTable>
  </div>
</template>

<script>
import Header from './Header'
import VehicleForm from './form/VehicleForm'
import VehicleTable from './table/VehicleTable'
import apiurl from '../Utils/apiurl'

  export default {
    components: {
      Header,
      VehicleForm,
      VehicleTable
    },
    data: function () {
      return {
        vehicles: [],
        vehicle: {name: '', make: null, model: null, driver: null},
        models: [],
        makes: [],
        drivers: [],
        serverURL: process.env.SERVER_URL
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData: async function () {
        try {
          await Promise.all([
            this.fetchVehicles(),
            this.fetchModels(),
            this.fetchModels(),
            this.fetchMakes(),
            this.fetchDrivers()
          ])
        } catch (error) {
          console.log(error)
        }
      },
      fetchVehicles: function () {
        fetch(`${apiurl}/vehicle`)
          .then(r => r.json())
          .then(json => { this.vehicles = json })
          .catch(error => console.error('Error retrieving vehicles: ' + error))
      },
      fetchModels: function () {
        fetch(`${apiurl}/model`)
          .then(r => r.json())
          .then(json => { this.models = json })
          .catch(error => console.error('Error retrieving models: ' + error))
      },
      fetchMakes: function () {
        fetch(`${apiurl}/make`)
          .then(r => r.json())
          .then(json => { this.makes = json })
          .catch(error => console.error('Error retrieving makes: ' + error))
      },
      fetchDrivers: function () {
        fetch(`${apiurl}/driver`)
          .then(r => r.json())
          .then(json => { this.drivers = json })
          .catch(error => console.error('Error retrieving drivers: ' + error))
      },
      submitNewVehicle: function () {
        const vehicle = this.vehicle
        fetch(`${apiurl}/vehicle`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(vehicle)
        }).then(r => r.json())
          .then(json => {
            this.vehicles.push(json)
            this.vehicle = {name: '', make: null, model: null, driver: null}
          })
          .catch(ex => console.error('Unable to save vehicle', ex))
    }
  }
}
</script>

<!-- Per Component Custom CSS Rules -->
<style>
  #garage {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }
</style>