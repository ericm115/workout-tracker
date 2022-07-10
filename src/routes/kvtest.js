/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request, platform }) {
  // `params.id` comes from [id].js
  const item = await platform.env.KVNamespace.get("one").json();

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
