<template>
    <div class="container">
        <h1 class="macroinfo">Protein 140g</h1>
        <h1 class="macroinfo">Carbohydrate 300g</h1>
        <h1 class="macroinfo">Fat 70g</h1>
        <h1 class="kcalinfo">Total 2390kcal</h1>
    </div>
</template>



<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "MacroWrapper",
})
</script>

<style>
.macroinfo {
    font-family: 'Economica', sans-serif;
    padding-top: 50px;
    display: flex;
    padding-left: 300px;
    font-size: 50px;
}

.kcalinfo {
    font-family: 'Economica', sans-serif;
    font-size: 70px;
    margin-top: 20px;
}
</style>