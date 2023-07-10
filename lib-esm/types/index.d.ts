import { Source, DocumentNode, GraphQLError } from 'graphql';
export { OperationTypeNode } from 'graphql';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/auth';
export { GRAPHQL_AUTH_MODE };
export interface GraphQLOptions {
    query: string | DocumentNode;
    variables?: object;
    authMode?: keyof typeof GRAPHQL_AUTH_MODE;
    authToken?: string;
    /**
     * @deprecated This property should not be used
     */
    userAgentSuffix?: string;
}
export interface GraphQLResult<T = object> {
    data?: T;
    errors?: GraphQLError[];
    extensions?: {
        [key: string]: any;
    };
}
export declare enum GraphQLAuthError {
    NO_API_KEY = "No api-key configured",
    NO_CURRENT_USER = "No current user",
    NO_CREDENTIALS = "No credentials",
    NO_FEDERATED_JWT = "No federated jwt",
    NO_AUTH_TOKEN = "No auth token specified"
}
/**
 * GraphQLSource or string, the type of the parameter for calling graphql.parse
 * @see: https://graphql.org/graphql-js/language/#parse
 */
export declare type GraphQLOperation = Source | string;
