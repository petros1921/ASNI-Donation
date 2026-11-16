// src/lib/prismic.js
import * as prismic from '@prismicio/client';

const repositoryName = import.meta.env.VITE_PRISMIC_REPO_NAME;
// If your repo is private, you'll also need a token
// const accessToken = import.meta.env.VITE_PRISMIC_ACCESS_TOKEN;

export const client = prismic.createClient(repositoryName, {
  // accessToken, // Uncomment if your repo is private
  // You can add routes here if you have dynamic pages (e.g., for a blog)
});