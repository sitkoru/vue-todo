<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Just Do It</h2>

        <v-row justify="center">
          
          <v-btn block @click="test()"> Добавить </v-btn>
          
        </v-row>
      </v-col>
      
    </v-row>

    
  </v-container>
</template>

<script lang='ts'>
import { Options, Vue } from "vue-class-component";
import { JustDoItClient } from "../grpc/JustdoitServiceClientPb";
import { TaskName } from "../grpc/justdoit_pb";
@Options({
  name: "todo",
})
export default class HelloWorld extends Vue {
  client = new JustDoItClient("https://localhost:5001");

  async test(): Promise<void> {
    let taskName = new TaskName();
    taskName.setName("bla");
    var response = await this.client.addIssue(taskName, null);
    console.log(response.getName());
  }
}
</script>
