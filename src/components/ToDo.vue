<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="644"
        outlined>
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5" style="color: tomato;">Just Do It</h2>
        </v-col>
      </v-row>
      
      <ol class="rounded">
        <li v-for="task in listTasks" :key="task.id">
          <a href="#">{{ task.name }}</a>
        </li>
      </ol>

      <v-text-field label="Введите задачу..." v-model="newTask"></v-text-field>
      
      <v-btn style="background-color: tomato; color: white;"
             block
             @click="addTask(newTask)">
        Добавить
      </v-btn>
    </v-card>
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
  newTask = "";
  listTasks : any[] = [];

  async addTask(newTask: string): Promise<void> {
    let taskName = new TaskName();
    taskName.setName(newTask);
    let response = await this.client.addIssue(taskName, null);
    this.listTasks.push(response.toObject());
    this.newTask = "";
  }
}
</script>
