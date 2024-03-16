import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { InfoIcon } from "lucide-react";

export default function TipInfo({ title, message }: { title: string, message: string }) {

    return (
        <TooltipProvider delayDuration={150}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <InfoIcon className="w-6 h-6 text-slate-600 hover:text-slate-400" decelerate={0} />
                </TooltipTrigger>
                <TooltipContent className="max-w-[20rem] flex flex-col gap-2 p-4">
                    <h5>{title}</h5>
                    <p>{message}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
}