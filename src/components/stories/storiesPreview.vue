<template>
  <v-layout justify-start class="mt-3">
    <v-slide-group class="pa-0" show-arrows>
      <v-slide-item
        v-for="(story, index) in storiesData"
        :key="index"
        class="rounded-xl"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-card class="ma-2" height="200" width="100">
              <v-img height="200" :src="story.img">
                <v-fade-transition>
                  <v-overlay
                    v-if="hover || story.isViewed"
                    absolute
                    color="black"
                    ><v-icon size="50" v-if="!story.isViewed"
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
</template>

<script>
import { storiesData } from "@/resources/storiesDatabase";
export default {
  components: {},
  data: () => ({ storiesData }),
  methods: {},
};
</script>
<style scoped></style>
