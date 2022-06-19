<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <div>
    <header>
      <h1 class="Htitle">Vita Shredded</h1>
      <p class="Cliche">Stay Shredded,Stay Healthy</p>
    </header>
    <main>
    </main>
    <footer>
      <h1 class="Ftitle">about me</h1>
      <ul class="Sinfo">
        <div class="Twitter">
          <span class="fa fa-twitter fa-2x"></span>
          <li><a href="https://twitter.com/aiukkksss1">twitter</a></li>
        </div>
        <div class="Git">
          <span class="fa fa-github fa-2x"></span>
          <li><a href="https://github.com/Andyyyy64">GitHub</a></li>
        </div>
      </ul>
    </footer>
  </div>
</template>

<style>
* {
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", YuGothic, "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
}

header {
  background: -moz-linear-gradient(left, #61bf23, #a6f870);
  background: -webkit-linear-gradient(left, #61bf23, #a6f870);
  background: linear-gradient(to right, #61bf23, #a6f870);
  height: 80px;
  position: fixed;
  width: 100%;
}

.Htitle {
  color: rgb(107, 107, 38);
  margin-left: 10px;
  padding-top: 10px;
  z-index: -1;
}

.Cliche {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-right: 10px;
  color: rgb(135, 84, 47);
}

main {
  background-color: #61bf23;
  height: 500px;
}

footer {
  background-color: #a6f870;
  height: 100px;
}

.Ftitle {
  margin-left: 10px;
  padding-top: 10px;
  color: rgb(91, 29, 29);
  text-align: center;
}

.Twitter {
  display: flex;
}

.Git {
  display: flex;
}

a {
  font-size: 25px;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
a:hover{
  text-decoration: underline;
}
span{
  margin-right: 5px;
}
.Sinfo {
  list-style: none;
  text-align: center;
  display: flex;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {

    }
  }
})
</script>