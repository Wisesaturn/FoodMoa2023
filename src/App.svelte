<script>
  import Counter from './lib/Counter.svelte';
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main>
  <h1>2023 푸드모아</h1>
  <div class="card">
    <Counter />
  </div>
</main>
