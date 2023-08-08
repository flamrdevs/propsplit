<p align="center">
  <a title="license" href="https://github.com/flamrdevs/propsplit/blob/main/LICENSE">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/l?t=dark&n=propsplit">
      <img alt="license" src="https://none.deno.dev/npm/l?t=light&n=propsplit" hspace="1">
    </picture>
  </a>
  <a title="version" href="https://www.npmjs.com/package/propsplit">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/npm/v?t=dark&n=propsplit">
      <img alt="version" src="https://none.deno.dev/npm/v?t=light&n=propsplit" hspace="1">
    </picture>
  </a>
  <a title="size" href="https://bundlejs.com/?q=propsplit">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/bundlejs/mz?t=dark&n=propsplit">
      <img alt="size" src="https://none.deno.dev/bundlejs/mz?t=light&n=propsplit" hspace="1">
    </picture>
  </a>
</p>

<h1 id="propsplit">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=rocket">
    <img alt="lucide rocket" src="https://none.deno.dev/ui/icon/lucide?t=light&i=rocket" hspace="1">
  </picture>
  <span>
    propsplit
  </span>
</h1>

Split props utility

<h2 id="usage">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=code">
    <img alt="lucide code" src="https://none.deno.dev/ui/icon/lucide?t=light&i=code" hspace="1">
  </picture>
  <span>
    usage
  </span>
</h2>

```ts
import propsplit from "propsplit";

const props = {
  foo: "string",
  bar: 1,
  baz: true,
  other: ["is", "array"],
  another: { is: "object" },
};

const [foo, bar, baz, rest] = propsplit(props, ["foo"], ["bar"], ["baz"]);
```

<h2 id="license">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://none.deno.dev/ui/icon/lucide?t=dark&i=scale">
    <img alt="lucide scale" src="https://none.deno.dev/ui/icon/lucide?t=light&i=scale" hspace="1">
  </picture>
  <span>
    license
  </span>
</h2>

MIT
