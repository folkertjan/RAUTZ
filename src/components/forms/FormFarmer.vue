<template lang="html">
  <form class="form-farmer">
    <fieldset>
      <legend class="hide-text">Head farmer</legend>
      <div class="fieldset-input-holder">
        <div class="input-sex">
          <div>
            <p>Gender farmer</p>
            <img src="https://unsplash.it/200/300">
          </div>
          <div class="input-group">
            <input-label @changed="filter.update" split='' name="head_gender" text="Male" value="1" type="checkbox"></input-label>
            <input-label @changed="filter.update" split='' name="head_gender" text="Female" value="2" type="checkbox"></input-label>
          </div>
        </div>
        <div class="input-education">
          <p>Education level</p>
          <div class="input-group">
            <select-label @changed="filter.update" split='' name="head_education" operator="><" steps="3" text="Select education level" :values="edulevel"></select-label>
          </div>
        </div>
        <div class="input-certified">
          <p>Certification?</p>
          <div class="input-group">
            <input-label @changed="filter.update" split='' name="cocoa_certification_yn" text="Yes" value="1" type="checkbox"></input-label>
            <input-label @changed="filter.update" split='' name="cocoa_certification_yn" text="No" value="0" type="checkbox"></input-label>
          </div>
        </div>
      </div>
    </fieldset>
    <fieldset>
      <legend class="hide-text">Household</legend>
      <div class="input-household">
        <p>Household size</p>
        <div class="input-group">
          <select-label @changed="filter.update" split='' name="hhmem_number" operator="<=" text="Select amount of people in household" :values="householdsize"></select-label>
        </div>
      </div>
    </fieldset>
  </form>
</template>

<script>
import filter from '@/modules/filter.js'
import InputLabel from '@/components/forms/InputLabel.vue'
import SelectLabel from '@/components/forms/SelectLabel.vue'
export default {
  components: {
    InputLabel,
    SelectLabel
  },
  data() {
    return {
      filter: filter,
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
