<template>
    <div class="auth-wrapper auth-v1">
        <div class="auth-inner">
            <v-card class="auth-card">
                <!-- logo -->
                <v-card-title class="d-flex align-center justify-center py-7">
                    <h2 class="text-2xl font-weight-semibold">Login</h2>
                </v-card-title>

                <!-- title -->
                <v-card-text>
                    <p class="text-2xl font-weight-semibold text--primary mb-2">
                        Welcome to TinyCRM! 👋🏻
                    </p>
                    <p class="mb-2">
                        Please sign-in to your account and start the adventure
                    </p>
                </v-card-text>

                <!-- login form -->
                <v-card-text>
                    <v-form>
                        <v-text-field
                            v-model="email"
                            outlined
                            label="Email"
                            placeholder="john@example.com"
                            hide-details
                            class="mb-3"
                        ></v-text-field>

                        <v-text-field
                            v-model="password"
                            outlined
                            :type="isPasswordVisible ? 'text' : 'password'"
                            label="Password"
                            placeholder="············"
                            :append-icon="isPasswordVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                            hide-details
                            @click:append="isPasswordVisible = !isPasswordVisible"
                        ></v-text-field>

                        <div class="d-flex align-center justify-space-between flex-wrap">
                            <v-checkbox
                                label="Remember Me"
                                hide-details
                                class="me-3 mt-1"
                            >
                            </v-checkbox>

                            <!-- forgot link -->
                            <a
                                href="javascript:void(0)"
                                class="mt-1"
                            >
                                Forgot Password?
                            </a>
                        </div>

                        <v-btn
                            @click="login"
                            block
                            color="primary"
                            class="mt-6"
                        >
                            Login
                        </v-btn>
                    </v-form>
                </v-card-text>

                <!-- create new account  -->
                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            New on our platform?
          </span>
                    <router-link :to="{name:'register'}">
                        Create an account
                    </router-link>
                </v-card-text>

                <!-- divider -->
                <v-card-text class="d-flex align-center mt-2">
                    <v-divider></v-divider>
                    <span class="mx-5">or</span>
                    <v-divider></v-divider>
                </v-card-text>

                <!-- social links -->
                <v-card-actions class="d-flex justify-center">
                    <v-btn
                        v-for="link in socialLink"
                        :key="link.icon"
                        icon
                        class="ms-1"
                    >
                        <v-icon>
                            {{ link.icon }}
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

    </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {mdiFacebook, mdiTwitter, mdiGithub, mdiGoogle, mdiEyeOutline, mdiEyeOffOutline} from '@mdi/js'

export default {
    data() {
        return {
            isPasswordVisible: false,
            email: '',
            password: '',
            socialLink: [
                {
                    icon: mdiFacebook,
                    color: '#4267b2',
                    colorInDark: '#4267b2',
                },
                {
                    icon: mdiTwitter,
                    color: '#1da1f2',
                    colorInDark: '#1da1f2',
                },
                {
                    icon: mdiGithub,
                    color: '#272727',
                    colorInDark: '#fff',
                },
                {
                    icon: mdiGoogle,
                    color: '#db4437',
                    colorInDark: '#db4437',
                },
            ],

            icons: {
                mdiEyeOutline,
                mdiEyeOffOutline,
            },
        }
    },

    methods: {
        login: function () {
            let email = this.email
            let password = this.password

            this.$store.dispatch('login', {email, password})
                .then(() => {
                    flash('Logged In Successfully', 'success');
                    this.$router.push('/');
                })
                .catch(err => console.log(err))
        }
    },
}
</script>

<style lang="scss">

</style>
