const initWebGPU = async () => {
  try {
    if (!navigator.gpu) throw new Error("WebGPU not supported");
  } catch (error: any) {}
};
