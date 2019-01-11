<template lang="html">
  <form id="form-farmer">
    <fieldset>
      <legend>Head farmer</legend>
      <p>Select sex</p>
      <div class="input-group">
        <input-label name="head_gender" text="Any" value="" type="radio" checked="true"></input-label>
        <input-label name="head_gender" text="Male" value="1" type="radio"></input-label>
        <input-label name="head_gender" text="Female" value="2" type="radio"></input-label>
      </div>
      <p>Selling certified cocoa or not?</p>
      <div class="input-group">
        <input-label name="cocoa_certification_yn" text="Any" value="" type="radio" checked="true"></input-label>
        <input-label name="cocoa_certification_yn" text="No" value="0" type="radio"></input-label>
        <input-label name="cocoa_certification_yn" text="Yes" value="1" type="radio"></input-label>
      </div>
      <p>Education level</p>
      <div class="input-group">
        <select-label name="head_education" operator="><" steps="3" text="Select education level" :values="edulevel"></select-label>
      </div>
    </fieldset>
    <fieldset>
      <legend>Household</legend>
      <p>Household size</p>
      <div class="input-group">
        <select-label name="hhmem_number" operator="<=" text="Select amount of people in household" :values="householdsize"></select-label>
      </div>
    </fieldset>
  </form>
</template>

<script>
import InputLabel from '@/components/forms/InputLabel.vue'
import SelectLabel from '@/components/forms/SelectLabel.vue'
export default {
  components: {
    InputLabel,
    SelectLabel
  },
  data() {
    return {
      householdsize: [
        {
          label: 'Up to 5',
          value: 5
        },
        {
          label: 'Up to 10',
          value: 10
        },
        {
          label: 'Up to 15',
          value: 15
        }
      ],
      edulevel: [
        {
          label: 'No formal education completed',
          value: 0
        },
        {
          label: 'Primary / middle / high school',
          value: 3
        },
        {
          label: 'College / University / Other',
          value: 6
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
