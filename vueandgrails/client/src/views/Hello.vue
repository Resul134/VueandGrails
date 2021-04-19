<template>
<div>
    <div class="headerbox">
        <h2>
          Item information
        </h2>
    </div>
    <div class="row">
        <div class="col-sm-5">
          <div class="info">
              <h3>ID:</h3>
              <div class="itemdisplay">{{ item.id }}</div>
          </div>
          <div class="info">
              <h3>Name:</h3>
              <div class="itemdisplay">{{ item.name }}</div>
          </div>
          <div class="info">
              <h3>Maker:</h3>
              <div class="itemdisplay">{{ item.make.name }}</div>
          </div>
          <div class="info">
              <h3>Year:</h3>
              <div class="itemdisplay" v-if="item.make.year">{{ item.make.year }}</div>
              <div class="itemdisplay" v-else>Year unknown</div>
          </div>
          <div class="info">
              <h3>Model:</h3>
              <div class="itemdisplay">{{ item.model.name }}</div>
          </div>
          <div class="info">
              <h3>Driver:</h3>
              <div class="itemdisplay">{{ item.driver.name }}</div>
          </div>
        </div>
        </div>
        <div class="col-sm-5">
        </div>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      serverURL: process.env.SERVER_URL,
      HelloText: 'This is an example page for routing',
      item: null
    }
  },
  watch: {
    item (newValue, oldValue) {
      console.log(`Gamle værdi ${oldValue} - Ny værdi ${newValue.id}`)
    } // refaktuering. Bedre at benytte watch end @change.
  },
  mounted () {
    this.item = this.$store.state.item
  }

}
</script>

<style scoped>
h2{
    font-style:italic;
}
.headerbox {
    text-align: center;
    font-style: bold;
    font-size: 35px;
}
.info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 2px gray solid;
  margin: 5px;
}
.itemdisplay {
  font-size: 15px;
  padding-top:10px;
}
</style>
