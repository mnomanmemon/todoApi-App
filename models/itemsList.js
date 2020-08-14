var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemsListSchema = new Schema({
    ids: [{
        type: String,
        required: true
    }],
    notes: [{
        type: String,
        required: true
    }]
});

ItemsListSchema.set('timestamps', true);

module.exports = mongoose.model('ItemsList', ItemsListSchema);