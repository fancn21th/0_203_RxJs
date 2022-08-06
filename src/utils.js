const printMessage = (message) => {
  const label = document.getElementsByTagName("label")[0];
  label.innerHTML = message;
};

export { printMessage };
