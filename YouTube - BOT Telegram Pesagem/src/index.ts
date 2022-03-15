import TelegramBot from "node-telegram-bot-api";
import { controller } from "./controller";

require('dotenv/config');

const msgData = (msg: TelegramBot.Message) => {
    const [chatId, telegramId, text, name] = [msg.chat.id, msg.from?.id.toString(), msg.text, `${msg.from?.first_name} ${msg.from?.last_name}`];
    return {
        telegramId,
        text,
        name,
        async sendMessage(msgText: string): Promise<void> {
            await bot.sendMessage(chatId, msgText);
        }
    }
}

const token = process.env.BOT_TOKEN;
if (!token)
    throw new Error('Missing BOT_TOKEN');

const bot = new TelegramBot(token, { polling: true });
bot.onText(/\/historico/, async (msg, match) => {
    const { telegramId, name, sendMessage } = msgData(msg);
    if (telegramId) {
        await controller.listWeighing(telegramId, name, sendMessage);
    }
});

bot.onText(/\/pesagem (.+)/, async (msg, match) => {
    const { telegramId, name, sendMessage } = msgData(msg);
    if (match && telegramId) {
        const weight = parseFloat(match[1]);
        await controller.saveWeight(telegramId, name, new Date(2022, 2, 15), weight, sendMessage);
    }
});

bot.on('message', async (msg) => {
    const { telegramId, name } = msgData(msg);
    if (telegramId) {
        await controller.registerUser(telegramId, name);
    }
});