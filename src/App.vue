<template>
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Economica:700" />
  <link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Alegreya+Sans+SC:300" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <div>
    <header>
      <h1 class="Htitle">Vita Shredded</h1>
      <p class="Cliche"></p>
    </header>
    <main>
      <div class="pickwrapper" v-if="!maleFlg && !femaleFlg">
        <h1 class="Mtitle">Please Select Your Gender</h1>
        <div class="SelectInfo">
          <input type="radio" class="sex" @click="maleFlg = true"><span class="pickgenderM">male</span>
          <input type="radio" class="sex" @click="femaleFlg = true"><span class="pickgenderFM">female</span>
        </div>
      </div>
      <div class="malewrapper" v-if="maleFlg">
        <h2 class="agetitle">Age</h2>
        <ageselect></ageselect>
      </div>
      <div class="femalewrapper" v-if="femaleFlg">
        <h2 class="agetitle">Age</h2>
        <ageselect></ageselect>
      </div>
    </main>
    <footer>
      <h1 class="Ftitle">about me</h1>
      <ul class="Sinfo">
        <div class="Twitter">
          <span class="fa fa-twitter fa-2x"></span>
          <li><a href="https://twitter.com/aiukkksss1" class="Tcolor">twitter</a></li>
        </div>
        <div class="Git">
          <span class="fa fa-github fa-2x"></span>
          <li><a href="https://github.com/Andyyyy64" class="Gcolor">GitHub</a></li>
        </div>
      </ul>
    </footer>
  </div>
</template>

<script lang="ts">
import ageselect from "./components/ageselect.vue"
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    ageselect
  },
  data(): { age: string; height: string; maleFlg: boolean; femaleFlg: boolean; } {
    return {
      age: "",
      height: "",
      maleFlg: false,
      femaleFlg: false
    }
  },
})
</script>

<style>
@import "./css/mainstyle.css"
</style>
