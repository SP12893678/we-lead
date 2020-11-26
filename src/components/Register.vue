<template>
    <v-app>
        <v-container fluid fill-height>
            <v-row justify="center" align-self="center">
                <v-col class="pa-8" md="auto">
                    <v-row justify="center" align-self="center">
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-card width="400">
                                <v-card-title>
                                    WeLead
                                    <v-spacer></v-spacer>
                                    會員註冊
                                </v-card-title>

                                <v-card-text class="pb-0">
                                    <!-- <v-tabs class="mb-4" grow>
                                        <v-tab>
                                            <v-icon class="mr-2"
                                                >mdi-gender-male</v-icon
                                            >男
                                        </v-tab>
                                        <v-tab>
                                            <v-icon class="mr-2"
                                                >mdi-gender-female</v-icon
                                            >女
                                        </v-tab>
                                    </v-tabs>
                                    <v-text-field label="姓名"></v-text-field> -->
                                    <v-text-field
                                        v-model="user.account.value"
                                        :label="user.account.label"
                                        :rules="
                                            $store.getters[
                                                'validation/inputRules'
                                            ](['required'])
                                        "
                                        prepend-inner-icon="mdi-account"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.email.value"
                                        :label="user.email.label"
                                        :rules="
                                            $store.getters[
                                                'validation/inputRules'
                                            ](['email', 'required'])
                                        "
                                        prepend-inner-icon="mdi-email"
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.password.value"
                                        :label="user.password.label"
                                        :rules="
                                            $store.getters[
                                                'validation/inputRules'
                                            ](['password'])
                                        "
                                        prepend-inner-icon="mdi-lock"
                                        :append-icon="
                                            user.password.show
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        :type="
                                            user.password.show
                                                ? 'text'
                                                : 'password'
                                        "
                                        @click:append="
                                            user.password.show = !user.password
                                                .show
                                        "
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="user.passwordCheck.value"
                                        :label="user.passwordCheck.label"
                                        :rules="
                                            $store.getters[
                                                'validation/inputRules'
                                            ](
                                                ['passwordCheck', 'required'],
                                                user.password.value
                                            )
                                        "
                                        prepend-inner-icon="mdi-lock"
                                        :append-icon="
                                            user.passwordCheck.show
                                                ? 'mdi-eye'
                                                : 'mdi-eye-off'
                                        "
                                        :type="
                                            user.passwordCheck.show
                                                ? 'text'
                                                : 'password'
                                        "
                                        @click:append="
                                            user.passwordCheck.show = !user
                                                .passwordCheck.show
                                        "
                                    ></v-text-field>
                                </v-card-text>
                                <v-card-actions>
                                    <v-col md="auto">
                                        <v-row>
                                            <v-btn to="/login" text
                                                >已有帳號?</v-btn
                                            >
                                            <v-btn outlined @click="onSubmit"
                                                >註冊</v-btn
                                            >
                                        </v-row>
                                    </v-col>
                                </v-card-actions>
                                <v-card-text class="pt-0">
                                    <v-checkbox
                                        v-model="user.policy.value"
                                        :rules="
                                            $store.getters[
                                                'validation/inputRules'
                                            ](['email', 'required'])
                                        "
                                        class="mt-0"
                                    >
                                        <template v-slot:label>
                                            <div>
                                                <component
                                                    v-for="(item, index) in user
                                                        .policy.content"
                                                    :key="item + index"
                                                    :is="
                                                        item.link ? 'a' : 'span'
                                                    "
                                                    :href="item.link || ''"
                                                    target="_blank"
                                                    @click.stop
                                                    >{{ item.label }}
                                                </component>
                                            </div>
                                        </template>
                                    </v-checkbox>
                                </v-card-text>
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
    data() {
        return {
            valid: true,
            errMsg: "",
            user: {
                account: {
                    label: "帳號",
                    value: null,
                },
                password: {
                    label: "密碼",
                    show: false,
                    value: null,
                },
                passwordCheck: {
                    label: "再輸入一次密碼",
                    show: false,
                    value: null,
                },
                email: {
                    label: "信箱",
                    value: null,
                },
                policy: {
                    content: [
                        { label: "登入註冊即代表您同意" },
                        { label: "使用者", link: "/policy" },
                        { label: "及" },
                        { label: "隱私權政策", link: "/policy" },
                    ],
                    value: false,
                },
            },
        };
    },
    mounted() {},
    methods: {
        dialogHandle() {
            this.$emit("dialogHandle");
        },
        onSubmit() {
            this.errMsg = "";
            if (this.$refs.form.validate()) {
                this.$store.commit("loadingBox", { show: true });
                this.$store
                    .dispatch("http/post", {
                        api: "register",
                        account: this.user.account.value,
                        password: this.user.password.value,
                        email: this.user.email.value,
                    })
                    .then((data) => {
                        this.$store.commit("loadingBox", { show: false });
                        console.log(data);
                        if (data.status) {
                        } else {
                        }
                    });
            }
        },
        clear() {
            this.$refs.form.reset();
        },
    },
};
</script>

<style>
</style>