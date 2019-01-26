<template lang="html">
  <div class="">
    <!-- <div v-if="width < 1500" class="">
      <div class="leaf" style="width: 15rem; height: 15rem; bottom: -1rem; left: -5rem; transform: rotate(30deg); background-image: url('/images/leaves/leaf-6-green.svg');"></div>
      <div class="leaf" style="width: 35rem; height: 35rem; bottom: -20rem; left: -20rem; transform: rotate(30deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 7.5rem; height: 7.5rem; bottom: -3rem; left: -3rem; transform: rotate(50deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 12.5rem; height: 12.5rem; bottom: -10rem; left: -4rem; transform: rotate(100deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 25rem; height: 25rem; bottom: -20rem; left: -15rem; transform: rotate(120deg); background-image: url('/images/leaves/leaf-7-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 15rem; height: 15rem; bottom: -10rem; left: -6rem; transform: rotate(100deg); background-image: url('/images/leaves/leaf-6-blue.svg'); z-index: 2;"></div>

      <div class="leaf" style="width: 15rem; height: 15rem; bottom: -2rem; right: -4rem; transform: rotate(-70deg); background-image: url('/images/leaves/leaf-4-green.svg');"></div>
      <div class="leaf" style="width: 25rem; height: 25rem; bottom: -10rem; right: -4rem; transform: rotate(-90deg); background-image: url('/images/leaves/leaf-7-red.svg');"></div>
      <div class="leaf" style="width: 15rem; height: 15rem; bottom: 3rem; right: -7rem; transform: rotate(-80deg); background-image: url('/images/leaves/leaf-3-green.svg');"></div>
      <div class="leaf" style="width: 35rem; height: 35rem; bottom: -20rem; right: -15rem; transform: rotate(200deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 25rem; height: 25rem; bottom: -17rem; right: -10rem; transform: rotate(50deg); background-image: url('/images/leaves/leaf-1-blue.svg'); z-index: 2;"></div>
    </div> -->
    <div class="" v-if="width < 1500">
      <div class="leaf" style="width: 20vw; height: 20vw; bottom: -1vh; left: -5vw; transform: rotate(30deg); background-image: url('/images/leaves/leaf-6-green.svg');"></div>
      <div class="leaf" style="width: 40vw; height: 40vw; bottom: -20vh; left: -20vw; transform: rotate(30deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 10vw; height: 10vw; bottom: -3vh; left: -3vw; transform: rotate(50deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 15vw; height: 15vw; bottom: -10vh; left: -4vw; transform: rotate(100deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 30vw; height: 30vw; bottom: -20vh; left: -15vw; transform: rotate(120deg); background-image: url('/images/leaves/leaf-7-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 20vw; height: 20vw; bottom: -10vh; left: -6vw; transform: rotate(100deg); background-image: url('/images/leaves/leaf-6-blue.svg'); z-index: 2;"></div>

      <div class="leaf" style="width: 20vw; height: 20vw; bottom: -2vh; right: -4vw; transform: rotate(-70deg); background-image: url('/images/leaves/leaf-4-green.svg');"></div>
      <div class="leaf" style="width: 30vw; height: 30vw; bottom: -10vh; right: -4vw; transform: rotate(-90deg); background-image: url('/images/leaves/leaf-7-red.svg');"></div>
      <div class="leaf" style="width: 20vw; height: 20vw; bottom: 3vh; right: -7vw; transform: rotate(-80deg); background-image: url('/images/leaves/leaf-3-green.svg');"></div>
      <div class="leaf" style="width: 40vw; height: 40vw; bottom: -20vh; right: -15vw; transform: rotate(200deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 30vw; height: 30vw; bottom: -17vh; right: -10vw; transform: rotate(50deg); background-image: url('/images/leaves/leaf-1-blue.svg'); z-index: 2;"></div>
    </div>
    <div class="" v-else>
      <div class="leaf" style="width: 20rem; height: 20rem; bottom: -1rem; left: -5rem; transform: rotate(30deg); background-image: url('/images/leaves/leaf-6-green.svg');"></div>
      <div class="leaf" style="width: 40rem; height: 40rem; bottom: -20rem; left: -20rem; transform: rotate(30deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 10rem; height: 10rem; bottom: -3rem; left: -3rem; transform: rotate(50deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 15rem; height: 15rem; bottom: -10rem; left: -4rem; transform: rotate(100deg); background-image: url('/images/leaves/leaf-2-red.svg');"></div>
      <div class="leaf" style="width: 30rem; height: 30rem; bottom: -20rem; left: -15rem; transform: rotate(120deg); background-image: url('/images/leaves/leaf-7-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 20rem; height: 20rem; bottom: -10rem; left: -6rem; transform: rotate(100deg); background-image: url('/images/leaves/leaf-6-blue.svg'); z-index: 2;"></div>

      <div class="leaf" style="width: 20rem; height: 20rem; bottom: -2rem; right: -4rem; transform: rotate(-70deg); background-image: url('/images/leaves/leaf-4-green.svg');"></div>
      <div class="leaf" style="width: 30rem; height: 30rem; bottom: -10rem; right: -4rem; transform: rotate(-90deg); background-image: url('/images/leaves/leaf-7-red.svg');"></div>
      <div class="leaf" style="width: 20rem; height: 20rem; bottom: 3rem; right: -7rem; transform: rotate(-80deg); background-image: url('/images/leaves/leaf-3-green.svg');"></div>
      <div class="leaf" style="width: 40rem; height: 40rem; bottom: -20rem; right: -15rem; transform: rotate(200deg); background-image: url('/images/leaves/leaf-8-green.svg'); z-index: 2;"></div>
      <div class="leaf" style="width: 30rem; height: 30rem; bottom: -17rem; right: -10rem; transform: rotate(50deg); background-image: url('/images/leaves/leaf-1-blue.svg'); z-index: 2;"></div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    width() {
      return (
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      )
    }
  }
}
</script>
