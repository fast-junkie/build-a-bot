export default (element, binding) => {
  if (binding.arg !== 'position') return;
  const el = element;
  el.style[binding.arg] = 'absolute';
  Object.keys(binding.modifiers)
    .forEach((key) => {
      el.style[key] = '0.3125rem';
    });
};
