<template>
  <div class="personContainer">
    <h2>Kişi Bilgileri</h2>
    <ul>
        <li>
            <span>Adınız:</span>{{ name }}
        </li>
        <li>
            <span>Soyadınız:</span>{{ lastName }}
        </li>
    </ul>

    <button @click="updateLastName">Soyadı Değiştir</button>
  </div>
</template>

<script setup>
    const emit = defineEmits(['update-lastname'])
    const props = defineProps({name:String,lastName:String})
    const updateLastName = () =>{
        //props.lastName = "Potter"
        emit('update-lastname','Potter')
    }
</script>

<style scoped>
ul{
    list-style-type: none;
}
ul li{
    padding: 20px 0px;
}
span{
    font-weight: bold;
}
.personContainer{
    border: 1px solid lightblue;
    padding: 30px;
    border-radius: 30px;
}
</style>