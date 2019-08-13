<template>
  <v-container grid-list-md text-center>
    <v-layout wrap justify-space-around>
      <v-flex md5>
        <h2>
          <span>TRENDING</span>
        </h2>
        <div>
          <article>
            <ol>
              <li>
                <h3 class="story_headline">
                  <a href="#" class="txtTrending">
                    <font size="+1">Five unexpected sources of food poisoning (and how to avoid it).</font>
                  </a>
                </h3>
              </li>
              <li>
                <h3 class="story_headline">
                  <a href="#" class="txtTrending">
                    <font size="+1">Five unexpected sources of food poisoning (and how to avoid it).</font>
                  </a>
                </h3>
              </li>
              <li>
                <h3 class="story_headline">
                  <a href="#" class="txtTrending">
                    <font size="+1">Five unexpected sources of food poisoning (and how to avoid it).</font>
                  </a>
                </h3>
              </li>
              <li>
                <h3 class="story_headline">
                  <a href="#" class="txtTrending">
                    <font size="+1">Five unexpected sources of food poisoning (and how to avoid it).</font>
                  </a>
                </h3>
              </li>
            </ol>
          </article>
        </div>
      </v-flex>
      <v-flex md7>
        <h2>
          <span>PHOTO GALLERIES</span>
        </h2>
        <div>
          <SlideShow></SlideShow>
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
.txtTrending {
  color: inherit;
  text-decoration: none;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  color: #767676;
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