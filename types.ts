export enum ParkCategory {
  NATIONAL_PARK = '国家公园',
  NATURE_RESERVE = '自然保护区',
  SCENIC_5A = '5A景区',
  WORLD_HERITAGE = '世界遗产'
}

export enum LandscapeType {
  MOUNTAIN = '山地',
  FOREST = '森林',
  WETLAND = '湿地',
  RIVER_LAKE = '江河湖泊',
  ANIMAL = '珍稀动物',
  KARST = '喀斯特',
  GLACIER = '冰川雪山'
}

export interface Park {
  id: string;
  name: string;
  location: string; // Province/Region
  description: string;
  category: ParkCategory;
  landscapes: LandscapeType[];
  imageUrl: string;
  rating: number;
  openTime: string;
  ticketInfo: string;
  transportInfo: string;
  weatherInfo: string;
  
  // New Fields
  poetry: string; // Classic poetry matching the location
  bestSeason: string;
  crowdLevel: '舒适' | '适中' | '拥挤'; 
  seasonColor: string; // Hex color representing the current season
  seasonColorName: string; // Name of the color (e.g., 缃叶)
}

export interface TripPreferences {
  days: number;
  budget: string;
  interests: string[];
  destination?: string;
  startCity?: string; // New
}

export interface ItineraryResult {
  plan: string;
  packingList: string[];
}