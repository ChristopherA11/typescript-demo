export type PublicProps = {
    name: string
}

export const Public = (props: PublicProps) => {
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}