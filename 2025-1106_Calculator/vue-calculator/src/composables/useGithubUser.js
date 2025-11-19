import { fetchGithubUser } from '@/services/githubApi.js';
import { ref } from 'vue';

export function useGithubUser() {
  const user = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchUser = async (username) => {
    loading.value = true;
    error.value = null;
    try {
      console.log(`fetch username: ${username}`);
      user.value = await fetchGithubUser(username);
    } catch (err) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  return { user, loading, error, fetchUser };
}
