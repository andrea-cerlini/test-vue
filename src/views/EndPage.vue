<template>
  <div class="game-over-wrapper">
    <h2 class="msg-fine-quiz">Quiz terminato</h2>
    <div>
      <p class="fine-msg-wrap">
        Risposte esatte:
        <span class="fine-msg-correct"></span>
      </p>
      <p class="fine-msg-percent-wrap">
        Percentuale risposte esatte:
        <span class="fine-msg-percent"></span>
      </p>
      <p class="fine-msg-best-wrap">
        Migliore punteggio di
        <span class="fine-msg-best-name"> {{ username }}</span
        >:
        <span class="fine-msg-best"></span>
      </p>
    </div>
    <router-link to="/login" class="restart-button-link">
      <input type="button" class="restart-button" value="Restart" to="/login" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EndWrapper",
  props: ["username"],
  // eslint-disable-next-line
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
$text-font-size-regular: 20px;
$font-weight-big: 500;
$font-weight-thin: 300;
$color-white: white;

.msg-fine-quiz {
  color: rgb(63, 109, 184);
  font-weight: $font-weight-big;
  text-align: center;
}

.fine-msg {
  &-wrap {
    font-size: $text-font-size-regular;
  }

  &-correct {
    font-weight: $font-weight-thin;
  }

  &-percent-wrap {
    font-size: $text-font-size-regular;
  }

  &-percent {
    font-weight: $font-weight-thin;
  }

  &-best-wrap {
    font-size: $text-font-size-regular;
  }

  &-best-name {
    color: rgb(74, 133, 228);
  }

  &-best {
    font-weight: $font-weight-thin;
  }
}

.new-best {
  color: rgb(63, 168, 63);
}

.restart-button {
  background-color: rgb(74, 133, 228);
  border: 0;
  border-radius: 30px;
  box-shadow: 5px 5px 10px rgba(101, 131, 179, 0.5);
  color: $color-white;
  cursor: pointer;
  display: block;
  font-size: $text-font-size-regular;
  font-weight: $font-weight-big;
  margin: auto;
  margin-top: 5%;
  padding: 15px 35px;
  transition: 0.4s;
  &:hover {
    background-color: rgb(111, 155, 226);
    box-shadow: 6px 6px 15px rgba(65, 89, 128, 0.5);
    color: #444;
    transition: 0.4s;
  }
  &:active {
    background-color: rgb(63, 109, 184);
    box-shadow: 2px 2px 10px rgba(65, 89, 128, 0.8);
    color: $color-white;
    transition: 0.4s;
  }
}

.restart-button-link {
  text-decoration: none;
}
</style>
