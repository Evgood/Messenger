import { Props } from '../../types';

export const isEmpty = (obj: Props) => {
    if (Object.keys(obj).length == 0) {
        return true;
    }

    return false;
}