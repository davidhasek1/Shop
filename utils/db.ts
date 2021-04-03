import { MongoClient } from "mongodb";

const connect = async () => {
  const client = await MongoClient.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db(process.env.DB_NAME);
  return { db, client };
};

export { connect };
