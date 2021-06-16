<template>
  <div class="game-over-wrapper">
    <h2 class="msg-end-quiz">Quiz terminato</h2>
    <div>
      <p class="end-msg-wrap">
        Risposte esatte:
        <span
          :class="{ 'new-best': currentPlayerBest === score }"
          :score="score"
          :totalQuestionsNumber="totalQuestionsNumber"
          class="end-msg-correct"
        >
          {{ score + " su " + totalQuestionsNumber }}</span
        >
        <span
          class="new-best end-msg-correct"
          v-if="currentPlayerBest === score"
        >
          - miglior punteggio! :D</span
        >
      </p>
      <p class="end-msg-percent-wrap">
        Percentuale risposte esatte:
        <span
          :score="score"
          :totalQuestionsNumber="totalQuestionsNumber"
          class="end-msg-percent"
        >
          {{ (100 * score) / totalQuestionsNumber + "%" }}
        </span>
      </p>
      <p class="end-msg-best-wrap">
        Migliore punteggio di
        <span :username="username" class="end-msg-best-name">
          {{ username }}</span
        >:
        <span
          :class="{ 'new-best': currentPlayerBest === score }"
          :currentPlayerBest="currentPlayerBest"
          :totalQuestionsNumber="totalQuestionsNumber"
          class="end-msg-best"
        >
          {{ currentPlayerBest + " su " + totalQuestionsNumber }}
        </span>
      </p>
    </div>
    <router-link to="/login" class="restart-button-link">
      <input class="restart-button" to="/login" type="button" value="Restart" />
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "EndPage",
  data() {
    return {
      currentPlayerBest: parseInt(this.$attrs["currentPlayerBest"]),
      score: parseInt(this.$attrs["score"]),
      totalQuestionsNumber: parseInt(this.$attrs["totalQuestionsNumber"]),
      username: this.$attrs["username"],
    };
  },
  methods: {},
  beforeMount() {
    if (this.username === "") {
      this.$router.push({ path: "/login" }); // Redirect alla pagina del login, nel caso in cui si inserisca il link diretto
      alert("Accesso vietato: inserire un nome!");
    }
  },
});
</script>

<style scoped lang="scss">
$text-font-size-regular: 20px;

.msg-end-quiz {
  color: $main-title-color;
  font-weight: $font-weight-big;
  text-align: center;
}

.end-msg {
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
    color: $main-color;
  }

  &-best {
    font-weight: $font-weight-thin;
  }
}

.new-best {
  color: rgb(63, 168, 63);
}

.restart-button {
  background-color: $main-color;
  border: 0;
  border-radius: 30px;
  box-shadow: $box-shadow-main;
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
    background-color: lighten($main-color, 15%);
    box-shadow: $box-shadow-hover;
    color: $main-grey-color;
    transition: 0.4s;
  }
  &:active {
    background-color: $button-active-color;
    box-shadow: $box-shadow-active;
    color: $color-white;
    transition: 0.4s;
  }
}

.restart-button-link {
  text-decoration: none;
}
</style>
