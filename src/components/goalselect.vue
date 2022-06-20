<template>
    <div class="c">
        <h2 class="goaltitle">Goal</h2>
        <div class="radiocontaier">
            <input type="radio" class="goal" name="Goal"><span>Lose Weight</span>
            <input type="radio" class="goal" name="Goal"><span>Maintain</span>
            <input type="radio" class="goal" name="Goal"><span>Gain Weight</span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "GoalSelect",
})
</script>

<style>
.goaltitle {
    font-family: 'Economica', sans-serif;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 30px;
    font-weight: bold;
}

.goal {
    transform: scale(1.5);
    margin-left: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
}

span {
    margin-left: 10px;
    font-family: 'Economica', sans-serif;
    font-size: 20px;
}

.goal {
    border: solid 2px rgb(0, 0, 0);
    border-radius: 5px;
}
</style>
