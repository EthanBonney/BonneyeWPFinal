<script setup lang ="ts">
import workout from '../components/Workout.vue'
import session  from '../stores/Users'
</script>

<template>
  <div class="Workouts">
    <h1 class = "title">Friends Workouts</h1>
    <div >
    <workout></workout>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
