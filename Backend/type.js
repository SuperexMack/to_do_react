const zod = require("zod")

const createtodo = zod.object({
title : zod.string(),
description : zod.string(),
})

const updatetodo = zod.object({
id:zod.string()
})

module.exports = {
    createtodo,
    updatetodo
}
// syntax source - https://www.npmjs.com/package/zod/v/3.0.0-alpha.19

