<template>
    <div class="acitivecontainer">
        <h2 class="Activetitle">Activity Levels</h2>
        <div class="radiocontaier">
            <input type="radio" class="ActiveL" name="Activity"><span>Sedentary</span>
            <input type="radio" class="ActiveL" name="Activity"><span>Light Activity</span>
            <input type="radio" class="ActiveL" name="Activity"><span>Moderate Activity</span>
            <input type="radio" class="ActiveL" name="Activity"><span>Active</span>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ActivitySelect",
})
</script>

<style>
.Activetitle {
    font-family: 'Economica', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
}

.ActiveL {
    transform: scale(1.5);
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

span {
    margin-left: 10px;
    font-family: 'Economica', sans-serif;
    font-size: 20px;
}

.radiocontaier {
    width: 500px;
    border: solid 2px rgb(0, 0, 0);
    border-radius: 5px;
}
</style>
