<template>
  <ui-grid class="demo-grid" v-bind:class="[themeMode ? 'body-black' : 'input']">
    <ui-grid-cell class="demo-cell"></ui-grid-cell>
    <ui-grid-cell class="demo-cell">
      <ui-card outlined class="demo-card" v-bind:class="[themeMode ? 'black-card' : 'input']">

        <div v-bind:class="[themeMode ? 'demo-card-article-group-heading-black' : 'demo-card-article-group-heading']">
          <h1 v-bind:class="[themeMode ? 'h1-black' : 'h1-light']" @click="openEaster=true" v-text="logo" :title="logo"></h1>
        </div>

        <ui-list-divider ></ui-list-divider>

        <p v-bind:class="[themeMode ? 'not-faund-text-black' : 'not-faund-text']" v-if="tasks.length == 0">Задачи отсутствуют</p>
      
        <ul>
          <li v-for="task in tasks" v-bind:class="[themeMode ? 'list-el-black' : 'list-el']">
            <h3 v-bind:class="[themeMode ? 'h3-black' : 'h3-light']">{{task.name}}</h3>
            <ui-item-last-content>
              <ui-fab class="btn-remove tooltip" raised @click="removeTask(task.id)">
                <span class="tooltiptext">Удалить</span>
                <ui-image-item  :image="'/scripts/assets/delete.png'" class="img-dialog">
                </ui-image-item>
              </ui-fab>
               <ui-fab @click="editTask(task)" v-bind:class="[themeMode ? 'btn-change-black tooltip' : 'btn-change tooltip']" raised >
                <span class="tooltiptext">Изменить</span>
                <ui-image-item :image="'/scripts/assets/edit.png'" class="img-dialog">
                </ui-image-item>
              </ui-fab>
              <ui-checkbox 
                v-model="task.checked"
                :value="task.id"
                @click.stop
              ></ui-checkbox>
            </ui-item-last-content>
          </li>
        </ul>

        <ui-grid-cell>
          <ui-textfield class="input" v-model="inputTask" placeholder="Введите задачу..." outlined value=""></ui-textfield>
          <ui-button v-bind:class="[themeMode ? 'black' : 'btn']"  v-on:click="addTask(inputTask)" raised>Добавить</ui-button>
        </ui-grid-cell>

      </ui-card>
    </ui-grid-cell >
    
    <ui-grid-cell>
        <ui-fab class="ui-light" mini v-on:click="changeTheme(themeMode)">
          <ui-image-item :image="themeModeIcon" class="img-dialog">
          </ui-image-item>
        </ui-fab>
    </ui-grid-cell>
  </ui-grid>

  <ui-dialog v-model="openEaster" @confirm="openDialog" fullscreen>
    <ui-image-item :image="imgEaster" class="img-dialog">
    </ui-image-item>
    <ui-dialog-actions v-bind:class="[themeMode ? 'black' : 'input']"></ui-dialog-actions>
  </ui-dialog>

  <ui-dialog v-model="openEdit" @confirm="saveTask">
    <ui-textfield style="width:550px" class="input" v-model="inputEditTask.name" outlined></ui-textfield>
    <ui-dialog-actions v-bind:class="[themeMode ? 'black' : 'input']"></ui-dialog-actions>
  </ui-dialog>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  name: 'todo'
})

export default class ToDo extends Vue {
  logo = 'Just do it';
  tasks = [
    { "id": 0, "name": "Пойти", "checked": true },
    { "id": 1, "name": "Прийти", "checked": false }
  ];
  inputTask = "";
  inputEditTask = [];
  openEaster = false;
  openEdit = false;
  imgEaster = "/scripts/assets/just1.gif";
  themeModeIcon = "/scripts/assets/theme_dark.png";
  themeMode = false;
  checkedValues = [];

  addTask(task){
    if(task){
      var taskObj = {
        "id": Math.random().toString(36).substr(2, 9), 
        "name": task
        };
      this.tasks.push(taskObj);
      this.inputTask = "";
    }
  }

  removeTask(taskId){
    for (let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].id == taskId){
        this.tasks.splice(i, 1);
      }
    }
  }

  editTask(task){
    this.openEdit = true;
    this.inputEditTask = Object.create(task);
  }

  saveTask(result) {
    if (result) {
      for (let i = 0; i < this.tasks.length; i++) {
        if(this.tasks[i].id == this.inputEditTask.id){
          this.tasks[i].name = this.inputEditTask.name;
        }
      }
    }else{
      this.inputEditTask = [];
    }
  }

  changeTheme(themeMode){
    if(themeMode){
      document.body.style.background = "white";
      this.themeMode = false;
      this.themeModeIcon = "/scripts/assets/theme_dark.png";
    }else if(!themeMode){
      document.body.style.background = "#111"; 
      this.themeMode = true;
      this.themeModeIcon = "/scripts/assets/theme_light.png";
    }
  }
}
</script>


<style scoped>
.h1-light {
  font-weight: normal;
  color: teal;
}

.h1-black {
  font-weight: normal;
  color: white;
}

.input{
  width: 100%;
  background-color: white;
}

.btn{
  width: 100%;
  background-color: teal;
}

.dialog{
  background-color: white;
  color: black;
}

.dialog-black{
  background-color: gray;
  color: white;
}

.btn-change{
  margin-right: 15px;
  background-color: teal;
  color:white;
  width: 35px;
  height: 35px;
}

.btn-remove{
  background-color: red;
  margin-right: 15px;
  color: white;
  width: 35px;
  height: 35px;
}

/* Sass code */
.demo-card {
  width: 550px;
 
}

.demo-card-article-group-heading {
  @include mdc-theme-prop(color, text-secondary-on-light);

  padding: 8px 16px;
}

.demo-card-article {
  padding: 16px;
  text-decoration: none;
  color: inherit;
}

.demo-card-article__title {
  margin: 0 0 4px 0;
}

.demo-card-article__snippet {
  @include mdc-theme-prop(color, text-secondary-on-light);

  margin: 0;
}

.img-dialog{
  width: 100%;
}

.h3-light{
   color: teal;
}

.h3-black{
   color: white;
}

.demo-card-article-group-heading-black {
    @include mdc-theme-prop(color, text-secondary-on-light);
    padding: 8px 16px;
    background-color: #4a4a4a;
}

.black{
    width: 100%;
    background-color:#4a4a4a;
    color:white;
}

.btn-change-black{
    background-color:#4a4a4a;
    color:white;  
    margin-right: 15px;
    width: 35px;
    height: 35px;
}

.black-card{
    background-color:gray;
}

.body-black{
  background-color:#111;
}

.ui-light{
  margin-left: auto;
  margin-right: -300px;
  margin-top:47px;
  background-color: transparent;
}

.list-el {
  display: flex;
  justify-content: space-between;
  margin-left: -20px;
  background-color: white;
  width: 100%;
}

.list-el-black {
  display: flex;
  justify-content: space-between;
  margin-left: -20px;
  background-color: gray;
  width: 100%;
}

li {
  list-style-type: none; /* Убираем маркеры */
}

/* Tooltip*/
.tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;

    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.not-faund-text{
  color: gray;
  margin-top: 26px;
  margin-bottom: 9px;
}

.not-faund-text-black{
  color: white;
  margin-top: 26px;
  margin-bottom: 9px;
}
</style>