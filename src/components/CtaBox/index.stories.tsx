import React from 'react'
import { storiesOf } from '@storybook/react'

import darkWrapperDecorator
  from '../../../.storybook/decorators/darkWrapperDecorator'
import CtaBox from '.'

storiesOf('CtaBox', module)
  .addDecorator(darkWrapperDecorator)
  .add('default', () => (
    <CtaBox />
  ))
