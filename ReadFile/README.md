# Read File

If you run the `readfile.js`, you will find the **'end.'** is before the text. But when you run the `readfilesync.js` you will find the **'end.**' is behind the text.

That's because the function readFile() just tell the system to read the file, when the system read all of the data from text file, the recall function will be called and print the data from text file. But the main app will not wait for it, it just go on and print the **'end.'**.

See `filereadcakkback.js` for more.
