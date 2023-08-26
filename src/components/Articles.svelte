<script>
  import confetti from "$lib/images/image-confetti.jpg";
  import currency from "$lib/images/image-currency.jpg";
  import plane from "$lib/images/image-plane.jpg";
  import restaurant from "$lib/images/image-restaurant.jpg";

  const data = [
    {
      id: "1",
      author: "By Claire Robinson",
      title: "Receive money in any currency with no fees",
      description:
        "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single ",
      image: currency,
    },
    {
      id: "2",
      author: "By Wilson Hutton",
      title: "Treat yourself without worrying about money",
      description:
        " Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
      image: restaurant,
    },
    {
      id: "3",
      author: "By Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      description:
        "We want you to enjoy your travels. This is why we don’t charge any fees on purchases  while you’re abroad. We’ll even show you …",
      image: plane,
    },
    {
      id: "4",
      author: "By Claire Robinson",
      title: " Our invite-only Beta accounts are now live!",
      description:
        " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
      image: confetti,
    },
  ];
</script>

<div class="containers p-3 desktop:px-10 w-full mx-auto">
  <h2
    class="text-center text-Dark_Blue text-4xl p-4 desktop:text-left font-medium"
  >
    Latest Articles
  </h2>
  <ul
    class="w-full px-3 tablet:grid tablet:grid-cols-2 desktop:grid-cols-4 gap-x-5"
  >
    {#each data as item (item.id)}
      <li
        class="w-[100%] article_item hiddens my-10 overflow-hidden rounded-md mx-auto bg-white"
      >
        <img src={item.image} class="w-full h-56" alt="" />
        <article class="px-4 py-2">
          <span class="text-[0.84rem] py-2 text-Grayish_Blue">
            {item.author}
          </span>
          <h2 class=" text-Dark_Blue font-semibold text-2xl py-4">
            {item.title}
          </h2>
          <p>
            {item.description}
          </p>
        </article>
      </li>
    {/each}
  </ul>
</div>
