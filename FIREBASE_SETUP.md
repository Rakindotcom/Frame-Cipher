# Firebase Firestore Setup Guide

## Overview
Your contact form now saves submissions to Firebase Firestore with proper security rules.

## What's Been Implemented

### 1. Firebase Configuration (`src/firebase.js`)
- Initialized Firebase app with your credentials
- Exported Firestore database instance
- Analytics enabled

### 2. Contact Form Integration (`src/pages/ContactPage.jsx`)
- Form state management with React hooks
- Firestore integration to save contact submissions
- Success/error feedback messages
- Form validation and loading states

### 3. Firestore Security Rules (`firestore.rules`)
Security rules that:
- Allow anyone to CREATE contact submissions (no auth required)
- Validate all required fields (name, email, projectType, message)
- Enforce field length limits (name: 100 chars, message: 2000 chars)
- Validate email format with regex
- Restrict projectType to valid options
- Only allow authenticated users (admins) to READ, UPDATE, or DELETE submissions
- Add automatic timestamp on creation

## Deploying Firestore Rules

### Option 1: Firebase Console (Easiest)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `framecipherweb`
3. Navigate to **Firestore Database** in the left sidebar
4. Click on the **Rules** tab
5. Copy the contents of `firestore.rules` file
6. Paste into the rules editor
7. Click **Publish**

### Option 2: Firebase CLI
```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase in your project (if not already done)
firebase init firestore

# Deploy the rules
firebase deploy --only firestore:rules
```

## Data Structure

Each contact submission is stored in the `contacts` collection with:
```javascript
{
  name: string,           // User's name (max 100 chars)
  email: string,          // Valid email address
  projectType: string,    // One of: Commercial Video, Product Campaign, Photography, Brand Strategy, Other
  message: string,        // Message content (max 2000 chars)
  timestamp: timestamp    // Auto-generated server timestamp
}
```

## Viewing Submissions

### Firebase Console
1. Go to Firebase Console
2. Navigate to **Firestore Database**
3. Click on the **Data** tab
4. View the `contacts` collection

### Optional: Create an Admin Panel
To view submissions in your app, you'll need to:
1. Set up Firebase Authentication
2. Create an admin route
3. Query the contacts collection with proper authentication

## Security Notes

- Public users can only CREATE submissions (write-only access)
- Reading submissions requires authentication (admin access)
- All fields are validated before saving
- Email format is validated with regex
- Character limits prevent spam/abuse
- Timestamps are server-generated (can't be spoofed)

## Testing

1. Run your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check Firebase Console to verify the submission was saved
5. Verify success message appears on the form

## Next Steps (Optional)

1. **Email Notifications**: Set up Firebase Cloud Functions to send email notifications when new contacts are submitted
2. **Admin Dashboard**: Create an authenticated admin panel to view and manage submissions
3. **Rate Limiting**: Add rate limiting to prevent spam submissions
4. **reCAPTCHA**: Add Google reCAPTCHA for additional spam protection
