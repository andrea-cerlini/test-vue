<template>
  <div class="login-page">
    <h2 class="login-title">Login</h2>
    <p class="login-message">Inserisci il tuo nome</p>
    <p v-if="showErrorMessage" class="error-message">Inserisci un nome!</p>
    <input
      @keydown.enter="onLog"
      class="name-input"
      placeHolder="Inserisci il nome :^)"
      type="text"
      v-model="username"
    />
    <input
      @click="onLog"
      class="login-button"
      type="button"
      value="Inizia il quiz"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "LoginPage",
  data() {
    return {
      showErrorMessage: false,
      username: "",
    };
  },
  methods: {
    onLog: function () {
      if (this.username === "") {
        this.showErrorMessage = true;
        (
          document.getElementsByClassName("name-input")[0] as HTMLInputElement
        ).focus();
      } else {
        this.$router.push({ path: "/quiz" });
        this.$emit("logSuccess", this.username);
      }
    },
  },
  mounted() {
    (
      document.getElementsByClassName("name-input")[0] as HTMLInputElement
    ).focus();
  },
});
</script>

<style scoped lang="scss">
@use "sass:color";
$font-size-regular: 18px;
$font-size-small: #{$font-size-regular - 2px};

.login-title {
  color: $main-title-color;
  font-weight: $font-weight-big;
  text-align: center;
}

.login-message {
  color: lighten($main-grey-color, 20 / 3 /* 6.6666666 */);
  font-size: $font-size-regular;
  font-weight: $font-weight-bold;
  text-align: center;
}

.name-input {
  background-color: rgba($main-color, 0.3);
  border: 2px solid lighten($main-grey-color, 25%);
  border-radius: $rounded-border-radius;
  color: $main-grey-color;
  display: block;
  font-size: $font-size-small;
  margin: auto;
  margin-top: 2.5%;
  outline: none;
  padding: 5px 8px;
  text-align: center;
  transition: 0.4s;
  width: 40%;
  &:hover {
    background-color: $input-focus-color;
    transition: 0.4s;
  }
  &:focus {
    background-color: $input-focus-color;
    border: 2px solid $main-grey-color;
    transition: 0.4s;
  }
}

.login-button {
  background-color: $main-color;
  border: 0;
  border-radius: 30px;
  box-shadow: $box-shadow-main;
  color: $color-white;
  cursor: pointer;
  display: block;
  font-size: $font-size-regular;
  font-weight: $font-weight-big;
  margin: auto;
  margin-top: 5%;
  padding: 15px 35px;
  transition: 0.4s;
  &:hover {
    background-color: lighten($main-color, 15%);
    box-shadow: $box-shadow-hover;
    color: #444;
    transition: 0.4s;
  }
  &:active {
    background-color: $button-active-color;
    box-shadow: $box-shadow-active;
    color: $color-white;
    transition: 0.4s;
  }
}

.error-message {
  color: rgb(255, 73, 73);
  text-align: center;
}
</style>
