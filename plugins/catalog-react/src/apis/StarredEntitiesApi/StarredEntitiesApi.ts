/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Entity } from '@backstage/catalog-model';
import { ApiRef, createApiRef, Observable } from '@backstage/core-plugin-api';

export const starredEntitiesApiRef: ApiRef<StarredEntitiesApi> = createApiRef({
  id: 'catalog-react.starred-entities',
});

export type StarredEntitiesApiObservable = {
  /**
   * A set of starred entities
   */
  starredEntities: Set<string>;

  /**
   * A function to check if an entity is starred.
   *
   * @param entity - the entity to check
   * @returns true, if the entity is starred.
   */
  isStarred: (entity: Entity) => boolean;
};

/**
 * An API to store and retrieve starred entities
 *
 * @public
 */
export interface StarredEntitiesApi {
  /**
   * Toggle the star state of the entity
   *
   * @param entity - the entity to be toggled
   */
  toggleStarred(entity: Entity): Promise<void>;

  /**
   * Star the entity
   *
   * @param entity - the entity to be starred
   */
  star(entity: Entity): Promise<void>;

  /**
   * Unstar the entity
   *
   * @param entity - the entity to be unstarred
   */
  unstar(entity: Entity): Promise<void>;

  /**
   * Observe the state of starred entities and receive a handler
   * to check the star state of an entity.
   */
  starredEntities$(): Observable<StarredEntitiesApiObservable>;
}
