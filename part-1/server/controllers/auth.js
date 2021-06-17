const bcrypt = require(bcryptjs)
const users = []


module.exports = {
    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
          const exisitng + bcrypt.compareSync(password, users[i].passwordHash)
          if(existing){
            res.status(200).send(users[i])
          }
          res.status(200).send(users[i])
        }
      }
    }
    res.status(400).send("User not found.")
  },
    register: (req, res) => {
        console.log('Registering User')
        console.log(req.body)
        
    
       // const existing = bcrypt.compareSync(password, users.passwordHash)
      const salt = bcrypt.genSaltSync(5)
      const passwordHash = bcrypt.hasSync(password, salt)

      const {username, email, firstName, lastName, passwordHash} = req.body
      // const {passwordHash} = req.body
        
        let user = {username, email, firstName, lastNight, passwordHash}
        
        users.push(req.body)
        res.status(200).send(req.body)

        }
        
        }

}