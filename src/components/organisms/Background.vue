<template lang="html">
  <div class="parallax">
    <div class="parallax__layer parallax__layer__0">
      <img src="images/background/Layer 1.png">
    </div>
    <div class="parallax__layer parallax__layer__1">
      <img src="images/background/Layer 2.png">
    </div>
    <div class="parallax__layer parallax__layer__2">
      <img src="images/background/Layer 3.png">

    </div>
    <div class="parallax__layer parallax__layer__3">
      <img src="images/background/Layer 4.png">

    </div>
    <div class="parallax__layer parallax__layer__4">
      <img src="images/background/Layer 5.png">

    </div>
    <div class="parallax__layer parallax__layer__5">
      <img src="images/background/Layer 6.png">

    </div>
    <div class="parallax__layer parallax__layer__6">
      <img src="images/background/Layer 7.png">

    </div>
    <!-- <div class="parallax__layer parallax__layer__7">
      <img src="images/background/Layer 8.png">

    </div> -->
    <div class="parallax__cover"></div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">

// main styling is important here, see base.scss for main styling
.parallax__layer{
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  img{
    display: block;
    position: absolute;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    vertical-align: bottom;
  }
}

$parallax__layers: 6;

@for $i from 0 through $parallax__layers {
  $x: ($parallax__layers - $i) / 2;
  .parallax__layer__#{$i}{
     transform: translateZ(-100 * $x - 20#{px}) scale($x + 1.2);
  }
}
</style>
