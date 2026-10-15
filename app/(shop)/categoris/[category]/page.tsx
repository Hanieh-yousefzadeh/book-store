

export default async function CategorisPage({params} : {params : Promise<{category : string}>}){

    const {category} = await params
    return(
        <main>
            <h1>
                Category : {category}
            </h1>
        </main>
    )
}