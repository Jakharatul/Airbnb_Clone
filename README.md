# Property Listing App

This is a full-stack Node.js web application that allows users to explore, create, and review property listings (similar to an Airbnb clone). Users can upload images for their properties, view property locations on an interactive map, and leave reviews for their stays.

## 🚀 Features

- **User Authentication & Authorization**: Secure signup, login, and logout functionality using Passport.js. Users can only edit or delete their own listings and reviews.
- **Create & Manage Listings**: Users can create new property listings with details like title, description, price, location, and property categories (e.g., Trending, Rooms, Iconic Cities, Mountains).
- **Image Uploads**: Integration with Cloudinary allows users to upload property images directly from their devices.
- **Interactive Maps**: Uses Mapbox to display the exact location of the property on an interactive map.
- **Reviews & Ratings**: Logged-in users can leave reviews and ratings for properties they've visited.
- **Session Management**: Secure session storage using MongoDB.

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, EJS (Embedded JavaScript templates), EJS-Mate.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB, Mongoose (ODM).
- **Authentication**: Passport.js (Local Strategy).
- **Image Storage**: Cloudinary, Multer.
- **Maps & Geocoding**: Mapbox SDK.
- **Validation**: Joi (Server-side data validation).
- **Session Storage**: connect-mongo.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas cluster)

You will also need accounts for the following services to get API keys:
- [Cloudinary](https://cloudinary.com/) (For image uploads)
- [Mapbox](https://www.mapbox.com/) (For interactive maps)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory and add the following variables:
   ```env
   # Database
   ATLASDB_URL=<Your MongoDB Connection String>

   # Secret Key for Sessions
   SECRET=<Your Session Secret Key>

   # Cloudinary Credentials
   CLOUD_NAME=<Your Cloudinary Cloud Name>
   CLOUD_API_KEY=<Your Cloudinary API Key>
   CLOUD_API_SECRET=<Your Cloudinary API Secret>

   # Mapbox Credentials
   MAP_TOKEN=<Your Mapbox Public Access Token>
   ```

4. **Run the application:**
   ```bash
   npm start
   ```
   Or for development mode (if nodemon is installed):
   ```bash
   nodemon app.js
   ```

5. **Open in Browser:**
   Navigate to `http://localhost:8080` to view the application.

## 🗂️ Project Structure

- `app.js`: Main entry point and server setup.
- `models/`: Mongoose schemas for User, Listing, and Review.
- `routes/`: Express routers for handling different API endpoints.
- `controllers/`: Logic for handling requests.
- `views/`: EJS templates for the frontend UI.
- `public/`: Static assets (CSS, JS, Images).
- `utils/`: Utility functions and error handling.
- `middleware.js`: Custom middleware for authentication and authorization.

## 📄 License

This project is licensed under the ISC License.
