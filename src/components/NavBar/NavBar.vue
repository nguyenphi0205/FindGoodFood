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
            <router-link :to="link.route">{{link.text}}</router-link>
          </div>
          <div v-else>
            <a v-on:click="display_drop_menu()">
              {{link.text}}
              <i class="icon-arrow"></i>
            </a>
            <ul class="drop_menu">
              <a v-for="child in link.route" :key="child.id">{{child.text}}</a>
            </ul>
          </div>
        </li>
      </nav>
    </div>
  </header>
</template>

<style lang="less" scoped>
@import "./NavBarStyle.less";
</style>
<script>
import "./NavBarExtend.js";
export default {
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
              subRoute: ""
            },
            {
              id: "2",
              text: "Cafes"
            },
            {
              id: "3",
              text: "Bars"
            },
            
          ],
          sub_menu: true
        },
        {
          icon: "dashboard",
          text: "Good Food Guide",
          route: "/",
          sub_menu: false
        },
        {
          icon: "dashboard",
          text: "Recipes",
          route: [
            {
              id: "1",
              text: "Recipe Collection",
              subRoute: ""
            },
            {
              id: "2",
              text: "Weekly Meal Plan"
            },
            {
              id: "3",
              text: "Food News"
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
              subRoute: ""
            },
            {
              id: "2",
              text: "Beer &  Cider"
            },
            {
              id: "3",
              text: "Cocktails & Spirits"
            },
            {
              id: "4",
              text: "Coffee"
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
        },
      ],
      menu: [
        { icon: "person", text: "profile", route: "/profile" },
        { icon: "exit_to_app", text: "Sign Out", route: "/SignOut" }
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
        event.target.parentElement.nextSibling.style.marginTop =
          drop_menu.clientHeight + "px";
      }
    }
  }
};
</script>
