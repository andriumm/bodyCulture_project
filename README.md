# bodyCulture_project
CodeOp 1st project

## SetUp

### Dependencies
- Run ```npm install``` in project directory. This will install server-related dependencies such as express.
- ```cd client``` and run ```npm install```. This will install client dependencies (React).

### Database Prep
- Access the MySQL interface in your terminal by running ```mysql -u root -p```
- Create a new database called bodyCultureBcn: ```create database bodyCultureBcn```
- Create 2 tables
- Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:

```javascript
DB_HOST=localhost
DB_USER=root
DB_NAME=bodyCultureBcn
DB_PASS=YOURPASSWORD
```
- Run ```npm run migrate``` in the project folder of this repository, in a new terminal window. This will create two tables called 'profiles' and 'updates' in your database.

- Make sure you understand how both tables 'profiles' and 'updates' are constructed. In your MySQL console, you can run use 'profiles' or 'updates'; and then describe any of them; to see the structure of the students table.

### Development
- Run ```npm start``` in project directory to start the Express server on port 5000
- In another terminal, do ```cd client``` and ```run npm start``` to start the client in development mode with hot reloading in port 3000.

### Stack
- JavaScript, React.js, Express.js
- Other libraries: axios

### Database schema
![Db Schema](/databaseSchema.png)

 _This is a student project that was created at [CodeOp](http://codeop.tech), a full stack development bootcamp in Barcelona._
 
 
