interface classModel {
  id: number;
  org_id: number;
  title: string;
  description: string;
  subtheme_id: number;
  venue: string;
  schedule: string;
  fee: number;
  code: string;
  registered_slots: number;
  max_slots: number;
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
