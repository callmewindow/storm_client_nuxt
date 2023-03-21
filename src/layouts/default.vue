<template>
  <v-app :theme="app.dark ? 'dark' : 'light'">
    <v-main>
      <Navigator />
      <slot />
      <v-snackbar v-model="snackbar.display" :color="snackbar.color" :timeout="5000">
        {{ snackbar.content }}
        <template v-slot:actions>
          <v-btn color="white" variant="text" @click.stop="Snackbar.collapse()"> Close </v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app';
import { Snackbar } from '~/utils/snackbar';
import { ref } from 'vue';

const app = useAppStore();

const snackbar = app.snackbar;
</script>
