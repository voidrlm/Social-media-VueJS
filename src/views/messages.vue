<template>
  <v-container fluid>
    <v-card height="100%">
      <v-toolbar class="fixed-bar" elevation="0">
        <v-list-item-avatar size="45" class="mx-2 mr-3">
          <v-img :src="$store.getters.selectedUserFromNavbar.icon"></v-img>
        </v-list-item-avatar>
        <v-toolbar-title class="font-weight-medium">{{
          $store.getters.selectedUserFromNavbar.name
        }}</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider />
      <v-card-text class="pa-1" height="100%">
        <div v-if="messages.length === 0">
          <v-card-title
            class="align-center justify-center mb-n4 font-weight-medium"
            >Start a conversation</v-card-title
          >
        </div>
        <div v-else>
          <div
            v-for="(message, index) in messages"
            :key="index"
            flat
            class="pa-2"
          >
            <v-list-item
              :key="message.time"
              v-if="message.from != 'You'"
              class="mb-n4"
            >
              <v-list-item-content class="pa-0">
                <v-card class="flex-none rounded-xl rounded-bl-0" flat>
                  <v-card-text class="accent pa-2">
                    <span class="body-2">{{ message.message }}</span>
                  </v-card-text>
                </v-card>
                <span
                  class="text-caption font-weight-medium grey--text"
                  align="start"
                  >{{ message.time }}</span
                >
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-else :key="index" class="mb-n4">
              <v-list-item-content class="justify-end pa-0">
                <v-card
                  color="accent"
                  class="flex-none rounded-xl rounded-br-0"
                  flat
                >
                  <v-card-text class="white--text pa-2">
                    <span class="body-2">{{ message.message }}</span>
                  </v-card-text>
                </v-card>
                <span
                  class="text-caption font-weight-medium grey--text"
                  align="end"
                  >{{ message.time }}</span
                >
              </v-list-item-content>
            </v-list-item>
          </div>
        </div>
        <v-divider class="mt-5 mx-5 mb-5" />
        <v-card-actions hide-on-scroll class="pa-0 mx-5 mb-5" ref="textArea">
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
          ></v-card-actions
        >
      </v-card-text>
    </v-card></v-container
  >
</template>

<script>
export default {
  name: "messages-view",
  props: {
    showConversatonDialog: Boolean,
  },
  data() {
    return {
      messages: [
        {
          from: this.$store.getters.selectedUserFromNavbar.name,
          message: "Hi",
          time: "12:57:1 AM",
        },
        {
          from: this.$store.getters.selectedUserFromNavbar.name,
          message: "Whats up",
          time: "12:57:39 AM",
        },
      ],

      msg: null,
    };
  },

  beforeCreate() {
    if (Object.keys(this.$store.getters.selectedUserFromNavbar).length === 0) {
      this.$router.push({
        path: "/home",
      });
    }
  },
  mounted() {
    this.$refs.textArea.scrollIntoView();
  },
  components: {},
  computed: {},
  methods: {
    scrollToTextField() {
      this.$refs.textArea.scrollIntoView();
    },

    sendNote: function () {
      if (this.$refs.textField.validate()) {
        this.messages.push({
          from: "You",
          message: this.msg,
          time: new Date().toLocaleTimeString(),
        }),
          this.messages.push({
            from: this.$store.getters.selectedUserFromNavbar.name,
            message: "Sure",
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
.fixed-bar {
  position: sticky;
  position: -webkit-sticky; /* for Safari */
  top: 0;
  z-index: 2;
}
.flex-none {
  flex: unset;
}
</style>
