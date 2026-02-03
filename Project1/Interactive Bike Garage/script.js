let StravaApiV3 = require('strava_api_v3');
let defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
let strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = "YOUR ACCESS TOKEN"

let api = new StravaApiV3.ActivitiesApi()

let id = 789; // {Long} The identifier of the activity.

let opts = {
    'includeAllEfforts': true // {Boolean} To include all segments efforts.
};

let callback = function (error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + data);
    }
};
api.getActivityById(id, opts, callback);