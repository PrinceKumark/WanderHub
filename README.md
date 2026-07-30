# Wanderlust 🌍

Wanderlust is a full-stack web application inspired by Airbnb. It allows users to discover, book, and list unique accommodations around the world. Whether you're looking for a cozy cabin in the woods or a modern apartment in the city, Wanderlust connects hosts with travelers seamlessly.

---

## ✨ Features

* **User Authentication:** Secure sign-up and login functionality using JWT/OAuth.
* **Property Listings:** Hosts can create, edit, and delete their property listings including adding images, descriptions, and pricing.
* **Search & Filter:** Advanced search functionality allowing users to filter properties by location, price, and amenities.
* **Booking System:** Interactive calendar for selecting dates and managing reservations.
* **Review System:** Guests can leave ratings and reviews for properties they have visited.
* **Responsive Design:** A mobile-first, highly responsive UI providing a smooth experience across all devices.

---

## 🛠️ Tech Stack

**Frontend**

* **Framework:** Next.js / React
* **Styling:** CSS / Tailwind CSS
* **Language:** JavaScript

**Backend**

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB
* **ORM:** Prisma
* **Language:** JavaScript / TypeScript

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or higher)
* [Git](https://git-scm.com/)
* A MongoDB Database (Local or MongoDB Atlas)

### Installation

**1. Clone the repository:**

```bash
git clone https://github.com/your-username/wanderlust.git
cd wanderlust

```

**2. Install dependencies:**

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install

```

**3. Set up Environment Variables:**
Create a `.env` file in both the `frontend` and `backend` directories and add the necessary configuration.

*Backend `.env` example:*

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

```

**4. Initialize the Database (if using Prisma):**

```bash
cd backend
npx prisma generate
npx prisma db push

```

**5. Run the application:**

```bash
# Run backend server
cd backend
npm run dev

# Run frontend server
cd ../frontend
npm run dev

```

The application will be running at `http://localhost:3000`.

---

## 📂 Project Structure

```text
wanderlust/
├── backend/                # Node.js & Express server code
│   ├── controllers/        # Route controllers (logic)
│   ├── models/             # Database schemas (Prisma/Mongoose)
│   ├── routes/             # API endpoints
│   ├── middleware/         # Custom middlewares (auth, error handling)
│   └── server.js           # Entry point
│
├── frontend/               # Next.js/React client code
│   ├── components/         # Reusable UI components
│   ├── pages/              # Application routes/views
│   ├── public/             # Static assets (images, icons)
│   ├── styles/             # CSS / Tailwind configurations
│   └── package.json
│
└── README.md

```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---
