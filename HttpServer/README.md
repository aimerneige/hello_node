# Http Server

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
