var config = require('../config');

var mongoose = require('mongoose');
mongoose.Promise = config.mongoose_promise;
mongoose.connect(config.dburl)