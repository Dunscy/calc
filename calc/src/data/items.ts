import * as I from './interface';
import {toID} from '../util';

const RBY: string[] = [];

const GSC = [
  'Berry Juice',
  'Berry',
  'Berserk Gene',
  'Bitter Berry',
  'Black Belt',
  'Black Glasses',
  'Bright Powder',
  'Burnt Berry',
  'Charcoal',
  'Dragon Fang',
  'Dragon Scale',
  'Fast Ball',
  'Fire Stone',
  'Focus Band',
  'Friend Ball',
  'Gold Berry',
  'Great Ball',
  'Hard Stone',
  'Heavy Ball',
  'Ice Berry',
  'King\'s Rock',
  'Leaf Stone',
  'Leftovers',
  'Level Ball',
  'Light Ball',
  'Love Ball',
  'Lucky Punch',
  'Lure Ball',
  'Magnet',
  'Mail',
  'Master Ball',
  'Metal Coat',
  'Metal Powder',
  'Mint Berry',
  'Miracle Berry',
  'Miracle Seed',
  'Moon Ball',
  'Moon Stone',
  'Mystery Berry',
  'Mystic Water',
  'Never-Melt Ice',
  'Pink Bow',
  'Poison Barb',
  'Poke Ball',
  'Polkadot Bow',
  'PRZ Cure Berry',
  'PSN Cure Berry',
  'Quick Claw',
  'Safari Ball',
  'Scope Lens',
  'Sharp Beak',
  'Silver Powder',
  'Soft Sand',
  'Spell Tag',
  'Sport Ball',
  'Stick',
  'Sun Stone',
  'Thick Club',
  'Thunder Stone',
  'Twisted Spoon',
  'Ultra Ball',
  'Up-Grade',
  'Water Stone',
];

const GSC_ONLY = [
  'Berry',
  'Berserk Gene',
  'Bitter Berry',
  'Burnt Berry',
  'Ice Berry',
  'Mint Berry',
  'Miracle Berry',
  'Mystery Berry',
  'PRZ Cure Berry',
  'Gold Berry',
  'Pink Bow',
  'Polkadot Bow',
  'PSN Cure Berry',
];

const ADV = GSC.filter(i => !GSC_ONLY.includes(i)).concat([
  'Aguav Berry',
  'Apicot Berry',
  'Aspear Berry',
  'Belue Berry',
  'Bluk Berry',
  'Cheri Berry',
  'Chesto Berry',
  'Choice Band',
  'Claw Fossil',
  'Cornn Berry',
  'Deep Sea Scale',
  'Deep Sea Tooth',
  'Dive Ball',
  'Dome Fossil',
  'Durin Berry',
  'Enigma Berry',
  'Figy Berry',
  'Ganlon Berry',
  'Grepa Berry',
  'Helix Fossil',
  'Hondew Berry',
  'Iapapa Berry',
  'Kelpsy Berry',
  'Lansat Berry',
  'Lax Incense',
  'Leppa Berry',
  'Liechi Berry',
  'Lum Berry',
  'Luxury Ball',
  'Macho Brace',
  'Mago Berry',
  'Magost Berry',
  'Mental Herb',
  'Nanab Berry',
  'Nest Ball',
  'Net Ball',
  'Nomel Berry',
  'Old Amber',
  'Oran Berry',
  'Pamtre Berry',
  'Pecha Berry',
  'Persim Berry',
  'Petaya Berry',
  'Pinap Berry',
  'Pomeg Berry',
  'Premier Ball',
  'Qualot Berry',
  'Rabuta Berry',
  'Rawst Berry',
  'Razz Berry',
  'Repeat Ball',
  'Root Fossil',
  'Salac Berry',
  'Sea Incense',
  'Shell Bell',
  'Silk Scarf',
  'Sitrus Berry',
  'Soul Dew',
  'Spelon Berry',
  'Starf Berry',
  'Tamato Berry',
  'Timer Ball',
  'Watmel Berry',
  'Wepear Berry',
  'White Herb',
  'Wiki Berry',
]);

