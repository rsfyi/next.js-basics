Getting started with Next.js
`https://nextjs.org/`

1. npm init -y
2. yarn add next@latest react@latest react-dom@latest
3. Add following scripts to package.json
   1. "dev": "next",
   2. "build": "next build",
   3. "start": "next start"

`Note - If you create any directory inside pages folder - you will get route added to that folder`

git rm -r --cached .next - remove cached file from git

Supports

1. inline react style - style={{color: 'red'}}
2. styled-jsx
   ```
      <style jsx``></style>
   ```
3. Adding external styled sheet file using Head component from next.js
4. Add public folder and add css file
5. Add express route for dynamic routes
6. Adding withRouter to route access elements
7. Add file \_app.js
