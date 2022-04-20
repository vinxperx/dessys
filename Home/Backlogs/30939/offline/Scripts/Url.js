var Url = {
    /**
     * @cfg {String} The Web application root url
     */
    webRoot: '/',

    /**
     * @cfg {String} The WebApi root url
     */
    webRootApi: '/api/',

    /**
     * Set the WebApplication root url
     *
     * @param {String} webRoot The root url
     * @return {ANAC.util.Url} Returns the class reference
     */
    setWebRoot: function (webRoot) {
        this.webRoot = webRoot;

        return this;
    },

    /**
     * Get the WebApplication root url
     *
     * @return {String} Returns the root url
     */
    getWebRoot: function () {
        return this.webRoot;
    },

    /**
     * Set the WebApi root url
     *
     * @param {String} webRootApi The root url
     * @return {ANAC.util.Url} Returns the class reference
     */
    setWebRootApi: function (webRootApi) {
        this.webRootApi = webRootApi;

        return this;
    },

    /**
     * Get the WebApi root url
     *
     * @return {String} Returns the WebApi root url
     */
    getWebRootApi: function () {
        return this.webRootApi;
    },

    /**
     * Create the url using the controller name and action name
     *
     * @param {String} controller Controller name
     * @param {String} [action] The action name. It is optional
     * @return {String} Returns the formated url
     * @example: 
     *  createUrl('Account', 'Search') 
     *  Returns => http://localhost/application/Account/Search
     */
    createUrl: function (controller, action) {
        return this.createUrlBase(this.webRoot, controller, action);
    },

    /**
     * Create url with parameters
     *
     * @param {String} controller Controller name
     * @param {String} action The action name
     * @param {Object} params Object with the url parameters
     * @return {String} Returns the formated url with parameters
     * @example: 
     *  createUrlWithParameters('Account', 'Search', {id: 31, status: 2}) 
     *  Returns => http://localhost/application/Account/Search?id=31&status=2
     */
    createUrlWithParameters: function (controller, action, params) {
        var baseUrl = this.createUrl(controller, action);

        return this.addParametersInUrl(baseUrl, params);
    },

    /**
     * Create the WebApi url using the controller name and action name
     *
     * @param {String} controller WebApi controller name
     * @param {String} action The action name
     * @return {String} Returns the formated WebApi url
     * @example: 
     *  createWebApiUrl('Account', 'Search') 
     *  Returns => http://localhost/application/api/Account/Search
     */
    createWebApiUrl: function (controller, action) {
        return this.createUrlBase(this.webRootApi, controller, action);
    },

    /**
     * Create WebApi url with parameters
     *
     * @param {String} controller Controller name
     * @param {String} action The action name
     * @param {Object} params Object with the url parameters
     * @return {String} Returns the formated WebApi url with parameters
     * @example: 
     *  createWebApiUrlWithParameters('Account', 'Search', {id: 31, status: 2}) 
     *  Returns => http://localhost/application/api/Account/Search?id=31&status=2
     */
    createWebApiUrlWithParameters: function (controller, action, params) {
        var baseUrl = this.createWebApiUrl(controller, action);

        return this.addParametersInUrl(baseUrl, params);
    },

    /**
     * Create the url using the root url, controller name and action name
     *
     * @param {String} rootUrl The root url for the endpoint (WebApplication or WebApi)
     * @param {String} controller Controller name
     * @param {String} [action] The action name. It is optional
     * @return {String} Returns the formated url
     * @example: 
     *  createUrlBase('http://localhost/', 'Account', 'Search')
     *  Returns => http://localhost/application/Account/Search
     */
    createUrlBase: function (rootUrl, controller, action) {
        var baseUrl = rootUrl + controller;

        if (!ANAC.isEmpty(action)) {
            baseUrl += '/' + action;
        }

        return baseUrl;
    },

    /**
     * Add parameters in the url
     *
     * @param {String} baseUrl The url base
     * @param {Object} params Object with the url parameters
     * @return {String} Returns the formated url with parameters
     * @example: 
     *  addParametersInUrl('http://localhost/application/Account/Search', {id: 31, status: 2}) 
     *  Returns => http://localhost/application/Account/Search?id=31&status=2
     */
    addParametersInUrl: function (baseUrl, params) {
        var formatedParameters = [];

        if (params) {
            for (param in params) {
                formatedParameters.push(param + '=' + encodeURIComponent(params[param]));
            }

            baseUrl += '?' + formatedParameters.join('&');
        }

        return baseUrl;
    }
};