import db from "$lib/database";

/** @type {import('./__types/[id]').RequestHandler} */
export async function get({ request, platform }) {
  // `params.id` comes from [id].js
  const item = platform.env.WT.get("one");

  if (item) {
    return {
      status: 200,
      headers: {},
      body: { item },
    };
  }

  return {
    status: 404,
  };
}
