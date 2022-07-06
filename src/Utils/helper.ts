export const truncateMiddle = (word: string) => {
  const tooLongChars = 15; // arbitrary

  if (word.length < tooLongChars) {
    return word;
  }

  const ellipsis = '...';
  const charsOnEitherSide = Math.floor(tooLongChars / 2) - ellipsis.length;

  return word.slice(0, charsOnEitherSide) + ellipsis + word.slice(-charsOnEitherSide);
};
