<script>
import { blank_object } from "svelte/internal";


export let item;
export let thing;
let name;
let phone;
let address;

var data = item;
function handleSubmit() {
    // Send a POST request to src/routes/contact.js endpoint
    submit = fetch('/form', {
      method: 'POST',
      body: JSON.stringify({ name: name, phone: phone, address: address, preData: item }),
      headers: { 'content-type': 'application/json' },
    })
      .then((resp) => resp.json())
      .finally(() => setTimeout(() => (submit = null), 5000))

      data = thing;
  }
</script>
<form on:submit|preventDefault={handleSubmit}>
<input type="text" placeholder="name" bind:value={name}>
<input type="text" placeholder="belt color" bind:value={phone}>
<input type="number" placeholder="age" bind:value="{address}">
<button>Submit</button>
</form>

{#each JSON.parse(data) as i}
<div class="my-4">
<p>Name: {i.name}</p>
<p>Phone: {i.phone}</p>
<p>Address: {i.address}</p>
</div>
{/each}