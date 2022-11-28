import React from 'react'

type LevelProps = {
    strength: string,
    password: string,
}

function StrengthLevel(props: LevelProps) {
    return (
        <div className="level-Container">
            {
                props.password !== ''
                    ? <h1 className={
                        props.strength === 'strong'
                            ? "strong"
                            : props.strength === 'medium'
                                ? "medium"
                                : "weak"}>
                        {props.strength}
                    </h1>
                    : (<></>)
            }

        </div>
    )
}

export default StrengthLevel
