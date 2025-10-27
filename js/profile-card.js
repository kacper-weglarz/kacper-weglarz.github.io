import { html, render } from "https://unpkg.com/lit@latest?module";

async function get(url) {
  const resp = await fetch(url);
  return resp.json();
}

