<template >
    <div class="malewrapper">
        <h1 class="statustitle">Pick your status</h1>
        <h2 class="agetitle">Age</h2>
        <ageselect></ageselect>
        <heightselect></heightselect>
    </div>
</template>

<script lang="ts">
import heightselect from "./heightselect.vue";
import ageselect from "./ageselect.vue"
import { defineComponent } from "vue";

export default defineComponent({
    components: {
        ageselect,
        heightselect
    },
    name: "MaleWrapper",
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