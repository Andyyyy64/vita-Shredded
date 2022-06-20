<template >
<div class="femalewrapper">
    <h2 class="agetitle">Age</h2>
    <ageselect></ageselect>
</div>
</template>



<script lang="ts">
import ageselect from "./ageselect.vue"
import { defineComponent } from "vue";

export default defineComponent({
    components:{
        ageselect
    },
    name: "FemaleWrapper",
})
</script>