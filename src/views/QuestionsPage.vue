<template>
  <div>
    <p class="question-paragraph">
      {{ questionDatabase[currentQuestion].question }}
    </p>
    <div class="answer-container">
      <div
        :key="'answer' + index"
        @click="checkAnswerIndex(index)"
        class="answer"
        v-for="(answer, index) in questionDatabase[currentQuestion].answers"
      >
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "QuestionsPage",
  data() {
    return {
      currentQuestion: 0,
      currentQuestionNumber: 1,
      questionDatabase: [
        // Array con tutte le domande, le risposte e il numero di quella giusta
        {
          question: "Che anno viene dopo il 2020?", // Prima question
          answers: ["2200", "-3", "tabasco", "2021"], // Risposte disponibili
          indexOfTheCorrectAnswer: 3, // Indice della risposta giusta
        },
        {
          question: "Quanto potassio c'e' in una banana?",
          answers: [
            "Meno infinito",
            "In media circa il 9%",
            "Esattamente 4 chilometri",
            "Le banane sono in realta' radioattive",
          ],
          indexOfTheCorrectAnswer: 1,
        },
        {
          question: "Ludwig Van Beethoven e' ancora vivo?",
          answers: [
            "No, e' tipo morto due secoli fa",
            "Certo =)",
            "E' morto stamattina",
            "Si, ma non per molto",
          ],
          indexOfTheCorrectAnswer: 0,
        },
        {
          question: "Che forma ha il display di un televisore standard?",
          answers: ["Verde", "Icosaedro tronco", "Triangolo", "Rettangolo"],
          indexOfTheCorrectAnswer: 3,
        },
        {
          question: "Vero o falso? Gli umani respirano aria",
          answers: ["Vero", "Falso"],
          indexOfTheCorrectAnswer: 0,
        },
        {
          question:
            "Quale di queste opzioni e' il nome di un giorno della settimana?",
          answers: ["Ginevro", "42", "Sabato", "Domanica"],
          indexOfTheCorrectAnswer: 2,
        },
        {
          question: "Vero o falso? Il sole non e' luminoso",
          answers: ["Vero", "Falso"],
          indexOfTheCorrectAnswer: 1,
        },
        {
          question: "Quanto fa 1+1 (nella matematica classica)?",
          answers: [
            "Mille",
            "La matematica e' sopravvalutata",
            "2",
            "Radice cubica di e",
          ],
          indexOfTheCorrectAnswer: 2,
        },
        {
          question: "Domanda",
          answers: [
            "Risposta sbagliata",
            "Risposta giusta",
            "Risposta sbagliata",
            "Risposta non non sbagliata",
          ],
          indexOfTheCorrectAnswer: 1,
        },
        {
          question: "Di che colore sono le arance?",
          answers: ["Nero", "Grillotalpa", "Giallo", "Arancione"],
          indexOfTheCorrectAnswer: 3,
        },
        {
          question: "Quante 'C' ci sono nella parola CIAO?",
          answers: ["Una sola", "Cento", "Fotosintesi clorofilliana", "Zero"],
          indexOfTheCorrectAnswer: 0,
        },
        {
          question: "In che Stato si trova Roma?",
          answers: [
            "Quattro",
            "Repubblica di Venezia",
            "Italia",
            "Roma non esiste",
          ],
          indexOfTheCorrectAnswer: 2,
        },
        {
          question: "Vero o falso? Un chilo di cipolle pesa un chilo",
          answers: ["Falso", "Vero"],
          indexOfTheCorrectAnswer: 1,
        },
        {
          question: "Che forma hanno gli occhi umani?",
          answers: [
            "Piramidale",
            "Scarsa, non hanno muscoli",
            "Cubica",
            "Sferica, approssimativamente",
          ],
          indexOfTheCorrectAnswer: 3,
        },
        {
          question: "Vero o falso? Il monte Everest e' piu' alto di un uomo",
          answers: ["Vero", "Falso", "No", "Aceto"],
          indexOfTheCorrectAnswer: 0,
        },
      ],
      score: 0,
      totalQuestionsNumber: 10,
    };
  },
  beforeMount() {
    if (this.$attrs["username"] === "") {
      this.$router.push({ path: "/login" }); // Redirect alla pagina del login, nel caso in cui si inserisca il link diretto
      alert("Accesso vietato: inserire un nome!");
    }
  },
  methods: {
    loadQuestion: function () {
      if (this.currentQuestionNumber < this.totalQuestionsNumber) {
        this.currentQuestion =
          Math.trunc(Math.random() * 100) % this.questionDatabase.length; // Setto la domanda in maniera casuale
        this.currentQuestionNumber++; // Aumento il contatore delle domande
      } else {
        this.$emit("endOfGame", this.score, this.totalQuestionsNumber);
        this.currentQuestionNumber = 0;
        this.$router.push({ path: "/end" });
      }
    },

    checkAnswerIndex: function (index: number) {
      if (
        index ===
        this.questionDatabase[this.currentQuestion].indexOfTheCorrectAnswer
      ) {
        this.score++;
      }
      var previousQuestion = this.currentQuestion;
      this.questionDatabase.splice(previousQuestion, 1);
      this.loadQuestion();
    },
  },
  mounted() {
    this.currentQuestion =
      Math.trunc(Math.random() * 100) % this.questionDatabase.length;
  },
});
</script>

<style scoped lang="scss">
$font-size-big: 30px;

.question-paragraph {
  font-size: $font-size-big;
  text-align: center;
}

.answer-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.answer {
  background-color: $main-color;
  border-radius: $rounded-border-radius;
  border: 2px solid $main-grey-color;
  box-sizing: border-box;
  color: $color-white;
  cursor: pointer;
  font-size: $font-size-big;
  font-weight: $font-weight-thin;
  margin: 2%;
  padding: 3.5%;
  text-align: center;
  transition: 0.4s;
  width: 45%;

  &:hover {
    background-color: lighten($main-color, 10%);
    border: 2px solid lighten($main-grey-color, 10%);
    transition: 0.4s;
  }

  &:active {
    background-color: lighten($main-color, 20%);
    border: 2px solid lighten($main-grey-color, 20%);
    color: darken($main-grey-color, 5%);
    transition: 0.4s;
  }
}
</style>
