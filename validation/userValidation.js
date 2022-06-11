const joi = require('joi')

const loginSkeleton = {
    email: joi.string().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()

}

const registerSkeleton = {
    userName: joi.string().alphanum().min(5).max(20).required(),
    ...loginSkeleton,
    biz: joi.boolean(),
}

const loginSkeleton = joi.object(loginSkeleton)
const registerSkeleton = joi.object(registerSkeleton)

module.exports = {
    loginSkeleton,
    registerSkeleton
}