/// <reference types="@sveltejs/kit" />
// You need to put in the KV information as astandard. Line 10 example
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  interface Platform {
    env: {
      KVNamespace: "af1a2ece4c6f4b74ad152bed2f145fba";
    };
    context: {
      waitUntil(promise: Promise<any>): void;
    };
    caches: CacheStorage & { default: Cache };
  }
  // interface Session {}
  // interface Stuff {}
}
