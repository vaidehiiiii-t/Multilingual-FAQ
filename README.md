# FAQ Management System

## Overview

This project is a _FAQ Management System_ that allows users to _Create, Read, Update, and Delete (CRUD) FAQs_ efficiently. It also features _multilingual support_, enabling automatic translation through a dropdown menu.

## Features

- ✅ _Add, Delete, Update, and Create FAQs_ from the dashboard.
- 🌍 _Multilingual support_ with automatic translation.
- 🖊 _Rich-text editing_ using Quill.js for enhanced formatting.
- 📋 _Real-time FAQ listing_ with dynamic updates.
- ⚡ _Tailwind CSS integration_ for a clean and modern UI.

---

## Installation Steps

1. _Clone the Repository:_
   sh
   git clone https://github.com/vaidehiiiii-t/Multilingual-FAQ.git
   cd faq-management

2. _Install Dependencies:_
   sh
   npm install

3. _Start the Server:_
   sh
   npm start

   The server will run on http://localhost:5000.

4. _Run the Frontend:_
   Open public/index.html in a browser.

---

## API Usage Examples

### _1. Get All FAQs_

sh
GET /api/faqs

_Response:_
json
[
{
"_id": "123456",
"question": "What is this system?",
"answer": "This is a FAQ management system."
}
]

### _2. Add a New FAQ_

sh
POST /api/faqs/add
Content-Type: application/json
{
"question": "How does it work?",
"answer": "Users can add, edit, and delete FAQs."
}

### _3. Update an FAQ_

sh
PUT /api/faq/:id
Content-Type: application/json
{
"question": "Updated Question?",
"answer": "Updated Answer."
}

### _4. Delete an FAQ_

sh
DELETE /api/faq/:id

---

## Contribution Guidelines

1. _Fork the Repository_ and create a new branch.
2. _Make your changes_ and commit them with descriptive messages.
3. _Push to your fork_ and submit a Pull Request.
4. Follow the project’s coding standards and ensure compatibility.

---

## License

This project is licensed under the MIT License.

---

For any issues, feel free to open a ticket or contribute improvements! 🚀
