<template>
    <div class="auth-wrapper auth-v1">
        <div class="auth-inner">
            <v-card class="auth-card">
                <!-- logo -->
                <v-card-title class="d-flex align-center justify-center py-7">
                    <h2 class="text-2xl font-weight-semibold">Register</h2>
                </v-card-title>

                <!-- title -->
                <v-card-text>
                    <p class="text-2xl font-weight-semibold text--primary mb-2">
                        Adventure starts here 🚀
                    </p>
                    <p class="mb-2">
                        Make your CRM easy and fun!
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
                            v-model="firstName"
                            outlined
                            label="First Name"
                            placeholder="John"
                            hide-details
                            class="mb-3"
                        ></v-text-field>

                        <v-text-field
                            v-model="lastName"
                            outlined
                            label="Last Name"
                            placeholder="Doe"
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
                            class="mb-3"
                        ></v-text-field>

                        <v-text-field
                            v-model="passwordConfirm"
                            outlined
                            :type="isPasswordConfirmVisible ? 'text' : 'password'"
                            label="Password Confirm"
                            placeholder="············"
                            :append-icon="isPasswordConfirmVisible ? icons.mdiEyeOffOutline : icons.mdiEyeOutline"
                            hide-details
                            @click:append="isPasswordConfirmVisible = !isPasswordConfirmVisible"
                        ></v-text-field>

                        <v-checkbox
                            hide-details
                            class="mt-1"
                        >
                            <template #label>
                                <div class="d-flex align-center flex-wrap">
                                    <span class="me-2">I agree to</span><a href="javascript:void(0)">privacy policy
                                    &amp; terms</a>
                                </div>
                            </template>
                        </v-checkbox>

                        <v-btn
                            block
                            color="primary"
                            class="mt-6"
                        >
                            Sign Up
                        </v-btn>
                    </v-form>
                </v-card-text>

                <!-- create new account  -->
                <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            Already have an account?
          </span>
                    <router-link :to="{ name: 'login' }">
                        Sign in instead
                    </router-link>
                </v-card-text>

                <!-- divider -->
                <v-card-text class="d-flex align-center mt-2">
                    <v-divider></v-divider>
                    <span class="mx-5">or</span>
                    <v-divider></v-divider>
                </v-card-text>

                <!-- social link -->
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
            isPasswordConfirmVisible: false,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirm: '',
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
        register: function () {
            let data = {
                firstname: this.firstName,
                lastname: this.lastName,
                email: this.email,
                password: this.password,
                password_confirm: this.passwordConfirm,
            }

            this.$store.dispatch('register', data)
                .then(() => {
                    flash('Account registered successfully!', 'success');
                    this.$router.push('/');
                })
                .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss">

</style>
