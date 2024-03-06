import {useState} from 'react';

export const useField = () => {
  const [keepWriting, setKeepWriting] = useState<boolean>(false);
  const [showSearchResults, setShowSearchResults] = useState<boolean>(false);
  const [fieldValue, setFieldValue] = useState<string | null>(null);

  const onChangeText = (text: string) => {
    setFieldValue(text);

    if (text.length === 0) {
      setKeepWriting(false);
      setShowSearchResults(false);
      return;
    }

    if (text.length > 0 && text.length <= 3) {
      setKeepWriting(true);
      setShowSearchResults(false);
      return;
    }

    if (text.length >= 4) {
      setShowSearchResults(true);
      return;
    }
  };

  const clearResults = () => {
    setFieldValue('');
    setShowSearchResults(false);
    setKeepWriting(false);
  };

  return {
    keepWriting,
    showSearchResults,
    fieldValue,
    onChangeText,
    clearResults,
  };
};
