export const dynamic = 'force-dynamic';

import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ContactClientContent from './contact-client-content';

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: 'ContactPage' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function ContactPage({
  params,
  searchParams,
}: {
  params: { locale: string };
  searchParams?: Record<string, string | string[]>;
}) {
  return <ContactClientContent params={params} searchParams={searchParams} />;
}
