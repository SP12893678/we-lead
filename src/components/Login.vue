<template>
    <v-app>
        <v-container fluid fill-height>
            <v-row justify="center" align-self="center">
                <v-col class="pa-8" md="auto">
                    <v-row justify="center" align-self="center">
                        <v-card width="500">
                            <v-card-title>
                                WeLead
                                <v-spacer></v-spacer>
                                會員登入
                            </v-card-title>

                            <v-card-text>
                                <v-text-field
                                    v-model="user.account.value"
                                    :label="user.account.label"
                                    prepend-inner-icon="mdi-account"
                                ></v-text-field>
                                <v-text-field
                                    v-model="user.password.value"
                                    :label="user.password.label"
                                    prepend-inner-icon="mdi-lock"
                                    :append-icon="
                                        user.password.show
                                            ? 'mdi-eye'
                                            : 'mdi-eye-off'
                                    "
                                    :type="
                                        user.password.show ? 'text' : 'password'
                                    "
                                    @click:append="
                                        user.password.show = !user.password.show
                                    "
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions>
                                <v-col md="auto">
                                    <v-row>
                                        <v-btn outlined>登入</v-btn>
                                    </v-row>
                                </v-col>
                            </v-card-actions>
                        </v-card>
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
            },
        };
    },
};
</script>

<style>
</style>