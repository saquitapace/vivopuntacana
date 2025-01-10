exports.up = function (db, callback) {
  db.addColumn('events', 'theme_color', { type: 'string' }, callback);
};

exports.down = function (db, callback) {
  db.removeColumn('events', 'theme_color', callback);
};
