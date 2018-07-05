# MEVN boilerplate

A simple MEVN (MongoDB, Express.js, Vue.js, Node.js) web application boilerplate for personal projects.

<img src="/screenshots/screenshot1.PNG" alt="Picture of MEVN-boilerplate" height="80%" width="80%">

## Requirements
The following software must be installed
* MongoDB
* Node.js

## Usage
1. Clone this repo: `git clone https://github.com/georgeeyokoyama/mevn-boilerplate.git myproject`
2. Move into project directory: `cd myproject`
3. Setup **client-side**:  
  a. Move into client directory: `cd client`  
  b. Install dependencies: `npm install`  
  c. Start client-side dev server: `npm start`  
4. Setup **server-side**:  
  a. Move into server directory: `cd server`  
  b. Install dependencies: `npm install`  
  c. Start server app: `node src/index.js`
5. You can view the boilerplate at `localhost:8080`

## List of Packages
### Client-side
* [axios](https://github.com/axios/axios) - Make AJAX requests
* [Vue.js](https://github.com/vuejs) - Front-end framework
* [Vue-router](https://github.com/vuejs/vue-router) - Router for Vue.js
* [Vuetify](https://github.com/vuetifyjs/vuetify) - Material design for Vue.js components
* [Vuex](https://github.com/vuejs/vuex) - State management pattern + library for Vue.js
* [vuex-persistedstate](https://github.com/robinvdvleuten/vuex-persistedstate) - Stores Vuex state in [localStorage](localStorage)
### Server-side
* [bcrypt-nodejs](https://github.com/shaneGirish/bcrypt-nodejs) - Library for hashing and storing passwords
* [body-parser](https://github.com/expressjs/body-parser) - Express middleware for parsing requests
* [cors](https://github.com/expressjs/cors) - Express middleware for allowing [Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
* [Express](https://github.com/expressjs/express) - Web application framwork for Node.js
* [joi](https://github.com/hapijs/joi) - Object Schema description language and validator for JavaScript objects
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - For transmitting secure information as JSON objects
* [Mongoose](https://github.com/Automattic/mongoose) - ODM (Object Data Modeling) library for MongoDB
* [Morgan](https://github.com/expressjs/morgan) - Logs HTTP requests

## Directory Structure
### Client-Side
`client/src/`

| File | Description |
| --- | --- |
| **assets**/ | Folder for assets |
| **components**/Header.vue | Header component |
| **components**/Panel.vue | Panel component |
| **pages**/Dashboard.js | Dashboard page |
| **pages**/HelloWorld.js | HelloWorld page |
| **pages**/Login.js | Dashboard page |
| **pages**/NewPost.js | NewPost page |
| **pages**/Register.js | Register page |
| **pages**/Settings.js | Settings page |
| **pages**/ViewPost.js | ViewPost page |
| **router**/index.js | Vue-Router |
| **services**/Api.js | Axios object |
| **services**/AppService.js | Axios Ajax request routes for Application |
| **services**/AppService.js | Axios Ajax request routes for Authentication |
| **store**/store.js | Vuex store |
| App.vue | Vue.js main template file |
| main.js | Vue.js main js file |

### Server-Side
`server/src/`

| File | Description |
| --- | --- |
| **config**/config.js | Configuration file for server, mongoose, and jsonwebtoken |
| **controllers**/AppController.js | Controller for application /api route |
| **controllers**/AuthControllers.js | Controller for authentication /api route |
| **models**/db.js | Mongoose connection |
| **models**/Post.js | Mongoose schema/model for Post |
| **models**/User.js | Mongoose schema/model for User |
| **policies**/validateCredentials.js | Server-side form validation middleware |
| **policies**/verifyToken.js | jsonwebtoken authentication middleware |
| **routes**/api.js | /api route index |
| index.js | Application file |

## License
mevn-boilerplate is available under [MIT license](https://tldrlegal.com/license/mit-license).

### Screenshots

<img src="/screenshots/screenshot2.PNG" alt="Login page on mobile" align="left" height="80%">
<img src="/screenshots/screenshot3.PNG" alt="Edit post page on mobile" align="right" height="80%">
