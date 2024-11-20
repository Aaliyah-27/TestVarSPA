# TestVarSPA

TASK 1: Set up project environment and tools
- **Challenges with tool installations**:
  - Resolved issues with 'fnm' not being recognized by reconfiguring the PATH and updating shell initialization scripts.
  - Ensured proper installation of Node.js (LTS), SQLite3, and Git, troubleshooting path issues and verifying functionality.

- **Setting up the project directory**:
  - Created and initialized the 'TestVarSPA' directory with Node.js.
  - Installed essential dependencies: express, sqlite3, body-parser, cors, dotenv, jest, supertest, nodemon, eslint, and prettier.
  - Tools chosen ensure a robust backend (Express, SQLite3), smooth API handling (body-parser, cors), secure environment (dotenv), and reliable testing (jest, supertest). Nodemon, ESLint, and Prettier enhance development efficiency and maintainability.

- **Overcoming Git challenges**:
  - Resolved initial issues with 'git init' and successfully set up version control with all files staged for the first commit.

Project environment and tools are now fully configured.

TASK 2: Set up server structure and initialize key files

- **Challenges with directory creation**:
  - Encountered PowerShell-specific syntax issues when attempting to use Bash-style `mkdir` commands.
  - Resolved by leveraging a PowerShell loop to create the necessary directories (`routes`, `controllers`, `db`, `middleware`, `tests`).

- **Initializing server structure**:
  - Successfully created key server directories for modular development.
  - Initialized essential server files:
    - `server/app.js` (entry point for the backend)
    - `server/db/database.js` (database configuration)
    - `server/routes/flashcards.js` (routing logic)
    - `server/controllers/flashcardsController.js` (controller logic)

- **Key accomplishments**:
  - Established a modular and scalable server structure to support feature development.
  - Ensured smooth file creation and directory organization for better maintainability.


TAsk 3: Project structure, Node.js installation, and database configuration

- **Node.js installation**: Resolved issues with 'npm' and 'node' commands not being recognized by installing Node.js using 'winget'.
- **Project structure**: Created necessary directories (`server/routes`, `server/controllers`, `server/db`, `server/middleware`, `server/tests`) and initialized files (`app.js`, `database.js`, `flashcards.js`, `flashcardsController.js`) for the backend setup.
- **Database setup**: Implemented SQLite3 database with a 'flashcards' table to manage flashcard data.
- **Package.json configuration**: Added 'start' script in `package.json` to run the app using 'node server/app.js'. 
- **Dependencies**: Installed essential dependencies (`express`, `sqlite3`, `dotenv`, `jest`, `supertest`, etc.) to facilitate backend functionality and testing.

**Challenges and resolutions**:
- Overcame issues with 'npm' and 'node' not being recognized by successfully installing Node.js via winget.
- Resolved PowerShell directory creation issues by using a custom loop instead of unsupported syntax.
- Fixed 'Missing script: start' error by adding 'start' script to `package.json`.

Project setup is now complete, and the development environment is ready for further implementation.
