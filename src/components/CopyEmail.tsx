import { Toaster, toast } from "sonner";
import { IconCopy } from "@tabler/icons-react";

// ...


const CopyEmail = () => {
    const functionCopy = () => {

        toast.success(
            "!Correo copiado al portapapeles¡",
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
                className="rounded-s-md border border-e-0 border-yellow-500 bg-yellow-500/10 ps-2.5 pe-2 py-0.5 text-sm text-yellow-500">
                    contact@haiver.dev
            </span>
            <div className="relative group/tooltip">
                <button
                    className="inline-block h-full  rounded-e-md border border-s-0 border-yellow-500 bg-yellow-500/10 px-1.5  text-yellow-500 transition hover:bg-yellow-500/20"
                    onClick={functionCopy}
                >
                    <IconCopy width={16} height={16} stroke={1.5}/>
                </button>
                <span className="hidden sm:block absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap bg-white text-black/80 font-semibold before:content-[''] before:absolute before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:bg-white before:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Copiar correo</span>
            </div>
            
        </div>
    );
    
};


    export default CopyEmail;
