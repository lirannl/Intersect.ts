type IntersectRecur<T extends [...unknown[]], Discriminant extends keyof T[number]> = T extends [infer F, ...infer R]
    ? Omit<F, Discriminant> & (
        R extends [] ? Omit<F, Discriminant> :
        IntersectRecur<R, Discriminant>
    ) : T;

/**
 * Intersect types in tuple
 * @param T Tuple of types
 * @param Discriminant Optional discriminant properties - properties that should be omitted from intersection
 */
export type Intersect<T extends [unknown, ...unknown[]], Discriminant extends keyof T[number] = never> =
    IntersectRecur<T, Discriminant>;

/**
 * Create a union of types in tuple, where non-common properties are accessible as optionals
 * @param T Tuple of types
 * @param Discriminant Optional discriminant properties - properties that should be omitted from intersection (instead the final type will be a union)
 */
export type PartialIntersection<T extends [unknown, ...unknown[]],
    Discriminant extends keyof T[number] = never> = Partial<Intersect<T, Discriminant>> & T[number];