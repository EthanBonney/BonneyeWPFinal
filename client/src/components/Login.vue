<script setup lang="ts">
    import session, { login, logout } from '../stores/Users'
</script>

<template>
    <div class="buttons" v-if="session.user == null">
        
        <a class="button is-light" @click="login('Ethan', 'Bonney', '1234')">
            Log in
        </a>
    </div>
    <div v-else>
        {{session.user.firstName}} {{session.user.lastName}}
        (<a @click="logout()">
            Log out
        </a>)
    </div>
</template>
<style scoped>
</style>