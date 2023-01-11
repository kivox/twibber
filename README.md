# Twibber
Twitter is hell, so let's make it worse.

### Features
- Authentication System with Time-based 2FA
- Tweet posting, deletion and **FREE** editing.
- Follow and unfollow other users
- View a feed of tweets from users you follow
- View a profile page with a user's tweets and followers/following

### Tech Stack
Twibber is built entirely in **NextJS**
- **Frontend**:
  - Mantine UI
- **Backend**:
  - Prisma
  - PostgreSQL
- **Deployment**:
    - Docker Compose

### Getting Started
- **Docker Compose**
  - Install **Docker**
  - Edit the `docker-compose.yml` file for security reasons.
  - Run `docker-compose up` in the root directory or run `docker-compose up -d` to run the app in the background
  - Navigate to `localhost:3000` in your browser
  - To stop the app, run `docker-compose down`
  - To stop the app and remove the containers, run `docker-compose down --rmi all`

### Contributing
We welcome contributions to Twibber. If you're interested in helping out, please take a look at the issues and see if there's something you'd like to work on.

Please note that all code contributions will be released under the same open-source license as the project.

### Support
If you have any questions or encounter any issues, feel free to open an issue.

### [LICENSE](LICENSE.md)
### [NPM Scripts](SCRIPTS.md)