const DPP = ADV.concat([
  'Adamant Orb',
  'Armor Fossil',
  'Babiri Berry',
  'Big Root',
  'Black Sludge',
  'Charti Berry',
  'Cherish Ball',
  'Chilan Berry',
  'Choice Scarf',
  'Choice Specs',
  'Chople Berry',
  'Coba Berry',
  'Colbur Berry',
  'Custap Berry',
  'Damp Rock',
  'Dawn Stone',
  'Destiny Knot',
  'Draco Plate',
  'Dread Plate',
  'Dubious Disc',
  'Dusk Ball',
  'Dusk Stone',
  'Earth Plate',
  'Electirizer',
  'Expert Belt',
  'Fist Plate',
  'Flame Orb',
  'Flame Plate',
  'Focus Sash',
  'Full Incense',
  'Grip Claw',
  'Griseous Orb',
  'Haban Berry',
  'Heal Ball',
  'Heat Rock',
  'Icicle Plate',
  'Icy Rock',
  'Insect Plate',
  'Iron Ball',
  'Iron Plate',
  'Jaboca Berry',
  'Kasib Berry',
  'Kebia Berry',
  'Lagging Tail',
  'Life Orb',
  'Light Clay',
  'Lustrous Orb',
  'Magmarizer',
  'Meadow Plate',
  'Metronome',
  'Micle Berry',
  'Mind Plate',
  'Muscle Band',
  'Occa Berry',
  'Odd Incense',
  'Oval Stone',
  'Park Ball',
  'Passho Berry',
  'Payapa Berry',
  'Power Anklet',
  'Power Band',
  'Power Belt',
  'Power Bracer',
  'Power Herb',
  'Power Lens',
  'Power Weight',
  'Protector',
  'Quick Ball',
  'Quick Powder',
  'Rare Bone',
  'Razor Claw',
  'Razor Fang',
  'Reaper Cloth',
  'Rindo Berry',
  'Rock Incense',
  'Rose Incense',
  'Rowap Berry',
  'Shed Shell',
  'Shiny Stone',
  'Shuca Berry',
  'Skull Fossil',
  'Sky Plate',
  'Smooth Rock',
  'Splash Plate',
  'Spooky Plate',
  'Sticky Barb',
  'Stone Plate',
  'Tanga Berry',
  'Toxic Orb',
  'Toxic Plate',
  'Wacan Berry',
  'Wave Incense',
  'Wide Lens',
  'Wise Glasses',
  'Yache Berry',
  'Zap Plate',
  'Zoom Lens',
]);

const BW = DPP.concat([
  'Absorb Bulb',
  'Air Balloon',
  'Big Nugget',
  'Binding Band',
  'Bug Gem',
  'Burn Drive',
  'Cell Battery',
  'Chill Drive',
  'Cover Fossil',
  'Dark Gem',
  'Douse Drive',
  'Dragon Gem',
  'Dream Ball',
  'Eject Button',
  'Electric Gem',
  'Eviolite',
  'Fighting Gem',
  'Fire Gem',
  'Float Stone',
  'Flying Gem',
  'Ghost Gem',
  'Grass Gem',
  'Ground Gem',
  'Ice Gem',
  'Normal Gem',
  'Plume Fossil',
  'Poison Gem',
  'Prism Scale',
  'Psychic Gem',
  'Red Card',
  'Ring Target',
  'Rock Gem',
  'Rocky Helmet',
  'Shock Drive',
  'Steel Gem',
  'Water Gem',
]);

