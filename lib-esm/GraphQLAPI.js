import { __extends } from "tslib";
import { Amplify } from '@aws-amplify/core';
import { InternalGraphQLAPIClass } from './internals';
export var graphqlOperation = function (query, variables, authToken) {
    if (variables === void 0) { variables = {}; }
    return ({
        query: query,
        variables: variables,
        authToken: authToken,
    });
};
/**
 * Export Cloud Logic APIs
 */
var GraphQLAPIClass = /** @class */ (function (_super) {
    __extends(GraphQLAPIClass, _super);
    function GraphQLAPIClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphQLAPIClass.prototype.getModuleName = function () {
        return 'GraphQLAPI';
    };
    /**
     * Executes a GraphQL operation
     *
     * @param options - GraphQL Options
     * @param [additionalHeaders] - headers to merge in after any `graphql_headers` set in the config
     * @returns An Observable if the query is a subscription query, else a promise of the graphql result.
     */
    GraphQLAPIClass.prototype.graphql = function (options, additionalHeaders) {
        return _super.prototype.graphql.call(this, options, additionalHeaders);
    };
    return GraphQLAPIClass;
}(InternalGraphQLAPIClass));
export { GraphQLAPIClass };
export var GraphQLAPI = new GraphQLAPIClass(null);
Amplify.register(GraphQLAPI);
//# sourceMappingURL=GraphQLAPI.js.map