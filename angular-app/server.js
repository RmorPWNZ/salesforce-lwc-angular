const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 4000;

function setupMiddleware() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
}

function handleSignedRequest(req, res) {
  if (!req.body.signed_request) {
    return res.status(400).send("No signed request received.");
  }

  const redirectUrl = `/?signedRequest=${encodeURIComponent(req.body.signed_request)}`;
  res.redirect(redirectUrl);
}

function serveAngularApp() {
  const angularDistPath = path.join(__dirname, "dist/sf-angular-app");
  app.use(express.static(angularDistPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(angularDistPath, "index.html"));
  });
}

function startServer() {
  app.listen(PORT, () => { console.log(`🚀 Server running at http://localhost:${PORT}`); });
}

// Initialize server
function initServer() {
  setupMiddleware();
  app.post("/", handleSignedRequest);
  serveAngularApp();
  startServer();
}

initServer();
