export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import TermsAndConditionsClientContent from './terms-and-conditions-client-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'TermsAndConditionsPage' });
  return {
    title: t('title'),
  };
}

export default function TermsAndConditionsPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return <TermsAndConditionsClientContent params={params} searchParams={searchParams} />;
}
