import { storage, BUCKETS } from './appwrite';
import { ID } from 'appwrite';

// Storage API for handling file uploads
export const storageAPI = {
  // Upload file to a specific bucket
  async uploadFile(bucketId, file, fileId = ID.unique()) {
    try {
      return await storage.createFile(bucketId, fileId, file);
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  // Get file preview URL
  getFilePreview(bucketId, fileId, width = 500, height = 500) {
    try {
      return storage.getFilePreview(bucketId, fileId, width, height);
    } catch (error) {
      console.error('Error getting file preview:', error);
      throw error;
    }
  },

  // Get file view URL
  getFileView(bucketId, fileId) {
    try {
      return storage.getFileView(bucketId, fileId);
    } catch (error) {
      console.error('Error getting file view:', error);
      throw error;
    }
  },

  // Get file download URL
  getFileDownload(bucketId, fileId) {
    try {
      return storage.getFileDownload(bucketId, fileId);
    } catch (error) {
      console.error('Error getting file download:', error);
      throw error;
    }
  },

  // Delete file
  async deleteFile(bucketId, fileId) {
    try {
      return await storage.deleteFile(bucketId, fileId);
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  },

  // Get file metadata
  async getFile(bucketId, fileId) {
    try {
      return await storage.getFile(bucketId, fileId);
    } catch (error) {
      console.error('Error getting file metadata:', error);
      throw error;
    }
  },

  // List files in a bucket
  async listFiles(bucketId) {
    try {
      return await storage.listFiles(bucketId);
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  },
};

// Event Images API
export const eventImagesAPI = {
  async upload(file, fileId) {
    return storageAPI.uploadFile(BUCKETS.EVENTS_IMAGES, file, fileId);
  },

  getPreview(fileId, width = 800, height = 600) {
    return storageAPI.getFilePreview(BUCKETS.EVENTS_IMAGES, fileId, width, height);
  },

  getView(fileId) {
    return storageAPI.getFileView(BUCKETS.EVENTS_IMAGES, fileId);
  },

  async delete(fileId) {
    return storageAPI.deleteFile(BUCKETS.EVENTS_IMAGES, fileId);
  },

  async list() {
    return storageAPI.listFiles(BUCKETS.EVENTS_IMAGES);
  },
};

// Blog Images API
export const blogImagesAPI = {
  async upload(file, fileId) {
    return storageAPI.uploadFile(BUCKETS.BLOGS_IMAGES, file, fileId);
  },

  getPreview(fileId, width = 800, height = 600) {
    return storageAPI.getFilePreview(BUCKETS.BLOGS_IMAGES, fileId, width, height);
  },

  getView(fileId) {
    return storageAPI.getFileView(BUCKETS.BLOGS_IMAGES, fileId);
  },

  async delete(fileId) {
    return storageAPI.deleteFile(BUCKETS.BLOGS_IMAGES, fileId);
  },

  async list() {
    return storageAPI.listFiles(BUCKETS.BLOGS_IMAGES);
  },
};

// Team Images API
export const teamImagesAPI = {
  async upload(file, fileId) {
    return storageAPI.uploadFile(BUCKETS.TEAM_IMAGES, file, fileId);
  },

  getPreview(fileId, width = 300, height = 300) {
    return storageAPI.getFilePreview(BUCKETS.TEAM_IMAGES, fileId, width, height);
  },

  getView(fileId) {
    return storageAPI.getFileView(BUCKETS.TEAM_IMAGES, fileId);
  },

  async delete(fileId) {
    return storageAPI.deleteFile(BUCKETS.TEAM_IMAGES, fileId);
  },

  async list() {
    return storageAPI.listFiles(BUCKETS.TEAM_IMAGES);
  },
};

// Helper function to validate image file
export const validateImageFile = (file, maxSizeMB = 5) => {
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  const maxSize = maxSizeMB * 1024 * 1024; // Convert MB to bytes

  if (!validTypes.includes(file.type)) {
    throw new Error('Invalid file type. Please upload a JPG, PNG, GIF, or WebP image.');
  }

  if (file.size > maxSize) {
    throw new Error(`File size exceeds ${maxSizeMB}MB limit.`);
  }

  return true;
};

// Helper function to handle image upload with validation
export const uploadImage = async (bucketId, file, fileId) => {
  // Validate file based on bucket type
  const maxSize = bucketId === BUCKETS.TEAM_IMAGES ? 3 : 5;
  validateImageFile(file, maxSize);

  // Upload file
  return await storageAPI.uploadFile(bucketId, file, fileId);
};
