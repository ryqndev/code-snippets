# Game Server 

## What is it?

This code, when run, will emulate a game server in [node](https://nodejs.org/en/) that 
takes in user input commands. 

## How does it work?

The code here is split into 2 files:
* client
* server

## How is it implemented?

The client code has been condensed into a single html file 
(js and basic css inlined) and has a single function that
triggers on user key press event and sends the value to the
backend server using a simple [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).

The backend server has route for GET requests sent to the '/input' 
route and stores all received commands into a string variable 
called history.

## How to run it
First, start the server. If you have [node](https://nodejs.org/en/) installed, you 
can open up the file that script.js is saved in (game-server > server)

```bash session
foo@bar:~$ cd server
foo@bar:~$ ls
package-lock.json	package.json		script.js
foo@bar:~$ npm install
foo@bar:~$ node script.js
```

If you're only running the script, the node command is 
sufficient for those purposes. However, if you're planning on 
on editing this code, I highly recommend running the server 
with nodemon and you can simply do: 

```bash session
foo@bar:~$ cd server
foo@bar:~$ ls
package-lock.json	package.json		script.js
foo@bar:~$ npm install
foo@bar:~$ nodemon
```

After starting the server, we will open the client folder and
open the index.html site in our browser. Similar to node/nodemon, 
you may want to use a live reload library like browsersync instead
of just opening the file on disk. Otherwise, this code should be 
sufficient to open it

```bash session
foo@bar:~$ cd client
foo@bar:~$ open index.html
```

### Note: You will need node to run the server. The server uses express.js and you can learn more about that [here](https://expressjs.com/).