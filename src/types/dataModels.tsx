interface eventModel {
  id: number;
  orgId: number;
  title: string;
  description: string;
  subthemeId: number;
  venue: string;
  schedule: Date;
  fee: number;
  code: string;
  registered_slots: number;
  maxSlots: number;
}

type PublicationType = 'TEXTLESS_VERTICAL' | 'TEXTLESS_HORIZONTAL' | 'MAIN';
interface eventPubModel {
  id: number;
  eventId: number;
  pubType: PublicationType;
  pubURL: string;
}

interface orgModel {
  id: number;
  name: string;
  orgLogo: string;
}

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

interface subThemeModel {
  id: number;
  title: string;
  logoPubURL: string;
  bgPubURL: string;
}

export type { eventModel, eventPubModel, orgModel, userModel, registrationModel, subThemeModel };
