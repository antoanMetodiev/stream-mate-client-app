import { CallType } from "./enums/CallType";

export type CallNotification = {
    caller: string;
    receiver: string;
    callId: string; // Уникален идентификатор на обаждането
    callType: CallType | string; // "video" или "audio"
    channelName: string; // WebRTC / Agora канал
    timestamp: string; // Време на обаждането (ISO формат)
    callerNames: string,
    callerImgUrl: string,
    messageText: string,
};