<template>
<div>
    <section>
        <v-parallax :src="bgImg0" height="600">
            <v-layout
                column
                align-center
                justify-center
                class="white--text"
            >
                <div class="d-flex justify-center align-center" style="margin-top: -20px;">
                    <img src="assets/images/logo/tinycrm.png" alt="JavaScript" class="img-responsive" width="250">
                </div>
            </v-layout>
        </v-parallax>
    </section>

    <section>
        <v-layout
            column
            wrap
            class="my-5"
            align-center
            style="padding-bottom: 20px;"
        >
            <v-flex xs12 sm4 class="my-3">
                <div class="text-center" style="margin-top: 20px;">
                    <h1 class="text-center">TinyCRM</h1>
                    <div class="subheading mb-3 text-center">Simple and powerful CRM solution for your business</div>
                </div>
            </v-flex>
            <v-flex xs12>

                <v-container grid-list-xl>
                    <v-layout row wrap align-center>
                        <v-flex xs12 md4>
                            <v-card class="elevation-0 transparent">
                                <v-card-text class="text-xs-center">
                                    <v-icon x-large class="blue--text text--lighten-2">mdi-domain</v-icon>
                                </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-center fw">Material Design</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                            <v-card class="elevation-0 transparent">
                                <v-card-text class="text-xs-center">
                                    <v-icon x-large class="blue--text text--lighten-2">mdi-air-filter</v-icon>
                                </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-center fw">Fast development</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md4>
                            <v-card class="elevation-0 transparent">
                                <v-card-text class="text-xs-center">
                                    <v-icon x-large class="blue--text text--lighten-2">mdi-code-tags-check</v-icon>
                                </v-card-text>
                                <v-card-title primary-title class="layout justify-center">
                                    <div class="headline text-center fw">Completely Open Sourced</div>
                                </v-card-title>
                                <v-card-text>
                                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </section>

    <section>
        <v-parallax :src="bgImg1" height="380">
            <v-layout column align-center justify-center>
                <h2 class="white--text" style="margin-top: 30px;">Powered with</h2>
                <div class="d-flex justify-center align-center powered-logos" style="margin-top: -20px;">
                    <img src="assets/images/logo/php-logo.png" alt="PHP" class="img-responsive" width="120">
                    <img src="assets/images/logo/laravel-logolockup-cmyk-red.svg" alt="Laravel" class="img-responsive" width="400">
                    <img src="assets/images/logo/MariaDB_Logo.png" alt="MySQL, MariaDB" class="img-responsive" width="160">
                </div>
                <div class="d-flex justify-center align-center powered-logos" style="margin-top: -20px;">
                    <img src="assets/images/logo/vue-js.png" alt="Vue.js" class="img-responsive" width="120">
                    <img src="assets/images/logo/JavaScript-logo.png" alt="JavaScript" class="img-responsive" width="120">
                    <img src="assets/images/logo/vuetify.png" alt="Vuetify.js" class="img-responsive" width="120">
                </div>
            </v-layout>
        </v-parallax>
    </section>

    <section>
        <v-container grid-list-xl style="margin-top: 20px;">
            <v-layout row wrap justify-center class="my-5">
                <v-flex xs12 sm4>
                    <v-card class="elevation-0 transparent">
                        <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Company info</div>
                        </v-card-title>
                        <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 sm4 offset-sm1>
                    <v-card class="elevation-0 transparent">
                        <v-card-title primary-title class="layout justify-center">
                            <div class="headline">Contact us</div>
                        </v-card-title>
                        <v-card-text>
                            Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        </v-card-text>
                        <v-list class="transparent">
                            <v-list-item class="d-block">
                                <v-list-item-action>
                                    <v-icon class="blue--text text--lighten-2">mdi-phone</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title><a href="tel:+38(099)-999-99-99">+38(099)-999-99-99</a></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item class="d-block">
                                <v-list-item-action>
                                    <v-icon class="blue--text text--lighten-2">mdi-map-marker-radius</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>Sumy, Ukraine</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>

                            <v-list-item class="d-block">
                                <v-list-item-action>
                                    <v-icon class="blue--text text--lighten-2">mdi-email</v-icon>
                                </v-list-item-action>
                                <v-list-item-content>
                                    <v-list-item-title>contact@tiny-crm.com</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</div>
</template>

<script>

export default {
  name: "HomePage",
  components: {
  },
  data() {
    return {
      bgImg0: 'assets/images/bg/hero.jpeg',
      bgImg1: 'assets/images/bg/plane.jpg'
    };
  }
};
</script>
