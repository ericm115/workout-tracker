import { writable } from "svelte/store";

export const altoids = writable([]);

const fetchAltoids = async () => {
  const res = await platform.env.WT.get("one");
  const data = await res.json();
  const loadedAltoids = data;
  altoids.set(loadedAltoids);
};

fetchAltoids();
