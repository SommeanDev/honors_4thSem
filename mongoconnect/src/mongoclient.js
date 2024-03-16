import 'dotenv/config';
import { MongoClient } from 'mongodb';

console.log(process.env.MONGO_USERNAME);
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@test-database01.veqcndz.mongodb.net/?retryWrites=true&w=majority&appName=test-database01`

export const createPost = async (req, res, next) => {
    console.log("POST endpoint called");
    const client = new MongoClient(url);

    const newPost = {
        title: req.body.title,
        content: req.body.content,
    }
    
    try {
        await client.connect();
        const db = client.db('honors-test-posts-db');
        const collection = db.collection('posts');
        await collection.insertOne(newPost);
        res.json(newPost);
    } catch(error) {
        res.json({message: 'Error creating post.'});
    } finally {
        await client.close();
    }
}

export const getPosts = async (req, res, next) => {
    console.log("GET endpoint called");
    const client = new MongoClient(url);

    const newPost = {
        title: req.body.title,
        content: req.body.content,
    }
    
    try {
        await client.connect();
        const db = client.db('honors-test-posts-db');
        const collection = db.collection('posts');
        await collection.insertOne(newPost);
        res.json(newPost);
    } catch(error) {
        res.json({message: 'Error creating post.'});
    } finally {
        await client.close();
    }
}