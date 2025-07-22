type BadgeProps = {
    children: JSX.Element | string;
    classNames?: string;
}

const Badge = ({
    classNames,
    children
}: BadgeProps) => {
    return (<div className={`${classNames ? classNames : ''} py-10 bg-gray-900 rounded-[12px] w-full`}>
        {children}
    </div>)
}

export default Badge;