# CCL Auction App

## Description
CCL Auction App is a React Native real-time multiplayer bidding auction application that enables users to participate in live auctions conveniently from their mobile devices.

## Features
- Real-time auction updates and notifications.
- Secure user authentication.
- User-friendly interface for both bidders and auctioneers.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (version 14 or later)
- React Native CLI
- Expo CLI (for development)

## Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/mdimranshek68-afk/ccl-auction-app.git
   cd ccl-auction-app
   ```

2. **Install dependencies**
   Use the following command to install necessary packages:
   ```bash
   npm install
   ```

3. **Set up Firebase**
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable authentication methods you want (e.g., Email/Password).
   - Add your Firebase configuration in `firebaseConfig.js`.

4. **Run the app**
   For a development build, run:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios      # For iOS
   ```
   Or start the Expo server:
   ```bash
   expo start
   ```
   Open the Expo app on your mobile device and scan the QR code to run the application.

## Usage
- Create an account or log in to view active auctions.
- Participate in auctions in real-time by placing bids.
- Receive notifications on auction status and updates.

## Contributing
Contributions are welcome! Feel free to submit pull requests or report issues.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.