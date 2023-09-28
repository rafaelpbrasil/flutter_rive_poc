function _malloc(size) {
  return Module._malloc(size);
}

function _heap32fView(ptr) {
  if ((ptr & 3) != 0) throw "malloc not 32-bit aligned";
  return Module.HEAPF32.subarray(ptr >> 2);
}

function _heap() {
  return Module.HEAPU8;
}

function _loadRiveFile(/*Uint8List*/ bytes) {
  const dataPtr = Module._malloc(bytes.length);
  Module.HEAPU8.set(bytes, dataPtr);
  const filePtr = Module._loadRiveFile(dataPtr, bytes.length);
  Module._free(dataPtr);
  return filePtr;
}

function _deleteRiveFile(/*int*/ filePtr) {
  Module._deleteRiveFile(filePtr);
}

function _riveFileArtboardDefault(/*int*/ filePtr) {
  return Module._riveFileArtboardDefault(filePtr);
}

function allocUTF8String(string) {
  const scratch = new Uint8Array(string.length * 3);
  const utf8Length = new TextEncoder().encodeInto(string, scratch).written;
  const ptr = Module._malloc(utf8Length + 1);
  Module.HEAPU8.set(scratch.subarray(0, utf8Length), ptr);
  Module.HEAPU8[ptr + utf8Length] = 0;
  return ptr;
}

function _riveFileArtboardNamed(/*int*/ filePtr, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._riveFileArtboardNamed(filePtr, utf8);
  Module._free(utf8);
  return ptr;
}

function _artboardBounds(/*int*/ artboard, /*Float32List*/ heapBuffer) {
  Module._artboardBounds(artboard, heapBuffer);
}

function _artboardDraw(/*int*/ artboard, /*int*/ renderer) {
  Module._artboardDraw(artboard, renderer);
}

function _artboardAddToRenderPath(
  /*int*/ artboard,
  /*int*/ renderPath,
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._artboardAddToRenderPath(artboard, renderPath, m0, m1, m2, m3, m4, m5);
}

function _artboardAnimationCount(/*int*/ artboard) {
  return Module._artboardAnimationCount(artboard);
}

function _artboardAnimationAt(/*int*/ artboard, /*int*/ index) {
  return Module._artboardAnimationAt(artboard, index);
}

function _artboardGetFrameOrigin(/*int*/ artboard) {
  return Module._artboardGetFrameOrigin(artboard);
}

function _artboardSetText(/*int*/ artboard, /*String*/ runName, /*String*/ value) {
  const runNameUTF8 = allocUTF8String(runName);
  const valueUTF8 = allocUTF8String(value);
  const success = Module._artboardSetText(artboard, runNameUTF8, valueUTF8);
  Module._free(runNameUTF8);
  Module._free(valueUTF8);
  return success;
}

function _artboardSetFrameOrigin(/*int*/ artboard, /*bool*/ value) {
  return Module._artboardSetFrameOrigin(artboard, value);
}

function _artboardComponentNamed(/*int*/ artboard, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._artboardComponentNamed(artboard, utf8);
  Module._free(utf8);
  return ptr;
}

function _artboardGetRenderTransform(
  /*int*/ artboard,
  /*Float32List*/ heapBuffer
) {
  Module._artboardGetRenderTransform(artboard, heapBuffer);
}

function _artboardSetRenderTransform(
  /*int*/ artboard,
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._artboardSetRenderTransform(artboard, m0, m1, m2, m3, m4, m5);
}

function _componentGetWorldTransform(
  /*int*/ component,
  /*Float32List*/ heapBuffer
) {
  Module._componentGetWorldTransform(component, heapBuffer);
}

function _componentSetWorldTransform(
  /*int*/ component,
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._componentSetWorldTransform(component, m0, m1, m2, m3, m4, m5);
}

function _componentSetLocalFromWorld(
  /*int*/ component,
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._componentSetLocalFromWorld(component, m0, m1, m2, m3, m4, m5);
}

function _componentGetScaleX(/*int*/ component) {
  return Module._componentGetScaleX(component);
}

function _componentSetScaleX(/*int*/ component, /*double*/ x) {
  Module._componentSetScaleX(component, x);
}

function _componentGetScaleY(/*int*/ component) {
  return Module._componentGetScaleY(component);
}

function _componentSetScaleY(/*int*/ component, /*double*/ y) {
  Module._componentSetScaleX(component, y);
}

function _componentSetX(/*int*/ component, /*double*/ x) {
  Module._componentSetX(component, x);
}

function _componentGetX(/*int*/ component) {
  return Module._componentGetX(component);
}

function _componentSetY(/*int*/ component, /*double*/ y) {
  Module._componentSetY(component, y);
}

function _componentGetY(/*int*/ component) {
  return Module._componentGetY(component);
}

function _componentGetRotation(/*int*/ component) {
  return Module._componentGetRotation(component);
}

function _componentSetRotation(/*int*/ component, /*double*/ r) {
  Module._componentSetRotation(component, r);
}

function _artboardAnimationNamed(/*int*/ artboard, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._artboardAnimationNamed(artboard, utf8);
  Module._free(utf8);
  return ptr;
}

