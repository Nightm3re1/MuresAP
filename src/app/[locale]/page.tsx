export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HomePageClient from '@/components/ui/home-page-client';
import { Meteors } from '@/components/ui/meteors';

//  Metadata generation with correct params typing
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'Navbar' });
  const brandT = await getTranslations({ locale, namespace: 'Brand' });

  return {
    title: t('home'),
    description: `Welcome to ${brandT('name')} - Your premier choice for apartment rentals in Târgu Mureș.`,
  };
}

//  Default export with correct props typing
export default function HomePage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return (
    <div className="relative flex-grow">
      <Meteors number={60} className="opacity-70 -z-10 absolute inset-0" />
      <HomePageClient />
    </div>
  );
}
