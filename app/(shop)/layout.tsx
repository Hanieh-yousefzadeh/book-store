import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="lg:px-10">
            <Header />
            {children}
            <Footer />
        </div>
    )
}