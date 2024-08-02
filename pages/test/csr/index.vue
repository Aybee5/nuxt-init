<template>
  <div>
    <h1>CSR</h1>
    <p>Time in Athens, Europe: {{ new Date(data.datetime).toUTCString() }}</p>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch(
  "https://worldtimeapi.org/api/timezone/Europe/Athens"
);
</script>
