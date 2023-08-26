<script>
  import Mockups from "$lib/images/image-mockups.png";
  import bgDesktop from "$lib/images/bg-intro-desktop.svg";
  import Buttons from "../components/Buttons.svelte";
  import Features from "../components/Features.svelte";
  import Articles from "../components/Articles.svelte";
  import { onMount } from "svelte";
  onMount(() => {
    const hiddenElements = document.querySelectorAll(".hiddens");

    const observer = new IntersectionObserver((enteries) => {
      enteries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    hiddenElements.forEach((el) => observer.observe(el));
  });
</script>

<main
  class="desktop:flex overflow-hidden justify-between items-center w-full bg-Very_Light_Gray z-10"
>
  <div
    class={`backs order-3   flex   justify-end    group bg-cover  transition-all duration-200  z-20  `}
  >
    <img
      class="w-full desktop:w-[90%] tablet:mx-auto desktop:mx-0 tablet:w-[50%] transition-all duration-300"
      src={Mockups}
      height={400}
      alt="BG"
    />
  </div>
  <article
    class="max-w-xl px-10 col-span-3 my-5 order-1 text-center mx-auto desktop:text-left"
  >
    <h2
      class="text-3xl py-4 leading-[2.8rem] font-bold text-Dark_Blue tablet:text-4xl desktop:text-6xl desktop:leading-[4.3rem]"
    >
      <span>Next generation </span> digital banking
    </h2>
    <p class="px-2 text-[0.95rem] tablet:text-[0.98rem] desktop:text-[1.2rem]">
      Take your financial life online. Your Easybank account will be a
      one-stop-shop for spending, saving, budgeting, investing, and much more.
    </p>
    <Buttons styles=" my-4" />
  </article>
</main>

<section>
  <Features />
</section>
<section>
  <Articles />
</section>

<style>
  article h2 > span {
    position: relative;
    /* color: hsl(0, 0%, 98%); */
  }
  article h2 > span::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: hsl(0, 0%, 98%);
    animation: animas 10s ease-in-out 3s infinite;
  }
  @keyframes animas {
    0% {
      width: 100%;
    }

    50% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  }
  main {
    position: relative;
  }
  main::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 70vh;
    background: url("../lib/images/bg-intro-mobile.svg");
    background-size: cover;
    background-attachment: fixed;
    z-index: -1;
    transition: all 1s ease-in-out;
  }
  @media screen and (min-width: 578px) {
    main::after {
      height: 60vh;
    }
  }
  @media screen and (min-width: 1024px) {
    main::after {
      width: 100%;
      background-attachment: fixed;
      height: 180vh;
      right: -40%;
      background: url("../lib/images/bg-intro-desktop.svg");
    }
  }
</style>
