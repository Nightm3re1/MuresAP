export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import DiscountsClientContent from './discounts-client-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'DiscountsPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function DiscountsPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return <DiscountsClientContent params={params} searchParams={searchParams} />;
}
