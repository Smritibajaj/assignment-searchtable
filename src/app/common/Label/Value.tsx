import { Content } from "./interfaces";

const Value = (props: Content) => {
    return (
        <div className="text-base text-brand-text-title font-normal">
            {props.children}
        </div>
    );
};

export default Value