export const MEGA_STONES: {[species: string]: string} = {
  Absolite: 'Absol',
  Abomasite: 'Abomasnow',
  Aerodactylite: 'Aerodactyl',
  Aggronite: 'Aggron',
  Alakazite: 'Alakazam',
  Altarianite: 'Altaria',
  Ampharosite: 'Ampharos',
  Audinite: 'Audino',
  Banettite: 'Banette',
  Beedrillite: 'Beedrill',
  Blastoisinite: 'Blastoise',
  Blazikenite: 'Blaziken',
  Cameruptite: 'Camerupt',
  'Charizardite X': 'Charizard',
  'Charizardite Y': 'Charizard',
  Crucibellite: 'Crucibelle',
  Diancite: 'Diancie',
  Galladite: 'Gallade',
  Garchompite: 'Garchomp',
  Gardevoirite: 'Gardevoir',
  Gengarite: 'Gengar',
  Glalitite: 'Glalie',
  Gyaradosite: 'Gyarados',
  Heracronite: 'Heracross',
  Houndoominite: 'Houndoom',
  Kangaskhanite: 'Kangaskhan',
  Latiasite: 'Latias',
  Latiosite: 'Latios',
  Lopunnite: 'Lopunny',
  Lucarionite: 'Lucario',
  Manectite: 'Manectric',
  Mawilite: 'Mawile',
  Medichamite: 'Medicham',
  Metagrossite: 'Metagross',
  'Mewtwonite X': 'Mewtwo',
  'Mewtwonite Y': 'Mewtwo',
  Pidgeotite: 'Pidgeot',
  Pinsirite: 'Pinsir',
  Sablenite: 'Sableye',
  Salamencite: 'Salamence',
  Sceptilite: 'Sceptile',
  Scizorite: 'Scizor',
  Sharpedonite: 'Sharpedo',
  Slowbronite: 'Slowbro',
  Steelixite: 'Steelix',
  Swampertite: 'Swampert',
  Tyranitarite: 'Tyranitar',
  Venusaurite: 'Venusaur',
  Florgesite: 'Florges',
  Electrodite: 'Electrode',
  'Frosty Snorlaxite': 'Snorlax Frost',
  Poliwrathite: 'Poliwrath',
  Marowakite: 'Marowak',
  Eevite: 'Eevee',
  Meganiumite: 'Meganium',
  Typhlosionite: 'Typhlosion',
  Feraligatite: 'Feraligatr',
  Sudowoodite: 'Sudowoodo',
  Politoedite: 'Politoed',
  Sunflorite: 'Sunflora',
  Etigirafarigite: 'Girafarig',
  Magcargonite: 'Magcargo',
  Donphanite: 'Donphan',
  Miltankite: 'Miltank',
  Shiftrite: 'Shiftry',
  Flygontie: 'Flygon',
  Cacturnite: 'Cacturne',
  Crawdauntite: 'Crawdaunt',
  Milotite: 'Milotic',
  Jirachite: 'Jirachi',
  Chatotite: 'Chatot',
  Spiritombite: 'Spiritomb',
  Forslassite: 'Froslass',
  Zebstrikite: 'Zebstrika',
  Zoronite: 'Zoroark',
  Gothitite: 'Gothitelle',
  Reuniclite: 'Reuniclus',
  Haxorite: 'Haxorus',
  Cryogonalite: 'Cryogonal',
  Stunfiskite: 'Stunfisk',
  Bisharpite: 'Bisharp',
  Hydreigonite: 'Hydreigon',
  'Delta Venusaurite': 'Venusaur-Delta',
  'Delta Charizardite': 'Charizard-Delta',
  'Delta Blastoisnite': 'Blastoise-Delta',
  'Delta Bisharpite': 'Bisharp-Delta',
  'Delta Gardevoirite': 'Gardevboir-Delta',
  'Delta Galladite': 'Gallade-Delta',
  'Delta Sunflorite': 'Sunflora-Delta',
  'Delta Scizorite': 'Scizor-Delta',
  'Delta Glalite': 'Glalie-Delta',
  'Delta Froslassite': 'Froslass-Delta',
  'Delta Typhlosionite': 'Typhlosion-Delta',
  'Delta Pidgeotite': 'Pidgeot-Delta',
  'Delta Etigirafarigite': 'Girafarig-Delta',
  'Delta Sablenite': 'Sableye-Delta',
  'Delta Mawilite': 'Mawile-Delta',
  'Delta Medichamite': 'Medicham-Delta',
  'Delta Milotite': 'Milotic-Delta',
  'Delta Metagrossite (Spider)': 'Metagross-Delta-Spider',
  'Delta Metagrossite (Ruin)': 'Metagross-Delta-Ruin',
  'Delta Lopunnite': 'Lopunny-Delta',
  'Delta Lucarionite': 'Lucario-Delta',
  'Steelixite Fire': 'Steelix',
  'Shadow Mewtwonite X': 'Mewtwo-Shadow'
};

const XY = BW.concat(
  [
    ...Object.keys(MEGA_STONES),
    'Assault Vest',
    'Blue Orb',
    'Fairy Gem',
    'Jaw Fossil',
    'Kee Berry',
    'Luminous Moss',
    'Maranga Berry',
    'Pixie Plate',
    'Red Orb',
    'Roseli Berry',
    'Sachet',
    'Safety Goggles',
    'Sail Fossil',
    'Snowball',
    'Weakness Policy',
    'Whipped Dream',
    'Trick Rock',
    'Dark Rock',
    'Flygon Armor',
    'Mewtwo Armor',
    'Volcarona-Delta Armor',
    'Tyranitar Armor',
    'Leavanny Armor',
    'Crystal Piece',
    'Crystal Fragment',
    'Zekrom Armor',

  ].sort()
);

