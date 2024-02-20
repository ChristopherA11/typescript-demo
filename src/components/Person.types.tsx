//reusable types for Person.tsx (extracted from PersonList.tsx)
export type Name = {
    first: string
    last: string
}

//export type personprops use in Person.tsx (import and export from Person.tsx)

export type PersonProps = {
    name: Name
}