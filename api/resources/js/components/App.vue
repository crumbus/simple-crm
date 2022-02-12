<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>
                <router-link to="/" class="white--text">TinyCRM</router-link>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-menu
                left
                bottom
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar
                        color="indigo"
                        size="36"
                        v-bind="attrs"
                        v-on="on"
                    >
                        <span class="white--text text-h5">{{ avatar }}</span>
                    </v-avatar>
                </template>

                <v-list>
                    <v-list-item to="/login">
                        <v-list-item-icon>
                            <v-icon>mdi-login-variant</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item>

                    <v-list-item to="/register">
                        <v-list-item-icon>
                            <v-icon>mdi-account-plus</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item>

                    <v-list-item @click="logout" v-if="isLogged">
                        <v-list-item-icon>
                            <v-icon>mdi-logout</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list
                nav
                dense
            >
                <v-list-item-group
                    v-model="isMainMenu"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view></router-view>
        </v-main>

        <v-footer
            dark
            padless
        >
            <v-card
                class="flex"
                flat
                tile
            >
                <v-card-title>
                    <strong class="subheading">Get connected with us on social networks!</strong>

                    <v-spacer></v-spacer>

                    <v-btn
                        v-for="icon in footerIcons"
                        :key="icon"
                        class="mx-4"
                        dark
                        icon
                    >
                        <v-icon size="24px">
                            {{ icon }}
                        </v-icon>
                    </v-btn>
                </v-card-title>

                <v-card-text class="py-2 white--text text-center">
                    {{ year }} - TinyCRM
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        drawer: false,
        isMainMenu: null,
        year: (new Date()).getFullYear(),
        footerIcons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),

    computed: {
        isLogged: function () {
            return this.$store.getters.isLogged
        },
        avatar: function () {
            return this.$store.getters.userAvatar
        },
    },

    methods: {
        logout: function () {
            this.$store.dispatch('logout')
                .then(() => {
                    this.$router.push('/login')
                });
        }
    },

}
</script>

<style scoped>

</style>
