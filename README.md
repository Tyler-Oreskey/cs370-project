## Run this API:
1. In the root of the project directory run the command: **npm install**
2. create a **.env** file in the root of the project directory.
3. Use the .env.sample file to see what is needed in the .env file
- The .env file should contain:<br>
    ```
    PORT=leave blank
    DATABASE_CLIENT=leave blank
    DATABASE_HOST=change this to AWS db host
    DATABASE_USER=leave blank
    DATABASE_PASSWORD=change this to the AWS db password
    DATABASE_PATH=leave blank
    SCHEMA=change this to the development schema path
    ```

4. In the project root directory, run the command:
    - **nodemon** or
    - **node index.js**
