<template>
  <v-container fluid fill-height>
    <v-layout>
      <v-flex>
        <h1 class="text-xs-center">Ops something went wrong</h1>
        <h2 class="text-xs-center">{{ errorMessage }}</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  props: ['errorMessage'],
};
</script>

