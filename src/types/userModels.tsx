interface userModel {
  id: number;
  email: string;
  google_id: string;
  display_picture: string;
  name: string;
}

interface registrationModel {
  id: number;
  userId: string;
  eventId: string;
}

export type { userModel, registrationModel };
