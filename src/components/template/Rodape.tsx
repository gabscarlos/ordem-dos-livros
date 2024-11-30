export default function Rodape() {
    return (
        <footer className="flex justify-end items-center px-20 h-16 border-t border-zinc-800">
            <span className="font-thin text-zinc-950 dark:text-zinc-500">
                Todos os direitos reservados &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}