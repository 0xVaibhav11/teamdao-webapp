import React, { useState, useEffect } from "react";

interface ArraySubsetComponentProps {
  largeArray: number[];
}

export default function ArraySubsetComponent({
  largeArray,
}: ArraySubsetComponentProps) {
  const [subset, setSubset] = useState<number[]>([]);
  const [startIndex, setStartIndex] = useState<number>(0);

  useEffect(() => {
    function createArraySubset() {
      const newSubset: number[] = [];
      for (let i = 0; i < 5; i++) {
        const index = (startIndex + i) % largeArray.length;
        newSubset.push(largeArray[index]);
      }
      setSubset(newSubset);
    }

    createArraySubset();
  }, [largeArray, startIndex]);

  // Example usage:
  const handleNextSubset = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % largeArray.length);
  };

  return (
    <div>
      <p>Subset: {subset.join(", ")}</p>
      <button onClick={handleNextSubset}>Next Subset</button>
    </div>
  );
}
