<template>
  <header>
    <div class="wrap">
      <div id="hamburger" v-on:click="display_menu()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <img
        src="https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/104/thumb_bigger_formation-vue-js.png"
        alt="logo"
      />
      <nav id="menu">
        <li class="drop" v-for="link in links" :key="link.text">
          <div v-if="link.sub_menu ===false">
            <router-link router :to="link.route">{{link.text}}</router-link>
          </div>
          <div v-else>
            <a v-on:click="display_drop_menu()">
              {{link.text}}
              <i class="icon-arrow"></i>
            </a>
            <ul class="drop_menu">
              <a v-for="child in link.route" :key="child.id">
                <router-link router :to="child.subRoute">{{child.text}}</router-link>
              </a>
            </ul>
          </div>
        </li>
      </nav>
      <div>
        <Login></Login>
      </div>
      <div>
        <Register></Register>
      </div>
    </div>
  </header>
</template>

<style lang="less" scoped>
@import "./NavBarStyle.less";
</style>
<script>
import "./NavBarExtend.js";
import Login from "../Login/login.vue";
import Register from "../Register/register.vue";
export default {
  components: {
    Login,
    Register
  },
  data() {
    return {
      links: [
        { icon: "dashboard", text: "Home", route: "/", sub_menu: false },
        {
          icon: "supervisor_account",
          text: "Eat Out",
          route: [
            {
              id: "1",
              text: "Restaurants",
              subRoute: "/eat-out/restaurants"
            },
            {
              id: "2",
              text: "Cafes",
              subRoute: "/eat-out/cafes"
            },
            {
              id: "3",
              text: "Bars",
              subRoute: "/eat-out/bars"
            }
          ],
          sub_menu: true
        },
        {
          icon: "dashboard",
          text: "Good Food Guide",
          route: "/good-food-guides",
          sub_menu: false
        },
        {
          icon: "dashboard",
          text: "Recipes",
          route: [
            {
              id: "1",
              text: "Recipe Collection",
              subRoute: "/eat-out/restaurant"
            },
            {
              id: "2",
              text: "Weekly Meal Plan",
              subRoute: "/eat-out/restaurant"
            },
            {
              id: "3",
              text: "Food News",
              subRoute: "/eat-out/restaurant"
            }
          ],
          sub_menu: true
        },
        {
          icon: "dashboard",
          text: "Drinks",
          route: [
            {
              id: "1",
              text: "Wine",
              subRoute: "/eat-out/restaurant"
            },
            {
              id: "2",
              text: "Beer &  Cider",
              subRoute: "/eat-out/restaurant"
            },
            {
              id: "3",
              text: "Cocktails & Spirits",
              subRoute: "/eat-out/restaurant"
            },
            {
              id: "4",
              text: "Coffee",
              subRoute: "/eat-out/restaurant"
            }
          ],
          sub_menu: true
        },
        {
          icon: "dashboard",
          text: "Good Health",
          route: "/",
          sub_menu: false
        },
        {
          icon: "dashboard",
          text: "Video",
          route: "/",
          sub_menu: false
        }
      ]
    };
  },
  methods: {
    display_menu: function() {
      var body = document.getElementsByTagName("body")[0];
      !body.classList.contains("display_menu")
        ? body.classList.add("display_menu")
        : body.classList.remove("display_menu");
    },
    display_drop_menu: function() {
      var drop_menu = event.target.parentElement.getElementsByClassName(
        "drop_menu"
      )[0];
      var drop_menus = document.getElementsByClassName("drop_menu");

      Array.from(drop_menus).forEach(function(e) {
        if (e != drop_menu) {
          e.classList.remove("display");
        }
      });
      var lis = document.getElementById("menu").getElementsByTagName("li");
      Array.from(lis).forEach(function(e) {
        e.style.marginTop = 0;
      });
      !drop_menu.classList.contains("display")
        ? drop_menu.classList.add("display")
        : drop_menu.classList.remove("display");
      if (window.innerWidth < 660 && drop_menu.classList.contains("display")) {
        console.log(event.target.parentElement.style.marginBottom);
        event.target.parentElement.style.marginTop =
          drop_menu.clientHeight + "px";
      }
    }
  }
};
</script>
