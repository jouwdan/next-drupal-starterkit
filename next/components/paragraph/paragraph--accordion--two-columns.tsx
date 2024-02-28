import Link from "next/link";
import clsx from "clsx";

import { FormattedText } from "@/components/formatted-text";
import { HeadingParagraph } from "@/components/heading--paragraph";
import { Paragraph } from "@/components/paragraph";
import {
  FragmentParagraphAccordionFragment,
  FragmentParagraphAccordionItemFragment,
  FragmentParagraphUnionFragment,
} from "@/lib/gql/graphql";
import ArrowIcon from "@/styles/icons/arrow-down.svg";

import { Accordion } from "@/ui/accordion";
import { buttonVariants } from "@/ui/button";

export function ParagraphAccordionTwoColumns({
  paragraph,
}: {
  paragraph: FragmentParagraphAccordionFragment;
}) {
  return (
    <>
      {paragraph.heading && (
        <HeadingParagraph>{paragraph.heading}</HeadingParagraph>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
        <div>
          {paragraph.accordionFormattedText && (
            <div className="flex items-center justify-center">
              <FormattedText
                html={paragraph.accordionFormattedText.processed}
                className={clsx(
                  "text-left text-md/xl text-scapaflow sm:text-lg",
                  paragraph.heading && "mt-4",
                )}
              />
            </div>
          )}
          {paragraph.primaryLink && (
            <div className="flex items-center justify-center py-3">
              <Link
                href={paragraph.primaryLink.url}
                className={clsx(
                  buttonVariants({ variant: "primary" }),
                  "text-base mr-4 inline-flex max-w-sm px-5 py-3",
                )}
              >
                {paragraph.primaryLink.title}
                <ArrowIcon aria-hidden className="ml-3 h-6 w-6 -rotate-90" />
              </Link>
            </div>
          )}
        </div>
        <div>
          <Accordion
            items={paragraph.accordionItems?.map(
              (item: FragmentParagraphAccordionItemFragment) => ({
                id: item.id,
                heading: item.accordionItemHeading,
                content: (
                  <div className="grid gap-4">
                    {item.contentElements?.map(
                      (paragraph: FragmentParagraphUnionFragment) => (
                        <Paragraph key={paragraph.id} paragraph={paragraph} />
                      ),
                    )}
                  </div>
                ),
              }),
            )}
          />
        </div>
      </div>
    </>
  );
}
