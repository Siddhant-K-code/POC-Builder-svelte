import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-svelte";

export async function load(event: any) {
  // fetch your Builder content
  const content = await fetchOneEntry({
    model: "page",
    apiKey: "aec6955142fa4d6790debbbec945f51e",
    options: getBuilderSearchParams(event.url.searchParams),
    userAttributes: {
      urlPath: event.url.pathname || "/",
    },
  });
  return { content };
}
