<template>
  <div>
    <div>
      {{covid}}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      covid: null
    }
  },
  methods: {
    getData() {
      this.$api.get('/api')
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