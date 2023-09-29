import { LinkType } from "../Link/LinkTypes";

export type NavBarType = {
  menuLinks: Array<LinkType>;
  listItemExtraClasses?: string;
  listContainerExtraClasses?: string;
};
