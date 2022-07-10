<script>
    import {pokemon} from "../stores/pokestore";
    import PokemanCard from "../components/pokemanCard.svelte"
import { altoids } from "src/stores/test";
</script>
<svelte:head>
    <title>Workout Tracker</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">Welcome to SvelteKit</h1>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
<div>{$altoids}</div>
    {#each $pokemon as pokeman}
    <PokemanCard pokeman={pokeman}/>
{/each}
</div>