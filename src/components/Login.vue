<template>
  <v-app>
    <v-container
      fluid
      fill-height
    >
      <v-row
        justify="center"
        align-self="center"
      >
        <v-col
          class="pa-8"
          md="auto"
        >
          <v-row
            justify="center"
            align-self="center"
          >
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
            >
              <v-card width="400">
                <v-card-title>
                  Leadpact
                  <v-spacer />
                  <v-chip
                    color="blue"
                    text-color="white"
                    label
                  >
                    會員登入
                  </v-chip>
                </v-card-title>

                <v-card-text>
                  <v-text-field
                    v-model="user.account.value"
                    :label="user.account.label"
                    :rules="$store.getters['validation/inputRules'](['required'])"
                    prepend-inner-icon="mdi-account"
                  />
                  <v-text-field
                    v-model="user.password.value"
                    :label="user.password.label"
                    :rules="$store.getters['validation/inputRules'](['required'])"
                    prepend-inner-icon="mdi-lock"
                    :append-icon="user.password.show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="user.password.show ? 'text' : 'password'"
                    @click:append="user.password.show = !user.password.show"
                  />
                </v-card-text>
                <v-card-actions>
                  <v-col md="auto">
                    <v-row>
                      <v-btn
                        to="/register"
                        text
                      >
                        創建帳號
                      </v-btn>
                      <v-btn
                        outlined
                        @click="onSubmit"
                      >
                        登入
                      </v-btn>
                    </v-row>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-form>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data () {
        return {
            valid: true,
            errMsg: '',
            user: {
                account: {
                    label: '帳號',
                    value: null
                },
                password: {
                    label: '密碼',
                    show: false,
                    value: null
                }
            }
        }
    },
    methods: {
        dialogHandle () {
            this.$emit('dialogHandle')
        },
        onSubmit () {
            this.errMsg = ''
            if (this.$refs.form.validate()) {
                this.$store.commit('loadingBox', { show: true })
                this.$store
                    .dispatch('http/post', {
                        api: 'login',
                        account: this.user.account.value,
                        password: this.user.password.value
                    })
                    .then((data) => {
                        setTimeout(() => {
                            this.$store.commit('loadingBox', { show: false })
                            // fake
                            // data = {
                            //     status: 1,
                            //     id_token: "123",
                            //     login_token: "asd32",
                            //     user_name: "violet",
                            //     is_teacher: 1,
                            //     is_verified: 1,
                            //     avatar: "",
                            // };
                            console.log(data)
                            if (data.status) {
                                this.$store.commit('user/setUserLogin', data)
                                this.$store.commit('user/setUserData', data)
                                this.$router.push({ path: '/' })
                                // this.$store.dispatch("user/getUserData").then((data)=>{
                                //     // this.$auth.setAuth('login');
                                //     this.$router.push({path:'/'});
                                // })
                            } else {
                                this.errMsg = '帳號或密碼錯誤'
                            }
                        }, 1500)
                    })
            }
        },
        clear () {
            this.$refs.form.reset()
        }
    }
}
</script>

<style>
</style>
