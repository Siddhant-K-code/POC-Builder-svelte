<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { isPreviewing, Content } from "@builder.io/sdk-svelte";
	import { page } from '$app/stores';
 // this data comes from the function in `+page.server.js`, which runs on the server only
//  export let data;

// show unpublished content when in preview mode.
const canShowContent = $page.data?.content || isPreviewing();
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		to your new<br />SvelteKit app
	</h1>

	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>

	{#if canShowContent}
    <div>page Title: {$page.data?.content?.data?.title || "Unpublished"}</div>
    <Content
      model="page"
      content={$page.data?.content}
      apiKey="aec6955142fa4d6790debbbec945f51e"
    />
  {:else}
    Content Not Found
  {/if}

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
