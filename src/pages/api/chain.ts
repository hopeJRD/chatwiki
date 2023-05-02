import { OpenAI } from "langchain/llms/openai";
import { PineconeStore } from "langchain/vectorstores/pinecone";
import { ConversationalRetrievalQAChain } from "langchain/chains";

const QA_PROMPT = '';
const CONDENSE_PROMPT = '';

export const makeChain = (vectorstore: PineconeStore) => {
    const model = new OpenAI({temperature: 0, modelName: 'gpt-3.5-turbo'});
    const chain = ConversationalRetrievalQAChain.fromLLM(
        model,
        vectorstore.asRetriever(),
        {
            qaTemplate: QA_PROMPT,
            questionGeneratorTemplate: CONDENSE_PROMPT,
            returnSourceDocuments: true,
        }
    );

    return chain;
}