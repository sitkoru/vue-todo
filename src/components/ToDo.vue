<template>
  <v-container>
    <v-card
        class="mx-auto"
        max-width="644"
        outlined>
      <v-row class="text-center">
        <v-col class="mb-5" cols="12">
          <h2 class="headline font-weight-bold mb-5" style="color: tomato;">Just Do It</h2>
          <v-btn class="remove"  v-on:click="removeTask(listTasks)">
            <v-icon dark style="color: tomato">
              mdi-delete
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
      
      <ol class="rounded">
        <li v-for="task in listTasks" :key="task.getId()">
          <a href="#">{{ task.getName() }}
            <v-btn class="edit"  v-on:click="dialogEditTask(task.getId())">
              <v-icon dark style="color: tomato">
                mdi-pencil
              </v-icon>
            </v-btn>
            <input class="check" type="checkbox" v-on:click="checkTask(task)">
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

          <v-text-field v-model="editTask.name"></v-text-field>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                text
                @click="updateTask(editTask)"
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
import {TaskName, TaskId, Task} from "../grpc/justdoit_pb";

@Options({
  name: "todo",
})

export default class HelloWorld extends Vue {
  client = new JustDoItClient("https://localhost:5001");
  newTask = "";
  editTask : any;
  listTasks : Task [] = [];
  dialogEdit = false;

  async addTask(newTask: string): Promise<void> {
    let taskName = new TaskName();
    taskName.setName(newTask);
    let response = await this.client.addIssue(taskName, null);
    this.listTasks.push(response);
    this.newTask = "";
  }

  async removeTask(removeTasks : Task []) {
    for (let [index, element] of removeTasks.entries()) {
      if(element.getChecked()){
        let taskId = new TaskId();
        taskId.setId(element.getId());
        let response = await this.client.removeIssue(taskId, null);
        if (response.getResult()){
          this.listTasks.splice(index,1);
        }else {
          console.log("Delete error");
        }
      }
    }
  }

  async checkTask(taskCheck: Task){
    taskCheck.getChecked() ? taskCheck.setChecked(false) : taskCheck.setChecked(true);
  }

  dialogEditTask(idTask: number){
    this.dialogEdit = true;
    this.listTasks.forEach((element) => {
      if(element.getId() == idTask)
        this.editTask = {
          id : element.getId(),
          name : element.getName()
        };
    });
  }
  
  async updateTask(task:any){
    let updatingTask = new Task();
    updatingTask.setId(task.id);
    updatingTask.setName(task.name);
    let response = await this.client.updateIssue(updatingTask, null);
    if (response.getResult()){
      this.listTasks.forEach((element) => {
        if(element.getId() == task.id)
          element.setName(task.name);
      });
      this.dialogEdit = false;
    }else {
      console.log("Update error");
    }
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
