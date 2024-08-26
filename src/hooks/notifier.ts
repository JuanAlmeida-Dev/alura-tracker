import { NotificationType } from "@/interfaces/Notification";
import { store } from "@/store";
import { NOTIFICATION } from "@/store/mutations";

type notifier = {
    nofitication: (type: NotificationType, title: string, message: string) => void;
}

export default () : notifier => {

    const nofitication = (type: NotificationType, title: string, message: string) : void => {
        store.commit(NOTIFICATION, {
            title,
            message,
            type
        })
    }

    return {
        nofitication
    }
}