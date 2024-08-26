export enum NotificationType { 
    SUCCESS,
    ERROR,
    WARNING 
}

export interface Notification {
    id: number;
    title: string;
    message: string;
    type: NotificationType;
}