import { Lang } from "@/lib/langs";

export type PageProps = Readonly<{
  params: { locale: Lang };
}>;

export type PageWithSlugProps = Readonly<{
  params: { locale: Lang; slug: string };
}>;
