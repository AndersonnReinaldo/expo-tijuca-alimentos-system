import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoTijucaAlimentosSystem.web.ts
// and on native platforms to ExpoTijucaAlimentosSystem.ts
import ExpoTijucaAlimentosSystemModule from './ExpoTijucaAlimentosSystemModule';
import ExpoTijucaAlimentosSystemView from './ExpoTijucaAlimentosSystemView';
import { ChangeEventPayload, ExpoTijucaAlimentosSystemViewProps } from './ExpoTijucaAlimentosSystem.types';

// Get the native constant value.
export const PI = ExpoTijucaAlimentosSystemModule.PI;

export function hello(): string {
  return ExpoTijucaAlimentosSystemModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoTijucaAlimentosSystemModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoTijucaAlimentosSystemModule ?? NativeModulesProxy.ExpoTijucaAlimentosSystem);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoTijucaAlimentosSystemView, ExpoTijucaAlimentosSystemViewProps, ChangeEventPayload };
