interface classModel {
  id: number;
  org_id: number;
  contentful_id: string;
  title: string;
  description: string;
  subtheme_id: number;
  venue: string;
  schedule: string;
  schedule_end: string;
  fee: number;
  code: string;
  registered_slots: number;
  max_slots: number;
  slug: string;
  gforms_url: string;
  pubmat_as_bg: boolean;
  is_bundle: boolean;
}

interface highlightModel {
  bg_img: string;
  color: string;
  contentful_id: string;
  event_id: number;
  id: number;
  short_desc: string;
  title_card: string;
  title_fallback: string;
}

type PublicationType = 'TEXTLESS_VERTICAL' | 'TEXTLESS_HORIZONTAL' | 'MAIN';
interface classPubModel {
  id: number;
  event_id: number;
  pub_type: PublicationType;
  pub_url: string;
  contentful_id: string;
  pub_as_bg: number;
}

interface subThemeModel {
  id: number;
  title: string;
  logo_pub_url: string;
  background_pub_url: string;
  short_desc: string;
}

interface bookmarkModel {
  id: number;
  event_id: number;
  user_id: number;
}

export type { classModel, classPubModel, subThemeModel, bookmarkModel, highlightModel };
