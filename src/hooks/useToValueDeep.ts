import { toValue, type MaybeRefOrGetter, type Ref } from 'vue'

export type ToValueDeep<T> = T extends Ref<infer V>
  ? ToValueDeep<V>
  : T extends Array<infer U>
  ? Array<ToValueDeep<U>>
  : T extends object
  ? {
      [K in keyof T]: ToValueDeep<T[K]>
    }
  : T

/**
 * @description: 递归将ref转换为value
 * @param {MaybeRefOrGetter<T>} value
 * @return {ToValueDeep<T>}
 */
export function useToValueDeep<T>(value: MaybeRefOrGetter<T>): ToValueDeep<T> {
  const _val = toValue(value)
  if (isRef(_val)) {
    return useToValueDeep<T>(_val)
  } else if (Array.isArray(_val)) {
    return _val.map((v) => useToValueDeep(v)) as ToValueDeep<T>
  } else if (typeof _val === 'object' && _val !== null) {
    return Object.fromEntries(Object.entries(_val).map(([k, v]) => [k, useToValueDeep(v)])) as ToValueDeep<T>
  }

  return _val as ToValueDeep<T>
}
