type RandomProps = {
    value: number
}
type RandomPositiveProps = RandomProps &{
    isPositive: boolean;
    isNegative?: never;
    isZero?: never;
}
type RandomNegativeProps = RandomProps &{
    isNegative: boolean;
    isPositive?: never;
    isZero?: never;
}
type RandomZeroProps = RandomProps &{
    isZero: boolean;
    isPositive?: never;
    isNegative?: never;
}

type RandomNumberProps = RandomPositiveProps | RandomNegativeProps | RandomZeroProps
  

export const RandomNumber = ({value,isPositive,isNegative,isZero}: RandomNumberProps) => {
    return (
        <div>
            <h3>{value} {isPositive && "positive"} {isNegative && "negative"} {" "} {isZero && "zero"}</h3>
        </div>
    )
}