<template>
    <ToDo></ToDo>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";
import ToDo from '@/views/components/todo';

@Options({
  name: 'App',
  components: {
    ToDo
  }
})
export default class App extends Vue {
}
</script>