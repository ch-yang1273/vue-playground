<script setup>
import GithubAvatar from './GithubAvatar.vue';
import GithubUserInfo from './GithubUserInfo.vue';
import { useGithubUser } from '@/composables/useGithubUser.js';
import { onMounted } from 'vue';

const { user, fetchUser } = useGithubUser();

onMounted(() => {
  fetchUser('ch-yang1273');
});
</script>

<template>
  <div class="flex min-w-40 flex-col items-center justify-center p-1">
    <GithubAvatar v-bind:avatar-url="user?.avatar_url" />
    <GithubUserInfo v-bind:login="user?.login" v-bind:name="user?.name" />
  </div>
</template>

<style scoped></style>
