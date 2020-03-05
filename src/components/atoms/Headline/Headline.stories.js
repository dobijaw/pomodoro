import React from 'react';
import { storiesOf } from '@storybook/react';
import Headline from './Headline';

storiesOf('Headline', module).add('Headline', () => <Headline tag="h2">Text here!</Headline>);
