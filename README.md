### Overview

This project is an admin panel built with Nest.js and React for managing credentials, resources, and wallets in a cryptocurrency and Web3 environment. It emphasizes security through encryption and offers robust management features for crypto-related resources.

### Features

**Credentials Management:**
- Secure storage and management of credentials with encryption using private key-based hashing and salting.

**Resource Management:**
- Store, delete, and manage various crypto-related resources such as API keys and contract addresses.
- Share resources securely with other users.

**Wallet Integration:**
- Manage multiple cryptocurrency wallets, including private keys and seed phrases.

**User Access Control:**
- Role-based access control for secure collaboration.

### Security

- All credentials are encrypted using private key-based hashing with salt to protect against breaches.
- Role-based access ensures that only authorized users can access or modify sensitive information.

### Installation

Clone the repository:

```bash
git clone https://github.com/your-repo/crypto-admin-panel.git
cd crypto-admin-panel
```

Install server dependencies:

```bash
cd server
npm install
```

Install client dependencies:

```bash
cd ../client
npm install
```

Set up environment variables:

Create a `.env` file in the `server` directory and set up the necessary environment variables for database connection, encryption keys, etc.

Run the server:

```bash
cd server
npm run start
```

Run the client:

```bash
cd ../client
npm start
```

### Usage

Access the admin panel at `http://localhost:3000`.

Use the panel to manage credentials, resources, and wallets securely.

### Contributing

Contributions are welcome! Please submit a pull request or open an issue for any feature requests or bugs.

### License

This project is licensed under the MIT License.

### Contact

For questions or support, please contact medynskyypavlo@gmail.com.