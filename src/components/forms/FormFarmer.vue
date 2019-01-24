<template lang="html">
  <form class="form-farmer">
    <div class="fieldset">
      <div class="fieldset-input-holder">
        <div class="input-sex">
          <div>
            <div class="img-holder">
              <transition-group name="fade">
                <img :key="1" v-if="sex == 1" src="/images/farmer-man.png">
                <img :key="2" v-if="sex == 2" src="/images/farmer-woman.png">
                <img :key="3" v-if="sex != 1 && sex != 2" src="/images/farmer-all.png">
              </transition-group>

            </div>
            <p>Gender</p>
          </div>
          <div class="input-group">
            <input-label @changed="filter.update" split='' name="head_gender" text="Male" value="1" type="checkbox"></input-label>
            <input-label @changed="filter.update" split='' name="head_gender" text="Female" value="2" type="checkbox"></input-label>
          </div>
        </div>
        <div class="input-education">
          <p>Level of education</p>
          <div class="input-group">
            <select-label @changed="filter.update" split='' name="head_education" operator="><" steps="3" text="Select education level" :values="edulevel"></select-label>
          </div>
        </div>
        <div class="input-certified">
          <p>Certified? <info-popup title="Certification" text="A certified farmer utilizes better farming methods and has better working conditions. Being a certified farmer can also mean better relationships with suppliers and thus a more secure future."/></p>
          <div class="input-group">
            <input-label @changed="filter.update" split='' name="cocoa_certification_yn" text="Yes" value="1" type="checkbox"></input-label>
            <input-label @changed="filter.update" split='' name="cocoa_certification_yn" text="No" value="0" type="checkbox"></input-label>
          </div>
        </div>
      </div>
    </div>

    <div class="fieldset">
      <div class="input-household">
        <p>Household size</p>
        <p style="font-weight: normal; font-size: 1rem;">A household size does not necessarily mean family size in Ghana .A household size can be defined by different people living together under one roof, usually working together as a group, and therefore can vary. In this case that means 1 to 17 household members. Use the slider to a range of the household size.</p>
        <div class="input-group">
          <range-label @changed="filter.updateRange" name="hhmem_number" text="Select household size" min="1" max="17" step="1" />
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import store from '@/store.js'
import filter from '@/modules/filter.js'
import InfoPopup from '@/components/atoms/InfoPopup.vue'
import InputLabel from '@/components/forms/InputLabel.vue'
import SelectLabel from '@/components/forms/SelectLabel.vue'
import RangeLabel from '@/components/forms/RangeLabel.vue'
export default {
  components: {
    InputLabel,
    SelectLabel,
    RangeLabel,
    InfoPopup
  },
  data() {
    return {
      filter: filter,
      sex: 'both',
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
  },
  mounted() {
    store.subscribe((mutation, state) => {
      if (mutation.type === 'updateFilters') {
        this.sex = state.filters.head_gender
      }
    })
  }
}
</script>
