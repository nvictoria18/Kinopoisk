import Badge from "./Badge"

type BadgeSuggestionProps = {
    children: JSX.Element | string;
    classNames?: string;
}

const BadgeSuggestion = ({
    children,
    classNames
}: BadgeSuggestionProps) => {
    return (<Badge classNames={classNames}>
        {children}
    </Badge >)
}

export default BadgeSuggestion;