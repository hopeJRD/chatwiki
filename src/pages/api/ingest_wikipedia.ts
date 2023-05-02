import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { VectorStoreToolkit, VectorStoreInfo, createVectorStoreAgent } from "langchain/agents";
import { CheerioWebBaseLoader } from "langchain/document_loaders/web/cheerio";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { MongoVectorStore } from "langchain/vectorstores/mongo";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

import { MongoClient } from "mongodb";


var mongoClient: MongoClient;
var mongoVecStore: MongoVectorStore;

export const initMongo = () => {
    mongoClient = new MongoClient(process.env.MONGO_URI || "");
}

export const shutMongo = async () => {
    await mongoClient.close();
}

export const ingestWikipediaPage = async (urlString: string) => {
    const collection = mongoClient.db("wikipedia_text_corpus").collection(urlString)

    const loader = new CheerioWebBaseLoader(urlString);
    const pages = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({chunkSize: 1000});
    const splitPages = await splitter.splitDocuments(pages);

    const embeddings = new OpenAIEmbeddings();

    await MongoVectorStore.fromDocuments(
        splitPages,
        embeddings,
        {
            client: mongoClient,
            collection: collection,
            indexName: process.env.MONGO_INDEX
        }
    );
}

export const similaritySearch = async (collection: Collection, query: string) => {
    const collection = mongoClient.db("wikipedia_text_corpus").collection(urlString)

    const result = await vectorStore.similaritySearch(query, 1);
    return result;
}