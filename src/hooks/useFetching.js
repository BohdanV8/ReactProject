import { useState } from "react";

const useFetching = (callback) => {
  const [isLoading, setIsLsoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLsoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLsoading(false);
    }
  };

  return [fetching, isLoading, error];
};

export default useFetching;
