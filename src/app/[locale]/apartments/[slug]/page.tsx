export const dynamic = 'force-dynamic';

import { apartments } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import ApartmentDetailClientContent from './apartment-detail-client-content';
import { Meteors } from '@/components/ui/meteors';
import { locales } from '@/i18n';

export async function generateStaticParams() {
  const paramsList: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const apartment of apartments) {
      paramsList.push({ locale, slug: apartment.slug });
    }
  }
  return paramsList;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string; locale: string };
}): Promise<Metadata> {
  const { slug, locale } = params;
  const apartment = apartments.find((a) => a.slug === slug);

  if (!apartment) {
    return { title: 'Apartment Not Found' };
  }

  const name = apartment.name[locale] || apartment.name.en;
  const rawDescription = apartment.description[locale] || apartment.description.en;
  const description =
    typeof rawDescription === 'string'
      ? rawDescription.replace(/\*\*|##|###|\n/g, ' ').substring(0, 160)
      : 'View apartment details';

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      images: apartment.images.length ? [{ url: apartment.images[0] }] : [],
    },
  };
}

export default function ApartmentDetailPage({
  params,
  searchParams,
}: {
  params: { slug: string; locale: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const apartment = apartments.find((a) => a.slug === params.slug);
  if (!apartment) notFound();

  return (
    <div className="relative bg-background min-h-screen flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <ApartmentDetailClientContent apartment={apartment} slug={params.slug} />
    </div>
  );
}
