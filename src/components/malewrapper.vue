<template>
    <div class="malewrapper">
        <div class="userstatus" v-if="!calcFlg">
            <h1 class="statustitle">Pick your status</h1>
            <ageselect></ageselect>
            <heightselect></heightselect>
            <weightselect></weightselect>
            <activityselect></activityselect>
            <goalselect></goalselect>
        </div>
        <button class="macroBtn M" @click="Calcmacro">Calculate Macros</button>
        <macrowrapper v-if="calcFlg"></macrowrapper>
    </div>
</template>

<script lang="ts">
import weightselect from "./weightselect.vue";
import macrowrapper from "./macrowrapper.vue";
import goalselect from "./goalselect.vue"
import activityselect from "./activityselect.vue";
import heightselect from "./heightselect.vue";
import ageselect from "./ageselect.vue"
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        ageselect,
        heightselect,
        activityselect,
        goalselect,
        macrowrapper,
        weightselect
    },
    name: "MaleWrapper",
    data(): { calcFlg: boolean; } {
        return {
            calcFlg: false
        }
    },
    methods: {
        Calcmacro() {
            this.calcFlg = true
            this.$store.state.totalkcal = (10 * this.$store.state.weightinfo + 6.25 * this.$store.state.heightinfo - 5 * this.$store.state.ageinfo + 5) * this.$store.state.picked
        }
    }
})
</script>

<style>
.statustitle {
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    padding-top: 20px;
    font-size: 50px;
}

.malewrapper {
    padding-right: 360px;
}

.macroBtn {
    font-family: 'Economica', sans-serif;
    float: right;
    font-size: 50px;
    cursor: pointer;
    position: relative;
    bottom: 200px;
    left: 150px;
}

.M:hover {
    color: rgb(85, 85, 218);
    background-color: black;
    opacity: 0.7;
}

.M:active {
    opacity: 1;
}
</style>