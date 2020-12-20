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

If you run the `readfile.js`, you will find the **'end.'** is before the text. But when you run the `readfilesync.js` you will find the **'end.**' is behind the text.

That's because the function readFile() just tell the system to read the file, when the system read all of the data from text file, the recall function will be called and print the data from text file. But the main app will not wait for it, it just go on and print the **'end.'**.

See `filereadcakkback.js` for more.

### Event

For `event.js` we have a function emit the event after 1000 ms.

When the event was emit, the system will call the event on function and print **"some_event occurred."**.



