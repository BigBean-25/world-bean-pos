import { ArrowRight, Boxes, ChefHat, Coffee, LayoutDashboard, ShieldCheck, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { BRAND } from '@/config/brand';

const features = [
  { icon: ShoppingCart, title: 'Fast café billing', text: 'Touch-friendly dine-in and takeaway billing with modifiers, discounts, payments and receipts.' },
  { icon: ChefHat, title: 'KOT + kitchen', text: 'Send orders to the kitchen, monitor ticket status and keep preparation flow visible.' },
  { icon: Boxes, title: 'Recipe inventory', text: 'Ingredient stock, purchases, wastage and recipe-level consumption stay connected to sales.' },
  { icon: LayoutDashboard, title: 'Multi-outlet control', text: 'Outlet-scoped operations with central dashboards, reporting and day-closing visibility.' },
  { icon: ShieldCheck, title: 'Controlled access', text: 'Role-based access, approval boundaries and audit trails protect sensitive operations.' },
  { icon: Coffee, title: 'Built for World Bean', text: 'A dedicated pure-vegetarian South Indian café and filter-coffee operating system.' },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#1e0c07] text-white">
      <nav className="border-b border-white/10 bg-[#1e0c07]/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center overflow-hidden rounded-xl bg-white p-1.5">
              <Image src={BRAND.logo} alt={BRAND.brandName} width={48} height={34} priority />
            </span>
            <div>
              <span className="block font-display text-lg font-semibold">{BRAND.posName}</span>
              <span className="block text-[10px] tracking-[0.16em] text-[#d2a47d] uppercase">{BRAND.brandName}</span>
            </div>
          </Link>
          <Button asChild className="bg-[#d2a47d] text-[#2a1108] hover:bg-[#e0b896]">
            <Link href="/login">Open POS <ArrowRight className="size-4" /></Link>
          </Button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1fr_.9fr] lg:items-center lg:py-28">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em] text-[#d2a47d] uppercase">World Bean Coffee operations</p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
            One POS for counter, table and kitchen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8c3b7]">
            {BRAND.posName} connects billing, KOT, kitchen, tables, inventory, purchases, day closing and multi-outlet reporting for {BRAND.brandName}.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-[#d2a47d] text-[#2a1108] hover:bg-[#e0b896]">
              <Link href="/login">Sign in to POS <ArrowRight className="size-4" /></Link>
            </Button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-2xl">
          <div className="rounded-2xl bg-[#fbf7f2] p-6 text-[#2a160f]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-[#725c51]">Register</p>
                <p className="mt-1 text-xl font-semibold">World Bean Demo Outlet</p>
              </div>
              <span className="rounded-full bg-[#f4e1d4] px-3 py-1 text-xs font-semibold text-[#6b2b13]">OPEN</span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['DINE IN', 'TAKEAWAY', 'SWIGGY', 'ZOMATO'].map((source) => (
                <div key={source} className="rounded-xl border border-[#e6d7cc] bg-white p-4 text-center text-sm font-semibold">
                  {source}
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-[#491a0a] p-4 text-white">
              <p className="text-xs text-[#d2a47d]">POS priority</p>
              <p className="mt-1 font-semibold">Fast billing. Accurate data. Stable service.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-16 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="grid size-11 place-items-center rounded-xl bg-[#d2a47d]/15 text-[#d2a47d]">
                <Icon className="size-5" />
              </div>
              <h2 className="mt-5 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#bfa99d]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-8 text-xs text-[#967b6d]">
          <p>© 2026 {BRAND.brandName}</p>
          <p>{BRAND.posName}</p>
        </div>
      </footer>
    </main>
  );
}
