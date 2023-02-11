<template>
  <div>
    <v-layout justify-start class="mt-3">
      <v-slide-group class="pa-0" show-arrows>
        <v-slide-item
          v-for="(story, index) in storiesData"
          :key="index"
          class="rounded-xl"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                class="ma-2"
                height="200"
                width="100"
                style="cursor: pointer"
                @click="expandStory(story)"
              >
                <v-img height="200" :src="story.img">
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover || story.isViewed"
                      absolute
                      color="black"
                    >
                      <v-icon size="50" v-if="!story.isViewed || hover"
                        >mdi-magnify</v-icon
                      >
                    </v-overlay>
                  </v-fade-transition></v-img
                >
              </v-card>
            </template>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-layout>
    <v-dialog v-model="showStoryPreview" width="500">
      <v-card class="pa-5">
        <v-img :src="selectedStory.img"
          ><v-list-item
            ><v-list-item-avatar class="ma-2"
              ><v-img
                :src="
                  selectedStory.user == undefined ? '' : selectedStory.user.icon
                "
              ></v-img> </v-list-item-avatar
            ><v-list-item-content
              ><v-list-item-title
                ><v-chip small>{{
                  selectedStory.user == undefined ? "" : selectedStory.user.name
                }}</v-chip></v-list-item-title
              ></v-list-item-content
            ></v-list-item
          ></v-img
        ></v-card
      >
    </v-dialog>
  </div>
</template>

<script>
import { storiesData } from "@/resources/storiesDatabase";
import { friendsData } from "@/resources/friendsDatabase";
export default {
  components: {},
  data: () => ({
    storiesData,
    friendsData,
    showStoryPreview: false,
    selectedStory: {},
  }),
  methods: {
    expandStory(story) {
      this.showStoryPreview = true;
      this.selectedStory = story;
      let user = this.friendsData.filter(function (user) {
        return user.userId === story.userId;
      });

      this.selectedStory.user = user[0];
    },
  },
};
</script>
<style scoped></style>
