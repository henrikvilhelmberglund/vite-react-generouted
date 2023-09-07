// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/api-params`
  | `/api-params/page`
  | `/api-params/page/:id`
  | `/blog`
  | `/cool-route`
  | `/generouted-bug`
  | `/rick-morty`
  | `/streak-counter`
  | `/streak-counter/user`
  | `/use-location`
  | `/use-location/profile`

export type Params = {
  '/api-params/page/:id': { id: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
