<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="644"
        outlined>
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5" style="color: tomato;">Just Do It</h2>
          <v-btn class="remove"  v-on:click="removeTask()">
            <v-icon dark style="color: tomato">
              mdi-delete
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <ol class="rounded">
        <li v-for="task in listTasks" :key="task.id">
          <a href="#">{{ task.name }}
            <v-btn class="edit"  v-on:click="dialogEditTask(task.id)">
              <v-icon dark style="color: tomato">
                mdi-pencil
              </v-icon>
            </v-btn>
            <input class="check" type="checkbox" v-on:click="checkTask(task.id)">
          </a>
        </li>
      </ol>

      <v-text-field label="Введите задачу..." v-model="newTask"></v-text-field>
      
      <v-btn style="background-color: tomato; color: white;"
             block
             @click="addTask(newTask)">
        Добавить
      </v-btn>
    </v-card>
    
    <div class="text-center">
      <v-dialog v-model="dialogEdit">
        <v-card>

          <v-text-field v-model="editTask"></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="dialogEdit = false"
            >
              Сохранить
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
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
  editTask = "";
  listTasks : any[] = [];
  dialogEdit = false;

  async addTask(newTask: string): Promise<void> {
    let taskName = new TaskName();
    taskName.setName(newTask);
    let response = await this.client.addIssue(taskName, null);
    this.listTasks.push(response.toObject());
    this.newTask = "";
  }
  
  async dialogEditTask(idTask: number){
    this.dialogEdit = true;
    this.listTasks.forEach((element) => {
      if(element.id == idTask)
        this.editTask = element.name;
    });
  }

  async removeTask(){
    console.log("удаляем");
  }

  async checkTask(idTask: number){
    console.log(idTask);
  }
}
</script>

<style scoped>
.remove {
  position: absolute;
  right: 0;
  height: 20px;
  margin-top: -2px;
  margin-right: 4px;
}

.check {
  position: absolute;
  right: 0;
  height: 20px;
  margin-top: -5px;
  margin-right: 17px;
  zoom: 1.5;
}

.edit {
  position: absolute;
  right: 0;
  height: 20px;
  margin-top: -2px;
  margin-right: 72px
}
</style>
