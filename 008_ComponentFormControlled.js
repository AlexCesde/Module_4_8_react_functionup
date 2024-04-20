import React, { useState } from "react";

function ComponentFormControlled() {

    const [name, setName] = useState("Default name");

    return (
        <p>
            <div><label>Sample text</label></div>
            <div>
                <input type="text"
                    value={name}
                    defaultValue="default text"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </p>
    );
}

export default ComponentFormControlled;