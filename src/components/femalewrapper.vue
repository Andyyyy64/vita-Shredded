<template >
    <div class="femalewrapper">
        <div class="userstatus" v-if="!calcFlg">
            <h1 class="statustitle">Pick your status</h1>
            <ageselect></ageselect>
            <heightselect></heightselect>
            <weightselect></weightselect>
            <activityselect></activityselect>
            <goalselect></goalselect>
        </div>
        <button class="macroBtn F" @click="Calcmacro">Calculate Macros</button>
        <macrowrapper v-if="calcFlg"></macrowrapper>
        <button class="macroBtn F" v-if="calcFlg" @click="calcFlg = false">Change Status</button>
    </div>
</template>

<script lang="ts">
import weightselect from "./weightselect.vue";
import macrowrapper from "./macrowrapper.vue";
import goalselect from "./goalselect.vue";
import activityselect from "./activityselect.vue";
import heightselect from "./heightselect.vue";
import ageselect from "./ageselect.vue";
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
    data(): { calcFlg: boolean; } {
        return {
            calcFlg: false
        }
    },
    methods: {
        Calcmacro() {
            this.calcFlg = true
            this.$store.state.totalkcal = Math.round(((10 * this.$store.state.weightinfo + 6.25 * this.$store.state.heightinfo - 5 * this.$store.state.ageinfo - 161) * this.$store.state.picked) * this.$store.state.pickedgoal)
            this.$store.state.protein = Math.round((this.$store.state.weightinfo * 2))
            this.$store.state.fat = Math.round((this.$store.state.totalkcal * 0.25) / 9)
            this.$store.state.carbohydrate = Math.round((this.$store.state.totalkcal - (this.$store.state.protein * 4) - (this.$store.state.fat * 9)) / 4)
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