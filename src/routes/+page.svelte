<script>
  // @ts-nocheck
  import '@style/app.css';
  import '@style/text.css';
  import Saos from 'saos';
</script>

<style lang="postcss">
  @import url('@style/animation.css');
  :global(:root) {
    background: #f3e8ff;
    background: -webkit-linear-gradient(0deg, #f3e8ff 0%, #f3f4f6 100%);
    background: linear-gradient(0deg, #f3e8ff 0%, #f3f4f6 100%);
  }
</style>

<main id="app">
  <div class="fixed top-0 left-0 w-screen h-screen bg-[#592883]"></div>
  <div
    class="absolute align-middle items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-70%]"
  >
    <Saos animation="{'slide-in-top 0.85s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
      <div id="title" class="md:text-[50px] text-[20px]">2023</div>
      <div id="title" class="md:text-[80px] text-[50px]">FoodMoa</div>
    </Saos>
  </div>
  <div class="absolute bottom-0 left-1/2 translate-x-[-50%]">
    {#await import('@components/LottiePlayer/index.svelte') then LottiePlayer}
      <LottiePlayer.default src="{'./animation/arrow.json'}" width="96" height="96" />
    {/await}
  </div>
  <!-- <div class="text-center space-y-10">
    <Saos animation="{'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'}">
      <div class="space-x-4 inline-block mx-auto">
        <div class="inline-block relative w-20 h-20 rounded-full shadow-2xl overflow-hidden">
          <img
            class="absolute-center w-full animation-start-profile"
            src="picture/jaehan.png"
            alt="jaehan profile"
          />
        </div>
        <div
          class="inline-block relative w-20 h-20 animation-start-profile rounded-full shadow-2xl overflow-hidden"
        >
          <img
            class="absolute-center w-full animation-start-profile"
            src="picture/metamong.png"
            alt="metamong profile"
          />
        </div>
      </div>
    </Saos>
  </div> -->
</main>
