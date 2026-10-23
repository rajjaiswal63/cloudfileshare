import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ClerkProvider} from "@clerk/clerk-react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  console.warn("VITE_CLERK_PUBLISHABLE_KEY is missing. Please configure it in your Netlify or environment settings.");
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={clerkPubKey || ""}>
    <App />
  </ClerkProvider>
)
