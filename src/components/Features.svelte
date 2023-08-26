<script>
  import online from "$lib/images/icon-online.svg";
  import simpleBudgeting from "$lib/images/icon-budgeting.svg";
  import onBoarding from "$lib/images/icon-onboarding.svg";
  import api from "$lib/images/icon-api.svg";

  const data = [
    {
      id: "1",
      title: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances  wherever you are in the world.",
      image: online,
    },
    {
      id: "2",
      title: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
      image: simpleBudgeting,
    },
    {
      id: "3",
      title: "Fast Onboarding",
      description:
        "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
      image: onBoarding,
    },
    {
      id: "4",
      title: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking  your money has never been easier.",
      image: api,
    },
  ];
</script>

<div
  class="containers px-5 py-20 desktop:px-14 mx-auto text-center bg-Light_Grayish_Blue"
>
  <article
    class=" my-10 max-w-md text-center tablet:max-w-2xl mx-auto desktop:text-left desktop:mx-0 w-full"
  >
    <h2 class="text-2xl py-3 tablet:text-4xl desktop:text-5xl">
      Why choose Easybank?
    </h2>
    <p class=" text-[0.94rem] desktop:text-[1.1rem]">
      We leverage Open Banking to turn your bank account into your financial
      hub. Control your finances like never before.
    </p>
  </article>
  <ul
    class="features py-24 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 desktop:gap-x-5"
  >
    {#each data as item (item.id)}
      <li class="my-20 relative z-1 hiddens feature_item">
        <img
          class="mx-auto 0 my-2 desktop:mx-0"
          src={item.image}
          alt={item.title}
          srcset=""
        />
        <article class="px-3 mx-auto max-w-md desktop:text-left">
          <h2 class="text-2xl py-3 text-Dark_Blue desktop:py-6">
            {item.title}
          </h2>
          <p class="text-[0.98rem] desktop:text-[1.1rem]">
            {item.description}
          </p>
        </article>
      </li>
    {/each}
  </ul>
</div>
