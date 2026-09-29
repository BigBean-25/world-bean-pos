export const BRAND = {
  brandName: 'World Bean Coffee',
  posName: 'World Bean POS',
  shortName: 'World Bean',
  logo: '/brand/world-bean-logo.png',
  favicon: '/brand/world-bean-logo.png',
  primaryTheme: '#491A0A',
  receiptBusinessName: 'WORLD BEAN COFFEE',
  receiptFooter: 'Thank you for visiting World Bean Coffee.',
  supportDetails: {
    email: null as string | null,
    phone: null as string | null,
  },
} as const;

export type BrandConfig = typeof BRAND;
