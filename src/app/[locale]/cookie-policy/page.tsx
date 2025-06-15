export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import CookiePolicyClientContent from './cookie-policy-client-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'CookiePolicyPage' });
  return {
    title: t('title'),
  };
}

export default function CookiePolicyPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return <CookiePolicyClientContent params={params} searchParams={searchParams} />;
}
