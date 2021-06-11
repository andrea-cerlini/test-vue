<template>
  <div>
    <p class="question-paragraph"></p>
    <div class="answer-container"></div>
  </div>
</template>

<script>
export default {
  name: "QuestionsWrapper",
  // eslint-disable-next-line
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
$color-white: white;
$font-size-big: 30px;
.question-paragraph {
  font-size: $font-size-big;
  text-align: center;
}
.answer-table {
  border-spacing: 15px;
  row-gap: 10%;
  width: 100%;
}
.answer {
  background-color: rgb(73, 137, 211);
  border: 2px solid #555;
  border-radius: 5px;
  box-sizing: border-box;
  color: $color-white;
  cursor: pointer;
  font-size: $font-size-big;
  font-weight: 300;
  margin: 2%;
  padding: 3.5%;
  text-align: center;
  transition: 0.4s;
  width: 45%;
  &:hover {
    background-color: rgb(107, 155, 211);
    border: 2px solid #777;
    transition: 0.4s;
  }
  &:active {
    background-color: rgba(99, 150, 209, 0.5);
    border: 2px solid #333;
    color: #444;
    transition: 0.4s;
  }
}
</style>
