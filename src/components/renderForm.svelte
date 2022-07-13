<script>
    export let data;
</script>

{#each JSON.parse(data) as i}
<div class="my-4">
<p>Name: {i.name}</p>
<p>Phone: {i.phone}</p>
<p>Address: {i.address}</p>
</div>
{/each}