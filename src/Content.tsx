import React, {PropsWithChildren} from "react";

const Content = (props: PropsWithChildren<any>) => {
    return <div>{props.children}</div>
}

export default Content;