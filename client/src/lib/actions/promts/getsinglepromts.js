import { serverGet } from "@/lib/core/server";

export const getSinglePromt = async (id) => {
    const res = await serverGet(`/allpromts/${id}`);
    return res;
};