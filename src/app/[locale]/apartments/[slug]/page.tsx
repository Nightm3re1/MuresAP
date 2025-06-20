// src/app/[locale]/apartments/[slug]/page.tsx

import { apartments } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata, PageProps } from 'next';
import ApartmentDetailClientContent from './apartment-detail-client-content';
import { Meteors } from '@/components/ui/meteors';
import { locales } from '@/i18n';

// 1. generateStaticParams stays the same
export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const apartment of apartments) {
      params.push({ locale, slug: apartment.slug });
    }
  }
  return params;
}

// 2. Use PageProps<{ locale; slug }> for generateMetadata
export async function generateMetadata({
  params,
}: PageProps<{ locale: string; slug: string }>): Promise<Metadata> {
  const { slug, locale } = params;
  const apartment = apartments.find((ap) => ap.slug === slug);

  if (!apartment) {
    return { title: 'Apartment Not Found' };
  }

  const name = apartment.name[locale] || apartment.name.en;
  const rawDescription =
    apartment.description[locale] || apartment.description.en;
  const metaDescription =
    typeof rawDescription === 'string'
      ? rawDescription.replace(/\*\*|##|###|\n/g, ' ').substring(0, 160)
      : 'View details for this apartment.';

  return {
    title: name,
    description: metaDescription,
    openGraph: {
      title: name,
      description: metaDescription,
      images:
        apartment.images.length > 0
          ? [{ url: apartment.images[0] }]
          : [],
    },
  };
}

// 3. Use PageProps<{ locale; slug }> for your page component
export default async function ApartmentDetailPage({
  params,
  searchParams,
}: PageProps<{ locale: string; slug: string }>) {
  const apartment = apartments.find((ap) => ap.slug === params.slug);

  if (!apartment) {
    notFound();
  }

  return (
    <div className="relative bg-background min-h-screen flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <ApartmentDetailClientContent
        apartment={apartment!}
        slug={params.slug}
      />
    </div>
  );
}
