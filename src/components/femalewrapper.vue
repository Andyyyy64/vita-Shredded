<template >
    <div class="femalewrapper">
        <div class="userstatus" v-if="!calcFlg">
            <h1 class="statustitle">Pick your status</h1>
            <h2 class="agetitle">Age</h2>
            <ageselect></ageselect>
            <heightselect></heightselect>
            <weightselect></weightselect>
            <activityselect></activityselect>
            <goalselect></goalselect>
        </div>
        <button class="macroBtn F" @click="Calcmacro">Calculate Macros</button>
        <macrowrapper v-if="calcFlg"></macrowrapper>
    </div>
</template>

<script lang="ts">
import weightselect from "./weightselect.vue";
import macrowrapper from "./macrowrapper.vue";
import goalselect from "./goalselect.vue"
import activityselect from "./activityselect.vue";
import heightselect from "./heightselect.vue"
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
    name: "FemaleWrapper",
    data() {
        return {
            calcFlg: false
        }
    },
    methods: {
        Calcmacro() {
            this.calcFlg = true
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

.femalewrapper {
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

.F:hover {
    color: rgb(201, 147, 156);
    background-color: black;
    opacity: 0.7;
}

.F:active {
    opacity: 1;
}
</style>