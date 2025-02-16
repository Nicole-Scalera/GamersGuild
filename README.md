## Installation

**1.** Do a git clone of the following repository: https://github.com/MaristGormanly/nscalera-lab4

**2.** Please navigate to the correct folder in your terminal (`cd path/to/folder`), and enter `npm install`.

**3.** Then, run `psql -U postgres -f server/db/create-db.sql`

**4.** When prompted, please use the password you setup while installing postgres.

**5.** Lastly, please enter the credentials for the gamersguild database, with both the username and password being "gamersguild"

<br>

## Go to Website

**1.** To start up the website, please enter `npm run dev`

**2.** Then, please enter the following base URL into your browser: http://localhost:1337/

<br>

## Find Cookie

To find the cookie, please navigate to login.js and CTRL + Find the following line:

    document.cookie = "userID=" + userID + "; expires="
        + now.toUTCString() + ";";

This sets a cookie as well as an expiration time, which should be 10 minutes.
We are putting the userID in the cookie, and then if you go to [feed.js](/client/public/js/feed.js), you'll see that we retrieve it from the following line:

`var value = ";" + document.cookie;`

<br>

## API Documentation

Below is an example of API documentation of the program. We have six different methods (two for GET), which can be performed in Postman.

### USERS

This includes different user profiles feeds.

```
URL                     METHOD              BODY TYPE               REQUEST BODY IF POSSIBLE

/api/user               GET ALL             application/json
/api/user/:index        GET SINGULAR        application/json        
/api/user               POST                application/json        {"firstName":"Nathan", "lastName":"Drake"}
/api/user/:index        PUT                 application/json        {"firstName":"Nathan", "lastName":"Drake"}
/api/user/:index        PATCH               application/json        {"firstName":"Sam"}
/api/user/:index        DELETE              application/json
```

### FEEDS

This includes different feed posts.

```
URL                                      METHOD              BODY TYPE               REQUEST BODY IF POSSIBLE

/api/backendfeed                         GET ALL             application/json
/api/backendfeed:index                   GET SINGULAR        application/json
/api/backendfeed/user/:index/feed        GET USER FEEDS      application/json 
/api/backendfeed                         POST                application/json        {"description":"Hello, World!", "userID":"3"}
/api/backendfeed/:index                  PUT                 application/json        {"description":"Hello, World!", "like":"3", "comment":"Hello to you!"}
/api/backendfeed/:index                  PATCH               application/json        {"comment":"Hope all is well."}
/api/backendfeed/:index                  DELETE              application/json
```

<br>

## Dependencies

```
"body-parser": "^1.20.2",
"express": "^4.18.3",
```