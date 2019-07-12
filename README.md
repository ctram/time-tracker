# Time Tracker

## Get App Running

### Requirements
- Postgres
- Node.js

### Steps For Running Development
- Install Node packages `npm install`
- Create a Postgres database titled "time_tracker_development".
- Ensure Postgres is running.
- Run database migrations. Run `npx sequelize-cli db:migrate`
- Compile assets. `parcel public/index.html`
- Start Node server. `npm run start`
- Application is now accessible via url address `http://localhost:3000`
