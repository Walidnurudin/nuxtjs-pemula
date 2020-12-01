<template>
  <div>
    <div>
      {{covid}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      covid: null
    }
  },
  methods: {
    getData() {
      axios
        .get('https://indonesia-covid-19.mathdro.id/api')
        .then((res) => {
          this.covid = res.data;
        })
        .catch((err) => console.log(err))
    },
  },
  mounted() {
    this.getData()
  },
}
</script>