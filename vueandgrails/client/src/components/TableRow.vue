<template id="tablerow-template" xmlns="http://www.w3.org/1999/xhtml">
    <tr @click="navigateToHello(item)"> <!-- 1 -->
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.make.name }}</td>
      <td>{{ item.model.name }}</td>
      <td>{{ item.driver.name }}</td>
    </tr>
</template>

<script>
export default {
  /* eslint-disable */
  props: {
      item: Object
  },
  methods: {
    navigateToHello(item) {
      this.$router.push('Hello')
      this.$store.commit('item',item)
      console.log(item)
    }
  },
}
</script>

<style>
</style>
