type HorizontalPosition = "left" | "center" | "right"
type VerticalPosition = "top" | "center" | "bottom"
type ToastPositionProps = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, "center-center"> | "center"
}

export const ToastPosition = ({position}: ToastPositionProps) => {
    return (
        <div>
            <h3>{position}</h3>
        </div>
    )
}