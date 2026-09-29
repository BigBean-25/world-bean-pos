export const RESTAURANT_DEF = {
  name: 'World Bean Coffee',
  slug: 'world-bean-coffee',
  legalName: 'World Bean Coffee',
  defaultCurrency: 'INR',
  timezone: 'Asia/Kolkata',
};

export interface BranchDef {
  name: string;
  code: string;
  address: { line1: string; city: string; state: string; country: string; postalCode: string };
  phone: string;
  email: string;
  isMain: boolean;
  tableCount: number;
}

/**
 * Demo-only outlets. Replace these placeholders with the actual outlet,
 * GSTIN/FSSAI and contact details before production go-live.
 */
export const BRANCH_DEFS: BranchDef[] = [
  {
    name: 'World Bean Coffee — Demo Outlet 1',
    code: 'DTN',
    address: { line1: 'Demo Address 1', city: 'Bengaluru', state: 'Karnataka', country: 'India', postalCode: '560001' },
    phone: '+91 90000 00001',
    email: 'outlet1@worldbean.local',
    isMain: true,
    tableCount: 14,
  },
  {
    name: 'World Bean Coffee — Demo Outlet 2',
    code: 'HBV',
    address: { line1: 'Demo Address 2', city: 'Bengaluru', state: 'Karnataka', country: 'India', postalCode: '560002' },
    phone: '+91 90000 00002',
    email: 'outlet2@worldbean.local',
    isMain: false,
    tableCount: 10,
  },
  {
    name: 'World Bean Coffee — Demo Outlet 3',
    code: 'UPT',
    address: { line1: 'Demo Address 3', city: 'Bengaluru', state: 'Karnataka', country: 'India', postalCode: '560003' },
    phone: '+91 90000 00003',
    email: 'outlet3@worldbean.local',
    isMain: false,
    tableCount: 8,
  },
];
