<template>
  <button type="button" @click="count++">
    front end count is: {{ count }}
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const host: number = 7003;
const count = ref<number>(0);

// api请求
interface IDocker {
  id: string;
}

const api = async (): Promise<void> => {
  await axios.get<IDocker[]>("/test").then((res): void => {
    console.log(res.data);
  });
};

// 启动
api();
console.log(`frontend on port ${host} 🚀`);
</script>
