import moongoose from 'mongoose';
const dbConnect = async () => {
    await moongoose.connect("mongodb://localhost:27017/merndb");
};
export default dbConnect;