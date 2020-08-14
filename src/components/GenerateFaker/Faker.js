module.exports = function () {
    var faker = require("faker")
    var dash = require("lodash")
    return {
        messages: dash.times(130, function (n) {
            return {
              id: n + 1,
              subject: faker.name.findName(),
              message: faker.lorem.sentence(),
              timesent: new Date(),
              status: "unread",
              important: false,
            };
        })
    }
}