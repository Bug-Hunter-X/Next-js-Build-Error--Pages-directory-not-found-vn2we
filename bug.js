```javascript
// pages/index.js
export default function Home() {
  return (
    <div>Hello world</div>
  );
}
```

This code will cause a build error if the `pages` directory is not present in the `src` directory.  Next.js expects the pages directory to exist by default, even if you're not using it.  This might be the case if you've created a Next.js app and then removed the pages directory thinking it's optional. 