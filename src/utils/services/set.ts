import { Props } from 'types';
import merge from './merge';

const set = (object: Props, path: string, value: any) => {
    const result = path.split('.').reduceRight((acc, key) => ({
        [key]: acc,
    }), value as any);
    
    return merge(object, result);
}

export default set;
