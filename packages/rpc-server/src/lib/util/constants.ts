export const ErrorSchemaKeys = {
  ALL: "ErrorSchema",
  400: "BadRequestSchema",
  401: "UnauthorizedSchema",
  500: "InternalServerErrorSchema",
} as const

export const HttpMethod = {
  GET: '$get',
  POST: '$post',
  PUT: '$put',
  DELETE: '$delete',
  PATCH: '$patch',
  ALL: '$all',
  OPTIONS: '$options',
  HEAD: '$head',
  SEARCH: '$search',
} as const;

export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

export const methods = {
  [HttpMethod.GET]: 'get',
  [HttpMethod.POST]: 'post',
  [HttpMethod.PUT]: 'put',
  [HttpMethod.DELETE]: 'delete',
  [HttpMethod.PATCH]: 'patch',
  [HttpMethod.ALL]: 'all',
  [HttpMethod.OPTIONS]: 'options',
  [HttpMethod.HEAD]: 'head',
  [HttpMethod.SEARCH]: 'search',
} as const;