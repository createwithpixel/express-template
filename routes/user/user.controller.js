exports.getUser = async (req, res) => {
  try {
    const { id } = req.user
    // Make the API call to fetch the user using the ID appended in the request

    return res.status(200).json({
      name: 'John Doe',
      email: 'johndoe@email.com',
      id: '1234567890'
    })
  }
  catch (err) {
    console.error(err)
    res.status(500).send({ message: err.message });
  }
}