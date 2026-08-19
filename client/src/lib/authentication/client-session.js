import { authClient } from "@/lib/auth-client"

export const getClientSession = () => {
    const { data } = authClient.useSession()
    return data;
};



