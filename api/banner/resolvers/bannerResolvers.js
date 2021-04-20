const bannerResolvers = {

    Query: {
        banners: (root, args, { dataSources }) => dataSources.bannersApi.getBanners(),
    }
}

module.exports = bannerResolvers;