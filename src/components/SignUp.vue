<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign Up Form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
              v-model="email"
              prepend-icon="mdi-email"
              name="email"
              label="email"
              :rules="[rules.required, rules.emailValid]">
              </v-text-field>
              <v-text-field
              v-model="password"
              prepend-icon="mdi-lock"
              name="password"
              label="password"
              :append-icon="showPass ?  'mdi-eye-off' : 'mdi-eye'"
              :type="showPass ? 'text' : 'password'"
              :rules="[rules.required]"
              @click:append="showPass = !showPass"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="clear">Clear</v-btn>
            <v-btn color="primary" @click="signUp">Submit</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import firebase from '../Firebase';

console.log(firebase);
export default {
  data() {
    return {
      email: '',
      password: 'Password',
      valid: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailValid: v => /.+@.+/.test(v) || 'E-mail must be valid',
      },
      showPass: true,
    };
  },
  methods: {
    clear() {
      this.$refs.form.reset();
    },
    signUp() {
      if (this.$refs.form.validate()) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
          .then(user => console.log(user))
          .catch((error) => {
            const errorMessage = error.message;
            this.$router.push({ name: 'error', params: { errorMessage } });
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
