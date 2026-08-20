import { serverGet } from "@/lib/core/server";

export const getAllpromts = async () => {
    const data = await serverGet("/allpromts");
    return data;
}