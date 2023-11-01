<script>
  // @ts-nocheck
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
  export let src;
  export let width;
  export let height;
</script>

<LottiePlayer
  src="{src}"
  autoplay="{true}"
  loop="{true}"
  renderer="svg"
  background="transparent"
  height="{height || 300}"
  width="{width || 300}"
/>
