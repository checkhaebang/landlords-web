export const ROOM_CONTENTS_LABEL = {
  price: '가격',
  address: '주소',
  buildingType: '주거형태',
  size: '공급면적',
  floor: '층/건물층수',
  elevator: '엘리베이터',
  admionistrationCost: '관리비',
};

export const BUILDING_TYPE_MATHCER = {
  0: '원룸',
  1: '투룸',
  2: '쓰리룸',
  3: '오피스텔',
  4: '아파트',
  5: '빌라',
};

export const SELLING_TYPE_MATCHER = {
  0: '월세',
  1: '전세',
  2: '매매',
};

export interface Room {
  uid: string;
  deposit: number;
  monthly_rent: number;
  selling_type: keyof typeof SELLING_TYPE_MATCHER;
  address: string;
  title: string;
  description: string;
  image: string;
  building_type: keyof typeof BUILDING_TYPE_MATHCER;
  room_size: number;
  floor: string;
  has_elevator: boolean;
  administrative_expenses: number;
  user_id: number;
  name?: string;
  price?: string;
}

export interface ConvertedRoom {
  uid: string;
  name: string;
  price: string;
  address: string;
  buildingType: string;
  size: string;
  floor: string;
  elevator: string;
  admionistrationCost: string;
  imageUrl: string;
}