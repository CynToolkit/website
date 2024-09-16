<template>
  <div class="flex flex-col items-center p-8 bg-gray-100 min-h-screen">
    <img
      alt="Dataflare Logo"
      class="w-16 h-16 mb-4"
    />
    <h1 class="text-2xl font-bold mb-2">Download Dataflare</h1>
    <p class="text-gray-600 mb-8">
      Choose the version that suits your operating system (OS) and CPU
      architecture
    </p>

    <div class="flex flex-wrap justify-center gap-8">
      <DownloadCard
        os="macOS"
        :options="macOptions"
        brewCommand="brew install dataflare"
      />
      <DownloadCard
        os="Windows"
        :options="windowsOptions"
        wingetCommand="winget install Dataflare.Dataflare"
      />
      <DownloadCard os="Linux" :options="linuxOptions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from "vue";

const macOptions = ref([
  { label: ".dmg (Apple Silicon)", value: "apple-silicon" },
  { label: ".dmg (Intel)", value: "intel" },
]);

const windowsOptions = ref([{ label: ".exe (x86_64)", value: "x86_64" }]);

const linuxOptions = ref([
  { label: ".AppImage (x86_64)", value: "x86_64" },
  { label: ".AppImage (AArch64)", value: "aarch64" },
]);

const DownloadCard = defineComponent({
  props: {
    os: String,
    options: Array,
    brewCommand: String,
    wingetCommand: String,
  },
  setup(props) {
    const getOsIcon = (os: string) => {
      switch (os) {
        case "macOS":
          return "🍎";
        case "Windows":
          return "🪟";
        case "Linux":
          return "🐧";
        default:
          return "";
      }
    };

    return { getOsIcon };
  },
  template: `
    <div class="bg-white rounded-lg shadow-md p-6 w-80">
      <div class="flex items-center mb-4">
        <span class="text-2xl mr-2">{{ getOsIcon(os) }}</span>
        <h2 class="text-xl font-semibold">{{ os }}</h2>
        <span v-if="os === 'Windows'" class="ml-2 px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded">Unsigned</span>
      </div>
      <div v-if="brewCommand || wingetCommand" class="bg-gray-100 p-2 rounded mb-4 font-mono text-sm">
        {{ brewCommand || wingetCommand }}
      </div>
      <div v-for="option in options" :key="option.value" class="flex justify-between items-center mb-2">
        <span>{{ option.label }}</span>
        <button class="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">↓</button>
      </div>
    </div>
  `,
});
</script>

<style lang="scss" scoped></style>
