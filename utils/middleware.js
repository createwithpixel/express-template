exports.requireUser = async (req, res, next) => {
  try {
    // Depending on the auth service, decode the token and fetch the user
    // ...
    const user = {
      id: '1234567890',
      name: 'John Doe',
      email: 'johndoe@example.com'
    }
    req.user = user
    next()
  }
  catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message });
  }
}

exports.requireOrganizationAdmin = async (req, res, next) => {
  try {
    // Logic to check if the user is an admin
    next()
  }
  catch (error) {
    console.error(error)
    res.status(500).send({ message: error.message });
  }
}