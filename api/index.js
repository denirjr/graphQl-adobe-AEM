
const { ApolloServer } = require('apollo-server');
const { port } = require('../config');

const bannerResolvers = require('./banner/resolvers/bannerResolvers');
const BannersApi = require('./banner/datasource/banner');
const bannerSchema = require('./banner/schema/banner.graphql');

const typeDefs = [bannerSchema];
const resolvers = [bannerResolvers];

const server = new ApolloServer({
    typeDefs, resolvers, dataSources: () => {
        return {
            bannersApi: new BannersApi()
        }
    }
});

server.listen({ port: port }).then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`);
})