<script>
    // populated with data from the endpoint  
    export let item;
    console.log(item)
    console.log(JSON.stringify(item))
  </script>
  
  <h1>KV Test</h1>
  {#each item as i}
    <p>Name: {i.name}</p>
    <p>Phone: {i.phone}</p>
    <p>Address: {i.address}</p>
  {/each}