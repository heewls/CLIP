/** @jsxImportSource @emotion/react */
import { SVGProps } from 'react';
import { css } from '@emotion/react';

import * as icon from '@/assets/icon';
import { theme, ThemeColor } from '@/styles/theme';

export type IconNameType = keyof typeof icon;

const colors = theme.color;
const DEFAULT_SIZE = 24;

export interface IconProps extends SVGProps<SVGSVGElement> {
  /** 등록된 icon name */
  name: IconNameType;
  size?: number;
  width?: string;
  height?: string;
  /** 디자인 시스템 기반 컬러 Name */
  color?: ThemeColor;
  fill?: ThemeColor;
}

const Icon = ({
  name,
  size = DEFAULT_SIZE,
  width,
  height,
  color,
  fill,
  style,
  ...rest
}: IconProps) => {
  const SVGIcon = icon[name];

  const IconStyles = css`
    &,
    path,
    circle {
      ${color ? `stroke: ${colors[color]} !important;` : ''}
      ${fill ? `fill: ${colors[fill]} !important;` : ''}
      width: ${width ?? `${size}px`};
      height: ${height ?? `${size}px`};
    }
    & {
      cursor: pointer;
    }
  `;

  return <SVGIcon {...rest} css={IconStyles} style={style} />;
};

export default Icon;
