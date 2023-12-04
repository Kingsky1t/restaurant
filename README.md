# Restaurant App

A restaurant app to showcase our menu items, provide information about the chef, and more.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation
1. Fork this repository
2. Clone the repository
   
   ``` bash
   git clone https://github.com/your-username/restaurant.git
3. Navigate to backend folder

   ```bash
   cd server
4. Install dependencies

   ```bash
   npm install
5. In another termial Navigate to frontend folder

   ```bash
   cd client
6. Install dependencies

   ```bash
   npm install

### Running the Project
1. From the server folder run
   
   ```bash
   npm start
   ```
   
   The backend server will start on http://localhost:3000 (or a different port if specified).
3. From the client folder run
   
   ```bash
   npm start
   ```
   
   The frontend development server will start on http://localhost:3001 (or a different port if specified).

### Usage
1. For changing the **restaurantData.json** file
  - Save the New File in the server folder
  - Change the path of the file to be served

    ```bash
    const restaurantData = require("./your_file_path");
