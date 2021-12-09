import Block from '../utils/Block';

export type Props = Record<string, any>;
export type Children = Record<string, Block>;
export type Events = Record<string, string>;

export type Listeners = Record<string, Function[]>;
export type InnerChildren = Record<string, Block>[];

export type Options = {
    timeout?: number
    method: string
    headers?: Record<string, string>
    data?: Record<string, any>
};

export type Verify = {
    verify: boolean
    message: string
};
export type ValidationFields = Record<string, {
    pattern: RegExp,
    error: string,
    sucsess: string
}>;

export type FormData = Record<string, string>;