const SM = XY.filter(i => i !== 'Old Amber').concat([
  'Adrenaline Orb',
  'Aloraichium Z',
  'Beast Ball',
  'Bottle Cap',
  'Bug Memory',
  'Buginium Z',
  'Dark Memory',
  'Darkinium Z',
  'Decidium Z',
  'Dragon Memory',
  'Dragonium Z',
  'Eevium Z',
  'Electric Memory',
  'Electric Seed',
  'Electrium Z',
  'Fairium Z',
  'Fairy Memory',
  'Fighting Memory',
  'Fightinium Z',
  'Fire Memory',
  'Firium Z',
  'Flying Memory',
  'Flyinium Z',
  'Ghost Memory',
  'Ghostium Z',
  'Gold Bottle Cap',
  'Grass Memory',
  'Grassium Z',
  'Grassy Seed',
  'Ground Memory',
  'Groundium Z',
  'Ice Memory',
  'Ice Stone',
  'Icium Z',
  'Incinium Z',
  'Kommonium Z',
  'Lunalium Z',
  'Lycanium Z',
  'Marshadium Z',
  'Mewnium Z',
  'Mimikium Z',
  'Misty Seed',
  'Normalium Z',
  'Pikanium Z',
  'Pikashunium Z',
  'Poison Memory',
  'Poisonium Z',
  'Primarium Z',
  'Protective Pads',
  'Psychic Memory',
  'Psychic Seed',
  'Psychium Z',
  'Rock Memory',
  'Rockium Z',
  'Snorlium Z',
  'Solganium Z',
  'Steel Memory',
  'Steelium Z',
  'Tapunium Z',
  'Terrain Extender',
  'Ultranecrozium Z',
  'Water Memory',
  'Waterium Z',
]);

const SS = SM.concat([
  'Berry Sweet',
  'Blunder Policy',
  'Chipped Pot',
  'Clover Sweet',
  'Cracked Pot',
  'Eject Pack',
  'Flower Sweet',
  'Fossilized Bird',
  'Fossilized Dino',
  'Fossilized Drake',
  'Fossilized Fish',
  'Galarica Cuff',
  'Galarica Wreath',
  'Heavy-Duty Boots',
  'Leek',
  'Love Sweet',
  'Ribbon Sweet',
  'Room Service',
  'Rusted Shield',
  'Rusted Sword',
  'Star Sweet',
  'Strawberry Sweet',
  'Sweet Apple',
  'Tart Apple',
  'Throat Spray',
]);

for (let i = 0; i < 100; i++) {
  SS.push(`TR${i < 10 ? `0${i}` : i}`);
}

// Added after the TRs to maintain sort order
SS.push('Utility Umbrella', 'Vile Vial');

// Because we support National Dex all Past items are added back in
SS.push(...GSC_ONLY, 'Old Amber');

const SV = SS.concat([
  'Adamant Crystal',
  'Auspicious Armor',
  'Ability Shield',
  'Booster Energy',
  'Clear Amulet',
  'Cornerstone Mask',
  'Covert Cloak',
  'Fairy Feather',
  'Hearthflame Mask',
  'Loaded Dice',
  'Malicious Armor',
  'Masterpiece Teacup',
  'Metal Alloy',
  'Mirror Herb',
  'Punching Glove',
  'Lustrous Globe',
  'Griseous Core',
  'Strange Ball',
  'Syrupy Apple',
  'Unremarkable Teacup',
  'Wellspring Mask',
]);

