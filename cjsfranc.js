async function loadEsmModule() {
  const module = await import('franc');
  return module;
}

exports.franc = async (str) => {
  const { franc } = await loadEsmModule();
  return franc(str)
};


