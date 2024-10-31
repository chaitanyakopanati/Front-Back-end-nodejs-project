const joi=require('@hapi/joi')
//const { schema } = require('../../models')

const Schema={
    user:joi.object({
        brandname:joi.string().max(100).required(),

    })
}
module.exports =Schema