interface userModel {
  id: number;
  email: string;
  displayPicture: string;
  name: string;
}

interface registrationModel {
  id: number;
  userId: string;
  eventId: string;
}

export type { userModel, registrationModel };
