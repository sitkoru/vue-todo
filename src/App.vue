<template>
  <v-app>
    <v-main>
      <ToDo/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ToDo from './components/ToDo.vue'

export default defineComponent({
  name: 'App',

  components: {
    ToDo,
  },

  data () {
    return {
      //
    }
  },
})
</script>
