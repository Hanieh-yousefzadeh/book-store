

export default async function DetailBook({ params }: { params: Promise<{ id: string }> }) {

    const { id } = await params
    console.log(id)

    const response = await fetch(`https://openlibrary.org/work/${id}.json`)
    if (!response.ok) {
        <p>not found</p>
    }
    const data = await response.json()
    console.log(data)
    // setShow(data)

    return (
        <div>
            <p>{data.title}</p>
        </div>
    )
}