export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ApartmentsClientContent from './apartments-client-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'ApartmentsPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ApartmentsPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return <ApartmentsClientContent params={params} searchParams={searchParams} />;
}
