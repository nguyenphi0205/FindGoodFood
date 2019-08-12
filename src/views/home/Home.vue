<template>
  <div class="blue-square-container">
    <h2>
      <span>FOOD NEWS</span>
    </h2>
    <div class="food-news">
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex xs12 md8>
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
          <v-flex xs12 md4>
            <div style="text-align: center">
              <v-card color="primary" flat>
                <v-card-text class="px-0">
                  <h3>what is good food ?</h3>
                </v-card-text>
                <v-card-text class="px-0">
                  <h3>what is good food ?</h3>
                </v-card-text>
                <v-card-text class="px-0">
                  <h3>what is good food ?</h3>
                </v-card-text>
                <v-card-text class="px-0">
                  <h3>what is good food ?</h3>
                </v-card-text>
                <v-card-text class="px-0">
                  <h3>what is good food ?</h3>
                </v-card-text>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div>
      <h2>
        <span>WHERE TO EAT</span>
      </h2>
      <div class="food-news">
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
      </div>
    </div>
    <div>
      <h2>
        <span>WHAT TO COOK</span>
      </h2>
      <div class="food-news">
        <SlideShow></SlideShow>
      </div>
    </div>
    <div>
      <h2>
        <span>EDITOR'S PICKS</span>
      </h2>
    </div>
    <div>
      <div class="food-news">
        <v-layout wrap>
          <v-flex grow pa-1>
            <v-card dark color="green lighten-1">
              <v-card-text>I'm a Flex with a lot of content that will NOT shrink when the content is wider than the available width in the row. Try resizing the window</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div>
      <h2>
        <span>QUICK LINKS</span>
      </h2>
      <div class="food-news">
        <v-layout wrap>
          <v-flex grow pa-1>
            <v-card dark color="green lighten-1">
              <v-card-text>I'm a Flex with a lot of content that will NOT shrink when the content is wider than the available width in the row. Try resizing the window</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>

    <div class="food-news">
      <v-container grid-list-md text-center>
        <v-layout wrap>
          <v-flex xs8>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card dark color="primary">
              <v-card-text class="px-0">12</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div>
      <h2>
        <span>PROMOTIONS</span>
      </h2>
    </div>
    <div>
      <h2>
        <span>GOOD FOOD VIDEO</span>
      </h2>
    </div>
  </div>
</template>

<style scoped>
h2 {
  width: 50%;
  text-align: center;
  border-bottom: 3px solid silver;
  font-family: Duplicate Ionic, Helvetica, Arial, Verdana, sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  line-height: 0.3em;
  margin: 30px 25% 20px;
}
.story_headline {
  font-size: 1.6875rem;
  margin-bottom: 0.3125rem;
  line-height: 1.1111;
}
h2 span {
  background: #fff;
  text-align: center;
  padding: 0 10px;
}
.food-news {
  width: 70%;
  margin: 30px 15% 20px;
}
.blue-square-container {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
}
</style>

<script>
import SlideShow from "../../components/SlideShow/SlideShow.vue";
export default {
  components: {
    SlideShow
  }
};
</script>
