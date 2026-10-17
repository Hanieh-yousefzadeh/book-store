import Link from "next/link"
import {BookOpenCheck} from "lucide-react"
export default function Footer() {
    return (

        <footer className=" flex items-baseline justify-between px-10 pb-5 border-t ">
            <aside>

                <p className="pt-8">
                    <Link href="/" className="flex text-2xl font-semibold items-center"><BookOpenCheck size={35} strokeWidth={1} />ReadB</Link>
                </p>
            </aside>
            <nav className="flex flex-col text-base">
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover text-sm">Design</a>
                <a className="link link-hover text-sm">Marketing</a>
                <a className="link link-hover text-sm">Advertisement</a>
            </nav>
            <nav className="flex flex-col text-base">
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover text-sm">About us</a>
                <a className="link link-hover text-sm">Contact</a>
            </nav>
            <nav className="flex flex-col text-base">
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover text-sm">Terms of use</a>
                <a className="link link-hover text-sm">Privacy policy</a>
            </nav>
        </footer>
    )
}