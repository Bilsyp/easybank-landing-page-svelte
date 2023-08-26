<script>
  import "../app.css";
  import logo from "$lib/images/logo.svg";
  import logoWhite from "$lib/images/logo-white.svg";
  import bars from "$lib/images/icon-hamburger.svg";
  import Buttons from "../components/Buttons.svelte";
  import times from "$lib/images/icon-close.svg";
  import facebook from "$lib/images/icon-facebook.svg";
  import instagram from "$lib/images/icon-instagram.svg";
  import pinterest from "$lib/images/icon-pinterest.svg";
  import twitter from "$lib/images/icon-twitter.svg";
  import youtube from "$lib/images/icon-youtube.svg";

  let checks = "";
  const data = [
    {
      image: facebook,
    },
    {
      image: instagram,
    },
    {
      image: pinterest,
    },
    {
      image: twitter,
    },
    {
      image: youtube,
    },
  ];

  function handleClick() {
    const ul = document.querySelector("ul");
    const check = ul.getAttribute("data-show");

    if (check == "show") {
      checks = "close";
      ul.setAttribute("data-show", "close");
    } else {
      checks = "show";
      ul.setAttribute("data-show", "show");
    }
  }
</script>

<nav
  class="py-4 px-5 flex sticky top-0 justify-between backdrop-blur-sm tablet:justify-center tablet:gap-x-10 tablet:mr-10 items-center w-full z-30 desktop:justify-between desktop:px-10 desktop:py-2 bg-white"
>
  <div class="brand">
    <img src={logo} alt="logo" class="w-40" />
  </div>
  <ul
    data-show="close"
    class={` ${
      checks == "show"
        ? "top-[120%] bg-white  shadow-[0_50px_60px_-25px_rgba(0,0,0,0.9)]"
        : "top-[-1000%]"
    } absolute p-3 w-[80%] transition-all duration-700 rounded-md translate-x-[-50%] left-[50%] flex justify-center items-center flex-col gap-y-4 tablet:gap-x-5  tablet:static tablet:flex-row tablet:translate-x-0 tablet:w-auto tablet:bg-transparent   text-Grayish_Blue`}
  >
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Blog</li>
    <li>Careers</li>
  </ul>
  <Buttons styles={"hidden  desktop:block"} />
  <button class="cursor-pointer tablet:hidden" on:click={handleClick}>
    <img src={checks == "show" ? times : bars} alt="" srcset="" />
  </button>
</nav>

<slot />

<footer
  class=" bg-Dark_Blue desktop:flex justify-around items-center py-8 px-20 gap-x-10"
>
  <div class=" flex justify-start flex-col desktop:items-start">
    <img src={logoWhite} alt="" class="mx-auto py-5 desktop:mx-0" />
    <ul class="flex gap-x-4 mt-2 justify-center items-center">
      {#each data as item}
        <li>
          <img src={item.image} alt="" />
        </li>
      {/each}
    </ul>
  </div>
  <div
    class="list_link text-center text-Light_Grayish_Blue flex flex-col items-center text-[0.90rem] my-5 desktop:flex-row desktop:text-left desktop:gap-x-20"
  >
    <ul>
      <li>About Us</li>
      <li>Contact</li>
      <li>Blog</li>
    </ul>
    <ul>
      <li>Careers</li>
      <li>Support</li>
      <li>Privacy Policy</li>
    </ul>
  </div>
  <div class="text-center">
    <Buttons styles={"text-[0.86rem]  "} />
    <span class="py-4 text-Grayish_Blue block text-[0.83rem]"
      >© Easybank. All Rights Reserved</span
    >
  </div>
</footer>

<style>
  ul li {
    cursor: pointer;
  }
  .list_link ul li {
    margin: 8px 0;
  }
  .icons {
    background-image: url("../lib/images/logo-white.svg") center center/cover;
  }
</style>
