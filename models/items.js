var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsSchema = new Schema({
    message: {
        type: String,
        required: true
    }
});

ItemsSchema.set('timestamps', true);

module.exports = mongoose.model('Items', ItemsSchema);