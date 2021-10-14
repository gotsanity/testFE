export interface ChatMessage {
    name: string,
    message: string,
    author: string,
    created_on: Date,
    updated_on: Date,
    channel: string
}