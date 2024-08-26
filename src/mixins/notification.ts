import { NotificationType } from "@/interfaces/Notification";
import { store } from "@/store";
import { NOTIFICATION } from "@/store/mutations";

export const notificationMixin = {
    methods: {
        notification (type: NotificationType, title: string, message: string) : void {
            store.commit(NOTIFICATION, {
                title,
                message,
                type
            })
        }
    }
};