import React from 'react';

import * as icons from './svg';
import { iconStyle } from './style';

type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as any[];

export interface IIconProps {
  icon: IconType;
}

export default function Icon({ icon }: IIconProps): JSX.Element {
  const SVGIcon = icons[icon];

  return <SVGIcon css={iconStyle} />;
}
