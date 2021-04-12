<template id="add-vehicle-template" xmlns="http://www.w3.org/1999/xhtml">
  <div>
    <VehicleFormHeader/>
    <div id="inputRow" class="row">
      <div class="col-sm-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Enter a name..." v-model="vehicle.name">
        </div>
      </div>
      <div class="col-sm-7">
        <div class="row">
          <div class="col-sm-4">
            <field-select v-model="vehicle.make" :field="'Make'" :values="makes"></field-select>
          </div>
          <div class="col-sm-4">
            <field-select v-model="vehicle.model" :field="'Model'" :values="models"></field-select>
          </div>
          <div class="col-sm-4">
            <field-select v-model="vehicle.driver" :field="'Driver'" :values="drivers"></field-select>
          </div>
        </div>
      </div>
      <div class="col-sm-2">
        <div class="btn-group" role="group" aria-label="Add new vehicle">
          <button type="button" class="btn btn-success" @click="submit()">Add to Garage</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import VehicleFormHeader from './VehicleFormHeader'
import FieldSelect from './FieldSelect'
/* eslint-disable */
export default {
  props: ['vehicle', 'makes', 'models', 'drivers'],
  model: {
    prop: 'vehicle', 
    event: 'change'
  },
  components: {
    VehicleFormHeader,
    FieldSelect
  },
  methods: {
    submit () { 
      this.$emit('submit')
      // vuex store text
      this.$store.commit('test', false)
      console.log(this.$store.state.test)
      this.$store.commit('test', true)
      console.log(this.$store.state.test)
      // vuex store test
    }
  }
}
</script>

<style>
</style>
