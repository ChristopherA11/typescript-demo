// Array of objects

import { Name } from "./Person.types"

type PersonProps = {
  names: Name[]
}
export const PersonList = (props: PersonProps) => {
  return (
    <div>
      {props.names.map(name => {
        return (
          <h3 key={name.first}>{name.first} {name.last}</h3>
        )
      })}
    </div>
  )

}