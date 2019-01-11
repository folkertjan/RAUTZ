<template lang="html">
  <form id="form-land">
    <fieldset>
      <legend>Crops</legend>
      <p>Most important crop</p>
      <div class="input-group">
        <select-label name="crops_important1" text="Select most important crop" :values="crops"></select-label>
      </div>
      <p>Second important crop</p>
      <div class="input-group">
        <select-label name="crops_important2" text="Select second most important crop" :values="crops"></select-label>
      </div>
    </fieldset>
  </form>
</template>

<script>
import SelectLabel from '@/components/forms/SelectLabel.vue'
export default {
  components: {
    SelectLabel
  },
  data() {
    return {
      crops: [
        {
          label: 'Avocado',
          value: 1
        },
        {
          label: 'Bananas',
          value: 2
        },
        {
          label: 'Soya Beans',
          value: 3
        },
        {
          label: 'Beans',
          value: 4
        },
        {
          label: 'Cabbages',
          value: 5
        },
        {
          label: 'Carrots',
          value: 6
        },
        {
          label: 'Cashews',
          value: 7
        },
        {
          label: 'Cassava',
          value: 8
        },
        {
          label: 'Chili',
          value: 9
        },
        {
          label: 'Cocoa',
          value: 10
        },
        {
          label: 'Coconut',
          value: 11
        },
        {
          label: 'Cocoyam',
          value: 12
        },
        {
          label: 'Coffee',
          value: 13
        },
        {
          label: 'Courgette',
          value: 14
        },
        {
          label: 'Cotton',
          value: 15
        },
        {
          label: 'Cow pea',
          value: 16
        },
        {
          label: 'Eggplant',
          value: 17
        },
        {
          label: 'Fodder',
          value: 18
        },
        {
          label: 'Garlic',
          value: 19
        },
        {
          label: 'Ginger',
          value: 20
        },
        {
          label: 'Groundnuts',
          value: 21
        },
        {
          label: 'Lemon',
          value: 22
        },
        {
          label: 'Lime',
          value: 23
        },
        {
          label: 'Maize',
          value: 24
        },
        {
          label: 'Mango',
          value: 25
        },
        {
          label: 'Millet',
          value: 26
        },
        {
          label: 'Okra',
          value: 27
        },
        {
          label: 'Onions',
          value: 28
        },
        {
          label: 'Oranges',
          value: 29
        },
        {
          label: 'Palm',
          value: 30
        },
        {
          label: 'Papaya',
          value: 31
        },
        {
          label: 'Peas',
          value: 32
        },
        {
          label: 'Peppers',
          value: 33
        },
        {
          label: 'Pineapple',
          value: 34
        },
        {
          label: 'Plantain',
          value: 35
        },
        {
          label: 'Irish potato',
          value: 36
        },
        {
          label: 'Sweet potato',
          value: 37
        },
        {
          label: 'Rice',
          value: 38
        },
        {
          label: 'Rubber',
          value: 39
        },
        {
          label: 'Spinach',
          value: 40
        },
        {
          label: 'Sorghum',
          value: 41
        },
        {
          label: 'Shea nut',
          value: 42
        },
        {
          label: 'Sugar cane',
          value: 43
        },
        {
          label: 'Tangerine',
          value: 44
        },
        {
          label: 'Tomatoes',
          value: 45
        },
        {
          label: 'Watermelon',
          value: 46
        },
        {
          label: 'Yam',
          value: 47
        },
        {
          label: 'Other',
          value: 48
        },
        {
          label: 'None',
          value: 49
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
