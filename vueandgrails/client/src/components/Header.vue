<template id="app-header-template">
  <div class="container">
    <div class="adjustment">
      <img src="../assets/edora.png">
      <br>
      <div class="clock">{{ clock }}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Header',
  methods: {
  },
  created () {
    setInterval(() => {
      this.clock = moment().format('h:mm:ss')
    }, 1000)
  },
  data () {
    return {
      clock: moment()
    }
  }
}
</script>

<style>
.adjustment{
  margin: 30px;
}
.container {
  background-color: lightgray;
  border-radius: 10px;
}
.clock {
  color: black;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 30px;
}
</style>
