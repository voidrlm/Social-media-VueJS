<template>
    <v-container fluid>
        <v-card-title :class="$vuetify.breakpoint.mdAndUp ? 'text-h4 mt-n7' : 'text-h5 justify-center'"
            ><v-icon size="35" class="mr-2" :color="$vuetify.theme.dark ? 'white' : 'black'">{{
                getGreetingData === 'Good Evening' ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny'
            }}</v-icon
            >{{ getGreetingData }}, {{ $store.getters.currentUser.name }} !</v-card-title
        >
        <storiesGroup />
        <postCard :postsData="postsData" />
        <v-dialog
            transition="dialog-bottom-transition"
            max-width="800"
            content-class="rounded-xl"
            v-model="showNewPost"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-fab-transition>
                    <v-btn
                        class="rounded-xl"
                        elevation="20"
                        :class="$vuetify.theme.dark ? 'black--text white' : 'black--text accent'"
                        :x-large="$vuetify.breakpoint.mdAndUp"
                        :large="$vuetify.breakpoint.smAndDown"
                        bottom
                        fixed
                        right
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon class="mr-2">mdi-plus-circle</v-icon>New Post
                    </v-btn>
                </v-fab-transition>
            </template>
            <template v-slot:default>
                <v-card class="rounded-xl">
                    <v-toolbar color="accent" elevation="0" class="text-h6">Create a new post.</v-toolbar>
                    <v-form v-model="validPost">
                        <v-card-text class="pb-0 mb-n4">
                            <v-textarea
                                label="What's happening?"
                                solo-inverted
                                flat
                                class="rounded-lg mt-5"
                                counter="500"
                                maxlength="500"
                                v-model="postDescription"
                                :rules="[(v) => !!v || '']"
                            ></v-textarea>
                            <v-layout class="justify-center" v-if="imgLink !== '' && isValidUrl()">
                                <v-img max-height="150" max-width="250" :src="imgLink" class="mb-3"></v-img>
                            </v-layout>
                            <v-text-field
                                label="Image Link"
                                solo-inverted
                                elevation="0"
                                class="rounded-lg mt-2"
                                flat
                                v-model="imgLink"
                                @input="isValidUrl"
                                :rules="[(v) => isValidUrl() || v === '' || 'Invalid image URL']"
                            ></v-text-field>
                        </v-card-text>
                    </v-form>
                    <v-card-actions :class="!$vuetify.breakpoint.xsOnly ? 'justify-end' : 'justify-center'">
                        <v-btn elevation="0" class="ma-3 pa-3" rounded @click="showNewPost = false">Close</v-btn>
                        <v-btn
                            elevation="0"
                            class="ma-3 pa-3"
                            :disabled="!validPost"
                            rounded
                            @click="showNewPost = false"
                            >Post</v-btn
                        >
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </v-container>
</template>
<script>
import postCard from '@/components/posts/postCard.vue';
import storiesGroup from '@/components/stories/storiesGroup.vue';
import { postsData } from '@/resources/postsDatabase';
import { friendsData } from '@/resources/friendsDatabase';
export default {
    name: 'home-component',
    data: () => ({ postsData, friendsData, showNewPost: false, validPost: true, postDescription: '', imgLink: '' }),
    computed: {
        getGreetingData() {
            var today = new Date();
            var curHr = today.getHours();

            return curHr < 12 ? 'Good Morning' : curHr > 18 ? 'Good Evening' : 'Good Afternoon';
        },
    },
    components: { storiesGroup, postCard },
    created() {
        postsData.map((post) => {
            let userObject = friendsData.filter(function (user) {
                return user.userId === post.userId;
            });
            post.uploaderId = userObject[0].userId;
            post.uploadedBy = userObject[0].name;
            post.uploaderAvatar = userObject[0].icon;
            post.isUploaderOnline = userObject[0].isOnline;
        });
    },
    methods: {
        isValidUrl() {
            return this.imgLink.match(/\.(jpeg|jpg|gif|png)$/) != null;
        },
    },
};
</script>
