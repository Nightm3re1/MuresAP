// src/app/[locale]/apartments/page.tsx

import { apartments } from '@/lib/data';
import ApartmentListClientContent from './apartment-list-client-content';
import type { Metadata, PageProps } from 'next';

// 1. generateStaticParams stays the same
export async function generateStaticParams() {
  return apartments.map((apartment) => ({
    locale: 'en',           // or loop your locales if you have multiple
  }));
}

// 2. Use PageProps for generateMetadata (if you have metadata here)
export async function generateMetadata({
  params,
}: PageProps<{ locale: string }>): Promise<Metadata> {
  return {
    title: `Apartments (${params.locale})`,
    description: `Browse apartments for locale ${params.locale}.`,
  };
}

// 3. Your page component now typed correctly
export default async function ApartmentsPage({
  params,
}: PageProps<{ locale: string }>) {
  const { locale } = params;

  // Filter or localize the list if needed:
  const list = apartments; 

  return (
    <div className="min-h-screen bg-background">
      <h1 className="text-3xl font-bold mb-4">
        Apartments ({locale})
      </h1>
      <ApartmentListClientContent apartments={list} />
    </div>
  );
}
