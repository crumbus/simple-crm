<template>
    <v-app>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

            <v-toolbar-title>TinyCRM</v-toolbar-title>
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

        <!-- Sizes your content based upon application components -->
        <v-main>
            <router-view></router-view>
        </v-main>

        <v-footer app>
            Tiny CRM - Simple CRM for your business
        </v-footer>
    </v-app>
</template>

<script>
export default {
    name: "App",
    data: () => ({
        drawer: false,
        isMainMenu: null,
    }),
}
</script>

<style scoped>

</style>
