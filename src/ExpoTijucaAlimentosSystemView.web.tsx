import * as React from 'react';

import { ExpoTijucaAlimentosSystemViewProps } from './ExpoTijucaAlimentosSystem.types';

export default function ExpoTijucaAlimentosSystemView(props: ExpoTijucaAlimentosSystemViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
