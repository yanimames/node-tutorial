const { BadRequestError } = require('../errors')


const testUser = (req,res,next) =>{
  const {testUser} = req.user
  if (testUser) {
    throw new Error ('Cannot edit Test user, read Only')
  }
 next() 
}

module.exports = testUser