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
  if (subtheme === 'Fairy Nook') {
    return 'fairy-nook';
  } else if (subtheme == 'Coral Lagoon') {
    return 'coral-lagoon';
  } else if (subtheme == 'Hollowtree Hideaway') {
    return 'hollow-tree-hideaway';
  } else if (subtheme == 'Northern Star Stop') {
    return 'northern-star-stop';
  } else if (subtheme == "Pirate's Cove") {
    return 'pirates-cove';
  }
};

const getSubThemeByID = async (subthemeID: number) => {
  try {
    const response = await fetch(`${API_URL}/subthemes/${subthemeID}`, {
      next: { revalidate: 60 },
    });

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
    const response = await fetch(`${API_URL}/subthemes/?name=${subtheme}`, {
      next: { revalidate: 60 },
    });

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
