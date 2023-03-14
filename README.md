## Run the API:
1. run command: **npm install**
2. create a **.env** file in the root of the project directory.
3. use the **.env.sample** to configure what is needed inside the .env file.
- The .env file should look like this:<br>
    ```
    PORT=
    DATABASE_CLIENT=
    DATABASE_HOST=change this to db host
    DATABASE_USER=
    DATABASE_PASSWORD=change this to the db password
    DATABASE_PATH=
    SCHEMA=change this to the proper schema path
    ```

4. run the commands:
    - **nodemon** or
    - **node index.js**