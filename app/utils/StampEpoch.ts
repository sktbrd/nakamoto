
export type EpochKeys = 'EPOCH 1_Nakamoto' | 'EPOCH 2_Suggon' | 'EPOCH 3_Michael' | 'EPOCH 4_Paul' | 'EPOCH 5_KEVIN';

export interface StampDetail {
    instance: string;
    issuance: number;
    stars: number;
    rarity: number;
    imageUrl: string;
}

export type EpochData = Record<EpochKeys, string[]>;

export type StampDetails = Record<string, StampDetail[]>;

export const epochData: EpochData = {
    'EPOCH 1_Nakamoto': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
    'EPOCH 2_Suggon': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
    'EPOCH 3_Michael': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
    'EPOCH 4_Paul': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
    'EPOCH 5_KEVIN': ['Index #1', 'Index #2', 'Index #3', 'Index #4', 'Index #5', 'Index #6', 'Index #7', 'Index #8', 'Index #9', 'Index #10'],
};

export const stampDetails: StampDetails = {
    'Index #1': [
        { imageUrl: "/photo.png", instance: 'Instance 1-A', issuance: 100, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 1-B', issuance: 120, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 1-C', issuance: 130, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 1-D', issuance: 110, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 1-E', issuance: 90, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 1-F', issuance: 80, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 1-G', issuance: 140, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 1-H', issuance: 150, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 1-I', issuance: 160, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 1-J', issuance: 170, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 1-K', issuance: 180, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 1-L', issuance: 190, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 1-M', issuance: 200, stars: 4, rarity: 4},
        { imageUrl: "/photo.png", instance: 'Instance 1-N', issuance: 210, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 1-O', issuance: 220, stars: 4, rarity: 4 },
        
    ],
    'Index #2': [
        { imageUrl: "/photo.png", instance: 'Instance 2-A', issuance: 200, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 2-B', issuance: 220, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 2-C', issuance: 210, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 2-D', issuance: 230, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 2-E', issuance: 240, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 2-F', issuance: 250, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 2-G', issuance: 260, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 2-H', issuance: 270, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 2-I', issuance: 280, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 2-J', issuance: 290, stars: 3, rarity: 4 },
    ],
    'Index #3': [
        { imageUrl: "/photo.png", instance: 'Instance 3-A', issuance: 150, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 3-B', issuance: 160, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 3-C', issuance: 170, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 3-D', issuance: 180, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 3-E', issuance: 190, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 3-F', issuance: 200, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 3-G', issuance: 210, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 3-H', issuance: 220, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 3-I', issuance: 230, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 3-J', issuance: 240, stars: 3, rarity: 4 },
    ],
    'Index #4': [
        { imageUrl: "/photo.png", instance: 'Instance 4-A', issuance: 120, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 4-B', issuance: 130, stars: 4, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 4-C', issuance: 140, stars: 3, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 4-D', issuance: 150, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 4-E', issuance: 160, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 4-F', issuance: 170, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 4-G', issuance: 180, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 4-H', issuance: 190, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 4-I', issuance: 200, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 4-J', issuance: 210, stars: 1, rarity: 6 },
    ],
    'Index #5': [
        { imageUrl: "/photo.png", instance: 'Instance 5-A', issuance: 80, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 5-B', issuance: 90, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 5-C', issuance: 100, stars: 2, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 5-D', issuance: 110, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 5-E', issuance: 120, stars: 4, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 5-F', issuance: 130, stars: 3, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 5-G', issuance: 140, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 5-H', issuance: 150, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 5-I', issuance: 160, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 5-J', issuance: 170, stars: 4, rarity: 3 },
    ],
    'Index #6': [
        { imageUrl: "/photo.png", instance: 'Instance 6-A', issuance: 300, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 6-B', issuance: 310, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 6-C', issuance: 320, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 6-D', issuance: 330, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 6-E', issuance: 340, stars: 3, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 6-F', issuance: 350, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 6-G', issuance: 360, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 6-H', issuance: 370, stars: 4, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 6-I', issuance: 380, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 6-J', issuance: 390, stars: 2, rarity: 4 },
    ],
    'Index #7': [
        { imageUrl: "/photo.png", instance: 'Instance 7-A', issuance: 60, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 7-B', issuance: 70, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 7-C', issuance: 80, stars: 3, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 7-D', issuance: 90, stars: 4, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 7-E', issuance: 100, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 7-F', issuance: 110, stars: 3, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 7-G', issuance: 120, stars: 2, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 7-H', issuance: 130, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 7-I', issuance: 140, stars: 4, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 7-J', issuance: 150, stars: 5, rarity: 1 },
    ],
    'Index #8': [
        { imageUrl: "/photo.png", instance: 'Instance 8-A', issuance: 250, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 8-B', issuance: 260, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 8-C', issuance: 270, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 8-D', issuance: 280, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 8-E', issuance: 290, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 8-F', issuance: 300, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 8-G', issuance: 310, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 8-H', issuance: 320, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 8-I', issuance: 330, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 8-J', issuance: 340, stars: 4, rarity: 2 },
    ],
    'Index #9': [
        { imageUrl: "/photo.png", instance: 'Instance 9-A', issuance: 90, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 9-B', issuance: 100, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 9-C', issuance: 110, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 9-D', issuance: 120, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 9-E', issuance: 130, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 9-F', issuance: 140, stars: 2, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 9-G', issuance: 150, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 9-H', issuance: 160, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 9-I', issuance: 170, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 9-J', issuance: 180, stars: 5, rarity: 1 },
    ],
    'Index #10': [
        { imageUrl: "/photo.png", instance: 'Instance 10-A', issuance: 110, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 10-B', issuance: 120, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 10-C', issuance: 130, stars: 5, rarity: 1 },
        { imageUrl: "/photo.png", instance: 'Instance 10-D', issuance: 140, stars: 4, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 10-E', issuance: 150, stars: 5, rarity: 2 },
        { imageUrl: "/photo.png", instance: 'Instance 10-F', issuance: 160, stars: 3, rarity: 3 },
        { imageUrl: "/photo.png", instance: 'Instance 10-G', issuance: 170, stars: 4, rarity: 4 },
        { imageUrl: "/photo.png", instance: 'Instance 10-H', issuance: 180, stars: 2, rarity: 5 },
        { imageUrl: "/photo.png", instance: 'Instance 10-I', issuance: 190, stars: 1, rarity: 6 },
        { imageUrl: "/photo.png", instance: 'Instance 10-J', issuance: 200, stars: 3, rarity: 3 },
    ],
};


