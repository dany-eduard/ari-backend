
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Congregation
 * 
 */
export type Congregation = $Result.DefaultSelection<Prisma.$CongregationPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model Person
 * 
 */
export type Person = $Result.DefaultSelection<Prisma.$PersonPayload>
/**
 * Model PublisherReport
 * 
 */
export type PublisherReport = $Result.DefaultSelection<Prisma.$PublisherReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Sex: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Sex = (typeof Sex)[keyof typeof Sex]

}

export type Sex = $Enums.Sex

export const Sex: typeof $Enums.Sex

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.congregation`: Exposes CRUD operations for the **Congregation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Congregations
    * const congregations = await prisma.congregation.findMany()
    * ```
    */
  get congregation(): Prisma.CongregationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.publisherReport`: Exposes CRUD operations for the **PublisherReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PublisherReports
    * const publisherReports = await prisma.publisherReport.findMany()
    * ```
    */
  get publisherReport(): Prisma.PublisherReportDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Congregation: 'Congregation',
    Team: 'Team',
    Person: 'Person',
    PublisherReport: 'PublisherReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "congregation" | "team" | "person" | "publisherReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Congregation: {
        payload: Prisma.$CongregationPayload<ExtArgs>
        fields: Prisma.CongregationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CongregationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CongregationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          findFirst: {
            args: Prisma.CongregationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CongregationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          findMany: {
            args: Prisma.CongregationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>[]
          }
          create: {
            args: Prisma.CongregationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          createMany: {
            args: Prisma.CongregationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CongregationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>[]
          }
          delete: {
            args: Prisma.CongregationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          update: {
            args: Prisma.CongregationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          deleteMany: {
            args: Prisma.CongregationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CongregationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CongregationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>[]
          }
          upsert: {
            args: Prisma.CongregationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CongregationPayload>
          }
          aggregate: {
            args: Prisma.CongregationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCongregation>
          }
          groupBy: {
            args: Prisma.CongregationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CongregationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CongregationCountArgs<ExtArgs>
            result: $Utils.Optional<CongregationCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      Person: {
        payload: Prisma.$PersonPayload<ExtArgs>
        fields: Prisma.PersonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findFirst: {
            args: Prisma.PersonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          findMany: {
            args: Prisma.PersonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          create: {
            args: Prisma.PersonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          createMany: {
            args: Prisma.PersonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          delete: {
            args: Prisma.PersonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          update: {
            args: Prisma.PersonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          deleteMany: {
            args: Prisma.PersonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>[]
          }
          upsert: {
            args: Prisma.PersonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonPayload>
          }
          aggregate: {
            args: Prisma.PersonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerson>
          }
          groupBy: {
            args: Prisma.PersonGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonCountArgs<ExtArgs>
            result: $Utils.Optional<PersonCountAggregateOutputType> | number
          }
        }
      }
      PublisherReport: {
        payload: Prisma.$PublisherReportPayload<ExtArgs>
        fields: Prisma.PublisherReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PublisherReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PublisherReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          findFirst: {
            args: Prisma.PublisherReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PublisherReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          findMany: {
            args: Prisma.PublisherReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>[]
          }
          create: {
            args: Prisma.PublisherReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          createMany: {
            args: Prisma.PublisherReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PublisherReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>[]
          }
          delete: {
            args: Prisma.PublisherReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          update: {
            args: Prisma.PublisherReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          deleteMany: {
            args: Prisma.PublisherReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PublisherReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PublisherReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>[]
          }
          upsert: {
            args: Prisma.PublisherReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PublisherReportPayload>
          }
          aggregate: {
            args: Prisma.PublisherReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePublisherReport>
          }
          groupBy: {
            args: Prisma.PublisherReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<PublisherReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.PublisherReportCountArgs<ExtArgs>
            result: $Utils.Optional<PublisherReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    congregation?: CongregationOmit
    team?: TeamOmit
    person?: PersonOmit
    publisherReport?: PublisherReportOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CongregationCountOutputType
   */

  export type CongregationCountOutputType = {
    users: number
    teams: number
    people: number
  }

  export type CongregationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CongregationCountOutputTypeCountUsersArgs
    teams?: boolean | CongregationCountOutputTypeCountTeamsArgs
    people?: boolean | CongregationCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * CongregationCountOutputType without action
   */
  export type CongregationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CongregationCountOutputType
     */
    select?: CongregationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CongregationCountOutputType without action
   */
  export type CongregationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CongregationCountOutputType without action
   */
  export type CongregationCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * CongregationCountOutputType without action
   */
  export type CongregationCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    people: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    people?: boolean | TeamCountOutputTypeCountPeopleArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPeopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
  }


  /**
   * Count Type PersonCountOutputType
   */

  export type PersonCountOutputType = {
    reports: number
  }

  export type PersonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | PersonCountOutputTypeCountReportsArgs
  }

  // Custom InputTypes
  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherReportWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    congregation_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    congregation_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    congregation_id: number
    email: number
    password: number
    first_name: number
    last_name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    congregation_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    congregation_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    congregation_id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    congregation_id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    congregation_id?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    congregation_id: number
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    congregation_id?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "congregation_id" | "email" | "password" | "first_name" | "last_name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | User$congregationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      congregation: Prisma.$CongregationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      congregation_id: number
      email: string
      password: string
      first_name: string
      last_name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    congregation<T extends User$congregationArgs<ExtArgs> = {}>(args?: Subset<T, User$congregationArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly congregation_id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.congregation
   */
  export type User$congregationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    where?: CongregationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Congregation
   */

  export type AggregateCongregation = {
    _count: CongregationCountAggregateOutputType | null
    _avg: CongregationAvgAggregateOutputType | null
    _sum: CongregationSumAggregateOutputType | null
    _min: CongregationMinAggregateOutputType | null
    _max: CongregationMaxAggregateOutputType | null
  }

  export type CongregationAvgAggregateOutputType = {
    id: number | null
  }

  export type CongregationSumAggregateOutputType = {
    id: number | null
  }

  export type CongregationMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CongregationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CongregationCountAggregateOutputType = {
    id: number
    name: number
    code: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CongregationAvgAggregateInputType = {
    id?: true
  }

  export type CongregationSumAggregateInputType = {
    id?: true
  }

  export type CongregationMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CongregationMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CongregationCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CongregationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Congregation to aggregate.
     */
    where?: CongregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregations to fetch.
     */
    orderBy?: CongregationOrderByWithRelationInput | CongregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CongregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Congregations
    **/
    _count?: true | CongregationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CongregationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CongregationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CongregationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CongregationMaxAggregateInputType
  }

  export type GetCongregationAggregateType<T extends CongregationAggregateArgs> = {
        [P in keyof T & keyof AggregateCongregation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCongregation[P]>
      : GetScalarType<T[P], AggregateCongregation[P]>
  }




  export type CongregationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CongregationWhereInput
    orderBy?: CongregationOrderByWithAggregationInput | CongregationOrderByWithAggregationInput[]
    by: CongregationScalarFieldEnum[] | CongregationScalarFieldEnum
    having?: CongregationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CongregationCountAggregateInputType | true
    _avg?: CongregationAvgAggregateInputType
    _sum?: CongregationSumAggregateInputType
    _min?: CongregationMinAggregateInputType
    _max?: CongregationMaxAggregateInputType
  }

  export type CongregationGroupByOutputType = {
    id: number
    name: string
    code: string | null
    createdAt: Date
    updatedAt: Date
    _count: CongregationCountAggregateOutputType | null
    _avg: CongregationAvgAggregateOutputType | null
    _sum: CongregationSumAggregateOutputType | null
    _min: CongregationMinAggregateOutputType | null
    _max: CongregationMaxAggregateOutputType | null
  }

  type GetCongregationGroupByPayload<T extends CongregationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CongregationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CongregationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CongregationGroupByOutputType[P]>
            : GetScalarType<T[P], CongregationGroupByOutputType[P]>
        }
      >
    >


  export type CongregationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Congregation$usersArgs<ExtArgs>
    teams?: boolean | Congregation$teamsArgs<ExtArgs>
    people?: boolean | Congregation$peopleArgs<ExtArgs>
    _count?: boolean | CongregationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["congregation"]>

  export type CongregationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["congregation"]>

  export type CongregationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["congregation"]>

  export type CongregationSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CongregationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "createdAt" | "updatedAt", ExtArgs["result"]["congregation"]>
  export type CongregationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Congregation$usersArgs<ExtArgs>
    teams?: boolean | Congregation$teamsArgs<ExtArgs>
    people?: boolean | Congregation$peopleArgs<ExtArgs>
    _count?: boolean | CongregationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CongregationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CongregationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CongregationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Congregation"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      teams: Prisma.$TeamPayload<ExtArgs>[]
      people: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["congregation"]>
    composites: {}
  }

  type CongregationGetPayload<S extends boolean | null | undefined | CongregationDefaultArgs> = $Result.GetResult<Prisma.$CongregationPayload, S>

  type CongregationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CongregationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CongregationCountAggregateInputType | true
    }

  export interface CongregationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Congregation'], meta: { name: 'Congregation' } }
    /**
     * Find zero or one Congregation that matches the filter.
     * @param {CongregationFindUniqueArgs} args - Arguments to find a Congregation
     * @example
     * // Get one Congregation
     * const congregation = await prisma.congregation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CongregationFindUniqueArgs>(args: SelectSubset<T, CongregationFindUniqueArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Congregation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CongregationFindUniqueOrThrowArgs} args - Arguments to find a Congregation
     * @example
     * // Get one Congregation
     * const congregation = await prisma.congregation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CongregationFindUniqueOrThrowArgs>(args: SelectSubset<T, CongregationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Congregation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationFindFirstArgs} args - Arguments to find a Congregation
     * @example
     * // Get one Congregation
     * const congregation = await prisma.congregation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CongregationFindFirstArgs>(args?: SelectSubset<T, CongregationFindFirstArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Congregation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationFindFirstOrThrowArgs} args - Arguments to find a Congregation
     * @example
     * // Get one Congregation
     * const congregation = await prisma.congregation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CongregationFindFirstOrThrowArgs>(args?: SelectSubset<T, CongregationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Congregations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Congregations
     * const congregations = await prisma.congregation.findMany()
     * 
     * // Get first 10 Congregations
     * const congregations = await prisma.congregation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const congregationWithIdOnly = await prisma.congregation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CongregationFindManyArgs>(args?: SelectSubset<T, CongregationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Congregation.
     * @param {CongregationCreateArgs} args - Arguments to create a Congregation.
     * @example
     * // Create one Congregation
     * const Congregation = await prisma.congregation.create({
     *   data: {
     *     // ... data to create a Congregation
     *   }
     * })
     * 
     */
    create<T extends CongregationCreateArgs>(args: SelectSubset<T, CongregationCreateArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Congregations.
     * @param {CongregationCreateManyArgs} args - Arguments to create many Congregations.
     * @example
     * // Create many Congregations
     * const congregation = await prisma.congregation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CongregationCreateManyArgs>(args?: SelectSubset<T, CongregationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Congregations and returns the data saved in the database.
     * @param {CongregationCreateManyAndReturnArgs} args - Arguments to create many Congregations.
     * @example
     * // Create many Congregations
     * const congregation = await prisma.congregation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Congregations and only return the `id`
     * const congregationWithIdOnly = await prisma.congregation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CongregationCreateManyAndReturnArgs>(args?: SelectSubset<T, CongregationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Congregation.
     * @param {CongregationDeleteArgs} args - Arguments to delete one Congregation.
     * @example
     * // Delete one Congregation
     * const Congregation = await prisma.congregation.delete({
     *   where: {
     *     // ... filter to delete one Congregation
     *   }
     * })
     * 
     */
    delete<T extends CongregationDeleteArgs>(args: SelectSubset<T, CongregationDeleteArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Congregation.
     * @param {CongregationUpdateArgs} args - Arguments to update one Congregation.
     * @example
     * // Update one Congregation
     * const congregation = await prisma.congregation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CongregationUpdateArgs>(args: SelectSubset<T, CongregationUpdateArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Congregations.
     * @param {CongregationDeleteManyArgs} args - Arguments to filter Congregations to delete.
     * @example
     * // Delete a few Congregations
     * const { count } = await prisma.congregation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CongregationDeleteManyArgs>(args?: SelectSubset<T, CongregationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Congregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Congregations
     * const congregation = await prisma.congregation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CongregationUpdateManyArgs>(args: SelectSubset<T, CongregationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Congregations and returns the data updated in the database.
     * @param {CongregationUpdateManyAndReturnArgs} args - Arguments to update many Congregations.
     * @example
     * // Update many Congregations
     * const congregation = await prisma.congregation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Congregations and only return the `id`
     * const congregationWithIdOnly = await prisma.congregation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CongregationUpdateManyAndReturnArgs>(args: SelectSubset<T, CongregationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Congregation.
     * @param {CongregationUpsertArgs} args - Arguments to update or create a Congregation.
     * @example
     * // Update or create a Congregation
     * const congregation = await prisma.congregation.upsert({
     *   create: {
     *     // ... data to create a Congregation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Congregation we want to update
     *   }
     * })
     */
    upsert<T extends CongregationUpsertArgs>(args: SelectSubset<T, CongregationUpsertArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Congregations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationCountArgs} args - Arguments to filter Congregations to count.
     * @example
     * // Count the number of Congregations
     * const count = await prisma.congregation.count({
     *   where: {
     *     // ... the filter for the Congregations we want to count
     *   }
     * })
    **/
    count<T extends CongregationCountArgs>(
      args?: Subset<T, CongregationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CongregationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Congregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CongregationAggregateArgs>(args: Subset<T, CongregationAggregateArgs>): Prisma.PrismaPromise<GetCongregationAggregateType<T>>

    /**
     * Group by Congregation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CongregationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CongregationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CongregationGroupByArgs['orderBy'] }
        : { orderBy?: CongregationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CongregationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCongregationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Congregation model
   */
  readonly fields: CongregationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Congregation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CongregationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Congregation$usersArgs<ExtArgs> = {}>(args?: Subset<T, Congregation$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teams<T extends Congregation$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Congregation$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    people<T extends Congregation$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Congregation$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Congregation model
   */
  interface CongregationFieldRefs {
    readonly id: FieldRef<"Congregation", 'Int'>
    readonly name: FieldRef<"Congregation", 'String'>
    readonly code: FieldRef<"Congregation", 'String'>
    readonly createdAt: FieldRef<"Congregation", 'DateTime'>
    readonly updatedAt: FieldRef<"Congregation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Congregation findUnique
   */
  export type CongregationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter, which Congregation to fetch.
     */
    where: CongregationWhereUniqueInput
  }

  /**
   * Congregation findUniqueOrThrow
   */
  export type CongregationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter, which Congregation to fetch.
     */
    where: CongregationWhereUniqueInput
  }

  /**
   * Congregation findFirst
   */
  export type CongregationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter, which Congregation to fetch.
     */
    where?: CongregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregations to fetch.
     */
    orderBy?: CongregationOrderByWithRelationInput | CongregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Congregations.
     */
    cursor?: CongregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Congregations.
     */
    distinct?: CongregationScalarFieldEnum | CongregationScalarFieldEnum[]
  }

  /**
   * Congregation findFirstOrThrow
   */
  export type CongregationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter, which Congregation to fetch.
     */
    where?: CongregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregations to fetch.
     */
    orderBy?: CongregationOrderByWithRelationInput | CongregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Congregations.
     */
    cursor?: CongregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Congregations.
     */
    distinct?: CongregationScalarFieldEnum | CongregationScalarFieldEnum[]
  }

  /**
   * Congregation findMany
   */
  export type CongregationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter, which Congregations to fetch.
     */
    where?: CongregationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Congregations to fetch.
     */
    orderBy?: CongregationOrderByWithRelationInput | CongregationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Congregations.
     */
    cursor?: CongregationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Congregations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Congregations.
     */
    skip?: number
    distinct?: CongregationScalarFieldEnum | CongregationScalarFieldEnum[]
  }

  /**
   * Congregation create
   */
  export type CongregationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * The data needed to create a Congregation.
     */
    data: XOR<CongregationCreateInput, CongregationUncheckedCreateInput>
  }

  /**
   * Congregation createMany
   */
  export type CongregationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Congregations.
     */
    data: CongregationCreateManyInput | CongregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Congregation createManyAndReturn
   */
  export type CongregationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * The data used to create many Congregations.
     */
    data: CongregationCreateManyInput | CongregationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Congregation update
   */
  export type CongregationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * The data needed to update a Congregation.
     */
    data: XOR<CongregationUpdateInput, CongregationUncheckedUpdateInput>
    /**
     * Choose, which Congregation to update.
     */
    where: CongregationWhereUniqueInput
  }

  /**
   * Congregation updateMany
   */
  export type CongregationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Congregations.
     */
    data: XOR<CongregationUpdateManyMutationInput, CongregationUncheckedUpdateManyInput>
    /**
     * Filter which Congregations to update
     */
    where?: CongregationWhereInput
    /**
     * Limit how many Congregations to update.
     */
    limit?: number
  }

  /**
   * Congregation updateManyAndReturn
   */
  export type CongregationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * The data used to update Congregations.
     */
    data: XOR<CongregationUpdateManyMutationInput, CongregationUncheckedUpdateManyInput>
    /**
     * Filter which Congregations to update
     */
    where?: CongregationWhereInput
    /**
     * Limit how many Congregations to update.
     */
    limit?: number
  }

  /**
   * Congregation upsert
   */
  export type CongregationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * The filter to search for the Congregation to update in case it exists.
     */
    where: CongregationWhereUniqueInput
    /**
     * In case the Congregation found by the `where` argument doesn't exist, create a new Congregation with this data.
     */
    create: XOR<CongregationCreateInput, CongregationUncheckedCreateInput>
    /**
     * In case the Congregation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CongregationUpdateInput, CongregationUncheckedUpdateInput>
  }

  /**
   * Congregation delete
   */
  export type CongregationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
    /**
     * Filter which Congregation to delete.
     */
    where: CongregationWhereUniqueInput
  }

  /**
   * Congregation deleteMany
   */
  export type CongregationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Congregations to delete
     */
    where?: CongregationWhereInput
    /**
     * Limit how many Congregations to delete.
     */
    limit?: number
  }

  /**
   * Congregation.users
   */
  export type Congregation$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Congregation.teams
   */
  export type Congregation$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Congregation.people
   */
  export type Congregation$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Congregation without action
   */
  export type CongregationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Congregation
     */
    select?: CongregationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Congregation
     */
    omit?: CongregationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CongregationInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    congregation_id: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    congregation_id: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    congregation_id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    congregation_id?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    congregation_id?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    congregation_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    congregation_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    congregation_id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: number
    congregation_id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    people?: boolean | Team$peopleArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    congregation_id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "congregation_id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    people?: boolean | Team$peopleArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      congregation: Prisma.$CongregationPayload<ExtArgs>
      people: Prisma.$PersonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      congregation_id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    congregation<T extends CongregationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CongregationDefaultArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    people<T extends Team$peopleArgs<ExtArgs> = {}>(args?: Subset<T, Team$peopleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'Int'>
    readonly congregation_id: FieldRef<"Team", 'Int'>
    readonly name: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.people
   */
  export type Team$peopleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    cursor?: PersonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model Person
   */

  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    team_id: number | null
  }

  export type PersonSumAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    team_id: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    team_id: number | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    baptism_date: Date | null
    sex: $Enums.Sex | null
    number_phone: string | null
    is_active: boolean | null
    is_elder: boolean | null
    is_ministerial_servant: boolean | null
    is_regular_pioneer: boolean | null
    is_special_pioneer: boolean | null
    is_field_missionary: boolean | null
    is_other_sheep: boolean | null
    is_anointed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonMaxAggregateOutputType = {
    id: number | null
    congregation_id: number | null
    team_id: number | null
    first_name: string | null
    last_name: string | null
    birth_date: Date | null
    baptism_date: Date | null
    sex: $Enums.Sex | null
    number_phone: string | null
    is_active: boolean | null
    is_elder: boolean | null
    is_ministerial_servant: boolean | null
    is_regular_pioneer: boolean | null
    is_special_pioneer: boolean | null
    is_field_missionary: boolean | null
    is_other_sheep: boolean | null
    is_anointed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    congregation_id: number
    team_id: number
    first_name: number
    last_name: number
    birth_date: number
    baptism_date: number
    sex: number
    number_phone: number
    is_active: number
    is_elder: number
    is_ministerial_servant: number
    is_regular_pioneer: number
    is_special_pioneer: number
    is_field_missionary: number
    is_other_sheep: number
    is_anointed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    id?: true
    congregation_id?: true
    team_id?: true
  }

  export type PersonSumAggregateInputType = {
    id?: true
    congregation_id?: true
    team_id?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    congregation_id?: true
    team_id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    baptism_date?: true
    sex?: true
    number_phone?: true
    is_active?: true
    is_elder?: true
    is_ministerial_servant?: true
    is_regular_pioneer?: true
    is_special_pioneer?: true
    is_field_missionary?: true
    is_other_sheep?: true
    is_anointed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    congregation_id?: true
    team_id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    baptism_date?: true
    sex?: true
    number_phone?: true
    is_active?: true
    is_elder?: true
    is_ministerial_servant?: true
    is_regular_pioneer?: true
    is_special_pioneer?: true
    is_field_missionary?: true
    is_other_sheep?: true
    is_anointed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    congregation_id?: true
    team_id?: true
    first_name?: true
    last_name?: true
    birth_date?: true
    baptism_date?: true
    sex?: true
    number_phone?: true
    is_active?: true
    is_elder?: true
    is_ministerial_servant?: true
    is_regular_pioneer?: true
    is_special_pioneer?: true
    is_field_missionary?: true
    is_other_sheep?: true
    is_anointed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PersonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonWhereInput
    orderBy?: PersonOrderByWithAggregationInput | PersonOrderByWithAggregationInput[]
    by: PersonScalarFieldEnum[] | PersonScalarFieldEnum
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }

  export type PersonGroupByOutputType = {
    id: number
    congregation_id: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date
    baptism_date: Date | null
    sex: $Enums.Sex
    number_phone: string | null
    is_active: boolean
    is_elder: boolean
    is_ministerial_servant: boolean
    is_regular_pioneer: boolean
    is_special_pioneer: boolean
    is_field_missionary: boolean
    is_other_sheep: boolean
    is_anointed: boolean
    createdAt: Date
    updatedAt: Date
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    team_id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    baptism_date?: boolean
    sex?: boolean
    number_phone?: boolean
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    reports?: boolean | Person$reportsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    team_id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    baptism_date?: boolean
    sex?: boolean
    number_phone?: boolean
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    congregation_id?: boolean
    team_id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    baptism_date?: boolean
    sex?: boolean
    number_phone?: boolean
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["person"]>

  export type PersonSelectScalar = {
    id?: boolean
    congregation_id?: boolean
    team_id?: boolean
    first_name?: boolean
    last_name?: boolean
    birth_date?: boolean
    baptism_date?: boolean
    sex?: boolean
    number_phone?: boolean
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PersonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "congregation_id" | "team_id" | "first_name" | "last_name" | "birth_date" | "baptism_date" | "sex" | "number_phone" | "is_active" | "is_elder" | "is_ministerial_servant" | "is_regular_pioneer" | "is_special_pioneer" | "is_field_missionary" | "is_other_sheep" | "is_anointed" | "createdAt" | "updatedAt", ExtArgs["result"]["person"]>
  export type PersonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    reports?: boolean | Person$reportsArgs<ExtArgs>
    _count?: boolean | PersonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type PersonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    congregation?: boolean | CongregationDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $PersonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Person"
    objects: {
      congregation: Prisma.$CongregationPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      reports: Prisma.$PublisherReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      congregation_id: number
      team_id: number
      first_name: string
      last_name: string
      birth_date: Date
      baptism_date: Date | null
      sex: $Enums.Sex
      number_phone: string | null
      is_active: boolean
      is_elder: boolean
      is_ministerial_servant: boolean
      is_regular_pioneer: boolean
      is_special_pioneer: boolean
      is_field_missionary: boolean
      is_other_sheep: boolean
      is_anointed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["person"]>
    composites: {}
  }

  type PersonGetPayload<S extends boolean | null | undefined | PersonDefaultArgs> = $Result.GetResult<Prisma.$PersonPayload, S>

  type PersonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Person'], meta: { name: 'Person' } }
    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonFindUniqueArgs>(args: SelectSubset<T, PersonFindUniqueArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Person that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonFindFirstArgs>(args?: SelectSubset<T, PersonFindFirstArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Person that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonFindManyArgs>(args?: SelectSubset<T, PersonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
     */
    create<T extends PersonCreateArgs>(args: SelectSubset<T, PersonCreateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many People.
     * @param {PersonCreateManyArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonCreateManyArgs>(args?: SelectSubset<T, PersonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many People and returns the data saved in the database.
     * @param {PersonCreateManyAndReturnArgs} args - Arguments to create many People.
     * @example
     * // Create many People
     * const person = await prisma.person.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many People and only return the `id`
     * const personWithIdOnly = await prisma.person.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
     */
    delete<T extends PersonDeleteArgs>(args: SelectSubset<T, PersonDeleteArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonUpdateArgs>(args: SelectSubset<T, PersonUpdateArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonDeleteManyArgs>(args?: SelectSubset<T, PersonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonUpdateManyArgs>(args: SelectSubset<T, PersonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People and returns the data updated in the database.
     * @param {PersonUpdateManyAndReturnArgs} args - Arguments to update many People.
     * @example
     * // Update many People
     * const person = await prisma.person.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more People and only return the `id`
     * const personWithIdOnly = await prisma.person.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
     */
    upsert<T extends PersonUpsertArgs>(args: SelectSubset<T, PersonUpsertArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Person model
   */
  readonly fields: PersonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    congregation<T extends CongregationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CongregationDefaultArgs<ExtArgs>>): Prisma__CongregationClient<$Result.GetResult<Prisma.$CongregationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reports<T extends Person$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Person$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Person model
   */
  interface PersonFieldRefs {
    readonly id: FieldRef<"Person", 'Int'>
    readonly congregation_id: FieldRef<"Person", 'Int'>
    readonly team_id: FieldRef<"Person", 'Int'>
    readonly first_name: FieldRef<"Person", 'String'>
    readonly last_name: FieldRef<"Person", 'String'>
    readonly birth_date: FieldRef<"Person", 'DateTime'>
    readonly baptism_date: FieldRef<"Person", 'DateTime'>
    readonly sex: FieldRef<"Person", 'Sex'>
    readonly number_phone: FieldRef<"Person", 'String'>
    readonly is_active: FieldRef<"Person", 'Boolean'>
    readonly is_elder: FieldRef<"Person", 'Boolean'>
    readonly is_ministerial_servant: FieldRef<"Person", 'Boolean'>
    readonly is_regular_pioneer: FieldRef<"Person", 'Boolean'>
    readonly is_special_pioneer: FieldRef<"Person", 'Boolean'>
    readonly is_field_missionary: FieldRef<"Person", 'Boolean'>
    readonly is_other_sheep: FieldRef<"Person", 'Boolean'>
    readonly is_anointed: FieldRef<"Person", 'Boolean'>
    readonly createdAt: FieldRef<"Person", 'DateTime'>
    readonly updatedAt: FieldRef<"Person", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Person findUnique
   */
  export type PersonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findFirst
   */
  export type PersonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person findMany
   */
  export type PersonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: PersonOrderByWithRelationInput | PersonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: PersonScalarFieldEnum | PersonScalarFieldEnum[]
  }

  /**
   * Person create
   */
  export type PersonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }

  /**
   * Person createMany
   */
  export type PersonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Person createManyAndReturn
   */
  export type PersonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to create many People.
     */
    data: PersonCreateManyInput | PersonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person update
   */
  export type PersonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
  }

  /**
   * Person updateManyAndReturn
   */
  export type PersonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Person upsert
   */
  export type PersonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }

  /**
   * Person delete
   */
  export type PersonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
    /**
     * Limit how many People to delete.
     */
    limit?: number
  }

  /**
   * Person.reports
   */
  export type Person$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    where?: PublisherReportWhereInput
    orderBy?: PublisherReportOrderByWithRelationInput | PublisherReportOrderByWithRelationInput[]
    cursor?: PublisherReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PublisherReportScalarFieldEnum | PublisherReportScalarFieldEnum[]
  }

  /**
   * Person without action
   */
  export type PersonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Person
     */
    omit?: PersonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonInclude<ExtArgs> | null
  }


  /**
   * Model PublisherReport
   */

  export type AggregatePublisherReport = {
    _count: PublisherReportCountAggregateOutputType | null
    _avg: PublisherReportAvgAggregateOutputType | null
    _sum: PublisherReportSumAggregateOutputType | null
    _min: PublisherReportMinAggregateOutputType | null
    _max: PublisherReportMaxAggregateOutputType | null
  }

  export type PublisherReportAvgAggregateOutputType = {
    id: number | null
    person_id: number | null
    service_year: number | null
    year: number | null
    month: number | null
    bible_courses: number | null
    hours: number | null
  }

  export type PublisherReportSumAggregateOutputType = {
    id: number | null
    person_id: number | null
    service_year: number | null
    year: number | null
    month: number | null
    bible_courses: number | null
    hours: number | null
  }

  export type PublisherReportMinAggregateOutputType = {
    id: number | null
    person_id: number | null
    service_year: number | null
    year: number | null
    month: number | null
    participated: boolean | null
    bible_courses: number | null
    is_auxiliary_pioneer: boolean | null
    hours: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublisherReportMaxAggregateOutputType = {
    id: number | null
    person_id: number | null
    service_year: number | null
    year: number | null
    month: number | null
    participated: boolean | null
    bible_courses: number | null
    is_auxiliary_pioneer: boolean | null
    hours: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PublisherReportCountAggregateOutputType = {
    id: number
    person_id: number
    service_year: number
    year: number
    month: number
    participated: number
    bible_courses: number
    is_auxiliary_pioneer: number
    hours: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PublisherReportAvgAggregateInputType = {
    id?: true
    person_id?: true
    service_year?: true
    year?: true
    month?: true
    bible_courses?: true
    hours?: true
  }

  export type PublisherReportSumAggregateInputType = {
    id?: true
    person_id?: true
    service_year?: true
    year?: true
    month?: true
    bible_courses?: true
    hours?: true
  }

  export type PublisherReportMinAggregateInputType = {
    id?: true
    person_id?: true
    service_year?: true
    year?: true
    month?: true
    participated?: true
    bible_courses?: true
    is_auxiliary_pioneer?: true
    hours?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublisherReportMaxAggregateInputType = {
    id?: true
    person_id?: true
    service_year?: true
    year?: true
    month?: true
    participated?: true
    bible_courses?: true
    is_auxiliary_pioneer?: true
    hours?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PublisherReportCountAggregateInputType = {
    id?: true
    person_id?: true
    service_year?: true
    year?: true
    month?: true
    participated?: true
    bible_courses?: true
    is_auxiliary_pioneer?: true
    hours?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PublisherReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublisherReport to aggregate.
     */
    where?: PublisherReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherReports to fetch.
     */
    orderBy?: PublisherReportOrderByWithRelationInput | PublisherReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PublisherReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PublisherReports
    **/
    _count?: true | PublisherReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PublisherReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PublisherReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PublisherReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PublisherReportMaxAggregateInputType
  }

  export type GetPublisherReportAggregateType<T extends PublisherReportAggregateArgs> = {
        [P in keyof T & keyof AggregatePublisherReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePublisherReport[P]>
      : GetScalarType<T[P], AggregatePublisherReport[P]>
  }




  export type PublisherReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PublisherReportWhereInput
    orderBy?: PublisherReportOrderByWithAggregationInput | PublisherReportOrderByWithAggregationInput[]
    by: PublisherReportScalarFieldEnum[] | PublisherReportScalarFieldEnum
    having?: PublisherReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PublisherReportCountAggregateInputType | true
    _avg?: PublisherReportAvgAggregateInputType
    _sum?: PublisherReportSumAggregateInputType
    _min?: PublisherReportMinAggregateInputType
    _max?: PublisherReportMaxAggregateInputType
  }

  export type PublisherReportGroupByOutputType = {
    id: number
    person_id: number
    service_year: number
    year: number
    month: number
    participated: boolean
    bible_courses: number
    is_auxiliary_pioneer: boolean
    hours: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PublisherReportCountAggregateOutputType | null
    _avg: PublisherReportAvgAggregateOutputType | null
    _sum: PublisherReportSumAggregateOutputType | null
    _min: PublisherReportMinAggregateOutputType | null
    _max: PublisherReportMaxAggregateOutputType | null
  }

  type GetPublisherReportGroupByPayload<T extends PublisherReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PublisherReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PublisherReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PublisherReportGroupByOutputType[P]>
            : GetScalarType<T[P], PublisherReportGroupByOutputType[P]>
        }
      >
    >


  export type PublisherReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person_id?: boolean
    service_year?: boolean
    year?: boolean
    month?: boolean
    participated?: boolean
    bible_courses?: boolean
    is_auxiliary_pioneer?: boolean
    hours?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherReport"]>

  export type PublisherReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person_id?: boolean
    service_year?: boolean
    year?: boolean
    month?: boolean
    participated?: boolean
    bible_courses?: boolean
    is_auxiliary_pioneer?: boolean
    hours?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherReport"]>

  export type PublisherReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    person_id?: boolean
    service_year?: boolean
    year?: boolean
    month?: boolean
    participated?: boolean
    bible_courses?: boolean
    is_auxiliary_pioneer?: boolean
    hours?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["publisherReport"]>

  export type PublisherReportSelectScalar = {
    id?: boolean
    person_id?: boolean
    service_year?: boolean
    year?: boolean
    month?: boolean
    participated?: boolean
    bible_courses?: boolean
    is_auxiliary_pioneer?: boolean
    hours?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PublisherReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "person_id" | "service_year" | "year" | "month" | "participated" | "bible_courses" | "is_auxiliary_pioneer" | "hours" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["publisherReport"]>
  export type PublisherReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PublisherReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }
  export type PublisherReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    person?: boolean | PersonDefaultArgs<ExtArgs>
  }

  export type $PublisherReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PublisherReport"
    objects: {
      person: Prisma.$PersonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      person_id: number
      service_year: number
      year: number
      month: number
      participated: boolean
      bible_courses: number
      is_auxiliary_pioneer: boolean
      hours: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["publisherReport"]>
    composites: {}
  }

  type PublisherReportGetPayload<S extends boolean | null | undefined | PublisherReportDefaultArgs> = $Result.GetResult<Prisma.$PublisherReportPayload, S>

  type PublisherReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PublisherReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PublisherReportCountAggregateInputType | true
    }

  export interface PublisherReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PublisherReport'], meta: { name: 'PublisherReport' } }
    /**
     * Find zero or one PublisherReport that matches the filter.
     * @param {PublisherReportFindUniqueArgs} args - Arguments to find a PublisherReport
     * @example
     * // Get one PublisherReport
     * const publisherReport = await prisma.publisherReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PublisherReportFindUniqueArgs>(args: SelectSubset<T, PublisherReportFindUniqueArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PublisherReport that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PublisherReportFindUniqueOrThrowArgs} args - Arguments to find a PublisherReport
     * @example
     * // Get one PublisherReport
     * const publisherReport = await prisma.publisherReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PublisherReportFindUniqueOrThrowArgs>(args: SelectSubset<T, PublisherReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublisherReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportFindFirstArgs} args - Arguments to find a PublisherReport
     * @example
     * // Get one PublisherReport
     * const publisherReport = await prisma.publisherReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PublisherReportFindFirstArgs>(args?: SelectSubset<T, PublisherReportFindFirstArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PublisherReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportFindFirstOrThrowArgs} args - Arguments to find a PublisherReport
     * @example
     * // Get one PublisherReport
     * const publisherReport = await prisma.publisherReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PublisherReportFindFirstOrThrowArgs>(args?: SelectSubset<T, PublisherReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PublisherReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PublisherReports
     * const publisherReports = await prisma.publisherReport.findMany()
     * 
     * // Get first 10 PublisherReports
     * const publisherReports = await prisma.publisherReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const publisherReportWithIdOnly = await prisma.publisherReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PublisherReportFindManyArgs>(args?: SelectSubset<T, PublisherReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PublisherReport.
     * @param {PublisherReportCreateArgs} args - Arguments to create a PublisherReport.
     * @example
     * // Create one PublisherReport
     * const PublisherReport = await prisma.publisherReport.create({
     *   data: {
     *     // ... data to create a PublisherReport
     *   }
     * })
     * 
     */
    create<T extends PublisherReportCreateArgs>(args: SelectSubset<T, PublisherReportCreateArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PublisherReports.
     * @param {PublisherReportCreateManyArgs} args - Arguments to create many PublisherReports.
     * @example
     * // Create many PublisherReports
     * const publisherReport = await prisma.publisherReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PublisherReportCreateManyArgs>(args?: SelectSubset<T, PublisherReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PublisherReports and returns the data saved in the database.
     * @param {PublisherReportCreateManyAndReturnArgs} args - Arguments to create many PublisherReports.
     * @example
     * // Create many PublisherReports
     * const publisherReport = await prisma.publisherReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PublisherReports and only return the `id`
     * const publisherReportWithIdOnly = await prisma.publisherReport.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PublisherReportCreateManyAndReturnArgs>(args?: SelectSubset<T, PublisherReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PublisherReport.
     * @param {PublisherReportDeleteArgs} args - Arguments to delete one PublisherReport.
     * @example
     * // Delete one PublisherReport
     * const PublisherReport = await prisma.publisherReport.delete({
     *   where: {
     *     // ... filter to delete one PublisherReport
     *   }
     * })
     * 
     */
    delete<T extends PublisherReportDeleteArgs>(args: SelectSubset<T, PublisherReportDeleteArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PublisherReport.
     * @param {PublisherReportUpdateArgs} args - Arguments to update one PublisherReport.
     * @example
     * // Update one PublisherReport
     * const publisherReport = await prisma.publisherReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PublisherReportUpdateArgs>(args: SelectSubset<T, PublisherReportUpdateArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PublisherReports.
     * @param {PublisherReportDeleteManyArgs} args - Arguments to filter PublisherReports to delete.
     * @example
     * // Delete a few PublisherReports
     * const { count } = await prisma.publisherReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PublisherReportDeleteManyArgs>(args?: SelectSubset<T, PublisherReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublisherReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PublisherReports
     * const publisherReport = await prisma.publisherReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PublisherReportUpdateManyArgs>(args: SelectSubset<T, PublisherReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PublisherReports and returns the data updated in the database.
     * @param {PublisherReportUpdateManyAndReturnArgs} args - Arguments to update many PublisherReports.
     * @example
     * // Update many PublisherReports
     * const publisherReport = await prisma.publisherReport.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PublisherReports and only return the `id`
     * const publisherReportWithIdOnly = await prisma.publisherReport.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PublisherReportUpdateManyAndReturnArgs>(args: SelectSubset<T, PublisherReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PublisherReport.
     * @param {PublisherReportUpsertArgs} args - Arguments to update or create a PublisherReport.
     * @example
     * // Update or create a PublisherReport
     * const publisherReport = await prisma.publisherReport.upsert({
     *   create: {
     *     // ... data to create a PublisherReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PublisherReport we want to update
     *   }
     * })
     */
    upsert<T extends PublisherReportUpsertArgs>(args: SelectSubset<T, PublisherReportUpsertArgs<ExtArgs>>): Prisma__PublisherReportClient<$Result.GetResult<Prisma.$PublisherReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PublisherReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportCountArgs} args - Arguments to filter PublisherReports to count.
     * @example
     * // Count the number of PublisherReports
     * const count = await prisma.publisherReport.count({
     *   where: {
     *     // ... the filter for the PublisherReports we want to count
     *   }
     * })
    **/
    count<T extends PublisherReportCountArgs>(
      args?: Subset<T, PublisherReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PublisherReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PublisherReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PublisherReportAggregateArgs>(args: Subset<T, PublisherReportAggregateArgs>): Prisma.PrismaPromise<GetPublisherReportAggregateType<T>>

    /**
     * Group by PublisherReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PublisherReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PublisherReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PublisherReportGroupByArgs['orderBy'] }
        : { orderBy?: PublisherReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PublisherReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPublisherReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PublisherReport model
   */
  readonly fields: PublisherReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PublisherReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PublisherReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    person<T extends PersonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonDefaultArgs<ExtArgs>>): Prisma__PersonClient<$Result.GetResult<Prisma.$PersonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PublisherReport model
   */
  interface PublisherReportFieldRefs {
    readonly id: FieldRef<"PublisherReport", 'Int'>
    readonly person_id: FieldRef<"PublisherReport", 'Int'>
    readonly service_year: FieldRef<"PublisherReport", 'Int'>
    readonly year: FieldRef<"PublisherReport", 'Int'>
    readonly month: FieldRef<"PublisherReport", 'Int'>
    readonly participated: FieldRef<"PublisherReport", 'Boolean'>
    readonly bible_courses: FieldRef<"PublisherReport", 'Int'>
    readonly is_auxiliary_pioneer: FieldRef<"PublisherReport", 'Boolean'>
    readonly hours: FieldRef<"PublisherReport", 'Int'>
    readonly notes: FieldRef<"PublisherReport", 'String'>
    readonly createdAt: FieldRef<"PublisherReport", 'DateTime'>
    readonly updatedAt: FieldRef<"PublisherReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PublisherReport findUnique
   */
  export type PublisherReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter, which PublisherReport to fetch.
     */
    where: PublisherReportWhereUniqueInput
  }

  /**
   * PublisherReport findUniqueOrThrow
   */
  export type PublisherReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter, which PublisherReport to fetch.
     */
    where: PublisherReportWhereUniqueInput
  }

  /**
   * PublisherReport findFirst
   */
  export type PublisherReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter, which PublisherReport to fetch.
     */
    where?: PublisherReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherReports to fetch.
     */
    orderBy?: PublisherReportOrderByWithRelationInput | PublisherReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublisherReports.
     */
    cursor?: PublisherReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublisherReports.
     */
    distinct?: PublisherReportScalarFieldEnum | PublisherReportScalarFieldEnum[]
  }

  /**
   * PublisherReport findFirstOrThrow
   */
  export type PublisherReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter, which PublisherReport to fetch.
     */
    where?: PublisherReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherReports to fetch.
     */
    orderBy?: PublisherReportOrderByWithRelationInput | PublisherReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PublisherReports.
     */
    cursor?: PublisherReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PublisherReports.
     */
    distinct?: PublisherReportScalarFieldEnum | PublisherReportScalarFieldEnum[]
  }

  /**
   * PublisherReport findMany
   */
  export type PublisherReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter, which PublisherReports to fetch.
     */
    where?: PublisherReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PublisherReports to fetch.
     */
    orderBy?: PublisherReportOrderByWithRelationInput | PublisherReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PublisherReports.
     */
    cursor?: PublisherReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PublisherReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PublisherReports.
     */
    skip?: number
    distinct?: PublisherReportScalarFieldEnum | PublisherReportScalarFieldEnum[]
  }

  /**
   * PublisherReport create
   */
  export type PublisherReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * The data needed to create a PublisherReport.
     */
    data: XOR<PublisherReportCreateInput, PublisherReportUncheckedCreateInput>
  }

  /**
   * PublisherReport createMany
   */
  export type PublisherReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PublisherReports.
     */
    data: PublisherReportCreateManyInput | PublisherReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PublisherReport createManyAndReturn
   */
  export type PublisherReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * The data used to create many PublisherReports.
     */
    data: PublisherReportCreateManyInput | PublisherReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublisherReport update
   */
  export type PublisherReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * The data needed to update a PublisherReport.
     */
    data: XOR<PublisherReportUpdateInput, PublisherReportUncheckedUpdateInput>
    /**
     * Choose, which PublisherReport to update.
     */
    where: PublisherReportWhereUniqueInput
  }

  /**
   * PublisherReport updateMany
   */
  export type PublisherReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PublisherReports.
     */
    data: XOR<PublisherReportUpdateManyMutationInput, PublisherReportUncheckedUpdateManyInput>
    /**
     * Filter which PublisherReports to update
     */
    where?: PublisherReportWhereInput
    /**
     * Limit how many PublisherReports to update.
     */
    limit?: number
  }

  /**
   * PublisherReport updateManyAndReturn
   */
  export type PublisherReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * The data used to update PublisherReports.
     */
    data: XOR<PublisherReportUpdateManyMutationInput, PublisherReportUncheckedUpdateManyInput>
    /**
     * Filter which PublisherReports to update
     */
    where?: PublisherReportWhereInput
    /**
     * Limit how many PublisherReports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PublisherReport upsert
   */
  export type PublisherReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * The filter to search for the PublisherReport to update in case it exists.
     */
    where: PublisherReportWhereUniqueInput
    /**
     * In case the PublisherReport found by the `where` argument doesn't exist, create a new PublisherReport with this data.
     */
    create: XOR<PublisherReportCreateInput, PublisherReportUncheckedCreateInput>
    /**
     * In case the PublisherReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PublisherReportUpdateInput, PublisherReportUncheckedUpdateInput>
  }

  /**
   * PublisherReport delete
   */
  export type PublisherReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
    /**
     * Filter which PublisherReport to delete.
     */
    where: PublisherReportWhereUniqueInput
  }

  /**
   * PublisherReport deleteMany
   */
  export type PublisherReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PublisherReports to delete
     */
    where?: PublisherReportWhereInput
    /**
     * Limit how many PublisherReports to delete.
     */
    limit?: number
  }

  /**
   * PublisherReport without action
   */
  export type PublisherReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PublisherReport
     */
    select?: PublisherReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PublisherReport
     */
    omit?: PublisherReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PublisherReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    congregation_id: 'congregation_id',
    email: 'email',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CongregationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CongregationScalarFieldEnum = (typeof CongregationScalarFieldEnum)[keyof typeof CongregationScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    congregation_id: 'congregation_id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    congregation_id: 'congregation_id',
    team_id: 'team_id',
    first_name: 'first_name',
    last_name: 'last_name',
    birth_date: 'birth_date',
    baptism_date: 'baptism_date',
    sex: 'sex',
    number_phone: 'number_phone',
    is_active: 'is_active',
    is_elder: 'is_elder',
    is_ministerial_servant: 'is_ministerial_servant',
    is_regular_pioneer: 'is_regular_pioneer',
    is_special_pioneer: 'is_special_pioneer',
    is_field_missionary: 'is_field_missionary',
    is_other_sheep: 'is_other_sheep',
    is_anointed: 'is_anointed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PublisherReportScalarFieldEnum: {
    id: 'id',
    person_id: 'person_id',
    service_year: 'service_year',
    year: 'year',
    month: 'month',
    participated: 'participated',
    bible_courses: 'bible_courses',
    is_auxiliary_pioneer: 'is_auxiliary_pioneer',
    hours: 'hours',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PublisherReportScalarFieldEnum = (typeof PublisherReportScalarFieldEnum)[keyof typeof PublisherReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Sex'
   */
  export type EnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex'>
    


  /**
   * Reference to a field of type 'Sex[]'
   */
  export type ListEnumSexFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Sex[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    congregation_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    congregation?: XOR<CongregationNullableScalarRelationFilter, CongregationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    congregation?: CongregationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    congregation_id?: IntFilter<"User"> | number
    password?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    congregation?: XOR<CongregationNullableScalarRelationFilter, CongregationWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    congregation_id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CongregationWhereInput = {
    AND?: CongregationWhereInput | CongregationWhereInput[]
    OR?: CongregationWhereInput[]
    NOT?: CongregationWhereInput | CongregationWhereInput[]
    id?: IntFilter<"Congregation"> | number
    name?: StringFilter<"Congregation"> | string
    code?: StringNullableFilter<"Congregation"> | string | null
    createdAt?: DateTimeFilter<"Congregation"> | Date | string
    updatedAt?: DateTimeFilter<"Congregation"> | Date | string
    users?: UserListRelationFilter
    teams?: TeamListRelationFilter
    people?: PersonListRelationFilter
  }

  export type CongregationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    teams?: TeamOrderByRelationAggregateInput
    people?: PersonOrderByRelationAggregateInput
  }

  export type CongregationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_code?: CongregationNameCodeCompoundUniqueInput
    AND?: CongregationWhereInput | CongregationWhereInput[]
    OR?: CongregationWhereInput[]
    NOT?: CongregationWhereInput | CongregationWhereInput[]
    name?: StringFilter<"Congregation"> | string
    code?: StringNullableFilter<"Congregation"> | string | null
    createdAt?: DateTimeFilter<"Congregation"> | Date | string
    updatedAt?: DateTimeFilter<"Congregation"> | Date | string
    users?: UserListRelationFilter
    teams?: TeamListRelationFilter
    people?: PersonListRelationFilter
  }, "id" | "name_code">

  export type CongregationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CongregationCountOrderByAggregateInput
    _avg?: CongregationAvgOrderByAggregateInput
    _max?: CongregationMaxOrderByAggregateInput
    _min?: CongregationMinOrderByAggregateInput
    _sum?: CongregationSumOrderByAggregateInput
  }

  export type CongregationScalarWhereWithAggregatesInput = {
    AND?: CongregationScalarWhereWithAggregatesInput | CongregationScalarWhereWithAggregatesInput[]
    OR?: CongregationScalarWhereWithAggregatesInput[]
    NOT?: CongregationScalarWhereWithAggregatesInput | CongregationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Congregation"> | number
    name?: StringWithAggregatesFilter<"Congregation"> | string
    code?: StringNullableWithAggregatesFilter<"Congregation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Congregation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Congregation"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: IntFilter<"Team"> | number
    congregation_id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    congregation?: XOR<CongregationScalarRelationFilter, CongregationWhereInput>
    people?: PersonListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    congregation?: CongregationOrderByWithRelationInput
    people?: PersonOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name_congregation_id?: TeamNameCongregation_idCompoundUniqueInput
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    congregation_id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    congregation?: XOR<CongregationScalarRelationFilter, CongregationWhereInput>
    people?: PersonListRelationFilter
  }, "id" | "name_congregation_id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Team"> | number
    congregation_id?: IntWithAggregatesFilter<"Team"> | number
    name?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type PersonWhereInput = {
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    id?: IntFilter<"Person"> | number
    congregation_id?: IntFilter<"Person"> | number
    team_id?: IntFilter<"Person"> | number
    first_name?: StringFilter<"Person"> | string
    last_name?: StringFilter<"Person"> | string
    birth_date?: DateTimeFilter<"Person"> | Date | string
    baptism_date?: DateTimeNullableFilter<"Person"> | Date | string | null
    sex?: EnumSexFilter<"Person"> | $Enums.Sex
    number_phone?: StringNullableFilter<"Person"> | string | null
    is_active?: BoolFilter<"Person"> | boolean
    is_elder?: BoolFilter<"Person"> | boolean
    is_ministerial_servant?: BoolFilter<"Person"> | boolean
    is_regular_pioneer?: BoolFilter<"Person"> | boolean
    is_special_pioneer?: BoolFilter<"Person"> | boolean
    is_field_missionary?: BoolFilter<"Person"> | boolean
    is_other_sheep?: BoolFilter<"Person"> | boolean
    is_anointed?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    congregation?: XOR<CongregationScalarRelationFilter, CongregationWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    reports?: PublisherReportListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    baptism_date?: SortOrderInput | SortOrder
    sex?: SortOrder
    number_phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_elder?: SortOrder
    is_ministerial_servant?: SortOrder
    is_regular_pioneer?: SortOrder
    is_special_pioneer?: SortOrder
    is_field_missionary?: SortOrder
    is_other_sheep?: SortOrder
    is_anointed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    congregation?: CongregationOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    reports?: PublisherReportOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    congregation_id_first_name_last_name_birth_date_sex?: PersonCongregation_idFirst_nameLast_nameBirth_dateSexCompoundUniqueInput
    AND?: PersonWhereInput | PersonWhereInput[]
    OR?: PersonWhereInput[]
    NOT?: PersonWhereInput | PersonWhereInput[]
    congregation_id?: IntFilter<"Person"> | number
    team_id?: IntFilter<"Person"> | number
    first_name?: StringFilter<"Person"> | string
    last_name?: StringFilter<"Person"> | string
    birth_date?: DateTimeFilter<"Person"> | Date | string
    baptism_date?: DateTimeNullableFilter<"Person"> | Date | string | null
    sex?: EnumSexFilter<"Person"> | $Enums.Sex
    number_phone?: StringNullableFilter<"Person"> | string | null
    is_active?: BoolFilter<"Person"> | boolean
    is_elder?: BoolFilter<"Person"> | boolean
    is_ministerial_servant?: BoolFilter<"Person"> | boolean
    is_regular_pioneer?: BoolFilter<"Person"> | boolean
    is_special_pioneer?: BoolFilter<"Person"> | boolean
    is_field_missionary?: BoolFilter<"Person"> | boolean
    is_other_sheep?: BoolFilter<"Person"> | boolean
    is_anointed?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
    congregation?: XOR<CongregationScalarRelationFilter, CongregationWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    reports?: PublisherReportListRelationFilter
  }, "id" | "congregation_id_first_name_last_name_birth_date_sex">

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    baptism_date?: SortOrderInput | SortOrder
    sex?: SortOrder
    number_phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    is_elder?: SortOrder
    is_ministerial_servant?: SortOrder
    is_regular_pioneer?: SortOrder
    is_special_pioneer?: SortOrder
    is_field_missionary?: SortOrder
    is_other_sheep?: SortOrder
    is_anointed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    OR?: PersonScalarWhereWithAggregatesInput[]
    NOT?: PersonScalarWhereWithAggregatesInput | PersonScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Person"> | number
    congregation_id?: IntWithAggregatesFilter<"Person"> | number
    team_id?: IntWithAggregatesFilter<"Person"> | number
    first_name?: StringWithAggregatesFilter<"Person"> | string
    last_name?: StringWithAggregatesFilter<"Person"> | string
    birth_date?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    baptism_date?: DateTimeNullableWithAggregatesFilter<"Person"> | Date | string | null
    sex?: EnumSexWithAggregatesFilter<"Person"> | $Enums.Sex
    number_phone?: StringNullableWithAggregatesFilter<"Person"> | string | null
    is_active?: BoolWithAggregatesFilter<"Person"> | boolean
    is_elder?: BoolWithAggregatesFilter<"Person"> | boolean
    is_ministerial_servant?: BoolWithAggregatesFilter<"Person"> | boolean
    is_regular_pioneer?: BoolWithAggregatesFilter<"Person"> | boolean
    is_special_pioneer?: BoolWithAggregatesFilter<"Person"> | boolean
    is_field_missionary?: BoolWithAggregatesFilter<"Person"> | boolean
    is_other_sheep?: BoolWithAggregatesFilter<"Person"> | boolean
    is_anointed?: BoolWithAggregatesFilter<"Person"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Person"> | Date | string
  }

  export type PublisherReportWhereInput = {
    AND?: PublisherReportWhereInput | PublisherReportWhereInput[]
    OR?: PublisherReportWhereInput[]
    NOT?: PublisherReportWhereInput | PublisherReportWhereInput[]
    id?: IntFilter<"PublisherReport"> | number
    person_id?: IntFilter<"PublisherReport"> | number
    service_year?: IntFilter<"PublisherReport"> | number
    year?: IntFilter<"PublisherReport"> | number
    month?: IntFilter<"PublisherReport"> | number
    participated?: BoolFilter<"PublisherReport"> | boolean
    bible_courses?: IntFilter<"PublisherReport"> | number
    is_auxiliary_pioneer?: BoolFilter<"PublisherReport"> | boolean
    hours?: IntFilter<"PublisherReport"> | number
    notes?: StringNullableFilter<"PublisherReport"> | string | null
    createdAt?: DateTimeFilter<"PublisherReport"> | Date | string
    updatedAt?: DateTimeFilter<"PublisherReport"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }

  export type PublisherReportOrderByWithRelationInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    participated?: SortOrder
    bible_courses?: SortOrder
    is_auxiliary_pioneer?: SortOrder
    hours?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type PublisherReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    person_id_service_year_year_month?: PublisherReportPerson_idService_yearYearMonthCompoundUniqueInput
    AND?: PublisherReportWhereInput | PublisherReportWhereInput[]
    OR?: PublisherReportWhereInput[]
    NOT?: PublisherReportWhereInput | PublisherReportWhereInput[]
    person_id?: IntFilter<"PublisherReport"> | number
    service_year?: IntFilter<"PublisherReport"> | number
    year?: IntFilter<"PublisherReport"> | number
    month?: IntFilter<"PublisherReport"> | number
    participated?: BoolFilter<"PublisherReport"> | boolean
    bible_courses?: IntFilter<"PublisherReport"> | number
    is_auxiliary_pioneer?: BoolFilter<"PublisherReport"> | boolean
    hours?: IntFilter<"PublisherReport"> | number
    notes?: StringNullableFilter<"PublisherReport"> | string | null
    createdAt?: DateTimeFilter<"PublisherReport"> | Date | string
    updatedAt?: DateTimeFilter<"PublisherReport"> | Date | string
    person?: XOR<PersonScalarRelationFilter, PersonWhereInput>
  }, "id" | "person_id_service_year_year_month">

  export type PublisherReportOrderByWithAggregationInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    participated?: SortOrder
    bible_courses?: SortOrder
    is_auxiliary_pioneer?: SortOrder
    hours?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PublisherReportCountOrderByAggregateInput
    _avg?: PublisherReportAvgOrderByAggregateInput
    _max?: PublisherReportMaxOrderByAggregateInput
    _min?: PublisherReportMinOrderByAggregateInput
    _sum?: PublisherReportSumOrderByAggregateInput
  }

  export type PublisherReportScalarWhereWithAggregatesInput = {
    AND?: PublisherReportScalarWhereWithAggregatesInput | PublisherReportScalarWhereWithAggregatesInput[]
    OR?: PublisherReportScalarWhereWithAggregatesInput[]
    NOT?: PublisherReportScalarWhereWithAggregatesInput | PublisherReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PublisherReport"> | number
    person_id?: IntWithAggregatesFilter<"PublisherReport"> | number
    service_year?: IntWithAggregatesFilter<"PublisherReport"> | number
    year?: IntWithAggregatesFilter<"PublisherReport"> | number
    month?: IntWithAggregatesFilter<"PublisherReport"> | number
    participated?: BoolWithAggregatesFilter<"PublisherReport"> | boolean
    bible_courses?: IntWithAggregatesFilter<"PublisherReport"> | number
    is_auxiliary_pioneer?: BoolWithAggregatesFilter<"PublisherReport"> | boolean
    hours?: IntWithAggregatesFilter<"PublisherReport"> | number
    notes?: StringNullableWithAggregatesFilter<"PublisherReport"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PublisherReport"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PublisherReport"> | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation?: CongregationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    congregation_id: number
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    congregation_id: number
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CongregationCreateInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCongregationInput
    teams?: TeamCreateNestedManyWithoutCongregationInput
    people?: PersonCreateNestedManyWithoutCongregationInput
  }

  export type CongregationUncheckedCreateInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCongregationInput
    teams?: TeamUncheckedCreateNestedManyWithoutCongregationInput
    people?: PersonUncheckedCreateNestedManyWithoutCongregationInput
  }

  export type CongregationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCongregationNestedInput
    teams?: TeamUpdateManyWithoutCongregationNestedInput
    people?: PersonUpdateManyWithoutCongregationNestedInput
  }

  export type CongregationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCongregationNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCongregationNestedInput
    people?: PersonUncheckedUpdateManyWithoutCongregationNestedInput
  }

  export type CongregationCreateManyInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CongregationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CongregationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation: CongregationCreateNestedOneWithoutTeamsInput
    people?: PersonCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    congregation_id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneRequiredWithoutTeamsNestedInput
    people?: PersonUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    congregation_id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation: CongregationCreateNestedOneWithoutPeopleInput
    team: TeamCreateNestedOneWithoutPeopleInput
    reports?: PublisherReportCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: number
    congregation_id: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: PublisherReportUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneRequiredWithoutPeopleNestedInput
    team?: TeamUpdateOneRequiredWithoutPeopleNestedInput
    reports?: PublisherReportUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: PublisherReportUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: number
    congregation_id: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportCreateInput = {
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    person: PersonCreateNestedOneWithoutReportsInput
  }

  export type PublisherReportUncheckedCreateInput = {
    id?: number
    person_id: number
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublisherReportUpdateInput = {
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutReportsNestedInput
  }

  export type PublisherReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportCreateManyInput = {
    id?: number
    person_id: number
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublisherReportUpdateManyMutationInput = {
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    person_id?: IntFieldUpdateOperationsInput | number
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CongregationNullableScalarRelationFilter = {
    is?: CongregationWhereInput | null
    isNot?: CongregationWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type PersonListRelationFilter = {
    every?: PersonWhereInput
    some?: PersonWhereInput
    none?: PersonWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CongregationNameCodeCompoundUniqueInput = {
    name: string
    code: string
  }

  export type CongregationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongregationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CongregationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongregationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CongregationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CongregationScalarRelationFilter = {
    is?: CongregationWhereInput
    isNot?: CongregationWhereInput
  }

  export type TeamNameCongregation_idCompoundUniqueInput = {
    name: string
    congregation_id: number
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type PublisherReportListRelationFilter = {
    every?: PublisherReportWhereInput
    some?: PublisherReportWhereInput
    none?: PublisherReportWhereInput
  }

  export type PublisherReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonCongregation_idFirst_nameLast_nameBirth_dateSexCompoundUniqueInput = {
    congregation_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    sex: $Enums.Sex
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    baptism_date?: SortOrder
    sex?: SortOrder
    number_phone?: SortOrder
    is_active?: SortOrder
    is_elder?: SortOrder
    is_ministerial_servant?: SortOrder
    is_regular_pioneer?: SortOrder
    is_special_pioneer?: SortOrder
    is_field_missionary?: SortOrder
    is_other_sheep?: SortOrder
    is_anointed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    baptism_date?: SortOrder
    sex?: SortOrder
    number_phone?: SortOrder
    is_active?: SortOrder
    is_elder?: SortOrder
    is_ministerial_servant?: SortOrder
    is_regular_pioneer?: SortOrder
    is_special_pioneer?: SortOrder
    is_field_missionary?: SortOrder
    is_other_sheep?: SortOrder
    is_anointed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    birth_date?: SortOrder
    baptism_date?: SortOrder
    sex?: SortOrder
    number_phone?: SortOrder
    is_active?: SortOrder
    is_elder?: SortOrder
    is_ministerial_servant?: SortOrder
    is_regular_pioneer?: SortOrder
    is_special_pioneer?: SortOrder
    is_field_missionary?: SortOrder
    is_other_sheep?: SortOrder
    is_anointed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    id?: SortOrder
    congregation_id?: SortOrder
    team_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PersonScalarRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type PublisherReportPerson_idService_yearYearMonthCompoundUniqueInput = {
    person_id: number
    service_year: number
    year: number
    month: number
  }

  export type PublisherReportCountOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    participated?: SortOrder
    bible_courses?: SortOrder
    is_auxiliary_pioneer?: SortOrder
    hours?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublisherReportAvgOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    bible_courses?: SortOrder
    hours?: SortOrder
  }

  export type PublisherReportMaxOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    participated?: SortOrder
    bible_courses?: SortOrder
    is_auxiliary_pioneer?: SortOrder
    hours?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublisherReportMinOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    participated?: SortOrder
    bible_courses?: SortOrder
    is_auxiliary_pioneer?: SortOrder
    hours?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PublisherReportSumOrderByAggregateInput = {
    id?: SortOrder
    person_id?: SortOrder
    service_year?: SortOrder
    year?: SortOrder
    month?: SortOrder
    bible_courses?: SortOrder
    hours?: SortOrder
  }

  export type CongregationCreateNestedOneWithoutUsersInput = {
    create?: XOR<CongregationCreateWithoutUsersInput, CongregationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutUsersInput
    connect?: CongregationWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CongregationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CongregationCreateWithoutUsersInput, CongregationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutUsersInput
    upsert?: CongregationUpsertWithoutUsersInput
    disconnect?: CongregationWhereInput | boolean
    delete?: CongregationWhereInput | boolean
    connect?: CongregationWhereUniqueInput
    update?: XOR<XOR<CongregationUpdateToOneWithWhereWithoutUsersInput, CongregationUpdateWithoutUsersInput>, CongregationUncheckedUpdateWithoutUsersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedManyWithoutCongregationInput = {
    create?: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput> | UserCreateWithoutCongregationInput[] | UserUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCongregationInput | UserCreateOrConnectWithoutCongregationInput[]
    createMany?: UserCreateManyCongregationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamCreateNestedManyWithoutCongregationInput = {
    create?: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput> | TeamCreateWithoutCongregationInput[] | TeamUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCongregationInput | TeamCreateOrConnectWithoutCongregationInput[]
    createMany?: TeamCreateManyCongregationInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PersonCreateNestedManyWithoutCongregationInput = {
    create?: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput> | PersonCreateWithoutCongregationInput[] | PersonUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCongregationInput | PersonCreateOrConnectWithoutCongregationInput[]
    createMany?: PersonCreateManyCongregationInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCongregationInput = {
    create?: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput> | UserCreateWithoutCongregationInput[] | UserUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCongregationInput | UserCreateOrConnectWithoutCongregationInput[]
    createMany?: UserCreateManyCongregationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutCongregationInput = {
    create?: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput> | TeamCreateWithoutCongregationInput[] | TeamUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCongregationInput | TeamCreateOrConnectWithoutCongregationInput[]
    createMany?: TeamCreateManyCongregationInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutCongregationInput = {
    create?: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput> | PersonCreateWithoutCongregationInput[] | PersonUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCongregationInput | PersonCreateOrConnectWithoutCongregationInput[]
    createMany?: PersonCreateManyCongregationInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput> | UserCreateWithoutCongregationInput[] | UserUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCongregationInput | UserCreateOrConnectWithoutCongregationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCongregationInput | UserUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: UserCreateManyCongregationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCongregationInput | UserUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCongregationInput | UserUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput> | TeamCreateWithoutCongregationInput[] | TeamUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCongregationInput | TeamCreateOrConnectWithoutCongregationInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCongregationInput | TeamUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: TeamCreateManyCongregationInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCongregationInput | TeamUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCongregationInput | TeamUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PersonUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput> | PersonCreateWithoutCongregationInput[] | PersonUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCongregationInput | PersonCreateOrConnectWithoutCongregationInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCongregationInput | PersonUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: PersonCreateManyCongregationInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCongregationInput | PersonUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCongregationInput | PersonUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput> | UserCreateWithoutCongregationInput[] | UserUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCongregationInput | UserCreateOrConnectWithoutCongregationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCongregationInput | UserUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: UserCreateManyCongregationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCongregationInput | UserUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCongregationInput | UserUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput> | TeamCreateWithoutCongregationInput[] | TeamUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutCongregationInput | TeamCreateOrConnectWithoutCongregationInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutCongregationInput | TeamUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: TeamCreateManyCongregationInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutCongregationInput | TeamUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutCongregationInput | TeamUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutCongregationNestedInput = {
    create?: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput> | PersonCreateWithoutCongregationInput[] | PersonUncheckedCreateWithoutCongregationInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutCongregationInput | PersonCreateOrConnectWithoutCongregationInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutCongregationInput | PersonUpsertWithWhereUniqueWithoutCongregationInput[]
    createMany?: PersonCreateManyCongregationInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutCongregationInput | PersonUpdateWithWhereUniqueWithoutCongregationInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutCongregationInput | PersonUpdateManyWithWhereWithoutCongregationInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type CongregationCreateNestedOneWithoutTeamsInput = {
    create?: XOR<CongregationCreateWithoutTeamsInput, CongregationUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutTeamsInput
    connect?: CongregationWhereUniqueInput
  }

  export type PersonCreateNestedManyWithoutTeamInput = {
    create?: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput> | PersonCreateWithoutTeamInput[] | PersonUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTeamInput | PersonCreateOrConnectWithoutTeamInput[]
    createMany?: PersonCreateManyTeamInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type PersonUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput> | PersonCreateWithoutTeamInput[] | PersonUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTeamInput | PersonCreateOrConnectWithoutTeamInput[]
    createMany?: PersonCreateManyTeamInputEnvelope
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
  }

  export type CongregationUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<CongregationCreateWithoutTeamsInput, CongregationUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutTeamsInput
    upsert?: CongregationUpsertWithoutTeamsInput
    connect?: CongregationWhereUniqueInput
    update?: XOR<XOR<CongregationUpdateToOneWithWhereWithoutTeamsInput, CongregationUpdateWithoutTeamsInput>, CongregationUncheckedUpdateWithoutTeamsInput>
  }

  export type PersonUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput> | PersonCreateWithoutTeamInput[] | PersonUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTeamInput | PersonCreateOrConnectWithoutTeamInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutTeamInput | PersonUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PersonCreateManyTeamInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutTeamInput | PersonUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutTeamInput | PersonUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type PersonUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput> | PersonCreateWithoutTeamInput[] | PersonUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PersonCreateOrConnectWithoutTeamInput | PersonCreateOrConnectWithoutTeamInput[]
    upsert?: PersonUpsertWithWhereUniqueWithoutTeamInput | PersonUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PersonCreateManyTeamInputEnvelope
    set?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    disconnect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    delete?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    connect?: PersonWhereUniqueInput | PersonWhereUniqueInput[]
    update?: PersonUpdateWithWhereUniqueWithoutTeamInput | PersonUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PersonUpdateManyWithWhereWithoutTeamInput | PersonUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PersonScalarWhereInput | PersonScalarWhereInput[]
  }

  export type CongregationCreateNestedOneWithoutPeopleInput = {
    create?: XOR<CongregationCreateWithoutPeopleInput, CongregationUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutPeopleInput
    connect?: CongregationWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPeopleInput = {
    create?: XOR<TeamCreateWithoutPeopleInput, TeamUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPeopleInput
    connect?: TeamWhereUniqueInput
  }

  export type PublisherReportCreateNestedManyWithoutPersonInput = {
    create?: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput> | PublisherReportCreateWithoutPersonInput[] | PublisherReportUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PublisherReportCreateOrConnectWithoutPersonInput | PublisherReportCreateOrConnectWithoutPersonInput[]
    createMany?: PublisherReportCreateManyPersonInputEnvelope
    connect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
  }

  export type PublisherReportUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput> | PublisherReportCreateWithoutPersonInput[] | PublisherReportUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PublisherReportCreateOrConnectWithoutPersonInput | PublisherReportCreateOrConnectWithoutPersonInput[]
    createMany?: PublisherReportCreateManyPersonInputEnvelope
    connect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumSexFieldUpdateOperationsInput = {
    set?: $Enums.Sex
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CongregationUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<CongregationCreateWithoutPeopleInput, CongregationUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: CongregationCreateOrConnectWithoutPeopleInput
    upsert?: CongregationUpsertWithoutPeopleInput
    connect?: CongregationWhereUniqueInput
    update?: XOR<XOR<CongregationUpdateToOneWithWhereWithoutPeopleInput, CongregationUpdateWithoutPeopleInput>, CongregationUncheckedUpdateWithoutPeopleInput>
  }

  export type TeamUpdateOneRequiredWithoutPeopleNestedInput = {
    create?: XOR<TeamCreateWithoutPeopleInput, TeamUncheckedCreateWithoutPeopleInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPeopleInput
    upsert?: TeamUpsertWithoutPeopleInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPeopleInput, TeamUpdateWithoutPeopleInput>, TeamUncheckedUpdateWithoutPeopleInput>
  }

  export type PublisherReportUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput> | PublisherReportCreateWithoutPersonInput[] | PublisherReportUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PublisherReportCreateOrConnectWithoutPersonInput | PublisherReportCreateOrConnectWithoutPersonInput[]
    upsert?: PublisherReportUpsertWithWhereUniqueWithoutPersonInput | PublisherReportUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PublisherReportCreateManyPersonInputEnvelope
    set?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    disconnect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    delete?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    connect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    update?: PublisherReportUpdateWithWhereUniqueWithoutPersonInput | PublisherReportUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PublisherReportUpdateManyWithWhereWithoutPersonInput | PublisherReportUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PublisherReportScalarWhereInput | PublisherReportScalarWhereInput[]
  }

  export type PublisherReportUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput> | PublisherReportCreateWithoutPersonInput[] | PublisherReportUncheckedCreateWithoutPersonInput[]
    connectOrCreate?: PublisherReportCreateOrConnectWithoutPersonInput | PublisherReportCreateOrConnectWithoutPersonInput[]
    upsert?: PublisherReportUpsertWithWhereUniqueWithoutPersonInput | PublisherReportUpsertWithWhereUniqueWithoutPersonInput[]
    createMany?: PublisherReportCreateManyPersonInputEnvelope
    set?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    disconnect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    delete?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    connect?: PublisherReportWhereUniqueInput | PublisherReportWhereUniqueInput[]
    update?: PublisherReportUpdateWithWhereUniqueWithoutPersonInput | PublisherReportUpdateWithWhereUniqueWithoutPersonInput[]
    updateMany?: PublisherReportUpdateManyWithWhereWithoutPersonInput | PublisherReportUpdateManyWithWhereWithoutPersonInput[]
    deleteMany?: PublisherReportScalarWhereInput | PublisherReportScalarWhereInput[]
  }

  export type PersonCreateNestedOneWithoutReportsInput = {
    create?: XOR<PersonCreateWithoutReportsInput, PersonUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutReportsInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<PersonCreateWithoutReportsInput, PersonUncheckedCreateWithoutReportsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutReportsInput
    upsert?: PersonUpsertWithoutReportsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<XOR<PersonUpdateToOneWithWhereWithoutReportsInput, PersonUpdateWithoutReportsInput>, PersonUncheckedUpdateWithoutReportsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumSexFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexFilter<$PrismaModel> | $Enums.Sex
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumSexWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Sex | EnumSexFieldRefInput<$PrismaModel>
    in?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    notIn?: $Enums.Sex[] | ListEnumSexFieldRefInput<$PrismaModel>
    not?: NestedEnumSexWithAggregatesFilter<$PrismaModel> | $Enums.Sex
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSexFilter<$PrismaModel>
    _max?: NestedEnumSexFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CongregationCreateWithoutUsersInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutCongregationInput
    people?: PersonCreateNestedManyWithoutCongregationInput
  }

  export type CongregationUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutCongregationInput
    people?: PersonUncheckedCreateNestedManyWithoutCongregationInput
  }

  export type CongregationCreateOrConnectWithoutUsersInput = {
    where: CongregationWhereUniqueInput
    create: XOR<CongregationCreateWithoutUsersInput, CongregationUncheckedCreateWithoutUsersInput>
  }

  export type CongregationUpsertWithoutUsersInput = {
    update: XOR<CongregationUpdateWithoutUsersInput, CongregationUncheckedUpdateWithoutUsersInput>
    create: XOR<CongregationCreateWithoutUsersInput, CongregationUncheckedCreateWithoutUsersInput>
    where?: CongregationWhereInput
  }

  export type CongregationUpdateToOneWithWhereWithoutUsersInput = {
    where?: CongregationWhereInput
    data: XOR<CongregationUpdateWithoutUsersInput, CongregationUncheckedUpdateWithoutUsersInput>
  }

  export type CongregationUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutCongregationNestedInput
    people?: PersonUpdateManyWithoutCongregationNestedInput
  }

  export type CongregationUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutCongregationNestedInput
    people?: PersonUncheckedUpdateManyWithoutCongregationNestedInput
  }

  export type UserCreateWithoutCongregationInput = {
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutCongregationInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutCongregationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput>
  }

  export type UserCreateManyCongregationInputEnvelope = {
    data: UserCreateManyCongregationInput | UserCreateManyCongregationInput[]
    skipDuplicates?: boolean
  }

  export type TeamCreateWithoutCongregationInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutCongregationInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    people?: PersonUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutCongregationInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput>
  }

  export type TeamCreateManyCongregationInputEnvelope = {
    data: TeamCreateManyCongregationInput | TeamCreateManyCongregationInput[]
    skipDuplicates?: boolean
  }

  export type PersonCreateWithoutCongregationInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    team: TeamCreateNestedOneWithoutPeopleInput
    reports?: PublisherReportCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutCongregationInput = {
    id?: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: PublisherReportUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutCongregationInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput>
  }

  export type PersonCreateManyCongregationInputEnvelope = {
    data: PersonCreateManyCongregationInput | PersonCreateManyCongregationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCongregationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCongregationInput, UserUncheckedUpdateWithoutCongregationInput>
    create: XOR<UserCreateWithoutCongregationInput, UserUncheckedCreateWithoutCongregationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCongregationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCongregationInput, UserUncheckedUpdateWithoutCongregationInput>
  }

  export type UserUpdateManyWithWhereWithoutCongregationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCongregationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    congregation_id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type TeamUpsertWithWhereUniqueWithoutCongregationInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutCongregationInput, TeamUncheckedUpdateWithoutCongregationInput>
    create: XOR<TeamCreateWithoutCongregationInput, TeamUncheckedCreateWithoutCongregationInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutCongregationInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutCongregationInput, TeamUncheckedUpdateWithoutCongregationInput>
  }

  export type TeamUpdateManyWithWhereWithoutCongregationInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutCongregationInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: IntFilter<"Team"> | number
    congregation_id?: IntFilter<"Team"> | number
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
  }

  export type PersonUpsertWithWhereUniqueWithoutCongregationInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutCongregationInput, PersonUncheckedUpdateWithoutCongregationInput>
    create: XOR<PersonCreateWithoutCongregationInput, PersonUncheckedCreateWithoutCongregationInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutCongregationInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutCongregationInput, PersonUncheckedUpdateWithoutCongregationInput>
  }

  export type PersonUpdateManyWithWhereWithoutCongregationInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutCongregationInput>
  }

  export type PersonScalarWhereInput = {
    AND?: PersonScalarWhereInput | PersonScalarWhereInput[]
    OR?: PersonScalarWhereInput[]
    NOT?: PersonScalarWhereInput | PersonScalarWhereInput[]
    id?: IntFilter<"Person"> | number
    congregation_id?: IntFilter<"Person"> | number
    team_id?: IntFilter<"Person"> | number
    first_name?: StringFilter<"Person"> | string
    last_name?: StringFilter<"Person"> | string
    birth_date?: DateTimeFilter<"Person"> | Date | string
    baptism_date?: DateTimeNullableFilter<"Person"> | Date | string | null
    sex?: EnumSexFilter<"Person"> | $Enums.Sex
    number_phone?: StringNullableFilter<"Person"> | string | null
    is_active?: BoolFilter<"Person"> | boolean
    is_elder?: BoolFilter<"Person"> | boolean
    is_ministerial_servant?: BoolFilter<"Person"> | boolean
    is_regular_pioneer?: BoolFilter<"Person"> | boolean
    is_special_pioneer?: BoolFilter<"Person"> | boolean
    is_field_missionary?: BoolFilter<"Person"> | boolean
    is_other_sheep?: BoolFilter<"Person"> | boolean
    is_anointed?: BoolFilter<"Person"> | boolean
    createdAt?: DateTimeFilter<"Person"> | Date | string
    updatedAt?: DateTimeFilter<"Person"> | Date | string
  }

  export type CongregationCreateWithoutTeamsInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCongregationInput
    people?: PersonCreateNestedManyWithoutCongregationInput
  }

  export type CongregationUncheckedCreateWithoutTeamsInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCongregationInput
    people?: PersonUncheckedCreateNestedManyWithoutCongregationInput
  }

  export type CongregationCreateOrConnectWithoutTeamsInput = {
    where: CongregationWhereUniqueInput
    create: XOR<CongregationCreateWithoutTeamsInput, CongregationUncheckedCreateWithoutTeamsInput>
  }

  export type PersonCreateWithoutTeamInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation: CongregationCreateNestedOneWithoutPeopleInput
    reports?: PublisherReportCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutTeamInput = {
    id?: number
    congregation_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reports?: PublisherReportUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutTeamInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput>
  }

  export type PersonCreateManyTeamInputEnvelope = {
    data: PersonCreateManyTeamInput | PersonCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type CongregationUpsertWithoutTeamsInput = {
    update: XOR<CongregationUpdateWithoutTeamsInput, CongregationUncheckedUpdateWithoutTeamsInput>
    create: XOR<CongregationCreateWithoutTeamsInput, CongregationUncheckedCreateWithoutTeamsInput>
    where?: CongregationWhereInput
  }

  export type CongregationUpdateToOneWithWhereWithoutTeamsInput = {
    where?: CongregationWhereInput
    data: XOR<CongregationUpdateWithoutTeamsInput, CongregationUncheckedUpdateWithoutTeamsInput>
  }

  export type CongregationUpdateWithoutTeamsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCongregationNestedInput
    people?: PersonUpdateManyWithoutCongregationNestedInput
  }

  export type CongregationUncheckedUpdateWithoutTeamsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCongregationNestedInput
    people?: PersonUncheckedUpdateManyWithoutCongregationNestedInput
  }

  export type PersonUpsertWithWhereUniqueWithoutTeamInput = {
    where: PersonWhereUniqueInput
    update: XOR<PersonUpdateWithoutTeamInput, PersonUncheckedUpdateWithoutTeamInput>
    create: XOR<PersonCreateWithoutTeamInput, PersonUncheckedCreateWithoutTeamInput>
  }

  export type PersonUpdateWithWhereUniqueWithoutTeamInput = {
    where: PersonWhereUniqueInput
    data: XOR<PersonUpdateWithoutTeamInput, PersonUncheckedUpdateWithoutTeamInput>
  }

  export type PersonUpdateManyWithWhereWithoutTeamInput = {
    where: PersonScalarWhereInput
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyWithoutTeamInput>
  }

  export type CongregationCreateWithoutPeopleInput = {
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCongregationInput
    teams?: TeamCreateNestedManyWithoutCongregationInput
  }

  export type CongregationUncheckedCreateWithoutPeopleInput = {
    id?: number
    name: string
    code?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCongregationInput
    teams?: TeamUncheckedCreateNestedManyWithoutCongregationInput
  }

  export type CongregationCreateOrConnectWithoutPeopleInput = {
    where: CongregationWhereUniqueInput
    create: XOR<CongregationCreateWithoutPeopleInput, CongregationUncheckedCreateWithoutPeopleInput>
  }

  export type TeamCreateWithoutPeopleInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation: CongregationCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutPeopleInput = {
    id?: number
    congregation_id: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamCreateOrConnectWithoutPeopleInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPeopleInput, TeamUncheckedCreateWithoutPeopleInput>
  }

  export type PublisherReportCreateWithoutPersonInput = {
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublisherReportUncheckedCreateWithoutPersonInput = {
    id?: number
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublisherReportCreateOrConnectWithoutPersonInput = {
    where: PublisherReportWhereUniqueInput
    create: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput>
  }

  export type PublisherReportCreateManyPersonInputEnvelope = {
    data: PublisherReportCreateManyPersonInput | PublisherReportCreateManyPersonInput[]
    skipDuplicates?: boolean
  }

  export type CongregationUpsertWithoutPeopleInput = {
    update: XOR<CongregationUpdateWithoutPeopleInput, CongregationUncheckedUpdateWithoutPeopleInput>
    create: XOR<CongregationCreateWithoutPeopleInput, CongregationUncheckedCreateWithoutPeopleInput>
    where?: CongregationWhereInput
  }

  export type CongregationUpdateToOneWithWhereWithoutPeopleInput = {
    where?: CongregationWhereInput
    data: XOR<CongregationUpdateWithoutPeopleInput, CongregationUncheckedUpdateWithoutPeopleInput>
  }

  export type CongregationUpdateWithoutPeopleInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCongregationNestedInput
    teams?: TeamUpdateManyWithoutCongregationNestedInput
  }

  export type CongregationUncheckedUpdateWithoutPeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCongregationNestedInput
    teams?: TeamUncheckedUpdateManyWithoutCongregationNestedInput
  }

  export type TeamUpsertWithoutPeopleInput = {
    update: XOR<TeamUpdateWithoutPeopleInput, TeamUncheckedUpdateWithoutPeopleInput>
    create: XOR<TeamCreateWithoutPeopleInput, TeamUncheckedCreateWithoutPeopleInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPeopleInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPeopleInput, TeamUncheckedUpdateWithoutPeopleInput>
  }

  export type TeamUpdateWithoutPeopleInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutPeopleInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportUpsertWithWhereUniqueWithoutPersonInput = {
    where: PublisherReportWhereUniqueInput
    update: XOR<PublisherReportUpdateWithoutPersonInput, PublisherReportUncheckedUpdateWithoutPersonInput>
    create: XOR<PublisherReportCreateWithoutPersonInput, PublisherReportUncheckedCreateWithoutPersonInput>
  }

  export type PublisherReportUpdateWithWhereUniqueWithoutPersonInput = {
    where: PublisherReportWhereUniqueInput
    data: XOR<PublisherReportUpdateWithoutPersonInput, PublisherReportUncheckedUpdateWithoutPersonInput>
  }

  export type PublisherReportUpdateManyWithWhereWithoutPersonInput = {
    where: PublisherReportScalarWhereInput
    data: XOR<PublisherReportUpdateManyMutationInput, PublisherReportUncheckedUpdateManyWithoutPersonInput>
  }

  export type PublisherReportScalarWhereInput = {
    AND?: PublisherReportScalarWhereInput | PublisherReportScalarWhereInput[]
    OR?: PublisherReportScalarWhereInput[]
    NOT?: PublisherReportScalarWhereInput | PublisherReportScalarWhereInput[]
    id?: IntFilter<"PublisherReport"> | number
    person_id?: IntFilter<"PublisherReport"> | number
    service_year?: IntFilter<"PublisherReport"> | number
    year?: IntFilter<"PublisherReport"> | number
    month?: IntFilter<"PublisherReport"> | number
    participated?: BoolFilter<"PublisherReport"> | boolean
    bible_courses?: IntFilter<"PublisherReport"> | number
    is_auxiliary_pioneer?: BoolFilter<"PublisherReport"> | boolean
    hours?: IntFilter<"PublisherReport"> | number
    notes?: StringNullableFilter<"PublisherReport"> | string | null
    createdAt?: DateTimeFilter<"PublisherReport"> | Date | string
    updatedAt?: DateTimeFilter<"PublisherReport"> | Date | string
  }

  export type PersonCreateWithoutReportsInput = {
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    congregation: CongregationCreateNestedOneWithoutPeopleInput
    team: TeamCreateNestedOneWithoutPeopleInput
  }

  export type PersonUncheckedCreateWithoutReportsInput = {
    id?: number
    congregation_id: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonCreateOrConnectWithoutReportsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutReportsInput, PersonUncheckedCreateWithoutReportsInput>
  }

  export type PersonUpsertWithoutReportsInput = {
    update: XOR<PersonUpdateWithoutReportsInput, PersonUncheckedUpdateWithoutReportsInput>
    create: XOR<PersonCreateWithoutReportsInput, PersonUncheckedCreateWithoutReportsInput>
    where?: PersonWhereInput
  }

  export type PersonUpdateToOneWithWhereWithoutReportsInput = {
    where?: PersonWhereInput
    data: XOR<PersonUpdateWithoutReportsInput, PersonUncheckedUpdateWithoutReportsInput>
  }

  export type PersonUpdateWithoutReportsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneRequiredWithoutPeopleNestedInput
    team?: TeamUpdateOneRequiredWithoutPeopleNestedInput
  }

  export type PersonUncheckedUpdateWithoutReportsInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyCongregationInput = {
    id?: number
    email: string
    password: string
    first_name: string
    last_name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamCreateManyCongregationInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonCreateManyCongregationInput = {
    id?: number
    team_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutCongregationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUpdateWithoutCongregationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    people?: PersonUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonUpdateWithoutCongregationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPeopleNestedInput
    reports?: PublisherReportUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: PublisherReportUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutCongregationInput = {
    id?: IntFieldUpdateOperationsInput | number
    team_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonCreateManyTeamInput = {
    id?: number
    congregation_id: number
    first_name: string
    last_name: string
    birth_date: Date | string
    baptism_date?: Date | string | null
    sex: $Enums.Sex
    number_phone?: string | null
    is_active?: boolean
    is_elder?: boolean
    is_ministerial_servant?: boolean
    is_regular_pioneer?: boolean
    is_special_pioneer?: boolean
    is_field_missionary?: boolean
    is_other_sheep?: boolean
    is_anointed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PersonUpdateWithoutTeamInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    congregation?: CongregationUpdateOneRequiredWithoutPeopleNestedInput
    reports?: PublisherReportUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reports?: PublisherReportUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    congregation_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    baptism_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sex?: EnumSexFieldUpdateOperationsInput | $Enums.Sex
    number_phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    is_elder?: BoolFieldUpdateOperationsInput | boolean
    is_ministerial_servant?: BoolFieldUpdateOperationsInput | boolean
    is_regular_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_special_pioneer?: BoolFieldUpdateOperationsInput | boolean
    is_field_missionary?: BoolFieldUpdateOperationsInput | boolean
    is_other_sheep?: BoolFieldUpdateOperationsInput | boolean
    is_anointed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportCreateManyPersonInput = {
    id?: number
    service_year: number
    year: number
    month: number
    participated?: boolean
    bible_courses?: number
    is_auxiliary_pioneer?: boolean
    hours?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PublisherReportUpdateWithoutPersonInput = {
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportUncheckedUpdateWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PublisherReportUncheckedUpdateManyWithoutPersonInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_year?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    participated?: BoolFieldUpdateOperationsInput | boolean
    bible_courses?: IntFieldUpdateOperationsInput | number
    is_auxiliary_pioneer?: BoolFieldUpdateOperationsInput | boolean
    hours?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}