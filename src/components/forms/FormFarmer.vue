<template lang="html">
  <form>
    <fieldset>
      <legend>Head farmer's sex</legend>
      <div class="input-group">
        <input-label name="head_gender" text="Any" value="" type="radio" checked="true"></input-label>
        <input-label name="head_gender" text="Male" value="1" type="radio"></input-label>
        <input-label name="head_gender" text="Female" value="2" type="radio"></input-label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Is your cocoa certified?</legend>
      <div class="input-group">
        <input-label name="cocoa_certification_yn" text="Any" value="" type="radio" checked="true"></input-label>
        <input-label name="cocoa_certification_yn" text="No" value="0" type="radio"></input-label>
        <input-label name="cocoa_certification_yn" text="Yes" value="1" type="radio"></input-label>
      </div>
    </fieldset>
  </form>
</template>

<script>
import filter from '@/modules/filter.js'
import InputLabel from '@/components/forms/InputLabel.vue'
export default {
  components: {
    InputLabel
  },
  data(){
    return {
      filter: filter
    }
  }
}
</script>

<style lang="scss">
</style>
