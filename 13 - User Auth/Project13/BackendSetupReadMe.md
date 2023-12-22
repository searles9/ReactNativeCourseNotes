# Backend Setup / ReadMe

[Firebase Link](https://firebase.google.com)

# Setup a project in Firebase
1. Login
2. Create a project (no analytics)

# Setup authentication in Firebase
1. Build -> Authentication -> Get started
2. Email password option
    * enable the email password flow
    * leave "email link (passwordless sign-in)" as off
* You can use the SDK or the [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth)
    * [Sign up with email password](https://firebase.google.com/docs/reference/rest/auth#section-create-email-password)

# Get your Auth API Key
* [Some info - is it safe to share](https://infosecwriteups.com/is-it-safe-to-expose-your-firebase-api-key-bf2a318c0f29)
* Project settings -> General -> WebAPI key


# Make a database in Firebase
3. Choose Realtime Database
4. Create a Realtime database
    * Build -> Realtime Database
    * default region is fine (us-central1)
    * start in test mode (can read/write without being authenticated) (this only works for the first 30 days)
