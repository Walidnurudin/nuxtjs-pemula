<template>
  <div>
    <div v-if="err">
      {{ errMessage }}
    </div>
    {{ covid }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      covid: null,
      err: false,
      errMessage: '',
    }
  },
  methods: {
    getData() {
      this.$api
        .get('/api')
        .then((res) => {
          this.covid = res.data
        })
        .catch((err) => {
          this.err = true
          this.errMessage = err
          console.log(err)
        })
    },
  },
  mounted() {
    this.getData()
  },
}
</script>