// navigator.gpu
// .requestAdapter()
// .then((adapter) => {
//     console.log(adapter);
//     return adapter?.requestDevice();
// })
// .then((device) => {
//     device?.createComputePipelineAsync;
// })
// .then();

// const initWebGPU = async () => {
//   try {
//     if (!navigator.gpu) throw new Error("webgpu not supported");

//     const adapter = await navigator.gpu.requestAdapter();

//     if (!adapter) throw new Error("No adapter found");
//     adapter.features.forEach((value) => console.log(value));

//     const device = await adapter.requestDevice();

//     console.log(adapter);
//     console.log(device);

//     document.body.innerHTML = "<h1>Hello WebGPU</h1>";

//     let i: keyof GPUSupportedLimits;
//     for (i in adapter.limits)
//       document.body.innerHTML += `<p>${i}:${adapter.limits[i]}</p>`;
//   } catch (error: any) {
//     document.body.innerHTML = `<h1>${error.message}</h1>`;
//   }
// };

// const run = async () => {
//   initWebGPU();
// };

// run();
