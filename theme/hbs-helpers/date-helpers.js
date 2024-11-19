const moment = require('moment');

const dateHelpers = {
  MY: function(date, locale) {
      moment.locale(locale);
      return moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY');
  },
  Y: date => moment(date.toString(), ['YYYY-MM-DD']).format('YYYY'),
  DMY: function (date, locale) {
      moment.locale(locale);
      return moment(date.toString(), ['YYYY-MM-DD']).format('D MMM YYYY');
  }
};

module.exports = { dateHelpers };
