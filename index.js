// start your server here
require('dotenv').config();
const server = require('./api/server');

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => console.log(`server running at ${PORT}`))

server.get('/', (req, res) => {
    res.status(200).json({ message: "website working" })
})