# Appwrite Setup Guide for EC² Website

## Quick Setup Steps

### 1. Access Appwrite Console
Go to: https://fra.cloud.appwrite.io/console/project-68ff58d3001b0d9329c2

### 2. Create Database
1. Click **"Databases"** in the left sidebar
2. Click **"Create Database"**
3. Name it: `Club_Data` or `EC2_Database`
4. Copy the Database ID (looks like: `68ff5a760014f5a1a49d`)
5. Update `.env` file: `VITE_APPWRITE_DATABASE_ID=<your_database_id>`

### 3. Create Collections

For each collection below, create it in your database and copy the Collection ID to `.env`:

#### A. Events Collection
**Collection Name:** `Events`
**Attributes:**
- `title` - String, required, size: 255
- `description` - String, required, size: 10000
- `eventDate` - DateTime, required
- `location` - String, required, size: 255
- `category` - String, required, size: 100
- `imageUrl` - String, optional, size: 1000

**Permissions:** Document-level security ON
- Read: Any
- Create: Admin only
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_EVENTS=<collection_id>`

---

#### B. Blogs Collection
**Collection Name:** `Blogs`
**Attributes:**
- `title` - String, required, size: 255
- `content` - String, required, size: 50000
- `author` - String, required, size: 100
- `publishedDate` - DateTime, required
- `tags` - String (array), optional
- `imageUrl` - String, optional, size: 1000

**Permissions:** 
- Read: Any
- Create: Admin only
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_BLOGS=<collection_id>`

---

#### C. Team Members Collection
**Collection Name:** `Team_Members`
**Attributes:**
- `name` - String, required, size: 100
- `role` - String, required, size: 100
- `bio` - String, optional, size: 1000
- `imageUrl` - String, optional, size: 1000
- `socialLinks` - String, optional, size: 2000 (JSON string)

**Permissions:**
- Read: Any
- Create: Admin only
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_TEAM_MEMBERS=<collection_id>`

---

#### D. Contact Submissions Collection
**Collection Name:** `Contact_Submissions`
**Attributes:**
- `name` - String, required, size: 100
- `email` - Email, required
- `subject` - String, required, size: 255
- `message` - String, required, size: 5000

**Permissions:**
- Read: Admin only
- Create: Any
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_CONTACT_SUBMISSIONS=<collection_id>`

---

#### E. Team Applications Collection
**Collection Name:** `Team_Applications`
**Attributes:**
- `name` - String, required, size: 100
- `email` - Email, required
- `position` - String, required, size: 100
- `experience` - String, required, size: 5000
- `message` - String, optional, size: 5000

**Permissions:**
- Read: Admin only
- Create: Any
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_TEAM_APPLICATIONS=<collection_id>`

---

#### F. Newsletter Subscribers Collection
**Collection Name:** `Newsletter_Subscribers`
**Attributes:**
- `email` - Email, required, unique
- `subscribedAt` - DateTime, required

**Permissions:**
- Read: Admin only
- Create: Any
- Update: Admin only
- Delete: Admin only

Update `.env`: `VITE_APPWRITE_COLLECTION_NEWSLETTER_SUBSCRIBERS=<collection_id>`

---

### 4. Create Storage Buckets

Go to **Storage** in the left sidebar and create these buckets:

#### A. Events Images Bucket
- Name: `events_images`
- Max file size: 10MB
- Allowed file extensions: `jpg, jpeg, png, gif, webp`
- Permissions: Read - Any, Create/Update/Delete - Admin only

Update `.env`: `VITE_APPWRITE_BUCKET_EVENTS_IMAGES=<bucket_id>`

#### B. Blogs Images Bucket
- Name: `blogs_images`
- Max file size: 10MB
- Allowed file extensions: `jpg, jpeg, png, gif, webp`
- Permissions: Read - Any, Create/Update/Delete - Admin only

Update `.env`: `VITE_APPWRITE_BUCKET_BLOGS_IMAGES=<bucket_id>`

#### C. Team Images Bucket
- Name: `team_images`
- Max file size: 5MB
- Allowed file extensions: `jpg, jpeg, png, webp`
- Permissions: Read - Any, Create/Update/Delete - Admin only

Update `.env`: `VITE_APPWRITE_BUCKET_TEAM_IMAGES=<bucket_id>`

---

### 5. Restart Development Server

After updating all IDs in `.env`, restart your dev server:

```bash
npm run dev
```

---

## Quick Reference: Current Configuration

Your Appwrite Project:
- **Project ID:** `68ff58d3001b0d9329c2`
- **Endpoint:** `https://fra.cloud.appwrite.io/v1`
- **Project Name:** EC2

---

## Troubleshooting

### "Database not found" Error
- Make sure you've created the database in Appwrite Console
- Verify the Database ID in `.env` matches the one in Appwrite
- Restart your dev server after changing `.env`

### "Collection not found" Error
- Create the collection in your database
- Copy the exact Collection ID from Appwrite
- Update the corresponding variable in `.env`
- Restart dev server

### Permission Errors
- Check collection permissions in Appwrite Console
- For public data (Events, Blogs), set Read permission to "Any"
- For forms (Contact, Applications), set Create permission to "Any"

---

## Need Help?

If you encounter issues:
1. Check browser console for detailed error messages
2. Verify all IDs in `.env` match those in Appwrite Console
3. Ensure permissions are set correctly
4. Try creating a test document in Appwrite Console directly
