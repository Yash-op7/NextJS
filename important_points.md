# diff b/w `"use client"` and `"use server"`(default) in NextJS
- In Next.js, the terms "use client" and "use server" refer to where a piece of code runs—on the client (browser) or the server.
## `use-client`:
- it indicates that the component should be rendered on the client side. This is particularly important for:
    - State Management: 
        - Components that need to maintain local state or rely on browser APIs (like `window` or `localStorage`).
    - Interactivity: 
        - Components that include interactive features, like forms or animations, which require client-side rendering.

example:
```js
// This component runs on the client
"use client";

import React, { useState } from 'react';

const ClientComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};

export default ClientComponent;
```
## `use-server`
- component runs on the server side by default. This is useful for:

    - Data Fetching:
        - You can fetch data on the server before sending it to the client, reducing the amount of JavaScript sent to the browser and improving performance.
    - SEO Optimization: 
        - Server-side rendering helps with search engine optimization since the full HTML is generated on the server before it reaches the client.

example:
```js
// This component runs on the server by default

const ServerComponent = async () => {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();

  return <div>{json.message}</div>;
};

export default ServerComponent;
```
## Performance:
- Client-side rendering can be slower initially but can lead to a more dynamic experience.
- Server-side rendering can improve load times and SEO.

> ⭐ choosing between `"use client"` and `"use server"` helps you optimize your Next.js application based on the specific needs of your components.

# `<Link>` Component
- It is primarily used for creating navigational links in your application. It helps with client-side navigation, enabling the application to stay on the same page without a full reload.

- Automatically prefetches linked pages for faster navigation.

# `useRouter()` Hook
- It gives you access to the Next.js router instance, allowing you to programmatically navigate, access route parameters, and manage query strings.
- It is typically used in more dynamic scenarios where you need to perform navigation in response to events or after certain conditions are met.
- `<Link>`: Best for static links in the UI (e.g., menus, navbars).
- `useRouter()`: Best for dynamic or conditional navigation (e.g., after an action, based on user input).
- Both need "use client"

