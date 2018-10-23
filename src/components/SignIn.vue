<template>
  <v-form>
    <v-container fluid>
      <v-flex xs12 sm6>
        <v-text-field
        v-model="email"
        name="email"
        label="email"
        :rules="[rules.required]">
        </v-text-field>
      </v-flex>
      <v-flex xs12 sm6>
        <v-text-field
        v-model="password"
        name="password"
        label="password"
        :append-icon="showPass ?  'mdi-eye-off' : 'mdi-eye'"
        :type="showPass ? 'text' : 'password'"
        :rules="[rules.required]"
        @click:append="showPass = !showPass"
        >
        </v-text-field>
      </v-flex>
    </v-container>
  </v-form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match'),
      },
      showPass: false,
    };
  },
};
</script>
<style scoped>

</style>
