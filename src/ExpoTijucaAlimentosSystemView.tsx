import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoTijucaAlimentosSystemViewProps } from './ExpoTijucaAlimentosSystem.types';

const NativeView: React.ComponentType<ExpoTijucaAlimentosSystemViewProps> =
  requireNativeViewManager('ExpoTijucaAlimentosSystem');

export default function ExpoTijucaAlimentosSystemView(props: ExpoTijucaAlimentosSystemViewProps) {
  return <NativeView {...props} />;
}
