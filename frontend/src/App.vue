<template>
  <main>
    <div><strong>データ:</strong></div>
    <br />
    <div>{{ data }}</div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";

const host: number = 7021;
interface IDocker {
  id: string;
}

// ja:apiリクエスト
// zh:api请求
const data = ref<IDocker[]>();
const api = async (): Promise<void> => {
  await axios.get<IDocker[]>("/test").then((res): void => {
    console.log(res.data);
    data.value = res.data;
  });
};

// ja:起動
// zh:启动
api();
console.log(`frontend on port ${host} 🚀`);
</script>
