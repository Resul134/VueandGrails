<template id="fulltable-template" xmlns="http://www.w3.org/1999/xhtml">
  <table class="table">
    <thead class="thead-inverse">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Make</th>
        <th>Model</th>
        <th>Driver</th>
      </tr>
    </thead> 
      <TableRow v-for="vehicle in vehicles"
                 :item="vehicle" :key="vehicle.id"></TableRow> 
  </table>
</template>

<script>
import TableRow from '../TableRow.vue'

export default {
  props: {
      vehicle: Array
  },
  components: { 
    TableRow
  }
}
</script>

<style>
</style>
