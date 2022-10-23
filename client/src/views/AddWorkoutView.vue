<script setup lang ="ts">

</script>

<template>
  <div class="stats">
    <h1 class = "title">Add a Workout</h1>
  
  </div>
  <div class="field">
    <label class="label">Describe Your Workout</label>
    <div class="control">
      <input class="input" type="text" placeholder="Text input">
    </div>
  </div>
  
  
  
  <div class="field is-grouped">
    <div class="control">
      <router-link to="/user" class="button is-link">Submit</router-link>
    </div>
    <div class="control">
      
      <router-link to="/user" class="button is-link is-light">Cancel</router-link>
    </div>
  </div>
  
</template>
