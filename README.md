# Assignment4

## Description

Assignment4 is a backend application designed to serve application settings securely over HTTPS. Built with Express.js, it leverages Axios for external API requests and Winston for comprehensive logging capabilities. This server is configured to respond to CORS-enabled requests, making it suitable for modern web applications.

## Getting Started

These instructions will guide you through setting up and running `assignment4` on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- SSL certificates (for HTTPS) located in the `/ssl` directory at your project's root.

### Installation

1. **Clone the Project**:

   ```bash
   https://github.com/prof-gautam/web-services-assignment-4-backend
   cd assignment-4-backend
   ```
2. **Install Dependencies**:

   ```bash
   npm install
   ```
3. **Configure Environment Variables**:

   Duplicate the `.env.example` file, rename it to `.env`, and fill in your specific variables, such as your server's port and the settings endpoint:

   ```bash
   cp .env.example .env
   ```

   Your `.env` file might look like this:

   ```
   PORT=3001
   GITHUB_SETTING=https://path/to/your/settings.json
   ```
4. **SSL Certificates**:

   Ensure you have `key.pem` and `cert.pem` files inside the `/ssl` directory. These are necessary for the HTTPS configuration. If you don't have them, you can generate self-signed certificates for development purposes with:

   ```bash
   openssl req -nodes -new -x509 -keyout ssl/key.pem -out ssl/cert.pem
   ```

### Running the Server

Start the server in development mode with:

```bash
npm run dev

```
