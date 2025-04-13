
interface CircleProps {
    radius: number,
    coordinats?: {
        right?: number,
        left?: number,
        bottom?: number,
        top?: number,
        zIndex?: number
    }
}

const Circle = ({ radius, coordinats }: CircleProps) => {
    return (
        <div
            className="rounded-circle bg-white bg-opacity-10 position-absolute"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                right:  coordinats?.right ? `${coordinats.right}px` : undefined,
                left:  coordinats?.left ? `${coordinats.left}px` : undefined,
                bottom:  coordinats?.bottom ? `${coordinats.bottom}px` : undefined,
                top:  coordinats?.top ? `${coordinats.top}px` : undefined,
                zIndex: coordinats?.zIndex,
            }}
        >
        </div>
    )
}

export default Circle