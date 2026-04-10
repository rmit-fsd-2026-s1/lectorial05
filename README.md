**Notes about example6**

Instructions: Setting Up Your Google Books API Key 
To run this application, you will need your own API key from the Google Cloud Console. This is free and does not require a credit card. 
**Step 1: Create a Google Cloud Project**
Go to the Google Cloud Console. 
Sign in with your Google account. 
Click the Project Dropdown (top left) and select New Project. 
Name it Full-Stack-Demo and click Create. 
**Step 2: Enable the Books API**
Ensure your new project is selected in the top dropdown. 
In the sidebar, go to APIs & Services > Library. 
Search for "Books API" and click Enable. 
**Step 3: Generate Your API Key**
Go to APIs & Services > Credentials. 
Click + Create Credentials and select API Key. Once created, your API key will appear on API Keys list,  under 
Actions column, select Show key and copy this key. You will need it for your .env file. 
**Step 4: Reference & Usage**
Documentation: For details on how to format your search queries (e.g., searching by title vs. category), refer to the official Google Books API Getting Started guide. https://developers.google.com/books/docs/v1/using 
Quota: Your personal key allows for roughly 1,000 requests per day. Avoid putting API calls inside rapid loops to stay within this limit. 
**Step 5: Local Configuration**
In your project root, create a .env file, add or update: 
NEXT_PUBLIC_API_KEY=YOUR_KEY_HERE 
Ensure .env is in your .gitignore to keep your key private. 
