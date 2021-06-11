<template>
  <div id="app" @logSuccess="onLoginSuccess">
    <router-view :username="transmitUsername" />
  </div>
</template>

<script>
export default {
  name: "App",
  // eslint-disable-next-line
  data() {
    return {};
  },
  components: {},
  computed: {
    // Proprietà per passare l'username ad EndPage, ma non alle altre pagine
    // eslint-disable-next-line
    transmitUsername() {
      return this.username;
    },
  },
  methods: {
    // eslint-disable-next-line
    onLoginSuccess(value) {
      this.username = value;
    },
  },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 5%;
  user-select: none;
}
</style>
