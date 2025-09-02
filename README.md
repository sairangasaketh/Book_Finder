**Book Finder App**

A simple web application that allows users to search for books using the Open Library API. The app displays the book title, author, and first published year in a clean, easy-to-read layout.

---

**Features**
- Search for books by **title**.
- View book details: **title**, **author(s)**, and **first published year**.
- Simple and clean **card-based layout**.
- **Responsive design** for mobile and desktop.
- Handles cases where **no books are found**.
- Shows a **loading message** while fetching data.
- **Basic error handling** for API failures.

---

## **Tech Stack**
- **Frontend:** React  
- **Styling:** TailwindCSS  
- **API:** Open Library Search API ([Documentation](https://openlibrary.org/dev/docs/api/search))  
- **Package Manager & Runtime:** Bun  



## **How It Works**
1. User types a book title in the **search bar**.  
2. The app fetches book data from the **Open Library API**.  
3. Results are displayed as **cards** showing:
   - **Book title**  
   - **Author(s)**  
   - **First published year**  
4. If no results are found, a **friendly message** is displayed.  
5. A **loading message** appears while waiting for the API response.  

---

## Setup & Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>

2. Install dependencies using Bun:

    bun install
3. Start the development server:

    bun dev
4. Open your browser and go to http://localhost:3000.

## Usage
Type a book title in the search bar and press enter.
View the search results displayed as cards with title, author, and publication year.
If the API does not return results, a “No books found” message appears.
While fetching data, a loading message is displayed.


## Live Demo 
https://book-finder-opal-zeta.vercel.app/

