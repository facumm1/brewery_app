export const checkText = (text: string, customErrorMsg: string = 'Unknown') => {
  if (!text) {
    return customErrorMsg;
  }

  if (text.length < 0) {
    return customErrorMsg;
  }

  return text;
};
