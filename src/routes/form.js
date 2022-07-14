//Just simp0ly call the workers functions as per usual but make sure it has await.
//if json data is being returned you need to part it with JSON.parse before its returned.
/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ request, platform }) {
  // `params.id` comes from [id].js
  let item = await platform.env.KVNamespace.get("one");
  item = JSON.parse(item);
  if (item) {
    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { item },
    };
  }

  return {
    status: 404,
  };
}

export async function post({ request, platform }) {
  let { name, phone, address, preData } = await request.json();
  preData = JSON.parse(preData);
  preData.push({ name: name, phone: phone, address: address });
  item = preData;
  await platform.env.KVNamespace.put("one", preData);
  // Simulate a delay... instead you'd do something interesting here...
  if (item) {
    return {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { item },
    };
  }

  return {
    status: 404,
  };
}
