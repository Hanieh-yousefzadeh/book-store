import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="">
            <Header />
           <div className="lg:min-h-200"> {children}</div>
            <Footer />
        </div>
    )
}