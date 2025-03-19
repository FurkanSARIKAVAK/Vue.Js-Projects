<template>
  <div class="row">
    <div class="col-md-3" v-for="user in data.users" :key="user.id">
      <div class="card">
        <img class="card-img-top" :src="user.img"/>
        <div class="card-body">
          <h5 class="card-title">{{user.name}} {{ user.lastname }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, reactive } from "vue";

const data = reactive({
  users: [],
});
const getUser = async () => {
  try {
    const response = await axios.get("http://localhost:3000/users");
    data.users = response.data;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getUser();
});
</script>

<style>
.card-img-top {
  width: 100%;
  height: 260px;
  object-fit: cover;
}
.col-md-3 {
  width: 240px;
}
</style>