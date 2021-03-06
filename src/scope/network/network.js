/** @flow */
import { BitIds, BitId } from '../../bit-id';
import ComponentObjects from '../../scope/component-objects';
import type { ScopeDescriptor } from '../scope';
import Component from '../../consumer/component';

export interface Network {
  connect(host: string): Network;
  close(): void;
  get(commandName: string): Promise<any>;
  describeScope(): Promise<ScopeDescriptor>;
  fetch(bitIds: BitIds): Promise<ComponentObjects[]>;
  list(): Promise<ComponentObjects[]>;
  search(query: string, reindex: boolean): Promise<string>;
  show(bitId: BitId): Promise<?Component>;
  deprecateMany(ids: string[], context: ?Object): Promise<Object[]>;
  latestVersions(bitIds: BitIds): Promise<ComponentObjects[]>;
}
