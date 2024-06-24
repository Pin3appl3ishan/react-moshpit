import React, { useState } from 'react'

interface ExpandableTextProps {
    text: string,
    maxChars?: number,
}

const ExpandableText = ({text, maxChars}: ExpandableTextProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const descText = text.length > maxChars ? text.substring(0, maxChars) + "..." : text;

  return (
    <div>
        <p>
            {isExpanded ? text : descText}
        </p>
        {text.length > maxChars && (
            <button onClick={toggleExpand}>
                {isExpanded? 'Show Less' : 'Show more'}
            </button>
        )}
    </div>
  )
}

export default ExpandableText