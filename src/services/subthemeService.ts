import Subtheme from '@/app/[subtheme]/page';
import { API_URL } from '@/lib/constants';

const getSubTheme = (subtheme: string) => {
  let asset, name;
  if (subtheme === 'fairy-nook') {
    asset = 'FairyNook.png';
    name = 'Fairy Nook';
  } else if (subtheme === 'coral-lagoon') {
    asset = 'CoralLagoon.png';
    name = 'Coral Lagoon';
  } else if (subtheme === 'hollow-tree-hideaway') {
    asset = 'HollowTreeHideaway.png';
    name = 'Hollowtree Hideway';
  } else if (subtheme === 'northern-star-stop') {
    asset = 'NorthernStarStop.png';
    name = 'Northern Star Stop';
  } else if (subtheme === 'pirates-cove') {
    asset = 'PiratesCove.png';
    name = "Pirate's Cove";
  }

  return { asset, name };
};

const getSubThemeLink = (subtheme: any) => {
  let link;

  if (subtheme === 'Fairy Nook') {
    link = 'fairy-nook';
  } else if (subtheme === 'Coral Lagoon') {
    link = 'coral-lagoon';
  } else if (subtheme === 'Hollowtree Hideway') {
    link = 'hollow-tree-hideaway';
  } else if (subtheme === 'Northern Star Stop') {
    link = 'northern-star-stop';
  } else if (subtheme === "Pirate's Cove") {
    link = 'pirates-cove';
  }

  return link;
};

const getSubThemeByID = async (subthemeID: number) => {
  try {
    const response = await fetch(`${API_URL}/subthemes/${subthemeID}`);

    if (!response.ok) {
      throw new Error('Failed to get subtheme');
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

const getSubThemeByName = async (subtheme: any) => {
  try {
    const response = await fetch(`${API_URL}/subthemes/?name=${subtheme}`);

    if (!response.ok) {
      throw new Error('Failed to get subtheme');
    }

    return await response.json();
  } catch (error: any) {
    if (error instanceof TypeError) {
      console.error('Network error: Unable to fetch data. Please check your connection.');
    } else {
      console.error('Unexpected error:', error.message);
    }
  }
};

export { getSubTheme, getSubThemeLink, getSubThemeByID, getSubThemeByName };
