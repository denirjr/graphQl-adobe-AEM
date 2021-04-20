const { RESTDataSource } = require("apollo-datasource-rest");
const { host } = require("../../../config");
const replaceKeysDeep = require("../../helpers/replaceKeydeep");

class BannersApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = host;
    }

    async getBanners() {
        const banner = await this.get('/banners');
        const searchRegExp = /:items/gi;
        const replaceWith = 'items';

        return replaceKeysDeep(banner, searchRegExp, replaceWith);
    }
}

module.exports = BannersApi;