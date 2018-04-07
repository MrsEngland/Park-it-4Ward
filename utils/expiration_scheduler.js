var schedule = require('node-schedule');

var expiration_scheduler = {
  scheduleExpirationTask(taskName, expirationDate, expirationCallback) {
    var year = expirationDate.year();
    var month = expirationDate.month();
    var dayOfMonth = expirationDate.date();
    var hour = expirationDate.hour();
    var minute = expirationDate.minute();
    
    var date = new Date(year, month, dayOfMonth, hour, minute, 0);
    schedule.scheduleJob(taskName, date, expirationCallback);
  },

  getExpirationTaskList() {
    return schedule.scheduledJobs;
  },

  deleteExpirationTask(taskName) {
    var job = schedule.scheduledJobs[taskName];
    job.cancel();
  }
};

module.exports = update_scheduler;