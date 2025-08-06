
# 🕵️ Tab Activity Tracker with Trust Score

A real-time tab activity tracker built with **React + TypeScript + Express + MongoDB**. It monitors user focus, calculates a trust score, and logs activity duration to MongoDB.

Live Demo: [tab-activity-tracker.vercel.app](https://tab-activity-tracker.vercel.app)

---

## 🚀 Features

- 🎯 Detects tab/window switches using `window.onblur` and `window.onfocus`
- 📉 Calculates a dynamic **Trust Score** (e.g., `100 - (secondsAway × 0.5)`)
- 🗃 Logs each inactivity session to **MongoDB Atlas** (timestamp, duration, trustScore)
- 🔄 React hooks for real-time score updates
- 🔒 Fully typed backend and frontend using TypeScript

---

## 💻 Tech Stack

| Layer         | Tech Used                     |
|---------------|-------------------------------|
| Frontend      | React + TypeScript + Vite     |
| Backend       | Express + TypeScript          |
| Database      | MongoDB Atlas (Mongoose)      |
| Hosting       | Vercel (frontend), Render (backend) |

---

## 🧩 TypeScript Highlights

- Shared interface `ActivityLog` for both client and server
- Typed `POST` requests with `axios` and strict payload checks
- Modular and reusable components in frontend
- Strict mode enabled in both `tsconfig.json` files

---

## 📂 Folder Structure

```
tab-activity-tracker/
├── client/      # React + TS (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── App.css
│   └── .env         # VITE_API_BASE_URL
│
├── server/      # Express + TS backend
│   ├── src/
│   │   ├── routes/
│   │   ├── models/
│   │   ├── types/
│   │   └── index.ts
│   └── .env         # MONGO_URI + PORT
```

---

## 🌐 Deployment Links

| Part       | URL                                                                 |
|------------|----------------------------------------------------------------------|
| **Frontend** | [https://tab-activity-tracker.vercel.app](https://tab-activity-tracker.vercel.app) |
| **Backend**  | [https://tab-activity-tracker.onrender.com](https://tab-activity-tracker.onrender.com) |
| **POST API** | `POST /api/activity`                                               |

---

## 🛠️ How to Run Locally

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/tab-activity-tracker.git
   ```

2. **Set up the backend**
   ```bash
   cd server
   npm install
   npm run dev
   ```

3. **Set up the frontend**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

4. **Create `.env` files**

- In `server/.env`:
  ```env
  MONGO_URI=your_mongo_atlas_uri
  PORT=5000
  ```

- In `client/.env`:
  ```env
  VITE_API_BASE_URL=http://localhost:5000
  ```

---

## 📦 Example API Payload

```json
POST /api/activity
Content-Type: application/json

{
  "timestamp": "2025-08-06T18:30:00.000Z",
  "duration": 12,
  "trustScore": 94
}
```

---

## 📌 Author

### Regards,
### Shreyas Salian 


---


