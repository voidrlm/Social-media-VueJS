<template>
    <v-container fluid>
        <v-app-bar app elevation="0">
            <v-btn class="mx-0" icon @click="gotoHome()"><v-icon>mdi-chevron-left-circle</v-icon></v-btn>
            <v-list-item-avatar size="45" class="mx-2 mr-3">
                <v-img :src="$store.getters.selectedUserFromNavbar.icon"></v-img>
            </v-list-item-avatar>
            <v-toolbar-title class="font-weight-medium"
                >{{ $store.getters.selectedUserFromNavbar.name
                }}<v-icon
                    size="15"
                    class="ml-2"
                    :class="$store.getters.selectedUserFromNavbar.isOnline ? 'green--text' : ''"
                    v-text="'mdi-circle'"
                ></v-icon
            ></v-toolbar-title>
            <v-spacer></v-spacer>
        </v-app-bar>

        <v-card-text class="pa-0 mt-n8" height="100%">
            <div v-if="messages.length === 0">
                <v-card-title class="align-center justify-center mb-n4 font-weight-medium"
                    >Start a conversation</v-card-title
                >
            </div>
            <div v-else>
                <div v-for="(message, index) in messages" :key="index" flat class="pa-2 mx-n2" id="textArea">
                    <v-list-item :key="message.time" v-if="message.from != 'You'" class="mb-n2">
                        <v-list-item-content class="pa-0">
                            <v-card class="flex-none rounded-xl rounded-bl-0" flat>
                                <v-card-text
                                    class="pa-2"
                                    :class="
                                        $vuetify.theme.dark
                                            ? 'grey lighten-4  black--text'
                                            : 'grey darken-1 white--text'
                                    "
                                >
                                    <span class="body-2">{{ message.message }}</span>
                                </v-card-text>
                            </v-card>
                            <span class="text-caption font-weight-medium grey--text" align="start">{{
                                message.time
                            }}</span>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-else :key="index" class="mb-n4">
                        <v-list-item-content class="justify-end pa-0">
                            <v-card color="accent" class="flex-none rounded-xl rounded-br-0" flat>
                                <v-card-text
                                    class="pa-2"
                                    :class="
                                        $vuetify.theme.dark
                                            ? 'grey darken-2  white--text'
                                            : 'grey lighten-1 black--text'
                                    "
                                >
                                    <span class="body-2">{{ message.message }}</span>
                                </v-card-text>
                            </v-card>
                            <span class="text-caption font-weight-medium grey--text" align="end">{{
                                message.time
                            }}</span>
                        </v-list-item-content>
                    </v-list-item>
                </div>
            </div>

            <v-footer app inset>
                <v-text-field
                    ref="textField"
                    flat
                    solo
                    v-model.trim="msg"
                    placeholder=" Start typing...    "
                    class="rounded-xl"
                    @keypress.enter="sendNote"
                    hide-details
                    :rules="[(value) => !!value || '']"
                >
                    <template v-slot:append-outer
                        ><v-btn class="mt-n1" icon @click="sendNote"
                            ><v-icon size="35">mdi-send-circle</v-icon></v-btn
                        ></template
                    ></v-text-field
                ></v-footer
            >
        </v-card-text>
    </v-container>
</template>

<script>
export default {
    name: 'messages-view',
    props: {
        showConversatonDialog: Boolean,
    },
    data() {
        return {
            messages: [
                {
                    from: this.$store.getters.selectedUserFromNavbar.name,
                    message: 'Hi',
                    time: '12:57:1 AM',
                },
                {
                    from: this.$store.getters.selectedUserFromNavbar.name,
                    message: 'Whats up',
                    time: '12:57:39 AM',
                },
            ],

            msg: null,
        };
    },

    beforeCreate() {
        if (Object.keys(this.$store.getters.selectedUserFromNavbar).length === 0) {
            this.$router.push({
                path: '/home',
            });
        }
    },
    mounted() {
        this.scrollToTextField();
    },
    components: {},
    computed: {},
    methods: {
        gotoHome() {
            this.$router.push({
                path: '/home',
            });
        },
        scrollToTextField() {
            var x = document.getElementById('textArea');
            x.scrollIntoView();
        },

        sendNote: function () {
            if (this.$refs.textField.validate()) {
                this.messages.push({
                    from: 'You',
                    message: this.msg,
                    time: new Date().toLocaleTimeString(),
                }),
                    this.messages.push({
                        from: this.$store.getters.selectedUserFromNavbar.name,
                        message: 'Okay',
                        time: new Date().toLocaleTimeString(),
                    });
                this.msg = null;
                this.scrollToTextField();
            }
        },
    },
};
</script>

<style>
.flex-none {
    flex: unset;
}
</style>
