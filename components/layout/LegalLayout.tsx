"use client";

import { Link } from "@/i18n/navigation";

const EMAIL_REGEX = /([\w.-]+@[\w.-]+\.\w+)/g;
const URL_REGEX = /(https?:\/\/[^\s]+)/g;

function linkifyText(text: string) {
  const parts = text.split(EMAIL_REGEX);

  return parts.map((part, index) => {
    if (EMAIL_REGEX.test(part)) {
      EMAIL_REGEX.lastIndex = 0;
      return (
        <a
          key={`${part}-${index}`}
          href={`mailto:${part}`}
          className="text-violet underline-offset-2 hover:underline"
        >
          {part}
        </a>
      );
    }

    EMAIL_REGEX.lastIndex = 0;

    const urlParts = part.split(URL_REGEX);
    return urlParts.map((segment, urlIndex) => {
      if (URL_REGEX.test(segment)) {
        URL_REGEX.lastIndex = 0;
        return (
          <a
            key={`${segment}-${index}-${urlIndex}`}
            href={segment}
            className="text-violet underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {segment}
          </a>
        );
      }
      URL_REGEX.lastIndex = 0;
      return segment;
    });
  });
}

type LegalParagraphProps = {
  text: string;
  privacyLink?: boolean;
};

function LegalParagraph({ text, privacyLink }: LegalParagraphProps) {
  if (privacyLink && text.includes("politique de confidentialité")) {
    const [before, after] = text.split("politique de confidentialité");
    return (
      <p className="text-sm leading-relaxed text-graphite/70">
        {before}
        <Link
          href="/privacy"
          className="text-violet underline-offset-2 hover:underline"
        >
          politique de confidentialité
        </Link>
        {after}
      </p>
    );
  }

  if (privacyLink && text.includes("privacy policy")) {
    const [before, after] = text.split("privacy policy");
    return (
      <p className="text-sm leading-relaxed text-graphite/70">
        {before}
        <Link
          href="/privacy"
          className="text-violet underline-offset-2 hover:underline"
        >
          privacy policy
        </Link>
        {after}
      </p>
    );
  }

  return (
    <p className="text-sm leading-relaxed text-graphite/70">{linkifyText(text)}</p>
  );
}

type LegalLayoutProps = {
  title: string;
  lastUpdated: string;
  sections: {
    title: string;
    paragraphs: string[];
    items?: string[];
    paragraphsAfter?: string[];
  }[];
};

export function LegalLayout({ title, lastUpdated, sections }: LegalLayoutProps) {
  return (
    <>
      <article className="section-padding border-t border-gray">
        <div className="container-main mx-auto max-w-3xl">
          <header className="mb-10 border-b border-gray pb-8">
            <h1 className="font-heading text-3xl font-bold text-graphite sm:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-graphite/50">{lastUpdated}</p>
          </header>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-xl font-bold text-graphite">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <LegalParagraph
                      key={`${section.title}-p-${index}`}
                      text={paragraph}
                      privacyLink={
                        section.title.includes("Données personnelles") ||
                        section.title.includes("Personal data")
                      }
                    />
                  ))}
                  {section.items?.length ? (
                    <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-graphite/70">
                      {section.items.map((item) => (
                        <li key={item.slice(0, 48)}>{linkifyText(item)}</li>
                      ))}
                    </ul>
                  ) : null}
                  {section.paragraphsAfter?.map((paragraph, index) => (
                    <LegalParagraph
                      key={`${section.title}-pa-${index}`}
                      text={paragraph}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
