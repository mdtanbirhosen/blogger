# BLOGGER

This project is a simple blog viewer application built with **Next.js**, designed to demonstrate an understanding of routing, server and client components, dynamic routes, authentication, and data fetching.

## Features

### Home Page (Static Route)
- Displays a list of blog post titles fetched from a mock API.
- Each title links to a detailed page for that post.

### Blog Details Page (Dynamic Route)
- Uses a dynamic route (`/blog/[id]`) to display details of a specific blog post.
- Fetches the blog details based on the `id` from the URL.

### Protected Page (Static Route)
- A "Profile" page displays a static message: "Welcome to your profile!".
- This page is protected using **Kinde Auth**.
- Users are redirected to the login page if they are not authenticated.

### Navigation
- A header contains links to "Home" and "Profile."
- Displays a "Login" button if the user is not authenticated and a "Logout" button if they are.

### Styling
- Utilizes **Tailwind CSS** for a clean and responsive design.

## Mock API
The application uses the following mock API for fetching blog posts:
- **Get all posts:** `https://jsonplaceholder.typicode.com/posts`
- **Get a specific post:** `https://jsonplaceholder.typicode.com/posts/[id]`

## Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   - Create a `.env.local` file in the root directory.
   - Add the following variables:
     ```env
     KIND_API_KEY=<your_kinde_auth_api_key>
     KIND_REDIRECT_URI=http://localhost:3000/api/auth/callback
     KIND_LOGOUT_URI=http://localhost:3000/
     ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

5. **Build for Production** (optional)
   ```bash
   npm run build
   npm start
   ```

## Key Dependencies
- **Next.js**: Framework for building the application.
- **Tailwind CSS**: Styling library for responsive design.
- **Kinde Auth**: Authentication provider for protecting routes.

## Usage

### Home Page
- Visit `/` to see a list of blog post titles.
- Click on any title to view the details of that post.

### Blog Details Page
- Visit `/blog/[id]` (e.g., `/blog/1`) to view the details of a specific post.

### Profile Page
- Visit `/profile` to access the protected page.
- If not authenticated, you will be redirected to the login page.

## Authentication with Kinde
- The "Profile" page is protected using **Kinde Auth**.
- Users need to log in to access the profile page.
- The header dynamically shows "Login" or "Logout" based on the user's authentication state.

## Styling
- **Tailwind CSS** is used for responsive and modern design.
- Custom components are styled to ensure a clean user experience.

## Notes
- This project is for demonstration purposes only and does not include any backend or database integration.
- The mock API is used to simulate real-world scenarios.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
