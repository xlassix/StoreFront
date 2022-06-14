import React, { memo, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { convertThemeToClass } from 'styles/theme/utils';

import {
  selectThemeKey,
  selectDirectionKey,
  selectBorderKey,
  selectShadowKey,
} from '../../../styles/theme/slice/selectors';

interface Props {
  children: React.ReactNode;
}

export const MainWrapper = memo((props: Props) => {
  const selected = useSelector(selectThemeKey);
  const selectedDir = useSelector(selectDirectionKey);
  const selectedBorderStatus = useSelector(selectBorderKey);
  const selectedShadowStatus = useSelector(selectShadowKey);

  const themeClassNames = convertThemeToClass({
    selected,
    selectedDir,
    selectedBorderStatus,
    selectedShadowStatus,
  });

  return (
    <Fragment>
      <div
        className={`${themeClassNames.color} 
              ${themeClassNames.border}
              ${themeClassNames.shadow}
              ${themeClassNames.direction}-support`}
        dir={themeClassNames.direction}
      >
        <div className="wrapper top-navigation">{props.children}</div>
      </div>
    </Fragment>
  );
});
