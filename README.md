# 🛡️ CloudSEK Backend Assignment – Post-Comments Service

This is a backend service built for the CloudSEK SDE Backend Intern assignment. It allows users to create posts and add rich-text-supported comments.

## 🚀 Features

- Create text-based posts
- Add comments to posts (supports rich text: `<b>`, `<i>`, `<a>` etc.)
- View a post along with all associated comments
- RESTful API architecture

## 🛠️ Tech Stack

- **Node.js** (v18+)
- **Express.js**
- **PostgreSQL** (via [Neon](https://neon.tech))
- **Prisma ORM**
- **sanitize-html** for safe rich text in comments
- **ESM Modules** (`type: module`)

## 🗂️ Project Structure

```
project-root/
├── prisma/
│   └── schema.prisma          # Prisma schema definitions
├── src/
│   ├── index.js               # Entry point
│   ├── routes/                # API route definitions
│   ├── controllers/           # Business logic
│   └── db.js                  # Prisma client
├── .env                       # Environment variables
├── package.json
└── README.md
```

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <repo-url>
cd cloudsek-assign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Create a `.env` file:
```env
DATABASE_URL="<your_neon_connection_string>"
```

### 4. Sync Prisma schema with DB
```bash
npx prisma db push
npx prisma generate
```

### 5. Start the server
```bash
npm run dev
```
Server will run on: `http://localhost:3000`

## 📫 API Endpoints

### ➕ Create a Post
```
POST /posts
Content-Type: application/json
```
**Body:**
```json
{
  "content": "This is a new post!"
}
```

### ➕ Add a Comment (Rich Text Supported)
```
POST /comments
Content-Type: application/json
```
**Body:**
```json
{
  "postId": 1,
  "content": "<b>Awesome!</b> Visit <a href='https://example.com'>this link</a>"
}
```

### 📄 Get Post with Comments
```
GET /posts/:id
```
**Response:**
```json
{
  "id": 1,
  "content": "This is a new post!",
  "comments": [
    { "id": 1, "content": "<b>Awesome!</b>", ... }
  ]
}
```

## 🧼 Rich Text Support
The backend safely stores a limited set of HTML tags using `sanitize-html`, including:
- `<b>`, `<i>`, `<strong>`, `<em>`
- `<a href="...">`

This prevents XSS attacks while enabling rich formatting.


---

Feel free to reach out for any questions or improvements!
