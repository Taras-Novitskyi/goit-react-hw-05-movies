export const makeSmoothScroll = () => {
	const intViewportHeight = window.innerHeight;

  window.scrollBy({
    top: intViewportHeight * 0.7,
    behavior: 'smooth',
  });
}