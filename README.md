# nodelab4
lab for nodejs course

Tried to organize the code to separate models, routes, db setup from the main app.

- server.js                   Contains the references to the different parts and performs the startup process
- dbconfig.js                 Definitions for Mongoose to connect to mongodb
- /models/accountModel.js     The definition of Mongoose Model
- /routes/index.js            Router configuration
- /routes/accounts.js         Accounts routes implementation

Tested with postman.
- The request collection can be accessed here: https://www.getpostman.com/collections/f25ed2c6553f5636e5ef
