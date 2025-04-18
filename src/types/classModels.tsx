interface classModel {
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
interface classPubModel {
  id: number;
  eventId: number;
  pubType: PublicationType;
  pubURL: string;
}

interface subThemeModel {
  id: number;
  title: string;
  logoPubURL: string;
  bgPubURL: string;
}

export type { classModel, classPubModel, subThemeModel };
