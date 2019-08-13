<template>
  <div class="blue-square-container">
    <h2>
      <span>FOOD NEWS</span>
    </h2>
    <div class="food-news">
      <HotNews></HotNews>
    </div>

    <div>
      <h2>
        <span>WHERE TO EAT</span>
      </h2>
      <div class="food-news">
        <HotReview></HotReview>
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
        <HotGuide></HotGuide>
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
      <HotTrendingList></HotTrendingList>
    </div>

    <div>
      <h2>
        <span>PROMOTIONS</span>
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
.txtTrending {
  color: inherit;
  text-decoration: none;
  outline: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  color: #767676;
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
import HotNews from "../News/HotNews.vue";
import HotReview from "../EatOut/HotReview.vue";
import HotGuide from "../GoodHealth/HotGuide.vue";
import HotTrendingList from "../other/HotTrendingList.vue";
export default {
  components: {
    SlideShow,
    HotNews,
    HotReview,
    HotGuide,
    HotTrendingList
  }
};
</script>
