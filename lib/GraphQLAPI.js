"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@aws-amplify/core");
var internals_1 = require("./internals");
exports.graphqlOperation = function (query, variables, authToken) {
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
    tslib_1.__extends(GraphQLAPIClass, _super);
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
}(internals_1.InternalGraphQLAPIClass));
exports.GraphQLAPIClass = GraphQLAPIClass;
exports.GraphQLAPI = new GraphQLAPIClass(null);
core_1.Amplify.register(exports.GraphQLAPI);
//# sourceMappingURL=GraphQLAPI.js.map