import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerOrderSchema = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderSchema, 'id'>;
  };
  readonly id: string;
  readonly status?: string | null;
  readonly patrimony?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly solution?: string | null;
  readonly closedAt?: string | null;
}

type LazyOrderSchema = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderSchema, 'id'>;
  };
  readonly id: string;
  readonly status?: string | null;
  readonly patrimony?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly solution?: string | null;
  readonly closedAt?: string | null;
}

export declare type OrderSchema = LazyLoading extends LazyLoadingDisabled ? EagerOrderSchema : LazyOrderSchema

export declare const OrderSchema: (new (init: ModelInit<OrderSchema>) => OrderSchema) & {
  copyOf(source: OrderSchema, mutator: (draft: MutableModel<OrderSchema>) => MutableModel<OrderSchema> | void): OrderSchema;
}