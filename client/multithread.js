export default async function (name) {
/*   // const pkgJs = await (await fetch(`./pkg/${name}.js`)).text();
  const pkgJs = await (await fetch(`wasm/${name}.js`)).text();

  // Create the 'pure' version of the wasm_bindgen's `init()`
  const initJs = `return () => { const document = undefined; const location = {}; ${pkgJs} return wasm_bindgen; };`;
  const init = (new Function(initJs)).call(null);

  const wbg = init();
  // const wasm = await wbg(`./pkg/${name}_bg.wasm`);
  const wasm = await wbg(`wasm/multithread/${name}_bg.wasm`);
  // console.log('wasm:', wasm);
  wbg.app();
 */

  // Dynamically import the JavaScript file as an ES6 module
  const { default: wasmInit } = await import(`./wasm/${name}.js`);

  // Assuming the wasmInit function is exported from the JS file
  const wbg = await wasmInit();

  // Load the wasm file
  const wasm = await wbg(`wasm/${name}_bg.wasm`);

  // Call app() if needed
  wbg.app();


  return wbg;
}
