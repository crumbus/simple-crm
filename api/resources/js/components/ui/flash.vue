<template>
    <v-snackbar
        v-model="show"
        :timeout="timeout"
    >
        {{ body }}

        <template v-slot:action="{ attrs }">
            <v-btn
                color="blue"
                text
                v-bind="attrs"
                @click="hide"
            >
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {
            timeout: 3000,
            show: false,
            body: ''
        }
    },
    created() {
        if (this.message) {
            this.flash(this.message)
        }
        window.events.$on('flash', (message) => this.flash(message))
    },
    methods: {
        flash(message) {
            this.show = true
            this.body = message
        },
        hide() {
            this.show = false
        }
    }
}
</script>
