import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './screens/home';
import StatsInput from './screens/statsInput';
import StatsOutput from './screens/statsOutput';
import TopPerformers from './screens/topPerformers';

export const Stack = StackNavigator({
  Home: { screen: Home },
  StatsInput: { screen: StatsInput },
  StatsOutput: { screen: StatsOutput },
  TopPerformers: { screen: TopPerformers }
});