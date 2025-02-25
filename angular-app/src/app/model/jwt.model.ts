export interface JWTClient {
  oauthToken: string;
  instanceUrl: string;
}

export interface JWTPayload {
  client: JWTClient
}