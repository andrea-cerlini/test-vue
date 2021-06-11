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
        <span class="fine-msg-best-name"></span>:
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
  // eslint-disable-next-line
  data() {
    return {};
  },
};
</script>

<style scoped>
.msg-fine-quiz {
  color: rgb(63, 109, 184);
  font-weight: 500;
  text-align: center;
}

.fine-msg-wrap {
  font-size: 20px;
}

.fine-msg-correct {
  font-weight: 300;
}

.fine-msg-percent-wrap {
  font-size: 20px;
}

.fine-msg-percent {
  font-weight: 300;
}

.fine-msg-best-wrap {
  font-size: 20px;
}

.fine-msg-best-name {
  color: rgb(74, 133, 228);
}

.fine-msg-best {
  font-weight: 300;
}

.new-best {
  color: rgb(63, 168, 63);
}

.restart-button-link {
  text-decoration: none;
}

.restart-button {
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

.restart-button:hover {
  background-color: rgb(111, 155, 226);
  box-shadow: 6px 6px 15px rgba(65, 89, 128, 0.5);
  color: #444;
  transition: 0.4s;
}

.restart-button:active {
  background-color: rgb(63, 109, 184);
  box-shadow: 2px 2px 10px rgba(65, 89, 128, 0.8);
  color: white;
  transition: 0.4s;
}
</style>
