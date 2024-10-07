
export type EpochKeys = 'EPOCH 1_Nakamoto' | 'EPOCH 2_Suggon' | 'EPOCH 3_Michael' | 'EPOCH 4_Paul' | 'EPOCH 5_KEVIN';

export interface StampDetail {
    STAMP_Asset: string;
    Top: number;
    Rarity_TItle: string;
    Rarity_Score: number;
    imageUrl: string;
}

export type EpochData = Record<EpochKeys, string[]>;

export type StampDetails = Record<string, StampDetail[]>;

export const epochData: EpochData = {
    'EPOCH 1_Nakamoto': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
    'EPOCH 2_Suggon': ["EPOCH 2_Suggon"],
    'EPOCH 3_Michael': [],
    'EPOCH 4_Paul': [],
    'EPOCH 5_KEVIN': [],
};

function getRandomRarityScore() {
    return parseFloat((Math.random() * (48 - 13.2) + 13.2).toFixed(1));
}
function generateRandomStampAsset(): string {
    const prefix = 'A';
    const randomNumber = Math.floor(Math.random() * 10 ** 16); 
    return prefix + randomNumber.toString().padStart(16, '0'); 
  }

  function getRandomTop(): number {
    return Math.floor(Math.random() * 43); 
  }
  
  

export const stampDetails: StampDetails = {
    'Index #1': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore() ,Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        
    ],
    'Index #2': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(), Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #3': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore() , Rarity_TItle:  "Common"  },
    ],
    'Index #4': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #5': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #6': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #7': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #8': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(),Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #9': [
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common" },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset:generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
    'Index #10': [
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],

   'EPOCH 2_Suggon': [ 
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
        { imageUrl: "/photo.png", STAMP_Asset: generateRandomStampAsset(), Top: getRandomTop(),Rarity_Score: getRandomRarityScore(), Rarity_TItle:  "Common"  },
    ],
};


