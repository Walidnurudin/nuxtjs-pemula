<template>
  <div>
    about
    <span v-html="temp"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      temp: "<h1>Woke</h1>"
    }
  },
}
</script>