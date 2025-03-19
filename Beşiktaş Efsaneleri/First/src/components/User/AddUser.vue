<template>
  <div>
    <form class="mt-4" @submit.prevent="submitForm">
      <div class="form-group">
        <label>Ad</label>
        <input
          type="text"
          v-model="user.name"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Soyad</label>
        <input
          type="text"
          v-model="user.lastname"
          class="form-control"
        />
      </div>
      <div class="form-group">
        <label>Resim Linki</label>
        <input
          type="text"
          v-model="user.img"
          class="form-control"
        />
      </div>
      <button type="submit" class="btn btn-primary">Kaydet</button>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';

const user = reactive({
    name:'',
    lastname:'',
    img:''
})

const submitForm = () =>{
    axios({
        method:"POST",
        url:"http://localhost:3000/users",
        data: user
    })
}
</script>

<style>
</style>