function _deleteArtboardInstance(/*int*/ instance) {
  Module._deleteArtboardInstance(instance);
}

function _riveArtboardStateMachineDefault(/*int*/ file) {
  return Module._riveArtboardStateMachineDefault(file);
}

function _riveArtboardStateMachineNamed(/*int*/ file, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._riveArtboardStateMachineNamed(file, utf8);
  Module._free(utf8);
  return ptr;
}

function _animationInstanceDelete(/*int*/ pointer) {
  Module._animationInstanceDelete(pointer);
}

function _deleteStateMachineInstance(/*int*/ smi) {
  Module._deleteStateMachineInstance(smi);
}

function _animationInstanceAdvance(/*int*/ ami, /*double*/ time) {
  Module._animationInstanceAdvance(ami, time);
}

function _stateMachineInstanceAdvance(/*int*/ smi, /*double*/ time) {
  Module._stateMachineInstanceAdvance(smi, time);
}

function _stateMachineInstanceNumber(/*int*/ smi, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._stateMachineInstanceNumber(smi, utf8);
  Module._free(utf8);
  return ptr;
}

function _stateMachineInstanceDone(/*int*/ smi) {
  return Module._stateMachineInstanceDone(smi);
}

function _getNumberValue(/*int*/ input) {
  return Module._getNumberValue(input);
}

function _setNumberValue(/*int*/ input, /*double*/ n) {
  Module._setNumberValue(input, n);
}

function _stateMachineInstanceBoolean(/*int*/ smi, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._stateMachineInstanceBoolean(smi, utf8);
  Module._free(utf8);
  return ptr;
}

function _getBooleanValue(/*int*/ input) {
  return Module._getBooleanValue(input);
}

function _setBooleanValue(/*int*/ input, /*bool*/ b) {
  Module._setBooleanValue(input, b);
}

function _stateMachineInstanceTrigger(/*int*/ smi, /*String*/ name) {
  const utf8 = allocUTF8String(name);
  const ptr = Module._stateMachineInstanceTrigger(smi, utf8);
  Module._free(utf8);
  return ptr;
}

function _fireTrigger(/*int*/ input) {
  return Module._fireTrigger(input);
}

function _appendCommands(/*int*/ heapBuffer, /*int*/ count) {
  Module._appendCommands(heapBuffer, count);
}

function _boundRenderer() {
  return Module._boundRenderer();
}

function _makeRenderPath() {
  return Module._makeRenderPath();
}

function _makeEmptyRenderPath() {
  return Module._makeEmptyRenderPath();
}

function _deleteRenderPath(/*int*/ path) {
  Module._deleteRenderPath();
}

function _drawPath(/*int*/ path, /*int*/ paint) {
  Module._drawPath(path, paint);
}

function _clipPath(/*int*/ path) {
  Module._clipPath(path);
}

function _nativeSave() {
  Module._save();
}

function _nativeRestore() {
  Module._restore();
}

function _nativeAddPath(
  /*int*/ dst,
  /*int*/ src,
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._addPath(dst, src, m0, m1, m2, m3, m4, m5);
}

function _nativeTransform(
  /*double*/ m0,
  /*double*/ m1,
  /*double*/ m2,
  /*double*/ m3,
  /*double*/ m4,
  /*double*/ m5
) {
  Module._transform(m0, m1, m2, m3, m4, m5);
}

function _makeRenderPaint() {
  return Module._makeRenderPaint();
}

function _deleteRenderPaint(/*int*/ paint) {
  return Module._deleteRenderPaint();
}

function _updatePaint(
  /*int*/ paint,
  /*int*/ dirty,
  /*int*/ heapBuffer,
  /*int*/ wroteStops
) {
  Module._updatePaint(paint, dirty, heapBuffer, wroteStops);
}

function _stateMachineInstanceBatchAdvance(machines, elapsedSeconds) {
  const wasmArray = Module._malloc(machines.length * 4);
  if ((wasmArray & 3) != 0) throw "malloc not 32-bit aligned";
  Module.HEAP32.set(machines, wasmArray >> 2);
  Module._wasmStateMachineInstanceBatchAdvance(
    wasmArray,
    machines.length,
    elapsedSeconds
  );
  Module._free(wasmArray);
}

function _stateMachineInstanceBatchAdvanceAndRender(machines, elapsedSeconds,
                                                    renderer) {
  const wasmArray = Module._malloc(machines.length * 4);
  if ((wasmArray & 3) != 0) throw "malloc not 32-bit aligned";
  Module.HEAP32.set(machines, wasmArray >> 2);
  Module._wasmStateMachineInstanceBatchAdvanceAndRender(
    wasmArray,
    machines.length,
    elapsedSeconds,
    renderer
  );
  Module._free(wasmArray);
}

function _makeRenderer(canvasId) {
  return Module._makeRenderer(canvasId);
}

function _deleteRenderer(/*int*/ renderer) {
  return Module._deleteRenderer(renderer);
}

function _clear(renderer, color) {
  Module._clear(renderer, color);
}

function _flush() {
  Module._flush();
}
