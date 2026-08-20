import React from "react";
import { getSinglePromt } from "@/lib/actions/promts/getsinglepromts";
import PromptDetails from "@/components/Allpromts/PromptDetails";

const Page = async ({ params }) => {
    const { id } = await params;
    const details = await getSinglePromt(id);
    console.log(details);

    return <PromptDetails details={details} />;
};

export default Page;