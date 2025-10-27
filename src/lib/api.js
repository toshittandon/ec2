import { databases, DATABASE_ID, COLLECTIONS } from './appwrite';
import { Query } from 'appwrite';

// Events API
export const eventsAPI = {
  // Get all events
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        [Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  },

  // Get event by ID
  async getById(id) {
    try {
      return await databases.getDocument(DATABASE_ID, COLLECTIONS.EVENTS, id);
    } catch (error) {
      console.error('Error fetching event:', error);
      throw error;
    }
  },

  // Get events by category
  async getByCategory(category) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        [Query.equal('category', category), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching events by category:', error);
      throw error;
    }
  },

  // Create event (admin only)
  async create(eventData) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        'unique()',
        eventData
      );
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  },

  // Update event (admin only)
  async update(id, eventData) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.EVENTS,
        id,
        eventData
      );
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  },

  // Delete event (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(DATABASE_ID, COLLECTIONS.EVENTS, id);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  },
};

// Blogs API
export const blogsAPI = {
  // Get all blogs
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BLOGS,
        [Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  },

  // Get blog by ID
  async getById(id) {
    try {
      return await databases.getDocument(DATABASE_ID, COLLECTIONS.BLOGS, id);
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw error;
    }
  },

  // Get featured blogs
  async getFeatured() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BLOGS,
        [Query.equal('featured', true), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
      throw error;
    }
  },

  // Get blogs by category
  async getByCategory(category) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.BLOGS,
        [Query.equal('category', category), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching blogs by category:', error);
      throw error;
    }
  },

  // Create blog (admin only)
  async create(blogData) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.BLOGS,
        'unique()',
        blogData
      );
    } catch (error) {
      console.error('Error creating blog:', error);
      throw error;
    }
  },

  // Update blog (admin only)
  async update(id, blogData) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.BLOGS,
        id,
        blogData
      );
    } catch (error) {
      console.error('Error updating blog:', error);
      throw error;
    }
  },

  // Delete blog (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(DATABASE_ID, COLLECTIONS.BLOGS, id);
    } catch (error) {
      console.error('Error deleting blog:', error);
      throw error;
    }
  },
};

// Team Members API
export const teamAPI = {
  // Get all team members
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching team members:', error);
      throw error;
    }
  },

  // Get team member by ID
  async getById(id) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS,
        id
      );
    } catch (error) {
      console.error('Error fetching team member:', error);
      throw error;
    }
  },

  // Get team members by role
  async getByRole(role) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS,
        [Query.equal('role', role)]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching team members by role:', error);
      throw error;
    }
  },

  // Create team member (admin only)
  async create(memberData) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS,
        'unique()',
        memberData
      );
    } catch (error) {
      console.error('Error creating team member:', error);
      throw error;
    }
  },

  // Update team member (admin only)
  async update(id, memberData) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS,
        id,
        memberData
      );
    } catch (error) {
      console.error('Error updating team member:', error);
      throw error;
    }
  },

  // Delete team member (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_MEMBERS,
        id
      );
    } catch (error) {
      console.error('Error deleting team member:', error);
      throw error;
    }
  },
};

// Contact Submissions API
export const contactAPI = {
  // Get all contact submissions
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        [Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching contact submissions:', error);
      throw error;
    }
  },

  // Get contact submission by ID
  async getById(id) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        id
      );
    } catch (error) {
      console.error('Error fetching contact submission:', error);
      throw error;
    }
  },

  // Get submissions by status
  async getByStatus(status) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        [Query.equal('status', status), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching submissions by status:', error);
      throw error;
    }
  },

  // Create contact submission
  async create(submissionData) {
    try {
      // Send only the fields provided by the form (no status attribute in schema)
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        'unique()',
        submissionData
      );
    } catch (error) {
      console.error('Error creating contact submission:', error);
      throw error;
    }
  },

  // Update submission status (admin only)
  async updateStatus(id, status) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        id,
        { status }
      );
    } catch (error) {
      console.error('Error updating submission status:', error);
      throw error;
    }
  },

  // Delete submission (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(
        DATABASE_ID,
        COLLECTIONS.CONTACT_SUBMISSIONS,
        id
      );
    } catch (error) {
      console.error('Error deleting contact submission:', error);
      throw error;
    }
  },
};

// Team Applications API
export const teamApplicationsAPI = {
  // Get all team applications
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        [Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching team applications:', error);
      throw error;
    }
  },

  // Get application by ID
  async getById(id) {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        id
      );
    } catch (error) {
      console.error('Error fetching team application:', error);
      throw error;
    }
  },

  // Get applications by status
  async getByStatus(status) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        [Query.equal('status', status), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching applications by status:', error);
      throw error;
    }
  },

  // Get applications by role
  async getByRole(role) {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        [Query.equal('interestedRole', role), Query.orderDesc('$createdAt')]
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching applications by role:', error);
      throw error;
    }
  },

  // Create team application
  async create(applicationData) {
    try {
      // Send only the fields provided by the form (no status attribute modification)
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        'unique()',
        applicationData
      );
    } catch (error) {
      console.error('Error creating team application:', error);
      throw error;
    }
  },

  // Update application status (admin only)
  async updateStatus(id, status) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        id,
        { status }
      );
    } catch (error) {
      console.error('Error updating application status:', error);
      throw error;
    }
  },

  // Update application (admin only)
  async update(id, applicationData) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        id,
        applicationData
      );
    } catch (error) {
      console.error('Error updating team application:', error);
      throw error;
    }
  },

  // Delete application (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(
        DATABASE_ID,
        COLLECTIONS.TEAM_APPLICATIONS,
        id
      );
    } catch (error) {
      console.error('Error deleting team application:', error);
      throw error;
    }
  },
};

// Newsletter Subscribers API
export const newsletterAPI = {
  // Subscribe to newsletter
  async subscribe(email) {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        COLLECTIONS.NEWSLETTER_SUBSCRIBERS,
        'unique()',
        {
          email,
          status: 'subscribed'
        }
      );
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      throw error;
    }
  },

  // Get all subscribers (admin only)
  async getAll() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTIONS.NEWSLETTER_SUBSCRIBERS
      );
      return response.documents;
    } catch (error) {
      console.error('Error fetching newsletter subscribers:', error);
      throw error;
    }
  },

  // Unsubscribe
  async unsubscribe(id) {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        COLLECTIONS.NEWSLETTER_SUBSCRIBERS,
        id,
        { status: 'unsubscribed' }
      );
    } catch (error) {
      console.error('Error unsubscribing from newsletter:', error);
      throw error;
    }
  },

  // Delete subscriber (admin only)
  async delete(id) {
    try {
      return await databases.deleteDocument(
        DATABASE_ID,
        COLLECTIONS.NEWSLETTER_SUBSCRIBERS,
        id
      );
    } catch (error) {
      console.error('Error deleting newsletter subscriber:', error);
      throw error;
    }
  },
};
