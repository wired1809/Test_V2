export interface Flavor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  ingredients: string;
  priceHalfDozen: number;
  priceDozen: number;
  badge?: string;
  accentColor: string;
  badgeColor: string;
}

export type OrderItemType = 'half-dozen' | 'dozen' | 'custom-box';

export interface CartItem {
  id: string;
  type: OrderItemType;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  flavorId?: string;
  boxFlavors?: { flavorId: string; name: string; count: number }[];
}

export interface OrderFormState {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  pickupDate: string;
  pickupTime: string;
  fulfillmentType: 'porch-pickup' | 'local-delivery';
  deliveryAddress: string;
  specialNotes: string;
  isCustomTheme: boolean;
  themeNotes: string;
}
