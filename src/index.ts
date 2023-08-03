type SplitProps<T, K extends (readonly (keyof T)[])[]> = [
  ...{
    [P in keyof K]: P extends `${number}` ? Pick<T, Extract<K[P], readonly (keyof T)[]>[number]> : never;
  },
  Omit<T, K[number][number]>
];

const propsplit = <T extends Record<any, any>, K extends [readonly (keyof T)[], ...(readonly (keyof T)[])[]]>(
  props: T,
  ...keys: K
): SplitProps<T, K> => {
  let otherObject: Record<string, any> = {};
  let objects: Record<string, any>[] = keys.map(() => ({}));
  let prop: Extract<keyof T, string>;
  let blocked: boolean;
  let objectIndex: number;
  for (prop in props) {
    let value = props[prop];
    blocked = false;
    objectIndex = 0;
    for (let key of keys) {
      if (key.includes(prop)) (blocked = true), (objects[objectIndex][prop] = value);
      ++objectIndex;
    }
    if (!blocked) otherObject[prop] = value;
  }

  return [...objects, otherObject] as any;
};

export default propsplit;
