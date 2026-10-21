import Link from "next/link"
import { BookOpenCheck } from "lucide-react"
export default function Footer() {
    return (

        <footer className="sm:flex-row flex flex-col sm:gap-0 gap-10 items-baseline bg-[#02304710] justify-between sm:px-10 px-5  border-t dark:border-t-[#a8ccde54] pb-10">
            <aside >
                <p className="pt-8">
                    <Link href="/" className="flex text-2xl font-semibold items-center text-[#023e8a] dark:text-current pt-5"><BookOpenCheck className="md:size-9 size:6" strokeWidth={1} />ReadB</Link>
                </p>
                <p className="pt-3 text-sm text-[#1e293bbc] font-medium">Grow your mind.</p>
            </aside>
            <div className="flex sm:gap-50 gap-5 sm:pr-10">
                <nav className="flex flex-col sm:text-base text-sm">
                    <h6 className="footer-title text-[#1e293bbc] dark:text-[#acb8be]">Services</h6>
                    <a className="link link-hover sm:text-sm text-xs">Design</a>
                    <a className="link link-hover sm:text-sm text-xs">Marketing</a>
                    <a className="link link-hover sm:text-sm text-xs">Advertisement</a>
                </nav>
                <nav className="flex flex-col sm:text-base text-sm">
                    <h6 className="footer-title text-[#1e293bbc] dark:text-[#acb8be]">Company</h6>
                    <a className="link link-hover sm:text-sm text-xs">About us</a>
                    <a className="link link-hover sm:text-sm text-xs">Contact</a>
                </nav>
                <nav className="flex flex-col sm:text-base text-sm">
                    <h6 className="footer-title text-[#1e293bbc] dark:text-[#acb8be]">Legal</h6>
                    <a className="link link-hover sm:text-sm text-xs">Terms of use</a>
                    <a className="link link-hover sm:text-sm text-xs">Privacy policy</a>
                </nav>
            </div>
        </footer>
    )
}