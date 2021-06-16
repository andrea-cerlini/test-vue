<template>
  <div id="app">
    <router-view
      :currentPlayerBest="currentPlayerBest"
      :score="score"
      :totalQuestionsNumber="totalQuestionsNumber"
      :username="username"
      @endOfGame="onGameEnd"
      @logSuccess="onLoginSuccess"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
interface Player {
  name: string;
  bestScore: number;
}

export default Vue.extend({
  name: "App",
  data() {
    return {
      currentPlayerBest: 0,
      logged: false,
      playerDatabase: [] as Player[],
      score: 0,
      totalQuestionsNumber: 0,
      username: "",
    };
  },
  methods: {
    onLoginSuccess: function (name: string) {
      this.username = name;
      this.logged = true;
    },

    onGameEnd: function (score: number, totalQuestionsNumber: number) {
      this.score = score;
      this.updateDatabase(score);
      this.totalQuestionsNumber = totalQuestionsNumber;
      this.logged = false;
    },

    updateDatabase: function (score: number) {
      var found = false;
      this.playerDatabase.forEach((player) => {
        if (this.username === player.name) {
          // Guardo tra i nomi se c'è quello del giocatore corrente
          if (score > player.bestScore) {
            // Se il giocatore è presente, vedo se il suo score è maggiore del best
            player.bestScore = score;
            this.currentPlayerBest = score;
          } else {
            this.currentPlayerBest = player.bestScore;
          }
          found = true;
        }
      }); // Scorro la lista dei giocatori nel database per vedere se c'è già
      if (!found) {
        // Se invece il nome del giocatore non è presente nel database, lo aggiungo a quelli presenti
        this.playerDatabase.push({ name: this.username, bestScore: score });
        this.currentPlayerBest = score;
      }
    },
  },
});
</script>

<style lang="scss">
@import "css/globalcss.scss";
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 5%;
  user-select: none;
}
</style>
