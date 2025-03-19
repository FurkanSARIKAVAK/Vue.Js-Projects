<template>
  <div>
    <app-header />
    <div class="container">
      <div>
        <button @click="activeComp = Users">Efsaneler</button>
        <button @click="activeComp = AddUser">Yeni Efsane Ekle</button>
      </div>
      <component :is="activeComp"/>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from "@/components/Fixed/Footer.vue";
import Users from "@/components/User/Users.vue";
import AddUser from "@/components/User/AddUser.vue";
import {shallowRef} from 'vue'

const activeComp = shallowRef()


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  min-height: 100vh;
  padding: 30px;
}
button {
  padding: 10px;
  border: none;
  background: rgb(2, 41, 54);
  color: rgb(221, 226, 231);
  font-weight: 700;
  border-radius: 30px;
  margin: 20px;
}
</style>
