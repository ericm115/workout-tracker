<script>
import { blank_object } from "svelte/internal";


export let item;
let name;
let phone;
let address;
const handleSubmit = () => {
    console.log(name,phone,address)
}
</script>
<form on:submit|preventDefault={handleSubmit}>
<input type="text" placeholder="name" bind:value={name}>
<input type="text" placeholder="belt color" bind:value={phone}>
<input type="number" placeholder="age" bind:value="{address}">
<button>Submit</button>
</form>

{#each item as i}
<div class="my-4">
<p>Name: {i.name}</p>
<p>Phone: {i.phone}</p>
<p>Address: {i.address}</p>
</div>
{/each}