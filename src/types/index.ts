import Block from "../utils/Block";

export type Props = Record<string, any>;
export type Children = Record<string, Block>;
export type Events = Record<string, string>;

export type Listeners = Record<string, Function[]>;
export type InnerChildren = Record<string, Block>[];

