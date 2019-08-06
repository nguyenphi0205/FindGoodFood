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
        <li class="drop">
          <a v-on:click="display_drop_menu()">
            Menu 2 dropdown
            <i class="icon-arrow"></i>
          </a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
        </li>
        <li class="drop">
          <a v-on:click="display_drop_menu()">
            Menu 3 dropdown
            <i class="icon-arrow"></i>
          </a>
          <ul class="drop_menu">
            <a>Sub menu 1</a>
            <a>Sub menu 2</a>
            <a>Sub menu 3</a>
          </ul>
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
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "supervisor_account", text: "About", route: "/about" },
        { icon: "supervisor_account", text: "My Category", route: "/Category" }
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
        event.target.parentElement.nextSibling.style.marginTop = drop_menu.clientHeight + "px";
      }
    }
  }
};
</script>