const BERRIES: {[berry: string]: {t: I.TypeName; p: number}} = {
  'Aguav Berry': {t: 'Dragon', p: 80},
  'Apicot Berry': {t: 'Ground', p: 100},
  'Aspear Berry': {t: 'Ice', p: 80},
  'Babiri Berry': {t: 'Steel', p: 80},
  'Belue Berry': {t: 'Electric', p: 100},
  Berry: {t: 'Poison', p: 80},
  'Bitter Berry': {t: 'Ground', p: 80},
  'Bluk Berry': {t: 'Fire', p: 90},
  'Burnt Berry': {t: 'Ice', p: 80},
  'Charti Berry': {t: 'Rock', p: 80},
  'Cheri Berry': {t: 'Fire', p: 80},
  'Chesto Berry': {t: 'Water', p: 80},
  'Chilan Berry': {t: 'Normal', p: 80},
  'Chople Berry': {t: 'Fighting', p: 80},
  'Coba Berry': {t: 'Flying', p: 80},
  'Colbur Berry': {t: 'Dark', p: 80},
  'Cornn Berry': {t: 'Bug', p: 90},
  'Custap Berry': {t: 'Ghost', p: 100},
  'Durin Berry': {t: 'Water', p: 100},
  'Enigma Berry': {t: 'Bug', p: 100},
  'Figy Berry': {t: 'Bug', p: 80},
  'Ganlon Berry': {t: 'Ice', p: 100},
  'Gold Berry': {t: 'Psychic', p: 80},
  'Grepa Berry': {t: 'Flying', p: 90},
  'Haban Berry': {t: 'Dragon', p: 80},
  'Hondew Berry': {t: 'Ground', p: 90},
  'Iapapa Berry': {t: 'Dark', p: 80},
  'Ice Berry': {t: 'Grass', p: 80},
  'Jaboca Berry': {t: 'Dragon', p: 100},
  'Kasib Berry': {t: 'Ghost', p: 80},
  'Kebia Berry': {t: 'Poison', p: 80},
  'Kee Berry': {t: 'Fairy', p: 100},
  'Kelpsy Berry': {t: 'Fighting', p: 90},
  'Lansat Berry': {t: 'Flying', p: 100},
  'Leppa Berry': {t: 'Fighting', p: 80},
  'Liechi Berry': {t: 'Grass', p: 100},
  'Lum Berry': {t: 'Flying', p: 80},
  'Mago Berry': {t: 'Ghost', p: 80},
  'Magost Berry': {t: 'Rock', p: 90},
  'Maranga Berry': {t: 'Dark', p: 100},
  'Micle Berry': {t: 'Rock', p: 100},
  'Mint Berry': {t: 'Water', p: 80},
  'Miracle Berry': {t: 'Flying', p: 80},
  'Mystery Berry': {t: 'Fighting', p: 80},
  'Nanab Berry': {t: 'Water', p: 90},
  'Nomel Berry': {t: 'Dragon', p: 90},
  'Occa Berry': {t: 'Fire', p: 80},
  'Oran Berry': {t: 'Poison', p: 80},
  'Pamtre Berry': {t: 'Steel', p: 90},
  'Passho Berry': {t: 'Water', p: 80},
  'Payapa Berry': {t: 'Psychic', p: 80},
  'Pecha Berry': {t: 'Electric', p: 80},
  'Persim Berry': {t: 'Ground', p: 80},
  'Petaya Berry': {t: 'Poison', p: 100},
  'Pinap Berry': {t: 'Grass', p: 90},
  'Pomeg Berry': {t: 'Ice', p: 90},
  'PRZ Cure Berry': {t: 'Fire', p: 80},
  'PSN Cure Berry': {t: 'Electric', p: 80},
  'Qualot Berry': {t: 'Poison', p: 90},
  'Rabuta Berry': {t: 'Ghost', p: 90},
  'Rawst Berry': {t: 'Grass', p: 80},
  'Razz Berry': {t: 'Steel', p: 80},
  'Rindo Berry': {t: 'Grass', p: 80},
  'Roseli Berry': {t: 'Fairy', p: 80},
  'Rowap Berry': {t: 'Dark', p: 100},
  'Salac Berry': {t: 'Fighting', p: 100},
  'Shuca Berry': {t: 'Ground', p: 80},
  'Sitrus Berry': {t: 'Psychic', p: 80},
  'Spelon Berry': {t: 'Dark', p: 90},
  'Starf Berry': {t: 'Psychic', p: 100},
  'Tamato Berry': {t: 'Psychic', p: 90},
  'Tanga Berry': {t: 'Bug', p: 80},
  'Wacan Berry': {t: 'Electric', p: 80},
  'Watmel Berry': {t: 'Fire', p: 100},
  'Wepear Berry': {t: 'Electric', p: 90},
  'Wiki Berry': {t: 'Rock', p: 80},
  'Yache Berry': {t: 'Ice', p: 80},
};

export const ITEMS = [[], RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Items implements I.Items {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return ITEMS_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in ITEMS_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Item implements I.Item {
  readonly kind: 'Item';
  readonly id: I.ID;
  readonly name: I.ItemName;
  readonly megaEvolves?: I.SpeciesName;
  readonly isBerry?: boolean;
  readonly naturalGift?: Readonly<{basePower: number; type: I.TypeName}>;

  constructor(name: string, gen: number) {
    this.kind = 'Item';
    this.id = toID(name);
    this.name = name as I.ItemName;
    this.megaEvolves = MEGA_STONES[name] as I.SpeciesName;
    const berry = BERRIES[name];
    if (berry) {
      this.isBerry = true;
      this.naturalGift = {
        basePower: gen < 6 ? berry.p - 20 : berry.p,
        type: berry.t,
      };
    }
  }
}

const ITEMS_BY_ID: Array<{[id: string]: Item}> = [];

let gen = 0;
for (const items of ITEMS) {
  const map: {[id: string]: Item} = {};
  for (const item of items) {
    const i = new Item(item, gen);
    map[i.id] = i;
  }
  ITEMS_BY_ID.push(map);
  gen++;
}
