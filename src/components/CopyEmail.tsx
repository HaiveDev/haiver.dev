import { Toaster, toast } from "sonner";
import { IconClipboard } from "@tabler/icons-react";
// ...

const CopyEmail = () => {
    const functionCopy = () => {
        
        toast.success(
            "!Copiado al portapeles¡",
            {
                duration: 3000,
            }
        );

        navigator.clipboard.writeText("contact@haiver.dev");
    };
    return (
        <div className="flex">
            <Toaster />
                    
            <span
                className="rounded-s-md border border-e-0 border-yellow-500 bg-yellow-500/10 px-2.5 py-0.5 font-Averia text-sm text-yellow-500">
                    contact@haiver.dev
            </span>
            <div className="relative group/tooltip">
                <button
                    className="inline-block h-full  rounded-e-md border border-s-0 border-yellow-500 bg-yellow-500/10 px-2  text-yellow-500 transition hover:bg-yellow-500/20"
                    onClick={functionCopy}
                >
                    <IconClipboard width={16} height={16} stroke={1.5}/>
                </button>
                <span className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Copiar correo</span>
            </div>
            
        </div>
    );
    
};

export default CopyEmail;
