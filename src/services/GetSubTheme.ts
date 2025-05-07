export default function GetSubTheme(subtheme: string) {
  let asset, name;
  if (subtheme === 'fairy-nook') {
    asset = 'FairyNook.png';
    name = 'Fairy Nook';
  } else if (subtheme === 'coral-lagoon') {
    asset = 'CoralLagoon.png';
    name = 'Coral Lagoon';
  } else if (subtheme === 'hollow-tree-hideaway') {
    asset = 'HollowtreeHideway.png';
    name = 'Hollow Tree Hideaway';
  } else if (subtheme === 'northern-star-stop') {
    asset = 'NorthernStarStop.png';
    name = 'Northern Star Stop';
  } else if (subtheme === 'pirates-cove') {
    asset = 'PiratesCove.png';
    name = 'Pirates Cove';
  }

  return { asset, name };
}
