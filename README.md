# Hello Node

## About

This is some simple example when I learning nodejs.

## Let's start!

### Hello World

Just like what's in `hello.js`. If you have something like this:

```js
console.log("Hello World!");
```

Run this with below command:

```bash
node hello.js
```

You will get a output `Hello World!` on the terminal.

This is the standard IO operation on nodejs.

### Console Log

Just like what's in `consolelog.js`. The `console.log` function is like the function `printf` in C language, you can pass arguments to it.

### Http Server

Run `app.js` with below command:

```bash
node app.js
```

Open the `http://127.0.0.1:3000`, You will see a simple website.

When you edit the `app.js`, then refresh the web page, you will find the page are not changed. You must restart the app.js.

If you wants to make the web page refresh as you changed source file, you can use supervisor

Install supervisor with below command:

```bash
sudo npm install -g supervisor
```

After you install the supervisor, just run the `app.js` with below command:

```bash
supervisor app.js
```

After that, you can changed the source file and refresh the page, you will find the web page changed.

### Read File






