export default async function (name) {
  const { default: wasmInit } = await import(`./wasm/${name}.js`);
  const wbg = await wasmInit();
  const wasm = await wbg(`wasm/${name}_bg.wasm`);
  wbg.app();

  return wbg;
}
