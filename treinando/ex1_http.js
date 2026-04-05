import express from 'express';
const app = express();
// Middleware necessary to read req.body
app.use(express.json());
// Example Route: GET /profile/123?mode=dark
app.get('/profile/:id', (req, res) => {
 // 1. Reading from the Request (req)
 const userId = req.params.id; // From the URL path
 const displayMode = req.query.mode; // From the ?mode=...
 const userAgent = req.headers['user-agent']; // Info about the browser
 console.log(`User ${userId} requested profile in ${displayMode} mode.`);
 // 2. Building the Response (res)
 res.status(200).json({
 message: "Profile Data Retrieved",
 receivedData: {
 id: userId,
 theme: displayMode || 'default',
 browserInfo: userAgent
 }
 });
});
app.listen(3000, () => console.log("Inspector running on port 3000"));