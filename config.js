const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cursomenoyo:JTnXSgXmlOB0w6JS@devcamp.5baryzl.mongodb.net/?retryWrites=true&w=majority&appName=books', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connectijng to MongoDB:', err);
});

module.exports = mongoose;


