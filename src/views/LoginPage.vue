<template>
  <div class="login-wrapper">
    <h2 class="login-title">Login</h2>
    <p class="login-message">Inserisci il tuo nome</p>
    <p v-if="showErrorMessage" class="error">Inserisci un nome!</p>
    <input
      type="text"
      class="name"
      v-model="username"
      placeHolder="Inserisci il nome :^)"
    />
    <input
      type="button"
      class="login-button"
      value="Inizia il quiz"
      @click="onLog"
    />
  </div>
</template>

<script>
export default {
  name: "LoginWrapper",
  // eslint-disable-next-line
  data() {
    return {
      username: "",
      showErrorMessage: false,
    };
  },
  methods: {
    // eslint-disable-next-line
    onLog: function () {
      if (this.username === "") {
        this.showErrorMessage = true;
      } else {
        this.$router.push({ path: "/quiz" });
      }
    },
  },
};
</script>

<style scoped>
.login-title {
  color: rgb(63, 109, 184);
  font-weight: 500;
  text-align: center;
}

.login-message {
  color: #555;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.name {
  background-color: rgba(133, 180, 255, 0.4);
  border: 2px solid #777;
  border-radius: 5px;
  color: #444;
  display: block;
  font-size: 18px;
  margin: auto;
  margin-top: 2.5%;
  outline: none;
  padding: 5px 8px;
  text-align: center;
  transition: 0.4s;
  width: 40%;
}

.name:hover {
  background-color: rgba(177, 206, 250, 0.3);
  transition: 0.4s;
}

.name:focus {
  background-color: rgba(166, 200, 255, 0.3);
  border: 2px solid #444;
  transition: 0.4s;
}

.login-button {
  background-color: rgb(74, 133, 228);
  border: 0;
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(101, 131, 179, 0.5);
  color: white;
  cursor: pointer;
  display: block;
  font-size: 20px;
  font-weight: 500;
  margin: auto;
  margin-top: 5%;
  padding: 15px 35px;
  transition: 0.4s;
}

.login-button:hover {
  background-color: rgb(111, 155, 226);
  box-shadow: 6px 6px 15px rgba(65, 89, 128, 0.5);
  color: #444;
  transition: 0.4s;
}

.login-button:active {
  background-color: rgb(63, 109, 184);
  box-shadow: 2px 2px 10px rgba(65, 89, 128, 0.8);
  color: white;
  transition: 0.4s;
}

.error {
  color: rgb(255, 73, 73);
  text-align: center;
}
</style>
