import { useEffect, useMemo, useState } from 'react';
import { fetchQuote } from '../utils/fetch';
import { IQutoes } from '../utils/types';
const sortQuotes = (
  data: IQutoes[],
  asc: boolean = true,
  property: keyof IQutoes
) => {
  const sortValue = (a: Date, b: Date) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  };
  return data.sort((_a, _b) => {
    const a = new Date(_a[property]),
      b = new Date(_b[property]);
    return (asc ? 1 : -1) * sortValue(a, b);
  });
};

const useQuotes = (instrument: string | undefined) => {
  const [quotes, setQuotes] = useState<IQutoes[] | null>(null);
  const [isAscSorted, setAscSorted] = useState<boolean>(false);

  const isAnotherFetchNeeded = useMemo<boolean>(() => {
    if (null !== quotes) {
      const sortedQuotes = sortQuotes(quotes, true, 'valid_till');
      const oldestValidDate = new Date(sortedQuotes[0]?.valid_till);
      if (oldestValidDate > new Date()) {
        return true;
      }
    }
    return false;
  }, [quotes]);

  useEffect(() => {
    const getQuote = async () => {
      if (instrument) {
        const data = await fetchQuote(instrument);
        setQuotes(data);
      }
    };
    if (instrument) {
      getQuote();
    }
  }, [instrument, isAnotherFetchNeeded]);

  const sortedQuotes = useMemo(() => {
    if (null !== quotes) {
      return sortQuotes(quotes, isAscSorted, 'time');
    }
    return null;
  }, [isAscSorted, quotes]);

  const toggleSort = () => {
    setAscSorted(!isAscSorted);
  };

  return {
    quotes: sortedQuotes,
    toggleSort,
    isAscSorted,
  };
};

export default useQuotes;
