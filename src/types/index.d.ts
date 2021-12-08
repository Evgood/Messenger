import Block from "../utils/Block";

declare module "*.hbs";

type Props = Record<string, any>;
type Children = Record<string, Block>;
type Events = Record<string, string>;

type Listeners = Record<string, Function[]>;
type InnerChildren = Record<string, Block>[];

