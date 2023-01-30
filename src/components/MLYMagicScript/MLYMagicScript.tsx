import React, { useEffect, useState } from 'react';

export interface MLYMagicScriptProps {
    children: JSX.Element[] | JSX.Element;
    url: string;
}

const MLYMagicScript = (props: MLYMagicScriptProps) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        async function importScript() {
            const script = document.createElement('script');

            script.src = props.url;
            script.async = true;
            script.onload = () => { setReady(true) };

            document.body.appendChild(script);
        }
        importScript();
    }, []);

    return (
        <div className="useScript">
            {ready ? props.children : null}
        </div>
    );
}

export default MLYMagicScript;
