<template >
    <div class="femalewrapper">
        <h1 class="statustitle">Pick your status</h1>
        <h2 class="agetitle">Age</h2>
        <ageselect></ageselect>
        <heightselect></heightselect>
        <activityselect></activityselect>
        <goalselect></goalselect>
    </div>
</template>

<script lang="ts">
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
        goalselect
    },
    name: "FemaleWrapper",
})
</script>
<style>
.statustitle {
    font-family: 'Economica', sans-serif;
    font-weight: bold;
    padding-top: 20px;
    font-size: 50px;
}
</style>