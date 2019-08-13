<template>
  <v-container grid-list-md text-center>
    <v-layout wrap justify-space-around>
      <v-flex xs12 md6>
        <v-card color="primary" flat style="text-align: center">
          <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="50%" width="100%" />
        </v-card>
        <div style="text-align: center">
          <h3 class="story_headline">
            <a>How to revive a loaf of stale bread</a>
          </h3>
          <p>The magic trick that makes stale loaves taste fresh again.</p>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div style="text-align: center">
          <v-flex md12 row>
            <v-flex md4>
              <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="100%" width="100%" />
            </v-flex>
            <v-flex md8>
              <v-card-text class="px-0">
                <h3>what is good food ?</h3>
              </v-card-text>
            </v-flex>
          </v-flex>
          <v-flex md12 row>
            <v-flex md4>
              <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="100%" width="100%" />
            </v-flex>
            <v-flex md8>
              <v-card-text class="px-0">
                <h3>what is good food ?</h3>
              </v-card-text>
            </v-flex>
          </v-flex>
          <v-flex md12 row>
            <v-flex md4>
              <img :src="'https://i.imgur.com/J5to7xE.jpg'" height="100%" width="100%" />
            </v-flex>
            <v-flex md8>
              <v-card-text class="px-0">
                <h3>what is good food ?</h3>
              </v-card-text>
            </v-flex>
          </v-flex>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.story_headline {
  font-size: 1.6875rem;
  margin-bottom: 0.3125rem;
  line-height: 1.1111;
}
</style>