import { Client, Databases, Account, Storage } from 'appwrite';

const client = new Client();

client
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

export const databases = new Databases(client);
export const account = new Account(client);
export const storage = new Storage(client);

// Database and Collection IDs
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
export const COLLECTIONS = {
  EVENTS: import.meta.env.VITE_APPWRITE_COLLECTION_EVENTS,
  BLOGS: import.meta.env.VITE_APPWRITE_COLLECTION_BLOGS,
  TEAM_MEMBERS: import.meta.env.VITE_APPWRITE_COLLECTION_TEAM_MEMBERS,
  CONTACT_SUBMISSIONS: import.meta.env.VITE_APPWRITE_COLLECTION_CONTACT_SUBMISSIONS,
  TEAM_APPLICATIONS: import.meta.env.VITE_APPWRITE_COLLECTION_TEAM_APPLICATIONS,
  NEWSLETTER_SUBSCRIBERS: import.meta.env.VITE_APPWRITE_COLLECTION_NEWSLETTER_SUBSCRIBERS,
};

// Storage Bucket IDs
export const BUCKETS = {
  EVENTS_IMAGES: import.meta.env.VITE_APPWRITE_BUCKET_EVENTS_IMAGES,
  BLOGS_IMAGES: import.meta.env.VITE_APPWRITE_BUCKET_BLOGS_IMAGES,
  TEAM_IMAGES: import.meta.env.VITE_APPWRITE_BUCKET_TEAM_IMAGES,
};

export default client;
