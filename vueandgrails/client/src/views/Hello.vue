<template>
<div>
    <div class="headerbox">
        <h2>
        {{ HelloText }}
        </h2>
    </div>
</div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      serverURL: process.env.SERVER_URL,
      HelloText: 'This is an example page for routing'
    }
  }
}
</script>

<style scoped>
h2{
    font-style:italic;
    font-size: 25px;
}
.headerbox {
    width: 800px;
    margin: 0 auto;
}
</style>
