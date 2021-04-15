<template>
  <div class="formik">
    <form class="formik2" @submit.prevent="submit">
      <md-field md-clearable>
        <label>Email</label>
        <md-input v-model="form.login" name="email"></md-input>
      </md-field>

      <md-field>
        <label>Password</label>
        <md-input
          v-model="form.password"
          type="password"
          name="password"
        ></md-input>
      </md-field>
      <md-button class="md-raised md-primary" type="submit">Sign In</md-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "signIn",
  data() {
    return {
      form: {
        login: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    async submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: "Home",
          });
        })
    },
  },
};
</script>


<style lang="scss" scoped>
.md-field:last-child {
  margin-bottom: 40px;
}
.formik {
  display: flex;
  justify-content: center;
  align-content: center;
}
.formik2 {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>