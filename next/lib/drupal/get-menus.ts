import { GetStaticPropsContext } from "next";

import { drupal } from "@/lib/drupal/drupal-client";

import { MenuAvailable } from "../gql/graphql";
import { GET_MENU } from "../graphql/queries";

export async function getMenus({ locale }: GetStaticPropsContext) {
  const [main, footer] = await Promise.all(
    ["MAIN", "FOOTER"].map((menu) =>
      drupal.doGraphQlRequest(GET_MENU, {
        name: menu as MenuAvailable,
        langcode: locale,
      }),
    ),
  );

  return {
    main: main.menu,
    footer: footer.menu,
  };
}
